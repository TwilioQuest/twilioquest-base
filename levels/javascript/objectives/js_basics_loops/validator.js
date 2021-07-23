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
        isNumber,
        safeDouble,
      };           
    `)
  );
}

const runTestCase = (name, fn) => ([arg1, arg2, expected]) => {
  const result = fn(arg1, arg2);
  if (result !== expected) {
    throw new NiceError(`
      Welp, we found your "${name}" function, but we passed in "${arg1}" and "${arg2}" as
      the arguments and got <strong>${result}</strong>.

      Check your function again?
    `);
  }
};

module.exports = async helper => {
  try {
    const objectiveCodePath = getCodePath('js_basics_loops');
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

    // power
    assertIsFunction('power', userFunctions.power);

    const powerTestCases = [
      [2, 3, 8],
      [-2, 2, 4],
      [-3, 3, -27],
      [0, 6, 0],
      [9, 0, 1],
      [3, 3, 27],
    ];
    const runTestCaseWithPower = runTestCase('power', userFunctions.power);
    powerTestCases.forEach(runTestCaseWithPower);

    helper.success(`Yeah! Your power function worked!`);
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
