const createObjectiveCompletionResponderConfig = require("../../scripts/objectiveCompletionResponder");

module.exports = {
  ...createObjectiveCompletionResponderConfig({
    renderObjectiveCompleted: (self) => {
      console.log(
        "render objective completed",
        self,
        self.sprite,
        self.sprite.body,
        self.sprite.body.enable
      );
      if (self.sprite.body) {
        self.sprite.body.enable = false;
      }
    },
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
    laserHorizontal: {
      fileName: "LaserBlockade_horizontal.png",
      frameDimensions: {
        width: 72,
        height: 48,
      },
    },
  },
  properties: {
    sprite: {
      useGidAsDefaultFrameIndex: false,
      defaultFrameIndex: 0,
      spriteSheet: "laserHorizontal",
      layers: [],
    },
  },
};
