const path = require('path');
const jetpack = require('fs-jetpack');
const { executeCodeString } = require('../../validation');

module.exports = async helper => {
  try {
    const { TQ_NODE_EXE, TQ_JAVASCRIPT_WORKSPACE_PATH } = helper.env;
    const programPath = path.join(
      TQ_JAVASCRIPT_WORKSPACE_PATH, 
      'sayPlease.js'
    );

    const exists = await jetpack.existsAsync(programPath);
    if (!exists) {
      helper.fail(`
        We couldn't find your "sayPlease.js" script in your 
        JavaScript code folder. Does the file below exist? <br/><br/>
        <span style="word-wrap:break-word">${programPath}</span>
      `);
      return;
    }

    const userCode = await jetpack.readAsync(programPath);

    const { stdout } = await executeCodeString(TQ_NODE_EXE, userCode);

    if (!stdout.includes('please')) {
      helper.fail(`
        When we executed your script, it didn't print out the "magic word". 
        <br/><br/>
        
        Double check that when you run your script, it executes successfully
        and outputs a message that contains the word "please".
      `);
      return;
    }

    helper.success(`
      You submit your polite request to Glen in IT, and within a few moments,
      the laser barrier fades away.
      <br/><br/>
      You can now proceed further toward the office.
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
