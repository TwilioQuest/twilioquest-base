const conversationOnInteract = require("../../scripts/conversationOnInteract");

module.exports = {
  animations: {
    idle: {
      frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      frameRate: 4,
    },
  },
  spriteSheets: {
    twilioQuestLibrarianNpcMonitor: {
      fileName: "NPC_Librarian_Monitor.png",
      frameDimensions: {
        width: 72,
        height: 48,
      },
    },
  },
  events: {
    onPlayerDidInteract: conversationOnInteract,
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: "twilioQuestLibrarianNpcMonitor",
      layers: [],
    },
    idleAnimations: {
      animations: { idle: 100 },
      minIdleTime: 3000,
      maxIdleTime: 5000,
    },
  },
};
