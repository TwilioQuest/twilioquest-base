module.exports = {
  animations: {
    idle: {
      frames: [196, 197, 198, 199],
      frameRate: 2,
    },
  },
  spriteSheets: {},
  properties: {
    sprite: {
      defaultFrameIndex: 196,
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
