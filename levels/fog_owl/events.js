const handleTutorial = require('./events/handleTutorial');

const STATE_KEY = 'com.twilioquest.fog_owl';

module.exports = function(event, world) {
  const worldState = world.getState(STATE_KEY) || {};
  
  // Handle first run experience aboard Fog Owl
  handleTutorial(event, world, worldState);

  world.setState(STATE_KEY, worldState);
};
