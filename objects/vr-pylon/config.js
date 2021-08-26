module.exports = {
  animations: {
    idle: {
      frames: [...Array(4).keys()],
      frameRate: 6
    }
  },
  spriteSheets: {
    fo_vr_pylon: {
      fileName: 'spritesheet.png',
      frameDimensions: {
        width: 24,
        height: 48,
      },
    },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: 'fo_vr_pylon',
      layers: [],
    },
  },
  events: {
    onMapDidLoad: (self, event, world) => {
      self.playAnimation('idle', true);
    },
  }
};
