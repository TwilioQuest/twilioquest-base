const path = require('path');
const esprima = require('esprima');
const { spawn } = require('child_process');
const { remote } = require('electron');
const jetpack = require('fs-jetpack');
const v4 = require('uuid/v4');

const appDataPath = path.resolve(remote.app.getPath('appData'), 'TwilioQuest');
const codeStoragePath = path.join(appDataPath, 'QuestIDE');

// Create a directory to house our javascript code validator
const javascriptValidatorPath = path.join(appDataPath, 'javascript_validator');
const javascriptValidatorCodePath = path.join(
  javascriptValidatorPath,
  'validate.js'
);
jetpack.dir(javascriptValidatorPath);

// An error wrapper we can assume to have a nice human readable error message
class NiceError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NiceError';
  }
}

// Get path to user code for an objective
function getCodePath(objectiveName) {
  return path.join(
    codeStoragePath,
    'javascript',
    objectiveName,
    'user_code.js'
  );
}

// Get user code for an objective as a string
async function getCode(objectiveName) {
  const savedCodePath = getCodePath(objectiveName);

  const exists = await jetpack.existsAsync(savedCodePath);
  if (!exists) {
    throw new NiceError(`
      We couldn't find your saved code - please open the editor and ensure
      your code has been created there.
    `);
  }

  return await jetpack.readAsync(savedCodePath);
}

// Get pre-analyzed user code
async function getAnalyzedCode(objectiveName) {
  const userCode = await getCode(objectiveName);

  try {
    const program = esprima.parseScript(userCode);
    return { userCode, program };
  } catch (e) {
    // This means there's an error parsing the code
    let message = `
      It looks like there was an error in your code.
    `;
    if (e.lineNumber) {
      message += `
        Check on
        <strong style="color:yellow">line ${e.lineNumber}</strong>. The error
        there was: <br/><br/>
        ${e.description}
      `;
    } else {
      message += `
        Check your code in the editor for errors - do you see any in the 
        console when you try and run your code?
      `;
    }
    throw new NiceError(message);
  }
}

// Execute the given chunk of validation JavaScript code
async function executeCodeString(node, code, args = []) {
  await jetpack.writeAsync(javascriptValidatorCodePath, code);

  return new Promise(async (resolve, reject) => {
    const process = spawn(node, [javascriptValidatorCodePath].concat(args));
    let finished = false;
    let bufferedStdout = '';
    let bufferedStderr = '';

    process.on('error', e => {
      reject(
        new NiceError(`
        There was a problem validating your JavaScript code. Please try again.
      `)
      );
    });

    process.stdout.on('data', data => {
      bufferedStdout += `${data}`;
    });

    process.stderr.on('data', data => {
      bufferedStderr += `${data}`;
    });

    process.on('close', code => {
      finished = true;

      // We don't care about success or failure - let the validation code sort
      // that out
      resolve({
        exitCode: code,
        stdout: bufferedStdout,
        stderr: bufferedStderr,
      });
    });

    setTimeout(() => {
      if (!finished) {
        console.warn('Node.js validation code timed out.');
        reject(
          new NiceError(`
          There was a problem validating your Node.js code - please try again.
        `)
        );
      }
    }, 5000);
  });
}

function throwAssertionError(message) {
  const assertionError = new Error(message);
  assertionError.name = 'AssertionError';

  throw assertionError;
}

function doesFunctionExist(functionName) {
  try {
    eval(functionName);
  } catch (err) {
    throwAssertionError(`The function "${functionName}" does not exist!`);
  }
}

function expectFunctionResultToBe(
  functionName,
  expectedValue,
  parameters = [],
  customErrorMessage
) {
  doesFunctionExist(functionName);

  const functionUnderTest = eval(functionName);

  const actualValue = functionUnderTest(...parameters);

  console.log(expectedValue, actualValue);

  let comparisonFn;

  if (Array.isArray(expectedValue)) {
    if (!Array.isArray(actualValue)) {
      const errorMessage = `"${functionName}" did not return an array as expected!`;

      throwAssertionError(errorMessage);
    }

    // check array contents comparison, with order respected
    comparisonFn = (expected, actual) =>
      expected.every((val, index) => actual[index] === val);
  } else {
    // basic equality comparisonFn
    comparisonFn = (expected, actual) => expected === actual;
  }

  if (!comparisonFn(expectedValue, actualValue)) {
    const errorMessage =
      customErrorMessage ||
      `"${functionName}" returned "${actualValue}" instead of expected value "${expectedValue}" when called with parameters: ${parameters}.`;

    throwAssertionError(errorMessage);
  }
}

async function evaluteAssertions(helper, fileName, assertionsString) {
  const { TQ_NODE_EXE, TQ_JAVASCRIPT_WORKSPACE_PATH } = helper.env;
  const programPath = path.join(TQ_JAVASCRIPT_WORKSPACE_PATH, fileName);

  const exists = await jetpack.existsAsync(programPath);
  if (!exists) {
    helper.fail(
      `We couldn't find your "${fileName}" script in your JavaScript workspace. Does the file "${programPath}" exist?`
    );
    return false;
  }

  const VALIDATION_UUID = v4();

  const VALIDATION_CODE = `
    ${throwAssertionError.toString()}
    ${doesFunctionExist.toString()}
    ${expectFunctionResultToBe.toString()}

    ${assertionsString}
    console.log('${VALIDATION_UUID}');
  `;

  const userCode = await jetpack.readAsync(programPath);
  const testCode = `${userCode}\n\n${VALIDATION_CODE}`;

  const { stdout, stderr } = await executeCodeString(TQ_NODE_EXE, testCode);

  if (stderr.includes('AssertionError')) {
    const [, errorMessage] = stderr.match(/.AssertionError.: (.*)/);

    helper.fail(`
      ${errorMessage}
    `);
    return false;
  }

  if (stderr) {
    const [, errorMessage] = stderr.match(/Error: (.*)/);
    helper.fail(`
      An unexpected error occured!
      
      "${errorMessage}"
    `);
    return false;
  }

  if (!stdout.includes(VALIDATION_UUID)) {
    helper.fail(`
      Validation script could not succesfully terminate and emit Validation UUID: "${VALIDATION_UUID}".
    `);
    return false;
  }

  return true;
}

// Helper to write script output to a file
async function writeFile(codePath, fileName, args, output) {
  const p = path.dirname(codePath);
  const t = path.join(p, fileName);
  const text =
    `Executing script: ${codePath}\n` +
    `Script arguments: ${args}\n` +
    `Output:\n${output}\n`;
  await jetpack.writeAsync(t, text);
}

// Export public interface
module.exports = {
  NiceError,
  getCodePath,
  getCode,
  getAnalyzedCode,
  executeCodeString,
  throwAssertionError,
  doesFunctionExist,
  expectFunctionResultToBe,
  evaluteAssertions,
};
