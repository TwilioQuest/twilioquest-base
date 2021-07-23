module.exports = async helper => {
  try {
    const { laserPassword } = helper.validationFields;
    const { javascriptWorldState } = helper.context.levelState;

    // The player needs to find the password first
    if (!javascriptWorldState.room1.passwordFound) {
      return helper.fail(`
        You can't reboot the laser without the right password. Talk to the
        lead scientist to get the password you need!
      `);
    }

    if (!laserPassword || laserPassword.trim() !== 'PEW PEW PEW!') {
      return helper.fail(`
        Password incorrect. When you found the password on the scientist's desk,
        it was: <strong>PEW PEW PEW!</strong>
      `);
    }


    helper.success(`
      Success! The stasis beam flashes to life, and the experiment begins! 
      Wait... what's that rumbling noise?
    `);
  } catch (e) {
    helper.fail(`
      There was an error processing the password.
    `);
  }
};
