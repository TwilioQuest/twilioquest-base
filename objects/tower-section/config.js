function init(self, event, world) {
  // Override the sprite sheet used based on Tiled configuration
  self.sprite.loadTexture(self.spritesheet || "twilioquestTowerSectionTop");
}

module.exports = {
  animations: {},
  spriteSheets: {
    twilioquestTowerSectionTop: {
      fileName: "tower-section-top.png",
      frameDimensions: {
        width: 192,
        height: 168,
      },
    },
    twilioquestTowerSectionMiddle: {
      fileName: "tower-section-middle.png",
      frameDimensions: {
        width: 192,
        height: 168,
      },
    },
    twilioquestTowerSectionMiddleOuterHighlight: {
      fileName: "tower-section-middle-outer-highlight.png",
      frameDimensions: {
        width: 192,
        height: 168,
      },
    },
    twilioquestTowerSectionMiddleCenterHighlight: {
      fileName: "tower-section-middle-center-highlight.png",
      frameDimensions: {
        width: 192,
        height: 168,
      },
    },
    twilioquestTowerSectionBottom: {
      fileName: "tower-section-bottom.png",
      frameDimensions: {
        width: 192,
        height: 168,
      },
    },
  },
  events: {
    onMapDidLoad: init,
    onLevelDidLoad: init,
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: "twilioquestTowerSectionTop",
      layers: [],
    },
  },
};
