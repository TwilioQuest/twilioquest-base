const path = require('path');
const jetpack = require('fs-jetpack');
const { executeCodeString } = require('../../validation');

module.exports = async helper => {
  try {
    const { TQ_NODE_EXE, TQ_JAVASCRIPT_WORKSPACE_PATH } = helper.env;
    const programPath = path.join(
      TQ_JAVASCRIPT_WORKSPACE_PATH, 
      'treeLifeDetector.js'
    );

    const exists = await jetpack.existsAsync(programPath);
    if (!exists) {
      helper.fail(`
        We couldn't find your "treeLifeDetector.js" script in your 
        JavaScript code folder. Does the file below exist? <br/><br/>
        <span style="word-wrap:break-word">${programPath}</span>
      `);
      return;
    }

    const userCode = await jetpack.readAsync(programPath);

    let result = await executeCodeString(TQ_NODE_EXE, userCode, 
      ['11']);

    if (result.stdout && result.stdout.trim() !== 'other') {
      helper.fail(`
        When your script is passed anything other than 0, it should print 
        "other". Instead, we got:<br/><br/>
        <strong>${result.stdout}</strong>
        <br/>
      `);
      return;
    }

    result = await executeCodeString(TQ_NODE_EXE, userCode, ['0']);

    if (
      !result.stdout || 
      result.stdout.trim() !== 'alive'
    ) {
      helper.fail(`
        When your script is passed 0, it should print 
        "alive". Instead, we got:<br/><br/>
        <strong>${result.stdout}</strong>
        <br/>
      `);
      return;
    }

    helper.success(`
      You patch the Tree Life Detector with your fix, and in the distance you
      can hear the western bridge hum to life.<br/><br/> 
      <strong>Continue onward</strong> 
      to find the botanist!
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
