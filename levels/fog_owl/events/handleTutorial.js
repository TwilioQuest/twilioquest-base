/**
 * Handle scripting and interaction for the fog owl tutorial. 
 * 
 * @param {LifecycleEvent} event - lifecycle event emitted by TQ
 * @param {WorldAPI} world - TQ World API
 * @param {object} worldState - current game world state (mutate to change)
 */
async function handleTutorial(event, world, worldState) {
  if (worldState.hasSeenTutorial) {
    return;
  }

  await world.wait(1000);

  world.disablePlayerMovement();
  await world.tweenCameraToPosition({
    x: 528,
    y: 336,
  });
  world.showNotification(world.getTranslatedString('fog_owl.tutorial.navigation_system'));
  await world.wait(6000);

  await world.tweenCameraToPosition({
    x: 732,
    y: 610,
  });

  world.showNotification(world.getTranslatedString('fog_owl.tutorial.vr_training'));

  await world.wait(6000);
  await world.tweenCameraToPlayer();

  world.showNotification(world.getTranslatedString('fog_owl.tutorial.get_started'));

  world.enablePlayerMovement();

  worldState.hasSeenTutorial = true;
}

module.exports = handleTutorial;
