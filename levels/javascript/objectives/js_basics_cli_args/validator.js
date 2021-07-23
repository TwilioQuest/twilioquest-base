const path = require('path');
const jetpack = require('fs-jetpack');
const { executeCodeString } = require('../../validation');

module.exports = async helper => {
  try {
    const { TQ_NODE_EXE, TQ_JAVASCRIPT_WORKSPACE_PATH } = helper.env;
    const programPath = path.join(
      TQ_JAVASCRIPT_WORKSPACE_PATH, 
      'divideByTwo.js'
    );

    const exists = await jetpack.existsAsync(programPath);
    if (!exists) {
      helper.fail(`
        We couldn't find your "divideByTwo.js" script in your 
        JavaScript code folder. Does the file below exist? <br/><br/>
        <span style="word-wrap:break-word">${programPath}</span>
      `);
      return;
    }

    const userCode = await jetpack.readAsync(programPath);

    const { stdout } = await executeCodeString(TQ_NODE_EXE, userCode, ['128']);

    if (!stdout.includes('64')) {
      helper.fail(`
        When we executed your script, it didn't print out the result of dividing
        the input number by two.
        <br/><br/>
        
        Make sure to <em>change the final line of code</em> in the example
        given in the Help tab.
      `);
      return;
    }

    helper.success(`
      You replace the missing division script, and the lasers fade away.
      <br/><br/>
      <strong>Go grab the laser password</strong> from the scientist's desk!
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
