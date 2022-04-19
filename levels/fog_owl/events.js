const handleTutorial = require("./events/handleTutorial");
const { STATE_KEY, NAV_MAP_ARROW_KEY } = require("./events/config");

module.exports = function (event, world) {
  const worldState = world.getState(STATE_KEY) || {};

  // Handle first run experience aboard Fog Owl
  handleTutorial(event, world, worldState);

  if (event.name === "playerDidInteract" && event.target.type === "nav-map") {
    worldState.showNavMapArrow = false;
  }

  if (worldState.showNavMapArrow) {
    world.showEntities(NAV_MAP_ARROW_KEY);
  } else {
    world.hideEntities(NAV_MAP_ARROW_KEY);
  }

  world.setState(STATE_KEY, worldState);
};
