const assert = require('assert');
const { NodeVM } = require('vm2');
const jetpack = require('fs-jetpack');
const { getCodePath, NiceError } = require('../../validation');

function isFunction(fn) {
  return fn && {}.toString.call(fn) === '[object Function]';
}

function assertIsFunction(name, fn) {
  // Make assertions about the behavior of the developer's code
  assert(
    isFunction(fn),
    new NiceError(`
      It looks like you didn't export an ${name} function from your code.
      
      Is this code at the end of your example code?
      module.exports = {
        isPositive,
        isInteger,
        isNumber,
      };        
    `)
  );
}

const runTestCase = (name, fn) => ([operand, expected]) => {
  const result = fn(operand);
  if (result !== expected) {
    throw new NiceError(`
      Welp, we found your "${name}" function, but we passed in "${operand}" as
      the argument and got <strong>${result}</strong>.

      Check your function again?
    `);
  }
};

module.exports = async helper => {
  try {
    const objectiveCodePath = getCodePath('js_basics_operators_comparison');
    const exists = await jetpack.existsAsync(objectiveCodePath);
    assert(
      exists,
      new NiceError(`
        Sorry - we couldn't find the code for this objective. Try closing and
        re-opening the hack interface, or restarting TwilioQuest.
      `)
    );

    // Attempt to eval the user's code
    const userCode = await jetpack.readAsync(objectiveCodePath);
    const vm = new NodeVM({
      require: {
        builtin: ['*'],
        external: ['twilio', 'express', 'got', 'body-parser', 'ngrok', 'pug'],
      },
    });
    const userFunctions = vm.run(userCode);

    // isPositive assertions
    assertIsFunction('isPositive', userFunctions.isPositive);

    const isPositiveTestCases = [
      [1, true],
      [1.1, true],
      [0, false],
      [-1, false],
    ];
    const runTestCaseWithIsPositive = runTestCase(
      'isPositive',
      userFunctions.isPositive
    );
    isPositiveTestCases.forEach(runTestCaseWithIsPositive);

    // isInteger
    assertIsFunction('isInteger', userFunctions.isInteger);

    const isIntegerTestCases = [
      [1, true],
      [1.1, false],
      [0, true],
      [-1, true],
      [-1.8, false],
    ];
    const runTestCaseWithIsInteger = runTestCase(
      'isInteger',
      userFunctions.isInteger
    );
    isIntegerTestCases.forEach(runTestCaseWithIsInteger);

    // isNumber
    assertIsFunction('isNumber', userFunctions.isNumber);

    const isNumberTestCases = [
      [1, true],
      [1.1, true],
      [0, true],
      [-1, true],
      [-1.8, true],
      [false, false],
      ['test value', false],
    ];
    const runTestCaseWithisNumber = runTestCase(
      'isNumber',
      userFunctions.isNumber
    );
    isNumberTestCases.forEach(runTestCaseWithisNumber);

    helper.success(`Yeah! All your functions worked!`);
  } catch (e) {
    console.log(e);
    if (e.name === 'NiceError') {
      helper.fail(e.message);
    } else {
      helper.fail(`
        Sorry! There was a problem validating your code. Please try again.
      `);
    }
  }
};
