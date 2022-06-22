module.exports = async function (helper) {
  try {
    const action = helper.getNormalizedInput("action");
    const correctAction = "break barrels and pots";
    const validActions = ["race the lever", correctAction, "give up", "kick the door"];

    if (action.length === 0) {
      helper.fail(
        "There does not seem to be an action here! There should be a single string. Something like: 'kick the door'."
      );
      return;
    }

    if (
      !validActions.some((action) => action === action)
    ) {
      // Check if any player action is invalid
      helper.fail(
        `The action you entered is not valid! The only valid actions are: ${validActions.join(
          " "
        )}.`
      );
      return;
    }

    if (action !== correctAction) {

      // This is an invalid action
      let message =
        "Your action for Cedric did not get him through the door!";

      switch(action) {
        case 'kick the door':
          message += ' Kicking the door didn\'t seem to do anything.';
          break;
        case 'give up':
          message += ' He gave up for now. Maybe he\'ll try again later?';
          break;
        case 'race the lever':
          message += ' He just wasn\'t fast enough to make it. There must be another way!';
          break;
      }

      helper.fail(message);
      return;
    }
  } catch (err) {
    helper.fail(err);
    return;
  }

  helper.success("You did it! Cedric managed to find a missing piece to the lever inside one of the barrels. The piece held the lever down, keeping the door open, and allowing Cedric through!");
};
