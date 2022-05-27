const scrollSelfHorizontally = require("../../scripts/scrollSelfHorizontally");

module.exports = {
  animations: {},
  spriteSheets: {
    tqDevFundTowerClouds2: {
      fileName: "Clouds2.png",
      frameDimensions: {
        width: 528,
        height: 216,
      },
    },
  },
  events: {
    onMapDidLoad: (self, event, world) => {
      scrollSelfHorizontally(self, world, 2);
    },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: "tqDevFundTowerClouds2",
      layers: [],
    },
  },
};
