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
      'freightScanner2.js'
    );

    const exists = await jetpack.existsAsync(programPath);
    if (!exists) {
      helper.fail(`
        We couldn't find your "freightScanner2.js" script in your 
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
        __TQ.scan = scan;
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
          It looks like a <span class="highlight">scan</span> 
          function was not defined in your
          code. At least, we didn't see it in the global scope of your script.
          <br/><br/>
          Did you name the function 
          "<span class="highlight">scan</span>"? Maybe 
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
    if (!isFunction(tq.scan)) {
      let message = `
        We found a variable called 
        <span class="highlight">scan</span>, but it's not a
        callable function. Check the Help section for more guidance on creating
        a JavaScript function.
      `;

      return helper.fail(message);
    }

    // Check functionality
    try {
      const result = tq.scan([]);
      const result2 = tq.scan(['contraband', 'contraband', 'contraband']);
      const result3 = tq.scan(['contraband', 'a', 'contraband', 'b']);

      if (result === undefined || result === null) {
        return helper.fail(`
          It looks like your function is not yet returning a value. The final
          line of code in your function before the "}" should use the
          <span class="highlight">return</span> keyword to pass back a value of
          some kind as a result of executing the function. See the example code
          in the Help section.
        `);
      }

      if (!Array.isArray(result)) {
        return helper.fail(`
          It looks like your function is not returning an array. Your
          function must return an array, the indexes of each item equal to 
          the string "contraband" in the input array.
        `);
      }

      if (
        result.length !== 0 ||
        (
          result2.length !== 3 || 
          result2[0] !== 0 || 
          result2[1] !== 1 ||
          result2[2] !== 2
        ) ||
        (
          result3.length !== 2 || 
          result3[0] !== 0 || 
          result3[1] !== 2
        )
      ) {
        return helper.fail(`
          Your function returned an array, but not the array we were looking 
          for. Check the Help and Objective tabs to ensure you are returning
          the right contents in your output array.
        `);
      }

    } catch(ee) {
      return helper.fail(`
        There was an error executing your scan function. Please 
        ensure that you can exercise your function from the command line 
        successfully and try again. Use the starter code in the Help section if
        you are stuck. Here's the error we got from trying to call your 
        function: <br/><br/>
        <span class="highlight">${ee}</span>
      `);
    }

    helper.success(`
      That did it! You hack the security node, and an index for the 
      <span class="highlight">second character</span> in the Infinite Loop's 
      master password appears:<br/><br/>
      <span class="highlight">[3][4]</span>
      <br/><br/>
      This is one of six indexes total you will need to discover the password.
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
