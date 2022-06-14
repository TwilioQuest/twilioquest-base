const merge = require("lodash.merge");
const updateQuestLogWhenComplete = require("./events/updateQuestLogWhenComplete");
const packageInfo = require("../../package.json");
const fixDoorWallDepthSorting = require("./events/fixDoorDepthSorting");

const WORLD_STATE_KEY = "com.twilioquest.challenge-questions";

const INITIAL_STATE = {};

module.exports = function (event, world) {
  const worldState = merge(INITIAL_STATE, world.getState(WORLD_STATE_KEY));

  const lockingObjectives = [];

  switch(event.mapName) {
    case 'default':
      lockingObjectives.push(
        'difference-max-min',
        'remove-duplicate-characters',
        'reverse-words',
        'sum-array'
      );
    case 'room2':
      lockingObjectives.push(
        'check-for-palindrome',
        'balance-brackets',
        'flatten-array'
      );
  }

  if (
    lockingObjectives.length &&
    lockingObjectives.every((objectiveName) =>
      world.isObjectiveCompleted(objectiveName)
    )
  ) {
    // If all objectives completed that lock the door
    // the render it unlocked.
    world.showEntities(`doorFrame_unlocked`);
    world.hideEntities(`doorFrame_locked`);
    world.hideEntities(`door`);
  }

  updateQuestLogWhenComplete({
    notification:
      'I\'ve completed everything in the <span class="highlight">Challenge Question</span> mission for now!',
    log: "I've completed everything in the Challenge Question mission for now!",
    event,
    world,
    worldStateKey: WORLD_STATE_KEY,
    version: packageInfo.version,
  });

  fixDoorWallDepthSorting(event, world);

  world.setState(WORLD_STATE_KEY, worldState);
};
