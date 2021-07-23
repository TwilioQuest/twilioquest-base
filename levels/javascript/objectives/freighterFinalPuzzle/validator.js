module.exports = async helper => {
  try {
    const { puzzlePassword } = helper.validationFields;
    const { javascriptWorldState } = helper.context.levelState;

    // The player needs to unlock all the security nodes first
    if (
      !javascriptWorldState.eastWingSecNodes ||
      !javascriptWorldState.eastWingSecNodes[0] ||
      !javascriptWorldState.eastWingSecNodes[1] ||
      !javascriptWorldState.eastWingSecNodes[2] ||
      !javascriptWorldState.eastWingSecNodes[3] ||
      !javascriptWorldState.eastWingSecNodes[4] ||
      !javascriptWorldState.eastWingSecNodes[5]
    ) {
      return helper.fail(`
        You must unlock all six security nodes before you can guess the
        password. Explore the rest of the Infinite Loop to find the rest.
        <br/><br/>
        You can check which indexes you have found in the "Objective" tab.
      `);
    }

    if (!puzzlePassword || puzzlePassword.trim() !== 'F!N!TE') {
      return helper.fail(`
        Password incorrect - check the case of the characters you entered, and
        ensure you are using the right characters based on the 2D array in the
        "Objective" tab.
      `);
    }


    helper.success(`
      Success! The laser barrier fades away, and you are able to proceed
      onward to speak with the electrical engineer.
    `);
  } catch (e) {
    helper.fail(`
      There was an error processing the password.
    `);
  }
};
