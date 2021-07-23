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
        spellNumber,
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
    const objectiveCodePath = getCodePath('js_basics_conditionals2');
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

    // spellNumber
    assertIsFunction('spellNumber', userFunctions.spellNumber);

    const spellNumberTestCases = [
      [1, 'one'],
      [2, 'two'],
      [3, 'three'],
      [4, 'four'],
      [5, 'five'],
      [6, 'six'],
      [7, 'seven'],
      [8, 'eight'],
      [9, 'nine'],
      [0, 'other'],
      [10, 'other'],
      [23, 'other'],
    ];
    const runTestCaseWithSpellNumber = runTestCase(
      'spellNumber',
      userFunctions.spellNumber
    );
    spellNumberTestCases.forEach(runTestCaseWithSpellNumber);

    helper.success(`Yeah! Your spellNumber function worked!`);
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
