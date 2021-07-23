const path = require('path');
const jetpack = require('fs-jetpack');
const { executeCodeString } = require('../../validation');

module.exports = async helper => {
  try {
    const { TQ_NODE_EXE, TQ_JAVASCRIPT_WORKSPACE_PATH } = helper.env;
    const programPath = path.join(
      TQ_JAVASCRIPT_WORKSPACE_PATH, 
      'shouldWater.js'
    );

    const exists = await jetpack.existsAsync(programPath);
    if (!exists) {
      helper.fail(`
        We couldn't find your "shouldWater.js" script in your 
        JavaScript code folder. Does the file below exist? <br/><br/>
        <span style="word-wrap:break-word">${programPath}</span>
      `);
      return;
    }

    const userCode = await jetpack.readAsync(programPath);

    let result = await executeCodeString(TQ_NODE_EXE, userCode, 
      ['0', '10']);

    if (result.stdout && result.stdout.trim() !== '') {
      helper.fail(`
        Your script should not print anything if the second argument is 10
        or less.
      `);
      return;
    }

    result = await executeCodeString(TQ_NODE_EXE, userCode, 
      ['1', '11']);

    if (result.stdout && result.stdout.trim() !== '') {
      helper.fail(`
        Your script should not print anything if the first argument is not 0.
      `);
      return;
    }
    
    result = await executeCodeString(TQ_NODE_EXE, userCode, 
      ['0', '11']);

    if (
      !result.stdout || 
      !result.stdout.toLowerCase().includes('water')
    ) {
      helper.fail(`
        When your script receives 0 as the first argument, and a number greater
        than 10 as the second argument, it should print "WATER".
      `);
      return;
    }

    helper.success(`
      Success! The sprinkler system appears to be back online, along with the
      south bridge.
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
