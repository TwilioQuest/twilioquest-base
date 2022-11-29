module.exports = {
  animations: {
    idle: {
      frames: [4, 5, 6, 7, 0, 1, 2, 3],
      frameRate: 8,
    },
  },
  spriteSheets: {
    twilioquestOrbPurple: {
      fileName: "Orb_Purple.png",
      frameDimensions: {
        width: 24,
        height: 24,
      },
    },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: "twilioquestOrbPurple",
      layers: [],
    },
    idleAnimations: {
      animations: { idle: 100 },
      minIdleTime: 0,
      maxIdleTime: 0,
    },
  },
};
