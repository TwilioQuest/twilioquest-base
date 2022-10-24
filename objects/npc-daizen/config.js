const conversationOnInteract = require("../../scripts/conversationOnInteract");

module.exports = {
  animations: {
    idle: {
      frames: [
        0, 1, 2, 3, 3, 3,       // take breath
        0, 0, 0, 0, 0, 0,       // stand
        18, 19, 0, 0, 0, 0,     // stand and blink
        6, 7, 8, 8, 8, 8,       // shift right and stand
        8, 8, 8, 8, 8, 8,       // stand while right shifted
        8, 8, 8, 8, 8, 8,       // stand while right shifted
        9, 10, 11, 18, 19, 0,   // shift back, blink, and stand
        0, 0, 0, 0, 0, 0,       // stand
        0, 0, 0, 18, 19, 0,     // stand and blink
        0, 0, 0, 0, 0, 0,       // stand
        0, 0, 0, 0, 0, 0,       // stand
        12, 13, 14, 14, 14,     // shift left and stand
        14, 14, 14, 14, 14,     // stand while left shifted
        14, 14, 14, 14, 14,     // stand while left shifted
        15, 16, 17, 18, 19, 0,  // shift back, blink, and stand
      ],
      frameRate: 6,
    },
  },
  spriteSheets: {
    NPC_Daizen: {
      fileName: "NPC_Daizen.png",
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
      spriteSheet: "NPC_Daizen",
      layers: [],
    },
    idleAnimations: {
      animations: {
        idle: 100,
      },
      minIdleTime: 2000,
      maxIdleTime: 5000,
    },
  },
};
