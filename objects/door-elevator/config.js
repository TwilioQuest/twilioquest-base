const initOpenCloseFsm = require("../../scripts/initOpenCloseFsm");

module.exports = {
  state: {
    fsm: null,
  },
  spriteSheets: {
    twilioquestElevatorDoor: {
      fileName: "Door_Elevator.png",
      frameDimensions: {
        width: 72,
        height: 72,
      },
    },
  },
  animations: {
    open: { frames: [4], frameRate: 1 },
    opening: {
      frames: [0, 1, 2, 3, 4],
      frameRate: 6,
    },
    closed: { frames: [9], frameRate: 1 },
    closing: {
      frames: [5, 6, 7, 8, 9],
      frameRate: 6,
    },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: "twilioquestElevatorDoor",
      layers: [],
    },
  },
  events: {
    onMapDidLoad: initOpenCloseFsm({
      smoothTransitionBetweenOpeningAndClosing: false,
    }),
  },
};
