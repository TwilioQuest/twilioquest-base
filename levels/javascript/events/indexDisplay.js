const NUMBER_OF_DIGITS = 6;

function getDisplayTileIndex(displayTile) {
  const [, , displayTileValue] = displayTile.key.split('_');

  return parseInt(displayTileValue);
}

function displayIndexNumber(world, worldState) {
  world.hideEntities(({ instance }) => {
    if (instance.key && instance.key.includes('display_tiles')) {
      if (getDisplayTileIndex(instance) !== worldState.eastWing.indexCounter) {
        return true;
      }
    }

    return false;
  });

  world.showEntities(({ instance }) => {
    if (instance.key && instance.key.includes('display_tiles')) {
      if (getDisplayTileIndex(instance) === worldState.eastWing.indexCounter) {
        return true;
      }
    }

    return false;
  });
}

function incrementIndexNumber(worldState) {
  worldState.eastWing.indexCounter =
    (worldState.eastWing.indexCounter + 1) % NUMBER_OF_DIGITS;
}

function decrementIndexNumber(worldState) {
  worldState.eastWing.indexCounter =
    (NUMBER_OF_DIGITS + worldState.eastWing.indexCounter - 1) %
    NUMBER_OF_DIGITS;
}

module.exports = {
  displayIndexNumber,
  incrementIndexNumber,
  decrementIndexNumber,
};
