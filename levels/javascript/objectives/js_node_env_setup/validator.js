const { spawn } = require('child_process');

module.exports = async helper => {
  try {
    const { nodePath } = helper.validationFields;

    const args = ['--version'];
    const [isExecutableValid, errorMessage] = await helper.isExecutableValid(
      nodePath,
      args
    );

    if (!isExecutableValid) {
      helper.fail(errorMessage);
      return;
    }

    const nodeVersion = spawn(nodePath, args);
    let versionString = '';
    nodeVersion.stdout.on('data', data => {
      versionString += `${data}`;
    });

    nodeVersion.on('close', code => {
      if (code === 0) {
        helper.success(
          `
          Awesome! Looks like you have this version installed: <br/>
          <span class="highlight">${versionString}</span> <br/><br/>
          Please proceed to the next security checkpoint.
        `,
          [{ name: 'NODE_EXE', value: nodePath }]
        );
      } else {
        helper.fail(`
          Welp... something went wrong when we tried to validate this Node.js
          path. Double check the path and try again.
        `);
      }
    });
  } catch (e) {
    console.log(e);
    if (e.name === 'NiceError') {
      helper.fail(e.message);
    } else {
      helper.fail(`
        Sorry! We couldn't validate your Node.js installation. Please try
        again.
      `);
    }
  }
};
