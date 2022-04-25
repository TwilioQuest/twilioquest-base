module.exports = {
  animations: {
    idle: {
      frames: [0, 1],
      frameRate: 4,
    },
  },
  spriteSheets: {
    twilioQuestStatueLovelace: {
      fileName: "HouseStatues_Lovelace.png",
      frameDimensions: {
        width: 24,
        height: 48,
      },
    },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: "twilioQuestStatueLovelace",
      layers: [],
    },
  },
};
