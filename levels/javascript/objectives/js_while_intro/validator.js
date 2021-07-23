const { evaluteAssertions } = require('../../validation');

const EXAMPLE_FILE_NAME = 'isTreeAlive.js';

module.exports = async helper => {
  try {
    const passed = await evaluteAssertions(
      helper,
      EXAMPLE_FILE_NAME,
      `
        expectFunctionResultToBe('isTreeAlive', 'alive', [0]);
        expectFunctionResultToBe('isTreeAlive', 'other', [1]);
        expectFunctionResultToBe('isTreeAlive', 'other', [2]);
        expectFunctionResultToBe('isTreeAlive', 'other', [3]);
      `
    );

    if (passed) {
      helper.success(`
        You've re-enabled the Biology Wing's tree life detector! The next part of the Lab should be accessible again.
      `);
    }
  } catch (e) {
    helper.fail(`Something went wrong when we tried to run your tree life detection code.
    
    ${e}`);
  }
};
