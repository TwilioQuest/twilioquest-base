function onObjectiveCompleted(self, event, world) {
  if (event.objective === self.objectiveName) {
    self.setState({
      isOpening: true,
    });
  }
}

module.exports = {
  animations: {
    open: {
      frames: [1],
      frameRate: 1,
    },
    opening: {
      frames: [0, 1],
      frameRate: 2,
    },
  },
  spriteSheets: {
    autumnChest: {
      fileName: "AutumnChest.png",
      frameDimensions: {
        width: 24,
        height: 24,
      },
    },
  },
  properties: {
    sprite: {
      useGidAsDefaultFrameIndex: false,
      defaultFrameIndex: 0,
      spriteSheet: "autumnChest",
      layers: [],
    },
  },
  events: {
    onLevelDidLoad: function (self, event, world) {
      self.setState({ isOpen: world.isObjectiveCompleted(self.objectiveName) });
    },
    onObjectiveCompleted,
    onObjectiveCompletedAgain: onObjectiveCompleted,
  },
  state: {
    isOpening: false,
    isOpen: false,
  },
  render: function (self, world) {
    if (self.state.isOpening) {
      self
        .playAnimation("opening")
        .then(() => self.setState({ isOpening: false, isOpen: true }));
    } else if (self.state.isOpen) {
      self.playAnimation("open");
    }
  },
};
