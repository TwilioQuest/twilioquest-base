module.exports = {
  animations: {
    idle: {
      frames: [...Array(18).keys()],
      frameRate: 6
    }
  },
  spriteSheets: {
    fo_vr_terminal: {
      fileName: 'spritesheet.png',
      frameDimensions: {
        width: 72,
        height: 48,
      },
    },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: 'fo_vr_terminal',
      layers: [],
    },
  },
  events: {
    onMapDidLoad: (self, event, world) => {
      self.playAnimation('idle', true);
    },
  }
};
