const { evaluteAssertions } = require('../../validation');

const EXAMPLE_FILE_NAME = 'getFirstAmountSorted.js';

module.exports = async helper => {
  try {
    const passed = await evaluteAssertions(
      helper,
      EXAMPLE_FILE_NAME,
      `
        expectFunctionResultToBe(
          'getFirstAmountSorted',
          ['first', 'second'],
          [['third', 'second', 'first'], 2]
        );
        expectFunctionResultToBe(
          'getFirstAmountSorted',
          ['golden'],
          [['golden', 'terrier'], 1]
        );
        expectFunctionResultToBe(
          'getFirstAmountSorted',
          ['apple jacks', 'cheerios', 'lucky charms'],
          [['cheerios', 'apple jacks', 'lucky charms'], 3]
        );
        expectFunctionResultToBe(
          'getFirstAmountSorted',
          [],
          [['golden', 'terrier', 'boxer'], 0]
        );
      `
    );

    if (passed) {
      helper.success(`
        You've correctly selected and sorted the segments of our test arrays! Manipulating arrays will serve you well in the future.
      `);
    }
  } catch (e) {
    helper.fail(`Something went wrong when we tried to run your array section sorting function.
    
    ${e}`);
  }
};
