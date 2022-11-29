module.exports = {
  animations: {
    idle: {
      frames: [0, 1],
      frameRate: 8,
    },
  },
  spriteSheets: {
    twilioquestShine: {
      fileName: "Animation_Shine.png",
      frameDimensions: {
        width: 24,
        height: 24,
      },
    },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: "twilioquestShine",
      layers: [],
    },
    idleAnimations: {
      animations: { idle: 100 },
      minIdleTime: 0,
      maxIdleTime: 0,
    },
  },
};
