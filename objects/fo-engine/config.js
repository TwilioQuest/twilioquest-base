module.exports = {
  animations: {
    idle: {
      frames: [...Array(18).keys()],
      frameRate: 6
    }
  },
  spriteSheets: {
    fo_engine: {
      fileName: 'engine.png',
      frameDimensions: {
        width: 48,
        height: 96,
      },
    },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: 'fo_engine',
      layers: [],
    },
  },
  events: {
    onMapDidLoad: (self, event, world) => {
      self.playAnimation('idle', true);
    },
  }
};
