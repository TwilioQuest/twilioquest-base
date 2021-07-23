const vm = require('vm');
const path = require('path');
const jetpack = require('fs-jetpack');

module.exports = async helper => {
  try {
    const { TQ_JAVASCRIPT_WORKSPACE_PATH } = helper.env;
    const programPath = path.join(
      TQ_JAVASCRIPT_WORKSPACE_PATH, 
      'freighterInventory.js'
    );

    const exists = await jetpack.existsAsync(programPath);
    if (!exists) {
      helper.fail(`
        We couldn't find your "freighterInventory.js" script in your 
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
        __TQ.inventory = inventory;
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
          It looks like a <span class="highlight">inventory</span> 
          variable was not defined in your
          code. At least, we didn't see it in the global scope of your script.
          <br/><br/>
          Did you name the variable 
          "<span class="highlight">inventory</span>"? Maybe double-check your
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

    // It's not an array...
    if (!tq.inventory.some) {
      return helper.fail(`
        It looks like your "<span class="highlight">inventory</span>" variable
        is not an array. Double check how you defined the variable.
      `);
    }

    if (tq.inventory.length !== 5) {
      return helper.fail(`
        It looks like your "<span class="highlight">inventory</span>" variable
        does not have five items in it. It should contain five strings, as 
        described on the Objective tab.
      `);
    }

    // Check for the correct value of the array
    for (let i = 0, l = tq.inventory.length; i < l; i++) {
      const v = tq.inventory[i];
      if (!v || typeof v !== 'string') {
        return helper.fail(`
          One of the items in your array is not a string. Double check the items
          inside your array.
        `);
      }

      const test = v.toLowerCase().trim();
      if (i === 0 && test !== 'ducktypium ore') {
        return helper.fail(`
          The first item in your <span class="highlight">inventory</span> array
          should be "Ducktypium Ore". It was "${v}".
        `);
      }
      if (i === 1 && test !== 'uranium rod') {
        return helper.fail(`
          The second item in your <span class="highlight">inventory</span> array
          should be "Uranium Rod". It was "${v}".
        `);
      }
      if (i === 2 && test !== 'ruthenium isotopes') {
        return helper.fail(`
          The third item in your <span class="highlight">inventory</span> array
          should be "Ruthenium Isotopes". It was "${v}".
        `);
      }
      if (i === 3 && test !== 'concave lens') {
        return helper.fail(`
          The fourth item in your <span class="highlight">inventory</span> array
          should be "Concave Lens". It was "${v}".
        `);
      }
      if (i === 4 && test !== 'refraction panel') {
        console.log('yooooooooooo')
        return helper.fail(`
          The fifth item in your <span class="highlight">inventory</span> array
          should be "Refraction Panel". It was "${v}".
        `);
      }
    }

    helper.success(`
      Nice! You corrected the shipping manifest for the <strong>Infinite Loop
      </strong> and can now proceed onward toward the freighter.
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
