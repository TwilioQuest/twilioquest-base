module.exports = {
  animations: {
    idle: {
      frames: [0, 1, 2, 3, 4, 5],
      frameRate: 8,
    },
  },
  spriteSheets: {
    twilioquestSparkleNeumann: {
      fileName: "Animation_Sparkle_Neumann.png",
      frameDimensions: {
        width: 24,
        height: 24,
      },
    },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: "twilioquestSparkleNeumann",
      layers: [],
    },
    idleAnimations: {
      animations: { idle: 100 },
      minIdleTime: 0,
      maxIdleTime: 0,
    },
  },
};
