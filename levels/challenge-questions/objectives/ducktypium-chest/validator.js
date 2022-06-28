module.exports = async function (helper) {
  try {
    const words = helper.getNormalizedInput("words");
    const correctWordOrder = ["jah", "vuh", "skrept"];
    const validWords = ["jah", "vuh", "skrept"];
    const playerWords = words.split(" ");

    if (playerWords.length === 0) {
      helper.fail("There does not seem to be any words here! They should be a single string separated by spaces. Like this: 'skrept jah vuh'.");
    }
    
    // Checking to see if any words provided by the player are invalid
    if (playerWords.some(word => !validWords.includes(word))) {
      helper.fail(
        `Not all of your instructions are valid! The only valid instructions are: ${validInstructions.join(
          " "
        )}.`);
    }

    if (!playerWords.every((word, idx) => word === correctWordOrder[idx])) {
      helper.fail("The words do not seem to be in the correct order!");
    }
  } catch (err) {
    helper.fail(err);
    return;
  }

  helper.success("You did it!");
};
