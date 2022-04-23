module.exports = {
  animations: {
    idle: {
      frames: [0, 1],
      frameRate: 4,
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
    idleAnimations: {
      animations: { idle: 100 },
      minIdleTime: 0,
      maxIdleTime: 0,
    },
  },
};
