const conversationOnInteract = require("../../scripts/conversationOnInteract");

module.exports = {
  animations: {},
  spriteSheets: {},
  properties: {
    sprite: {
      useGidAsDefaultFrameIndex: true,
      layers: [],
    },
  },
  
  events: {
    onPlayerDidInteract: conversationOnInteract,
  },
};
