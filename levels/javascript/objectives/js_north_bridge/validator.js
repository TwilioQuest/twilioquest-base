const path = require('path');
const jetpack = require('fs-jetpack');
const { executeCodeString } = require('../../validation');

module.exports = async helper => {
  try {
    const { TQ_NODE_EXE, TQ_JAVASCRIPT_WORKSPACE_PATH } = helper.env;
    const programPath = path.join(
      TQ_JAVASCRIPT_WORKSPACE_PATH, 
      'northBridgeControl.js'
    );

    const exists = await jetpack.existsAsync(programPath);
    if (!exists) {
      helper.fail(`
        We couldn't find your "northBridgeControl.js" script in your 
        JavaScript code folder. Does the file below exist? <br/><br/>
        <span style="word-wrap:break-word">${programPath}</span>
      `);
      return;
    }

    const userCode = await jetpack.readAsync(programPath);

    let result = await executeCodeString(TQ_NODE_EXE, userCode, 
      ['asjkdhfahsdf']);

    if (result.stdout && result.stdout.trim() !== '') {
      helper.fail(`
        When your script runs without the special <strong>EXTEND</strong>
        argument, it should print nothing at all. Instead, we got:<br/><br/>
        ${result.stdout}
      `);
      return;
    }

    result = await executeCodeString(TQ_NODE_EXE, userCode, ['EXTEND']);

    if (
      !result.stdout || 
      !result.stdout.toLowerCase().includes('extending bridge')
    ) {
      helper.fail(`
        When your script receives "EXTEND" as an argument, it should print
        "Extending bridge!". Check the example code in the 
        <strong>Help tab</strong>.
      `);
      return;
    }

    helper.success(`
      You replace the bridge activation routine, and a bridge made of pure
      energy extends ahead of you. <strong>Continue onward</strong> to find the
      botanist!
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
