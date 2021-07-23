function extendBridge(world, key) {
  world.showEntities(`${key}_tiles`);
  world.hideEntities(`${key}_blockers`);
}

function retractBridge(world, key) {
  world.hideEntities(`${key}_tiles`);
  world.showEntities(`${key}_blockers`);
}

function processBridgeEvents(event, worldState) {
  if (event.objective === 'js_north_bridge') {
    worldState.southWing.bridges.north = true;
    worldState.southWing.bridges.west = true;
  }

  if (event.objective === 'js_west_bridge') {
    worldState.southWing.bridges.east = true;
  }

  if (event.objective === 'js_south_bridge') {
    worldState.southWing.bridges.south = true;
  }

  if (event.objective === 'js_scientist_bridge') {
    worldState.southWing.bridges.scientist = true;
  }
}

function renderBridgeState(world, worldState) {
  if (worldState.southWing.bridges.north) {
    extendBridge(world, 'js_north_bridge');
  }

  if (worldState.southWing.bridges.west) {
    extendBridge(world, 'js_west_bridge');
  }

  if (worldState.southWing.bridges.east) {
    extendBridge(world, 'js_east_bridge');
  }

  if (worldState.southWing.bridges.south) {
    extendBridge(world, 'js_south_bridge');
  }

  if (worldState.southWing.bridges.scientist) {
    extendBridge(world, 'js_scientist_bridge');
  }
}

module.exports = {
  extendBridge,
  retractBridge,
  processBridgeEvents,
  renderBridgeState,
};
