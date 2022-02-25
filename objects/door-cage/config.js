module.exports = {
  spriteSheets: {
    twilioquestCageDoor: {
      fileName: "CageDoor.png",
      frameDimensions: {
        width: 24,
        height: 48,
      },
    },
  },
  animations: {
    open: {
      frames: [0, 1, 2, 3, 4],
      frameRate: 6,
    },
    close: {
      frames: [5, 6, 7, 8, 9],
      frameRate: 6,
    },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: "twilioquestCageDoor",
      layers: [],
    },
  },
};
