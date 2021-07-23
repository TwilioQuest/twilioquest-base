const vm = require('vm');
const path = require('path');
const jetpack = require('fs-jetpack');

module.exports = async helper => {
  try {
    const { TQ_JAVASCRIPT_WORKSPACE_PATH } = helper.env;
    const programPath = path.join(
      TQ_JAVASCRIPT_WORKSPACE_PATH, 
      'chestConfiguration.js'
    );

    const exists = await jetpack.existsAsync(programPath);
    if (!exists) {
      helper.fail(`
        We couldn't find your "chestConfiguration.js" script in your 
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
        __TQ.accessLevel = accessLevel;
        __TQ.favoriteRobot = favoriteRobot;
        __TQ.verifiedUser = verifiedUser;
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
        const { message } = tq.error;

        let missingVariable = 'accessLevel';
        if (message.includes('favoriteRobot')) {
          missingVariable = 'favoriteRobot';
        } else if (message.includes('verifiedUser')) {
          missingVariable = 'verifiedUser';
        }

        return helper.fail(`
          It looks like a <span class="highlight">${missingVariable}</span> 
          variable was not defined in your
          code. At least, we didn't see it in the global scope of your script.
          <br/><br/>
          Did you name the variable 
          "<span class="highlight">${missingVariable}</span>"? Maybe 
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

    // Check variable types, and provide appropriate feedback
    if (typeof tq.accessLevel !== 'number') {
      let message = `
        We found your <span class="highlight">accessLevel</span> variable, but
        it wasn't a Number object as we expected. It looks like it's actually a
        <span class="highlight">${typeof tq.accessLevel}</span> object.
      `;

      if (typeof tq.accessLevel === 'string') {
        message += `<br/><br/>
          It seems like you accidentally made this variable a string - values
          like numbers and booleans don't have quotes around them in your code.
          Check the Help section for an example of declaring number variables.
        `;
      }

      return helper.fail(message);
    }

    if (typeof tq.verifiedUser !== 'boolean') {
      let message = `
        We found your <span class="highlight">verifiedUser</span> variable, but
        it wasn't a Boolean object as we expected. It looks like it's actually a
        <span class="highlight">${typeof tq.verifiedUser}</span> object.
      `;

      if (typeof tq.verifiedUser === 'string') {
        message += `<br/><br/>
          It seems like you accidentally made this variable a string - values
          like numbers and booleans don't have quotes around them in your code.
          Check the Help section for an example of declaring boolean variables.
        `;
      }

      return helper.fail(message);
    }

    if (typeof tq.favoriteRobot !== 'string') {
      let message = `
        We found your <span class="highlight">favoriteRobot</span> variable, but
        it wasn't a String object as we expected. It looks like it's actually a
        <span class="highlight">${typeof tq.favoriteRobot}</span> object.
      `;

      return helper.fail(message);
    }

    // Check variable values, now that we know they exist
    if (tq.accessLevel !== 7) {
      return helper.fail(`
        We found your <span class="highlight">accessLevel</span> variable, but
        it wasn't set to the number <span class="highlight">7</span> as we
        expected. It looks like it was set to 
        <span class="highlight">${tq.accessLevel}</span>.
      `);
    }

    if (tq.favoriteRobot !== 'Cedric') {
      return helper.fail(`
        We found your <span class="highlight">favoriteRobot</span> variable, but
        it wasn't set to the string <span class="highlight">"Cedric"</span> as we
        expected. It looks like it was set to 
        <span class="highlight">"${tq.favoriteRobot}"</span>.
      `);
    }

    if (tq.verifiedUser !== true) {
      return helper.fail(`
        We found your <span class="highlight">verifiedUser</span> variable, but
        it wasn't set to the boolean <span class="highlight">true</span> as we
        expected. It looks like it was set to 
        <span class="highlight">${tq.verifiedUser}</span>.
      `);
    }

    helper.success(`
      Nice! Your configuration override worked, and you now have access to the
      supplies in the chest.
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
