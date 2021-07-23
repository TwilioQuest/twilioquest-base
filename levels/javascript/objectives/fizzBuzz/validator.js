const path = require('path');
const jetpack = require('fs-jetpack');
const { executeCodeString } = require('../../validation');

function correctDecrypt(number) {
  let output = '';

  if (number % 3 === 0) {
    output += 'Java';
  }

  if (number % 5 === 0) {
    output += 'Script';
  }

  if (!output) {
    output = String(number);
  }

  return output;
}

module.exports = async helper => {
  try {
    const { TQ_NODE_EXE, TQ_JAVASCRIPT_WORKSPACE_PATH } = helper.env;
    const programPath = path.join(
      TQ_JAVASCRIPT_WORKSPACE_PATH, 
      'fizzBuzz.js'
    );

    const exists = await jetpack.existsAsync(programPath);
    if (!exists) {
      helper.fail(`
        We couldn't find your "fizzBuzz.js" script in your 
        JavaScript code folder. Does the file below exist? <br/><br/>
        <span style="word-wrap:break-word">${programPath}</span>
      `);
      return;
    }

    const userCode = await jetpack.readAsync(programPath);
    const testNumbers = Array.from(Array(30).keys());

    const promises = testNumbers.map(async (num) => {
      let result = await executeCodeString(TQ_NODE_EXE, userCode, [num]);
      return result.stdout ? result.stdout.trim() : '';
    });
    const results = await Promise.all(promises);

    // Process results against solution
    for (let i = 0, l = results.length; i<l; i++) {
      let result = results[i];
      let correct = correctDecrypt(i);
      if (result !== correct) {
        return helper.fail(`
          While testing your script, we passed in "${i}" but got "${result}" instead
          of "${correct}". Please test your script again.
        `);
      }
    }

    helper.success(`
      You did it! No job interview nonsense can fool you.
    `);
  } catch (e) {
    helper.fail(`
      There was an error executing your JavaScript code. Please ensure that you
      can run it successfully and try again. Here's the error we got - sorry
      if the formatting is ugly: <br/><br/>
      ${e}
    `);
  }
};
