module.exports = function (event, world) {
  // Render, check if all objectives are completed
  // If so, open the door.

  world.showEntities(`doorFrame_unlocked`);
  world.hideEntities(`doorFrame_locked`);
  world.hideEntities(`door`);

  updateQuestLogWhenComplete({
    notification:
      'I\'ve completed everything in the <span class="highlight">JavaScript Test Lab</span> for now!',
    log: "I've completed everything in the JavaScript Test Lab for now!",
    event,
    world,
    worldStateKey: WORLD_STATE_KEY,
    version: packageInfo.version,
  });
};
