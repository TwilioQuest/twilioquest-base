const path = require('path');
const jetpack = require('fs-jetpack');
const { executeCodeString } = require('../../validation');

module.exports = async helper => {
  try {
    const { TQ_NODE_EXE, TQ_JAVASCRIPT_WORKSPACE_PATH } = helper.env;
    const programPath = path.join(
      TQ_JAVASCRIPT_WORKSPACE_PATH, 
      'enhancedLifeDetector.js'
    );

    const exists = await jetpack.existsAsync(programPath);
    if (!exists) {
      helper.fail(`
        We couldn't find your "enhancedLifeDetector.js" script in your 
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
        When your script is passed a number besides 0, 1, or 2, it should print 
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

    result = await executeCodeString(TQ_NODE_EXE, userCode, ['1']);

    if (
      !result.stdout || 
      result.stdout.trim() !== 'flowering'
    ) {
      helper.fail(`
        When your script is passed 1, it should print 
        "flowering". Instead, we got:<br/><br/>
        <strong>${result.stdout}</strong>
        <br/>
      `);
      return;
    }

    result = await executeCodeString(TQ_NODE_EXE, userCode, ['2']);

    if (
      !result.stdout || 
      result.stdout.trim() !== 'shedding'
    ) {
      helper.fail(`
        When your script is passed 2, it should print 
        "shedding". Instead, we got:<br/><br/>
        <strong>${result.stdout}</strong>
        <br/>
      `);
      return;
    }

    helper.success(`
      Your enhancements to the Tree Life Detector appear to be working!
      The bridge ahead hums to life, and the path to the botanist is
      finally clear.<br/><br/> 
      <strong>Onward!</strong>
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
