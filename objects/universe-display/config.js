module.exports = {
  animations: {
    idle: {
      frames: [...Array(16).keys()],
      frameRate: 3
    }
  },
  spriteSheets: {
    universe_display: {
      fileName: 'universe_display.png',
      frameDimensions: {
        width: 48,
        height: 48,
      },
    },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: 'universe_display',
      layers: [],
    },
  },
  events: {
    onMapDidLoad: (self, event, world) => {
      setTimeout(() => {
        self.playAnimation('idle', true);
      }, 250);
    },
  }
};
