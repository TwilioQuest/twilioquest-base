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
  const lang = await world.getContext('lang') || 'en';
  const translations = await world.getContext('translations');

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
  world.showNotification(translations[lang]['fogOwl.tutorial.vrTraining']);
  await world.wait(6000);

  await world.tweenCameraToPlayer();
  world.showNotification(`
    <i>
      Time to get started!<br/><br/> I might want to say hi to Cedric and the crew as well.
    </i>
  `);
  world.enablePlayerMovement();

  worldState.hasSeenTutorial = true;
}

module.exports = handleTutorial;
