const vm = require('vm');
const path = require('path');
const jetpack = require('fs-jetpack');

module.exports = async helper => {
  try {
    const { TQ_JAVASCRIPT_WORKSPACE_PATH } = helper.env;
    const programPath = path.join(
      TQ_JAVASCRIPT_WORKSPACE_PATH, 
      'laserConfiguration.js'
    );

    const exists = await jetpack.existsAsync(programPath);
    if (!exists) {
      helper.fail(`
        We couldn't find your "laserConfiguration.js" script in your 
        JavaScript code folder. Does the file below exist? <br/><br/>
        <span style="word-wrap:break-word">${programPath}</span>
      `);
      return;
    }

    const userCode = await jetpack.readAsync(programPath);
    const scriptContext = { __TQ: {} };
    const testCode = `
      ${userCode};
      
      try {
        __TQ.laserStatus = laserStatus;
      } catch(e) {
        __TQ.error = e;
      }
    `;

    // First, execute user code to ensure it runs unchanged
    let script = new vm.Script(userCode);
    script.runInNewContext();

    // Assuming that it doesn't throw, we can try running it with our test
    // code appended to it.
    script = new vm.Script(testCode);
    script.runInNewContext(scriptContext);

    // Inspect the script context for the stuff we want
    const tq = scriptContext.__TQ;
    if (tq.error) {
      console.log(tq.error);
      if (tq.error.name === 'ReferenceError') {
        return helper.fail(`
          It looks like a <span class="highlight">laserStatus</span> 
          variable was not defined in your
          code. At least, we didn't see it in the global scope of your script.
          <br/><br/>
          Did you name the variable 
          "<span class="highlight">laserStatus</span>"? Maybe double-check your
          spelling?
        `);
      } else {
        return helper.fail(`
          There was a problem validating your code. The error we got was:
          <br/><br/>
          ${tq.error}
        `);
      }
    }

    // Check for the correct value of the string
    if (tq.laserStatus !== 'OFF') {
      return helper.fail(`
        You declared the <span class="highlight">laserStatus</span> variable,
        but it was not set to the string value of "OFF". Check the Help section
        to see how you can declare string variables. The value you set it to
        was: <strong>"${tq.laserStatus}"</strong>.
      `);
    }

    helper.success(`
      That did it! You override the laser configuration with your own 
      JavaScript code, and in moments the lasers fade away. <br/><br/>
      You can now proceed onward to the office.
    `);
  } catch (e) {
    helper.fail(`
      There was an error executing your JavaScript code. Please ensure that you
      can run it from the command line successfully and try again. Here's the 
      error we got: <br/><br/>
      <span class="highlight">${e}</span>
    `);
  }
};
