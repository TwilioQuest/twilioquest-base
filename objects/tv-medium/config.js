module.exports = {
  animations: {
    on: {
      frames: [0, 1, 2, 3, 4, 5, 6, 7],
      frameRate: 16,
    },
    off: {
      frames: [7, 6, 5, 4, 3, 2, 1, 0],
      frameRate: 16,
    },
  },
  spriteSheets: {
    tqTvMedium: {
      fileName: "TV_Medium.png",
      frameDimensions: {
        width: 48,
        height: 72,
      },
    },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: "tqTvMedium",
      layers: [],
    },
  },
};
