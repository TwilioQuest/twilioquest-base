function processNorthWingEvents(event, world, worldState) {
  if (event.objective === 'js_north_wing_2') {
    setTimeout(
      () =>
        // This is a temporary warp only, we will also need to track this in a
        // permanent state object in the shipped version
        world.setContext({
          currentLevel: {
            levelName: 'javascript',
            playerEntryPoint: 'player_entry1',
            levelMapName: 'north_wing_2',
          },
        }),
      1000
    );
  }

  if (event.objective === 'js_north_wing_3') {
    setTimeout(
      () =>
        // This is a temporary warp only, we will also need to track this in a
        // permanent state object in the shipped version
        world.setContext({
          currentLevel: {
            levelName: 'javascript',
            playerEntryPoint: 'player_entry1',
            levelMapName: 'north_wing_3',
          },
        }),
      1000
    );
  }

  if (event.objective === 'js_north_wing_4') {
    setTimeout(
      () =>
        // This is a temporary warp only, we will also need to track this in a
        // permanent state object in the shipped version
        world.setContext({
          currentLevel: {
            levelName: 'javascript',
            playerEntryPoint: 'player_entry1',
            levelMapName: 'north_wing_4',
          },
        }),
      1000
    );
  }

  if (event.objective === 'js_north_wing_scientist') {
    hideDoors('js_north_wing_scientist_door');
  }
}

module.exports = { processNorthWingEvents };
