const createObjectiveCompletionResponderConfig = require("../../scripts/objectiveCompletionResponder");

module.exports = {
  ...createObjectiveCompletionResponderConfig(),
  animations: {
    objectiveNotCompleted: {
      frames: [0],
      frameRate: 1,
    },
    objectiveCompleting: {
      frames: [0, 1],
      frameRate: 2,
    },
    objectiveCompleted: {
      frames: [1],
      frameRate: 1,
    },
  },
  spriteSheets: {
    terminal: {
      fileName: "terminal.png",
      frameDimensions: {
        width: 24,
        height: 72,
      },
    },
  },
  properties: {
    sprite: {
      useGidAsDefaultFrameIndex: false,
      defaultFrameIndex: 0,
      spriteSheet: "terminal",
      layers: [],
    },
  },
};
