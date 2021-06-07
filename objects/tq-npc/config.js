function init(self, event, world) {
  // Override the sprite sheet used based on Tiled configuration
  self.sprite.loadTexture(`npc_${self.spritesheet}`);

  // Start the idle animation loop
  self.sprite.play(`${self.spritesheet}_idle`, 6, true);
}

function onPlayerDidInteract(self, event, world) {
  console.log(self);
}

// Export TQ object configuration
module.exports = {
  animations: {
    cedric_idle: {
      frames: [
        4, 5, 5, 6, 6, 6, 7, 4, // stretch

        17, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
        17, 16, 16, 16, 16, 16, 16,
        17, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, // blink

        0, 0, 1, 1, 2, 3, // sigh

        17, 16, 16, 16, 16, 16, 16,
        17, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
        17, 16, 16,
        17, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, // blink

        8, 8, 9, 9, 12, 12, 13, 13, // shuffle

        17, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
        17, 16, 16, 16, 16, 16, 16,
        17, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
        17, 16, 16, 16, 16, 16, 16, 16,
        17, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, // blink

        20, 20, 21, 21, 22, 22, 23, 23, // dance

        17, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
        17, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, // blink
      ],
      frameRate: 6
    },
    chiara_idle: {
      frames: [
        40, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39,
        40, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39,
        40, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39,
        40, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, // blink

        13, 14, 15, 16, 17, 18, // shift left

        40, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39,
        40, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39,
        40, 39, 39, 39, 39, 39, 39, 39,
        40, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, // blink

        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, // checking notes

        40, 39, 39, 39, 39, 39, 39, 39,
        40, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39,
        40, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39,
        40, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, // blink

        26, 27, 28, 29, 30, 31, // shift right

        40, 39, 39,
        40, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39,
        40, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39,
        40, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, // blink

        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, // checking notes
      ],
      frameRate: 6
    }
  },
  spriteSheets: {
    npc_cedric: {
      fileName: 'spritesheets/NPC_Cedric.png',
      frameDimensions: {
        width: 32,
        height: 32
      }
    },
    npc_chiara: {
      fileName: 'spritesheets/NPC_ChiaraMassironi.png',
      frameDimensions: {
        width: 32,
        height: 32
      }
    }
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: 'npc_cedric',
      layers: []
    }
  },
  events: {
    onLevelDidLoad: init,
    onMapDidLoad: init,
    onPlayerDidInteract,
  }
};
