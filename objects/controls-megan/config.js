module.exports = {
  animations: {
    idle: {
      frames: [...Array(40).keys()],
      frameRate: 5
    }
  },
  spriteSheets: {
    controls_megan: {
      fileName: 'controls_megan.png',
      frameDimensions: {
        width: 72,
        height: 72,
      },
    },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: 'controls_megan',
      layers: [],
    },
  },
  events: {
    onMapDidLoad: (self, event, world) => {
      setTimeout(() => {
        self.playAnimation('idle', true);
      }, 250);
    },
    onPlayerDidInteract: (self, event, world) => {
      if (event.target.type === 'controls-megan') {
        world.startConversation('meganDefault', 'meganNeutral.png');
      }
    },
  }
};
