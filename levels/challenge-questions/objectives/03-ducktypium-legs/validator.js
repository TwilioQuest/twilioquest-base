module.exports = async function (helper) {
  try {
    const color = helper.getNormalizedInput("color");

    if (!color) {
      helper.fail("Be sure to enter a color of jar!");
      return;
    }

    const validColors = ["gray", "white and green", "terracotta"];
    if (!validColors.includes(color)) {
      helper.fail(
        `The color you entered "${color}" is not one of the valid colors: "gray", "white and green", or "terracotta".`
      );
      return;
    }

    if (color !== "gray" && color !== "grey") {
      helper.fail(`That jar was trapped! Cedric barely avoided getting hurt!`);
      return;
    }
  } catch (err) {
    helper.fail(err);
    return;
  }

  helper.success("You did it!");
};
