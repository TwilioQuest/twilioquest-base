module.exports = {
  animations: {
    idle: {
      frames: [0, 1, 2, 3],
      frameRate: 8,
    },
  },
  spriteSheets: {
    twilioquestServer: {
      fileName: "Server.png",
      frameDimensions: {
        width: 24,
        height: 48,
      },
    },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: "twilioquestServer",
      layers: [],
    },
    idleAnimations: {
      animations: { idle: 100 },
      minIdleTime: 0,
      maxIdleTime: 0,
    },
  },
};
