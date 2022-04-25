module.exports = {
  animations: {
    idle: {
      frames: [0, 1],
      frameRate: 4,
    },
  },
  spriteSheets: {
    twilioQuestStatueNeumann: {
      fileName: "HouseStatues_Neumann.png",
      frameDimensions: {
        width: 24,
        height: 48,
      },
    },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: "twilioQuestStatueNeumann",
      layers: [],
    },
  },
};
