function processBurnableBarrierEvents(event, world, worldState) {
  if (event.name === 'levelDidLoad') {
    const hacktoberFestState = world.getState('hacktoberfestWorldState');

    if (hacktoberFestState) {
      worldState.hacktoberfestFlameUnlocked = hacktoberFestState.flameUnlocked;
    }
  }

  if (event.name === 'playerDidInteract') {
    if (event.target.burnableBlocker) {
      if (!worldState.hacktoberfestFlameUnlocked) {
        // Player cannot burn barriers until the flame is unlocked
        world.showNotification(
          `I should check out <em>The Flame of Open Source</em> mission to help me burn through this brush.`
        );
        return;
      }

      // Only set state for  barriers which haven't been interacted with yet
      if (!worldState.barriersBurned[event.target.key]) {
        // track which barriers have been burned
        worldState.barriersBurned = {
          ...worldState.barriersBurned,
          [event.target.key]: {
            burnStarted: true,
            burnFinished: false,
          },
        };
      }
    }
  }

  if (event.name === 'timerDidTrigger' && event.type === 'burnFinished') {
    // if burnFinished timer event triggers, set burnState to finished
    worldState.barriersBurned[event.barrierKey] = {
      ...worldState.barriersBurned[event.barrierKey],
      burnFinished: true,
    };
  }
}

function renderBurnableBarrierState(world, worldState) {
  // hide all barriers that have been burned
  Object.entries(worldState.barriersBurned).forEach(
    ([barrierKey, { burnStarted, burnFinished }]) => {
      // hide all entities with burned barrier's key
      // world.hideEntities(barrierKey);
      // const burnableBarriers = level.entityService.getAll(
      //   ({ instance }) => instance.key === barrierKey
      // );

      if (burnStarted && !burnFinished) {
        // If a burn has started, but not finished, showAll corredponding flames
        world.showEntities(`flame_${barrierKey}`);
        world.scheduleTimerEvent(
          {
            type: 'burnFinished',
            barrierKey,
          },
          1000
        );
      }

      if (burnFinished) {
        // destroy all barriers that have finished burning
        // burnableBarriers.forEach(burnableBarrier => {
        //   burnableBarrier.interactionDisabled = true;
        //   burnableBarrier.hide();
        //   burnableBarrier.sprite.destroy();
        // });

        world.destroyEntities(barrierKey);
        world.hideEntities(`flame_${barrierKey}`);
      }
    }
  );
}

module.exports = {
  processBurnableBarrierEvents,
  renderBurnableBarrierState,
};
