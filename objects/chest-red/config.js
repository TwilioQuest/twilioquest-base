const objectiveCompletionResponder = require("../objectiveCompletionResponder/config");

module.exports = {
  ...objectiveCompletionResponder,
  animations: {
    objectiveCompleted: {
      frames: [1],
      frameRate: 1,
    },
    objectiveCompleting: {
      frames: [0, 1],
      frameRate: 2,
    },
  },
  spriteSheets: {
    chestRed: {
      fileName: "chest-red.png",
      frameDimensions: {
        width: 24,
        height: 24,
      },
    },
  },
  properties: {
    sprite: {
      useGidAsDefaultFrameIndex: false,
      defaultFrameIndex: 0,
      spriteSheet: "chestRed",
      layers: [],
    },
  },
};
