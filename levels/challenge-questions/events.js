const merge = require("lodash.merge");
const updateQuestLogWhenComplete = require("./events/updateQuestLogWhenComplete");
const packageInfo = require("../../package.json");
const fixDoorWallDepthSorting = require("./events/fixDoorDepthSorting");

const WORLD_STATE_KEY = "com.twilioquest.challenge-questions";

const INITIAL_STATE = {
  challengeMapsCompleted: 0,
  playerHasTeleported: false,
  playerCompletedObjective: false
};

function allObjectivesAreComplete(world, objectives) {
  return objectives && (objectives.length === 0 ||
    objectives.every((objectiveName) => world.isObjectiveCompleted(objectiveName)));
}

function getMapEvent(mapName) {
  const mapEvent = {
    objectives: [],
    completionCallback: () => {}
  };

  switch(mapName) {
    case 'room2':
      mapEvent.objectives.push('check-for-palindrome', 'balance-brackets', 'flatten-array', 'ducktypium-chest');
      mapEvent.completionCallback = (world) => {
        const laserBarrierObjectives = ['check-for-palindrome', 'balance-brackets', 'flatten-array'];

        if (!allObjectivesAreComplete(world, laserBarrierObjectives))
          return;
        
        world.forEachEntities('room2-loot-laser', (ob) => {
          ob.setState({ ...ob.state, isCompleted: true });
        });
      };
      break;
    default:
      mapEvent.objectives.push('difference-max-min', 'remove-duplicate-characters', 'reverse-words', 'sum-array', 'ducktypium-helm');
      mapEvent.completionCallback = (world) => {
        const doorObjectives = ['difference-max-min', 'remove-duplicate-characters', 'reverse-words', 'sum-array'];
        
        if (!allObjectivesAreComplete(world, doorObjectives))
          return;
        
        world.showEntities(`doorFrame_unlocked`);
        world.hideEntities(`doorFrame_locked`);
        world.hideEntities(`door`);
      };
      break;
  }

  return mapEvent;
}

function playerChoseToTeleport(event, worldState) {
  return event.name === 'conversationDidEnd' && event.npc.conversation === 'cedricDefault' && worldState.chosenMap;
}

function migrationIsNeeded(worldState, previouslyCompletedAllObjectives) {
  return worldState.currentMapName === 'default' && worldState.challengeMapsCompleted === 0 && previouslyCompletedAllObjectives;
}

async function notifyPlayerOfAbilityToTeleport(world) {
  world.disablePlayerMovement();
  
  world.forEachEntities((ent) => ent.instance.type === 'tq-npc', async (cedric) => {
    await world.tweenCameraToPosition({
      x: cedric.startX,
      y: cedric.startY
    });
  });

  world.showNotification(`
    <i>I should probably speak to Cedric to see if any more plans
    have been found for the <span class="highlight">Dark Ducktypium Forge</span>.</i>
  `);

  await world.wait(6000);
  await world.tweenCameraToPlayer();

  world.enablePlayerMovement();
}

function completedMapLoadedAndPlayerHasNotTeleported(event, worldState, playerCompletedMap) {
  return event.name === 'mapDidLoad' && playerCompletedMap && !worldState.playerHasTeleported
}

module.exports = async function (event, world) {
  const worldState = merge(INITIAL_STATE, world.getState(WORLD_STATE_KEY));

  if (event.name === 'mapDidLoad')
    worldState.currentMapName = event.mapName;

  const mapEvent = getMapEvent(worldState.currentMapName);
  const playerCompletedMap = allObjectivesAreComplete(world, mapEvent.objectives);

  if (event.name === 'levelDidLoad') {
    // Gets all the completed objectives and removes 'challenge-questions.' from their names
    const completedObjectives = Object.keys(world.getContext('completedObjectives')).map(objective => objective.replace('challenge-questions.', ''));
    const previouslyCompletedAllObjectives = mapEvent.objectives.every(objective => completedObjectives.includes(objective));
    
    if (migrationIsNeeded(worldState, previouslyCompletedAllObjectives))
      worldState.challengeMapsCompleted++;
  }
  
  if (completedMapLoadedAndPlayerHasNotTeleported(event, worldState, playerCompletedMap))
    notifyPlayerOfAbilityToTeleport(world);
  
  if (event.name === 'objectiveCompleted')
    worldState.playerCompletedObjective = true;

  if (event.name === 'objectiveDidClose' && worldState.playerCompletedObjective) {
    worldState.playerCompletedObjective = false;
    
    if (playerCompletedMap) {
      worldState.challengeMapsCompleted++;
      
      if (!worldState.playerHasTeleported)
        notifyPlayerOfAbilityToTeleport(world);
    }
  }

  if (playerChoseToTeleport(event, worldState)) {
    world.warp('challenge-questions', 'player_entry1', worldState.chosenMap);
    delete worldState.chosenMap;
    worldState.playerHasTeleported = true;
  }
  
  mapEvent.completionCallback(world);

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
