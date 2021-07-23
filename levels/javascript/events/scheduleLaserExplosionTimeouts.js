module.exports = function scheduleLaserExplosionTimeouts(world) {
  world.showEntities('yourLaser');

  setTimeout(() => {
    world.screenShake(6);
    world.showEntities('laser_flames_1');
  }, 1000);
  setTimeout(() => {
    world.screenShake(3);
    world.showEntities('laser_flames_2');
  }, 2000);
  setTimeout(() => {
    world.screenShake(5);
    world.showEntities('laser_flames_3');
  }, 2750);

  setTimeout(
    () =>
      // This is a temporary warp only, we will also need to track this in a
      // permanent state object in the shipped version
      world.setContext({
        currentLevel: {
          levelName: 'javascript',
          playerEntryPoint: 'player_entry2',
          levelMapName: 'room1-split',
        },
      }),
    3750
  );
};
