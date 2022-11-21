module.exports = {
  animations: {
    idle: {
      frames: [0, 1, 2, 3, 4, 5],
      frameRate: 8,
    },
  },
  spriteSheets: {
    twilioquestSparkleLovelace: {
      fileName: "Animation_Sparkle_Lovelace.png",
      frameDimensions: {
        width: 24,
        height: 24,
      },
    },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: "twilioquestSparkleLovelace",
      layers: [],
    },
    idleAnimations: {
      animations: { idle: 100 },
      minIdleTime: 0,
      maxIdleTime: 0,
    },
  },
};
