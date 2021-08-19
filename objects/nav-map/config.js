module.exports = {
  animations: {
    idle: {
      frames: [...Array(14).keys()],
      frameRate: 4
    }
  },
  spriteSheets: {
    tq_nav_map: {
      fileName: "nav_map_sprites.png",
      frameDimensions: {
        width: 96,
        height: 48,
      },
    },
  },
  events: {
    onMapDidLoad: (self, event, world) => {
      setTimeout(() => {
        self.playAnimation('idle', true);
      }, 250);
    },
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
