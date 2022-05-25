module.exports = {
  animations: {
    idle: {
      frames: [0, 1, 2, 3],
      frameRate: 8,
    },
  },
  spriteSheets: {
    twilioquestCloudTowerLeft: {
      fileName: "Cloud_Tower_Left.png",
      frameDimensions: {
        width: 120,
        height: 72,
      },
    },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: "twilioquestCloudTowerLeft",
      layers: [],
    },
    idleAnimations: {
      animations: { idle: 200 },
      minIdleTime: 0,
      maxIdleTime: 0,
    },
  },
};
