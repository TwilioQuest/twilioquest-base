module.exports = {
  animations: {
    small: {
      frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      frameRate: 4
    },
    grid: {
      frames: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
      frameRate: 1
    },
    ship: {
      frames: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35],
      frameRate: 2
    },
  },
  spriteSheets: {
    fo_computers: {
      fileName: 'fo_computers.png',
      frameDimensions: {
        width: 48,
        height: 72,
      },
    },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: 'fo_computers',
      layers: [],
    },
  },
  events: {
    onMapDidLoad: (self, event, world) => {
      self.playAnimation(self.computer_type, true);
    },
  }
};
