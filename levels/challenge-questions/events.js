const merge = require("lodash.merge");
const updateQuestLogWhenComplete = require("./events/updateQuestLogWhenComplete");
const packageInfo = require("../../package.json");
const fixDoorWallDepthSorting = require("./events/fixDoorDepthSorting");

const WORLD_STATE_KEY = "com.twilioquest.challenge-questions";

const INITIAL_STATE = {};

module.exports = function (event, world) {
  const worldState = merge(INITIAL_STATE, world.getState(WORLD_STATE_KEY));

  const lockingObjectives = [];

  if (event.name === 'mapDidLoad')
    worldState.currentMapName = event.mapName;

  if (event.name === 'conversationDidEnd' && event.npc.conversation === 'cedricDefault' && worldState.chosenMap) {
    world.Warp('challenge-questions', 'player_entry1', worldState.chosenMap);
    delete worldState.chosenMap;
  }

  switch(worldState.currentMapName) {
    case 'default':
      lockingObjectives.push(
        'difference-max-min',
        'remove-duplicate-characters',
        'reverse-words',
        'sum-array'
      );
      break;
    case 'room2':
      lockingObjectives.push(
        'check-for-palindrome',
        'balance-brackets',
        'flatten-array'
      );
      break;
  }

  if (
    lockingObjectives.length &&
    lockingObjectives.every((objectiveName) =>
      world.isObjectiveCompleted(objectiveName)
    )
  ) {

    // BEHAVIOR FOR default MAP
    // If all objectives completed that lock the door
    // the render it unlocked.
    world.showEntities(`doorFrame_unlocked`);
    world.hideEntities(`doorFrame_locked`);
    world.hideEntities(`door`);


    // BEHAVIOR FOR room2 MAP
    world.forEachEntities('room2-loot-laser', (ob) => {
      ob.setState({ ...ob.state, isCompleted: true });
    });
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
