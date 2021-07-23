const { evaluteAssertions } = require('../../validation');

const EXAMPLE_FILE_NAME = 'addFirstToLast.js';

module.exports = async helper => {
  try {
    const passed = await evaluteAssertions(
      helper,
      EXAMPLE_FILE_NAME,
      `
        expectFunctionResultToBe('addFirstToLast', 'firstthird', [[
          'first',
          'second',
          'third',
        ]]);
        expectFunctionResultToBe('addFirstToLast', 'goldenterrier', [[
          'golden',
          'terrier',
        ]]);
        expectFunctionResultToBe('addFirstToLast', 
          'cheeriocheerio', [['cheerio']]);
        expectFunctionResultToBe('addFirstToLast', '', [[]]);
      `
    );

    if (passed) {
      helper.success(`
        That did it! You can now pass through the airlock and board the
        <strong>Infinite Loop</strong>.
      `);
    }
  } catch (e) {
    helper.fail(`
      Something went wrong when we tried to run your string concatenation 
      function: <br/><br/>
      ${e}
    `);
  }
};
