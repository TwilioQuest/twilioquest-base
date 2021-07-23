const vm = require('vm');
const path = require('path');
const jetpack = require('fs-jetpack');

const isFunction = function(obj) {
  return !!(obj && obj.constructor && obj.call && obj.apply);
};

module.exports = async helper => {
  try {
    const { TQ_JAVASCRIPT_WORKSPACE_PATH } = helper.env;
    const programPath = path.join(
      TQ_JAVASCRIPT_WORKSPACE_PATH, 
      'politeLasers.js'
    );

    const exists = await jetpack.existsAsync(programPath);
    if (!exists) {
      helper.fail(`
        We couldn't find your "politeLasers.js" script in your 
        JavaScript code folder. Does the file below exist? <br/><br/>
        <span style="word-wrap:break-word">${programPath}</span>
      `);
      return;
    }

    const userCode = await jetpack.readAsync(programPath);
    const scriptContext = {
      process: process,
      __TQ: {} 
    };
    const testCode = `
      ${userCode};
      
      try {
        __TQ.getLaserSetting = getLaserSetting;
      } catch(e) {
        __TQ.error = e;
      }
    `;

    // First, execute user code to ensure it runs unchanged
    let script = new vm.Script(userCode);
    script.runInNewContext(Object.assign({}, scriptContext));

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
          It looks like a <span class="highlight">getLaserSetting</span> 
          function was not defined in your
          code. At least, we didn't see it in the global scope of your script.
          <br/><br/>
          Did you name the function 
          "<span class="highlight">getLaserSetting</span>"? Maybe 
          double-check your spelling?
        `);
      } else {
        return helper.fail(`
          There was a problem validating your code. The error we got was:
          <br/><br/>
          ${tq.error}
        `);
      }
    }

    // Check type of the function
    if (!isFunction(tq.getLaserSetting)) {
      let message = `
        We found a variable called 
        <span class="highlight">getLaserSetting</span>, but it's not a
        callable function. Check the Help section for more guidance on creating
        a JavaScript function.
      `;

      return helper.fail(message);
    }

    // Check functionality
    try {
      const result = tq.getLaserSetting(1);
      const result2 = tq.getLaserSetting('now!');
      const result3 = tq.getLaserSetting('please');

      if (result === undefined || result === null) {
        return helper.fail(`
          It looks like your function is not yet returning a value. The final
          line of code in your function before the "}" should use the
          <span class="highlight">return</span> keyword to pass back a value of
          some kind as a result of executing the function. See the example code
          in the Help section.
        `);
      }

      if (typeof result !== 'string') {
        return helper.fail(`
          It looks like your function is not returning a string value. Your
          function must return a string with the value
          <span class="highlight">"OFF"</span>.
        `);
      }

      if (result !== 'ON') {
        return helper.fail(`
          Your function returned a string, but not the value we were looking 
          for. Your function returned the value 
          <span class="highlight">"${result}"</span>. The correct value is
          <span class="highlight">"ON"</span>.
        `);
      }

      if (result2 !== 'ON') {
        return helper.fail(`
          Your function returned a string, but not the value we were looking 
          for. Your function returned the value 
          <span class="highlight">"${result}"</span>. The correct value is
          <span class="highlight">"ON"</span>.
        `);
      }

      if (result3 !== 'OFF') {
        return helper.fail(`
          When your function is passed the string "please", it should return
          the string "OFF".
        `);
      }

    } catch(ee) {
      return helper.fail(`
        There was an error executing your getLaserSetting function. Please 
        ensure that you can exercise your function from the command line 
        successfully and try again. Use the starter code in the Help section if
        you are stuck. Here's the error we got from trying to call your 
        function: <br/><br/>
        <span class="highlight">${ee}</span>
      `);
    }

    helper.success(`
      With a heavy sigh, you once again placate Glen and create a function that
      drops the laser barrier when asked politely. You can now move further into
      the lab.
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
