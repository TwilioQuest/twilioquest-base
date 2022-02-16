module.exports = {
  animations: {
    idle: {
      frames: [0, 1, 2, 3],
      frameRate: 8,
    },
  },
  spriteSheets: {
    twilioquestFountain: {
      fileName: "Fountain.png",
      frameDimensions: {
        width: 48,
        height: 48,
      },
    },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: "twilioquestFountain",
      layers: [],
    },
    idleAnimations: {
      animations: { idle: 100 },
      minIdleTime: 0,
      maxIdleTime: 0,
    },
  },
};
