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
    twilioQuestStatueHopper: {
      fileName: "HouseStatues_Hopper.png",
      frameDimensions: {
        width: 24,
        height: 48,
      },
    },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: "twilioQuestStatueHopper",
      layers: [],
    },
  },
};
