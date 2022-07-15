const conversationOnInteract = require("../../scripts/conversationOnInteract");

module.exports = {
  animations: {
    idle: {
      frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      frameRate: 4,
    },
    sleep: {
      frames: [12, 13, 14, 15, 16, 17, 12],
      frameRate: 4,
    },
  },
  spriteSheets: {
    twilioQuestLibrarianNpc: {
      fileName: "NPC_Librarian.png",
      frameDimensions: {
        width: 72,
        height: 96,
      },
    },
  },
  events: {
    onPlayerDidInteract: conversationOnInteract,
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: "twilioQuestLibrarianNpc",
      layers: [],
    },
    idleAnimations: {
      animations: { idle: 35, sleep: 65 },
      minIdleTime: 1500,
      maxIdleTime: 3000,
    },
  },
};
