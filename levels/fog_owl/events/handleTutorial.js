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
  world.showNotification(`
    <i>
      So this is the Fog Owl!<br/><br/>That platform looks like the <em>navigation 
      system</em> - I should be able to use it to travel to different parts of
      The Cloud.
    </i>
  `);
  await world.wait(6000);

  await world.tweenCameraToPosition({
    x: 732,
    y: 610,
  });

  const vrTrainingNotification = world.getTranslatedString('fogOwl.tutorial.vrTraining');
  world.showNotification(vrTrainingNotification);

  await world.wait(6000);
  await world.tweenCameraToPlayer();

  const timeToStartNotification = world.getTranslatedString('fogOwl.tutorial.timeToStart');
  world.showNotification(timeToStartNotification);

  world.enablePlayerMovement();

  worldState.hasSeenTutorial = true;
}

module.exports = handleTutorial;
