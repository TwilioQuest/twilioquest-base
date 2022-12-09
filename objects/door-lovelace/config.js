const initOpenCloseFsm = require("../../scripts/initOpenCloseFsm");

module.exports = {
  state: {
    fsm: null,
  },
  spriteSheets: {
    twilioquestDoorLovelace: {
      fileName: "Door_Lovelace.png",
      frameDimensions: {
        width: 24,
        height: 48,
      },
    },
  },
  animations: {
    open: { frames: [4], frameRate: 1 },
    opening: {
      frames: [0, 1, 2, 3, 4],
      frameRate: 6,
    },
    closed: { frames: [0], frameRate: 1 },
    closing: {
      frames: [4, 3, 2, 1, 0],
      frameRate: 6,
    },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: "twilioquestDoorLovelace",
      layers: [],
    },
  },
  events: {
    onMapDidLoad: initOpenCloseFsm(),
  },
};
