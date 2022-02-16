module.exports = {
  animations: {
    idle: {
      frames: [0, 1, 2, 3],
      frameRate: 8,
    },
  },
  spriteSheets: {
    twilioquestCandleWall: {
      fileName: "Candle.png",
      frameDimensions: {
        width: 24,
        height: 24,
      },
    },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: "twilioquestCandleWall",
      layers: [],
    },
    idleAnimations: {
      animations: { idle: 100 },
      minIdleTime: 0,
      maxIdleTime: 0,
    },
  },
};
