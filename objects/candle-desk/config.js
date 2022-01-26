module.exports = {
  animations: {
    idle: {
      frames: [0, 1, 2, 3],
      frameRate: 8,
    },
  },
  spriteSheets: {
    twilioquestCandleDesk: {
      fileName: "Candle_desk.png",
      frameDimensions: {
        width: 24,
        height: 24,
      },
    },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: "twilioquestCandleDesk",
      layers: [],
    },
    idleAnimations: {
      animations: { idle: 100 },
      minIdleTime: 0,
      maxIdleTime: 0,
    },
  },
};
