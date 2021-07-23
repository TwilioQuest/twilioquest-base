const got = require('got');

const PLAYER_TREE_KEY = 'tree_planters_players';
const PLANTER_TREE_KEY_PREFIX = 'tree_planters_row_';
const DEAD_PLANTER_TREE_KEY_PREFIX = 'tree_planters_dead_';
const MAX_ROW_INDEX = 17;

function showPlayerTree(world) {
  world.showEntities(PLAYER_TREE_KEY);
}

function hidePlayerTree(world) {
  world.hideEntities(PLAYER_TREE_KEY);
}

function showPlanterTreeRow(world, row) {
  for (let i = 0; i <= row; i++) {
    world.showEntities(PLANTER_TREE_KEY_PREFIX + i);
    world.hideEntities(DEAD_PLANTER_TREE_KEY_PREFIX + i);
  }

  for (let i = row + 1; i <= MAX_ROW_INDEX; i++) {
    world.hideEntities(PLANTER_TREE_KEY_PREFIX + i);
    world.showEntities(DEAD_PLANTER_TREE_KEY_PREFIX + i);
  }
}

async function getTreePlantedData() {
  const response = await got('https://twilio.com/quest/tracking/trees');
  const body = JSON.parse(response.body);

  return body;
}

function getRowIndexFromTreeData(treeData) {
  return Math.floor((treeData.current / treeData.max) * MAX_ROW_INDEX);
}

function processPlanterEvents(event, world, worldState) {
  if (event.name === 'levelDidLoad') {
    getTreePlantedData().then(treeData => {
      worldState.southWing.planters.treeData = treeData;

      const rowIndex = getRowIndexFromTreeData(treeData);
      showPlanterTreeRow(world, rowIndex);
    });
  }

  if (event.objective === 'js_plant_tree') {
    worldState.southWing.planters.playerPlanted = true;
  }
}

function renderPlanterState(world, worldState) {
  if (worldState.southWing.planters.playerPlanted) {
    showPlayerTree(world);
  } else {
    hidePlayerTree(world);
  }

  const rowIndex = getRowIndexFromTreeData(
    worldState.southWing.planters.treeData
  );
  showPlanterTreeRow(world, rowIndex);
}

module.exports = {
  processPlanterEvents,
  renderPlanterState,
};
