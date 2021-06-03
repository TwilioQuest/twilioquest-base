const createObjectiveCompletionResponderConfig = require("./objectiveCompletionResponder");

function createLaserConfig(
  laserKey,
  tilesheet,
  { width, height },
  renderObjectiveCompleted
) {
  return {
    ...createObjectiveCompletionResponderConfig({
      renderObjectiveCompleted,
    }),
    animations: {
      objectiveNotCompleted: {
        frames: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
        frameRate: 10,
      },
      objectiveCompleting: {
        frames: [20, 21, 22, 23, 24, 25, 26, 27],
        frameRate: 8,
      },
      objectiveCompleted: {
        frames: [27],
        frameRate: 1,
      },
      spawn: {
        frames: [0, 1, 2, 3, 4, 5, 6, 7],
        frameRate: 8,
      },
    },
    spriteSheets: {
      [laserKey]: {
        fileName: tilesheet,
        frameDimensions: {
          width,
          height,
        },
      },
    },
    properties: {
      sprite: {
        useGidAsDefaultFrameIndex: false,
        defaultFrameIndex: 0,
        spriteSheet: laserKey,
        layers: [],
      },
    },
  };
}

module.exports = createLaserConfig;
