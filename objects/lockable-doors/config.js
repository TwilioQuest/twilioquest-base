const initOpenCloseFsm = require("../../scripts/initOpenCloseFsm");

module.exports = {
  state: {
    fsm: null,
  },
  animations: {
    closed: {
      frames: [0],
      frameRate: 1,
    },
    closing: {
      frames: [8, 9, 10, 11, 12, 13, 14, 15],
      frameRate: 16,
    },
    open: {
      frames: [15],
      frameRate: 1,
    },
    opening: {
      frames: [15, 14, 13, 12, 11, 10, 9, 8],
      frameRate: 16,
    },
  },
  spriteSheets: {
    tq_lockable_doors: {
      fileName: `DoubleDoors_Lockable.png`,
      frameDimensions: {
        width: 48,
        height: 48,
      },
    },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: "tq_lockable_doors",
      layers: [],
    },
  },
  events: {
    onMapDidLoad: initOpenCloseFsm(),
  },
};
