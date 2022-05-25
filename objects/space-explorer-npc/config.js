const conversationOnInteract = require("../../scripts/conversationOnInteract");

module.exports = {
  animations: {
    idle: {
      frames: [0, 1, 2, 3],
      frameRate: 4,
    },
  },
  spriteSheets: {
    twilioQuestSpaceExplorer: {
      fileName: "SpaceExplorer.png",
      frameDimensions: {
        width: 32,
        height: 32,
      },
    },
  },
  events: {
    onPlayerDidInteract: conversationOnInteract,
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: "twilioQuestSpaceExplorer",
      layers: [],
    },
    idleAnimations: {
      animations: { idle: 200 },
      minIdleTime: 3000,
      maxIdleTime: 5000,
    },
  },
};
