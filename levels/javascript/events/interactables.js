function disableInteractables(filterFn, world) {
  world.hideEntities(({ instance }) => filterFn(instance));
}

function enableInteractables(filterFn, world) {
  world.showEntities(({ instance }) => filterFn(instance));
}

module.exports = {
  disableInteractables,
  enableInteractables,
};
