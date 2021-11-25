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
      frames: [7, 6, 5, 4, 3, 2, 1, 0],
      frameRate: 16,
    },
    open: {
      frames: [7],
      frameRate: 1,
    },
    opening: {
      frames: [0, 1, 2, 3, 4, 5, 6, 7],
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
