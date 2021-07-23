function hideTransitionArea(world, key) {
  world.disableTransitionAreas(key);

  console.log(`Hiding ${key}`);
}

function showTransitionArea(world, key) {
  world.enableTransitionAreas(key);

  console.log(`Showing ${key}`);
}

module.exports = {
  hideTransitionArea,
  showTransitionArea,
};
