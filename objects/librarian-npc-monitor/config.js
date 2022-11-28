const conversationOnInteract = require("../../scripts/conversationOnInteract");

module.exports = {
  animations: {
    sleep: {
      frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
      frameRate: 4,
    },
    wakeUp: {
      frames: [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
      frameRate: 4,
    },
    idle: {
      frames: [36, 37, 38, 39, 40, 41],
      frameRate: 4,
    },
    shocked: {
      frames: [54, 55, 56, 57, 58, 59, 60],
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
