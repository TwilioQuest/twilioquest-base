const createObjectiveCompletionResponderConfig = require("../../scripts/objectiveCompletionResponder");

module.exports = {
  ...createObjectiveCompletionResponderConfig({
    renderObjectiveCompleted(self) {
      console.log(self, self.sprite, self.sprite.body, self.sprite.body.enable);
      if (self.sprite.body) {
        self.sprite.body.enable = false;
      }
    },
  }),
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
    laserVertical: {
      fileName: "LaserBlockade_vertical.png",
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
      spriteSheet: "laserVertical",
      layers: [],
    },
  },
};
