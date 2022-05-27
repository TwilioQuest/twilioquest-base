module.exports = {
  spriteSheets: {
    twilioquestDoorTower: {
      fileName: "Door_Tower.png",
      frameDimensions: {
        width: 48,
        height: 72,
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
      spriteSheet: "twilioquestDoorTower",
      layers: [],
    },
  },
};
