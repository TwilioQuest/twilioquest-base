module.exports = {
  animations: {
    idle: {
      frames: [...Array(40).keys()],
      frameRate: 4
    }
  },
  spriteSheets: {
    controls_corey: {
      fileName: 'controls_corey.png',
      frameDimensions: {
        width: 72,
        height: 72,
      },
    },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: 'controls_corey',
      layers: [],
    },
  },
  events: {
    onMapDidLoad: (self, event, world) => {
      self.playAnimation('idle', true);
    },
    onPlayerDidInteract: (self, event, world) => {
      if (event.target.type === 'controls-corey') {
        world.startConversation('coreyDefault', 'coreyNeutral.png');
      }
    },
  }
};
