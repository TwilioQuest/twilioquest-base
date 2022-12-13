module.exports = {
  animations: {
    idle: {
      frames: [0, 1, 2, 3, 4, 5, 6, 7],
      frameRate: 8,
    },
  },
  spriteSheets: {
    twilioquestWand: {
      fileName: "Item_MagicWand.png",
      frameDimensions: {
        width: 24,
        height: 24,
      },
    },
    twilioQuestSpellLeftRight: {
      fileName: "Operator_ToolEffects_LeftRight.png",
      frameDimensions: {
        width: 64,
        height: 32,
      },
    },
    twilioQuestSpellUpDown: {
      fileName: "Operator_ToolEffects_UpDown.png",
      frameDimensions: {
        width: 32,
        height: 64,
      },
    },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: "twilioquestWand",
      layers: [],
    },
    idleAnimations: {
      animations: { idle: 100 },
      minIdleTime: 0,
      maxIdleTime: 0,
    },
  },
};
