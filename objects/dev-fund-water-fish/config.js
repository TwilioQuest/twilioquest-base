module.exports = {
  animations: {
    idle: {
      frames: [288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299],
      frameRate: 8,
    },
  },
  spriteSheets: {},
  properties: {
    sprite: {
      defaultFrameIndex: 288,
      spriteSheet: "Tileset_Dev_Fundamentals_Exterior",
      layers: [],
    },
    idleAnimations: {
      animations: { idle: 100 },
      minIdleTime: 0,
      maxIdleTime: 0,
      shouldPickRandomInitialFrame: true,
    },
  },
};
