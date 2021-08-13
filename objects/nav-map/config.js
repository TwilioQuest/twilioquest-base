module.exports = {
  animations: {},
  spriteSheets: {
    tq_nav_map: {
      fileName: "nav_map.png",
      frameDimensions: {
        width: 96,
        height: 48,
      },
    },
  },
  events: {
    onPlayerDidInteract: (self, event, world) => {
      if (self === event.target) {
        world.showOverlayComponent("navMap");
      }
    },
  },
  properties: {
    sprite: {
      useGidAsDefaultFrameIndex: false,
      defaultFrameIndex: 0,
      spriteSheet: "tq_nav_map",
      layers: [],
    },
  },
};
