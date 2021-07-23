const vm = require('vm');
const path = require('path');
const jetpack = require('fs-jetpack');

function isFunction(obj) {
  return !!(obj && obj.constructor && obj.call && obj.apply);
}

function getMissingKeys(expected, actual) {
  return Object.keys(expected).filter(
    expectedKey =>
      !Object.keys(actual).some(actualKey => actualKey === expectedKey)
  );
}

function doesEntryMatch(
  [actualKey, actualValue],
  [expectedKey, expectedValue]
) {
  if (actualKey !== expectedKey) {
    // only compare matching keys
    return false;
  }

  if (actualValue === expectedValue) {
    return true;
  }

  return false;
}

function getObjectKeysWithMismatchedValues(expected, actual) {
  return Object.entries(expected)
    .filter(expectedEntry => {
      return !Object.entries(actual).some(actualEntry =>
        doesEntryMatch(actualEntry, expectedEntry)
      );
    })
    .map(([key]) => key);
}

module.exports = async helper => {
  try {
    const { TQ_JAVASCRIPT_WORKSPACE_PATH } = helper.env;
    const programPath = path.join(
      TQ_JAVASCRIPT_WORKSPACE_PATH,
      'construction.js'
    );

    const exists = await jetpack.existsAsync(programPath);
    if (!exists) {
      helper.fail(`
        We couldn't find your "construction.js" script in your 
        JavaScript code folder. Does the file below exist? <br/><br/>
        <span style="word-wrap:break-word">${programPath}</span>
      `);
      return;
    }

    const userCode = await jetpack.readAsync(programPath);
    const scriptContext = {
      process: process,
      __TQ: {},
    };
    const testCode = `
      ${userCode};
      
      try {
        __TQ.construct = construct;
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
          It looks like a <span class="highlight">construct</span> 
          function was not defined in your
          code. At least, we didn't see it in the global scope of your script.
          <br/><br/>
          Did you name the function 
          "<span class="highlight">construct</span>"? Maybe 
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
    if (!isFunction(tq.construct)) {
      let message = `
        We found a variable called 
        <span class="highlight">construct</span>, but it's not a
        callable function. Check the Help section for more guidance on creating
        a JavaScript function.
      `;

      return helper.fail(message);
    }

    // Check functionality
    try {
      const result1 = tq.construct('Gene');
      const result2 = tq.construct('Irene');

      if (result1 === undefined || result1 === null) {
        return helper.fail(`
          It looks like your function is not yet returning a value. The final
          line of code in your function before the "}" should use the
          <span class="highlight">return</span> keyword to pass back a value of
          some kind as a result of executing the function. See the example code
          in the Help section.
        `);
      }

      if (typeof result1 !== 'object') {
        return helper.fail(`
          It looks like your function is not returning an object. Your
          function must return an object literal.
        `);
      }

      const expected1 = {
        name: 'Gene',
        material: 'human',
        assemble: true,
        duration: 1000,
      };

      debugger;
      const result1MissingKeys = getMissingKeys(expected1, result1);
      if (result1MissingKeys.length > 0) {
        return helper.fail(`
          It looks like your returned object is missing some keys.
          
          The keys ${result1MissingKeys} were missing!
        `);
      }

      const result1MismatchedKeys = getObjectKeysWithMismatchedValues(
        expected1,
        result1
      );
      if (result1MismatchedKeys.length > 0) {
        return helper.fail(`
          Not all of the keys for your returned object match correctly.
          <br/><br/>
          ${result1MismatchedKeys
            .map(key => `"${key}" should have been ${expected1[key]}.`)
            .join('<br/>')}
        `);
      }

      const expected2 = {
        name: 'Irene',
        material: 'human',
        assemble: true,
        duration: 1000,
      };

      const result2MismatchedKeys = getObjectKeysWithMismatchedValues(
        expected2,
        result2
      );
      if (result2MismatchedKeys.length > 0) {
        return helper.fail(`
          Not all of the keys for your returned object match correctly.
          <br/><br/>
          ${result2MismatchedKeys
            .map(key => `"${key}" should have been ${expected2[key]}.`)
            .join('<br/>')}
        `);
      }
    } catch (ee) {
      return helper.fail(`
        There was an error executing your construct function. Please 
        ensure that you can exercise your function from the command line 
        successfully and try again. Use the starter code in the Help section if
        you are stuck. Here's the error we got from trying to call your 
        function: <br/><br/>
        <span class="highlight">${ee}</span>
      `);
    }

    helper.success(`
      That did the trick! The matter instantiator function for this console is
      repaired.
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
