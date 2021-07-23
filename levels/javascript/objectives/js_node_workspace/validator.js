const jetpack = require('fs-jetpack');
const { NiceError } = require('../../validation');

module.exports = async helper => {
  try {
    const { workspacePath } = helper.validationFields;

    if (!workspacePath) {
      throw new NiceError(`
        Please provide a path to your Node.js workspace directory!
      `);
    }

    const exists = await jetpack.existsAsync(workspacePath);
    if (!exists) {
      throw new NiceError(`
        We couldn't find a directory at the path you provided. 
        Please double check that the directory path you pasted in 
        the text field is correct.
      `);
    }

    helper.success(`
      JavaScript workspace confirmed. Lab access granted - please proceed
      through the security gate.
    `,
      [
        {
          name: 'JAVASCRIPT_WORKSPACE_PATH',
          value: workspacePath,
        },
      ]
    );
  } catch (e) {
    console.log(e);
    if (e.name === 'NiceError') {
      helper.fail(e.message);
    } else {
      helper.fail(`
        Sorry! We couldn't successfully find your Node.js workspace path.
      `);
    }
  }
};
