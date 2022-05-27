const scrollSelfHorizontally = require("../../scripts/scrollSelfHorizontally");

module.exports = {
  animations: {},
  spriteSheets: {
    tqDevFundTowerClouds1: {
      fileName: "Clouds1.png",
      frameDimensions: {
        width: 528,
        height: 216,
      },
    },
  },
  events: {
    onMapDidLoad: (self, event, world) => {
      scrollSelfHorizontally(self, world, 5);
    },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: "tqDevFundTowerClouds1",
      layers: [],
    },
  },
};
