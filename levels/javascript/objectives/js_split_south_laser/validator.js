const path = require('path');
const jetpack = require('fs-jetpack');
const { executeCodeString } = require('../../validation');

module.exports = async helper => {
  try {
    const { TQ_NODE_EXE, TQ_JAVASCRIPT_WORKSPACE_PATH } = helper.env;
    const programPath = path.join(
      TQ_JAVASCRIPT_WORKSPACE_PATH, 
      'sortOrder.js'
    );

    const { javascriptWorldState } = helper.context.levelState;
    const isObjectiveReady = javascriptWorldState.eastWing &&
      javascriptWorldState.southWing.hadSavedConversation;

    // The player needs to enable the other beams first
    if (!isObjectiveReady) {
      return helper.fail(`
        You can't restart this laser until you receive the botanist's 
        access code. See the objective tab for more information.
      `);
    }

    const exists = await jetpack.existsAsync(programPath);
    if (!exists) {
      helper.fail(`
        We couldn't find your "sortOrder.js" script in your 
        JavaScript code folder. Does the file below exist? <br/><br/>
        <span style="word-wrap:break-word">${programPath}</span>
      `);
      return;
    }

    const userCode = await jetpack.readAsync(programPath);

    let result = await executeCodeString(TQ_NODE_EXE, userCode, 
      ['a', 'b']);

    if (!result.stdout || result.stdout.trim() !== '-1') {
      helper.fail(`
        Your script must print "-1" when the first argument passed to it
        appears alphabetically sooner than the second argument.
      `);
      return;
    }

    result = await executeCodeString(TQ_NODE_EXE, userCode, 
      ['apples', 'Ability']);

    if (
      !result.stdout || 
      result.stdout.trim() !== '1'
    ) {
      helper.fail(`
        Your script must print "1" when the first argument passed to it
        appears alphabetically later than the second argument.
      `);
      return;
    }

    result = await executeCodeString(TQ_NODE_EXE, userCode, 
      ['apples', 'APPleS']);

    if (
      !result.stdout || 
      result.stdout.trim() !== '0'
    ) {
      helper.fail(`
        Your script must print "0" when the first argument passed to it
        is the same (ignoring letter case) as the second argument.
      `);
      return;
    }

    helper.success(`
      Your comparison script appears to be working - Stasis Beam 2 flashes to
      life!
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
