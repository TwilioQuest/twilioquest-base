module.exports = async function (helper) {
  try {
    const words = helper.getNormalizedInput("words");
    const correctWordOrder = ["jah", "vuh", "skrept"];
    const validWords = ["skrept", "jah", "vuh"];
    const playerWords = words.split(" ");

    if (playerWords.length === 1 && playerWords[0] === "") {
      helper.fail(`There does not seem to be any words here! There should be a single string separated by spaces. Like this: '${validWords.join(" ")}'.`);
      return;
    }

    if (playerWords.length !== correctWordOrder.length) {
      helper.fail(`One or more words is missing! You must use all three of the following words: ${validWords.join(", ")}`);
      return;
    }
    
    // Checking to see if any words provided by the player are invalid
    if (playerWords.some(word => !validWords.includes(word))) {
      helper.fail(
        `Not all of your words are valid! The only valid words are: ${validWords.join(
          " "
        )}.`);
        return;
    }

    if (!correctWordOrder.every((word, idx) => word === playerWords[idx])) {
      helper.fail("The words do not seem to be in the correct order!");
      return;
    }
  } catch (err) {
    helper.fail(err);
    return;
  }

  helper.success("You did it!");
};
