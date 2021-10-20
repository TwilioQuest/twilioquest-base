const initOpenCloseFsm = require("../../scripts/initOpenCloseFsm");

function isOpenCloseKey(self, event) {
  return self.openCloseAreaKey === event.target.key;
}

function isWarpExitKey(self, event) {
  return self.warpExitAreaKey === event.target.key;
}

function onTriggerAreaWasEntered(self, event, world) {
  if (isWarpExitKey(self, event)) {
    world.disablePlayerMovement();
    world.showOverlayComponent({
      key: "fogOwlFlying",
      props: {
        fadeIn: true,
      },
    });
    world.warp("fog_owl");
    return;
  }

  if (isOpenCloseKey(self, event)) {
    if (
      self.state && self.state.fsm && self.state.fsm.action
    ) {
      self.state.fsm.action("open");
      return;
    }
  }
}

function onTriggerAreaWasExited(self, event) {
  if (isOpenCloseKey(self, event)) {
    self.state.fsm.action("close");
    return;
  }
}

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
    tq_fog_owl_ship_entrance: {
      fileName: `FogOwlShip_Entrance.png`,
      frameDimensions: {
        width: 48,
        height: 72,
      },
    },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: "tq_fog_owl_ship_entrance",
      layers: [],
    },
  },
  events: {
    onMapDidLoad: initOpenCloseFsm(),
    onTriggerAreaWasEntered,
    onTriggerAreaWasExited,
  },
};
