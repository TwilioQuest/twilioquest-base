const {
  disableInteractables,
  enableInteractables,
} = require('./interactables');

function isRoomGate(interactable) {
  if (interactable.key && interactable.key.includes(`room_gate`)) {
    return true;
  }

  return false;
}

function isCurrentDoor(interactable, worldState) {
  if (!isRoomGate(interactable)) {
    return false;
  }

  const [, , doorTileValue] = interactable.key.split('_');

  if (parseInt(doorTileValue) === worldState.eastWing.indexCounter) {
    return true;
  }

  return false;
}

function updateDoorState(world, worldState) {
  disableInteractables(
    interactable => isCurrentDoor(interactable, worldState),
    world
  );
  enableInteractables(
    interactable =>
      isRoomGate(interactable) && !isCurrentDoor(interactable, worldState),
    world
  );
}

function hideDoors(key, world) {
  disableInteractables(interactable => interactable.key === key, world);
}

module.exports = {
  updateDoorState,
  hideDoors,
};
