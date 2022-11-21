module.exports = {
  animations: {
    idle: {
      frames: [0, 1, 2, 3, 4, 5],
      frameRate: 8,
    },
  },
  spriteSheets: {
    twilioquestSparkleTuring: {
      fileName: "Animation_Sparkle_Turing.png",
      frameDimensions: {
        width: 24,
        height: 24,
      },
    },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: "twilioquestSparkleTuring",
      layers: [],
    },
    idleAnimations: {
      animations: { idle: 100 },
      minIdleTime: 0,
      maxIdleTime: 0,
    },
  },
};
