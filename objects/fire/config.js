function init(self, event, world) {
  // Override the sprite sheet used based on Tiled configuration
  self.sprite.loadTexture(`tq_fire_${self.spritesheet}`);

  // Start the idle animation loop
  self.playAnimation(`fire_idle`, true, { startWithRandomFrame: true });
}

function onPlayerDidInteract(self, event, world) {
  if (self.notExtinguishable) {
    return;
  }

  if (
    // Approximate match for uniqueness
    event.target.type === "fire" &&
    event.target.startX === self.startX &&
    event.target.startY === self.startY
  ) {
    const inventory = world.getContext("inventory");

    if (inventory.includes("fire_extinguisher")) {
      self.setState({
        hasInteracted: true,
      });
      world.useTool("fire_extinguisher");
    } else {
      world.showNotification(`
      <i>The flames are too intense to get any closer! You'll need the 
      <em>fire extinguisher</em> to clear the blaze.
      `);
    }
  }
}

function onPlayerUsedTool(self, event, world) {
  if (self.state.hasInteracted && event.toolId === "fire_extinguisher") {
    const { game, player } = world.__internals.level;
    let sprite, animation;

    if (player.sprite.directionFrame === player.directionFrames.UP) {
      sprite = game.add.sprite(
        player.sprite.x,
        player.sprite.y - 32,
        "tq_fire_extinguisher_updown"
      );
      animation = sprite.animations.add(
        "spray",
        [
          18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 26, 25, 24, 23, 22, 23, 24,
          25, 26, 27, 28, 29, 30, 31, 0,
        ],
        8
      );
    }

    if (player.sprite.directionFrame === player.directionFrames.DOWN) {
      sprite = game.add.sprite(
        player.sprite.x,
        player.sprite.y,
        "tq_fire_extinguisher_updown"
      );
      animation = sprite.animations.add(
        "spray",
        [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 6, 7, 8, 9, 10, 11, 12,
          13, 14, 15, 0,
        ],
        8
      );
    }

    if (player.sprite.directionFrame === player.directionFrames.LEFT) {
      sprite = game.add.sprite(
        player.sprite.x - 32,
        player.sprite.y,
        "tq_fire_extinguisher_rightleft"
      );
      animation = sprite.animations.add(
        "spray",
        [
          18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 26, 25, 24, 23, 22, 23, 24,
          25, 26, 27, 28, 29, 30, 31, 0,
        ],
        8
      );
    }

    if (player.sprite.directionFrame === player.directionFrames.RIGHT) {
      sprite = game.add.sprite(
        player.sprite.x,
        player.sprite.y,
        "tq_fire_extinguisher_rightleft"
      );
      animation = sprite.animations.add(
        "spray",
        [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 6, 7, 8, 9, 10, 11, 12,
          13, 14, 15, 0,
        ],
        8
      );
    }

    animation.onComplete.addOnce(() => {
      world.stopUsingTool();
    });
    sprite.animations.play("spray");
  }
}

function onPlayerStoppedUsingTool(self, event, world) {
  if (self.state.hasInteracted && event.toolId === "fire_extinguisher") {
    if (self.key) {
      world.destroyEntities(self.key);
    } else {
      world.destroyEntities(({ instance }) => instance === self);
    }
  }
}

// Base Object
const FIRE_OBJECT = {
  state: {
    hasInteracted: false,
    extinguisherSprite: null,
  },
  animations: {
    fire_idle: {
      frames: [0, 1, 2, 3, 4, 5],
      frameRate: 12,
      loop: true,
    },
  },
  spriteSheets: {
    tq_fire_red: {
      fileName: `spritesheets/red.png`,
      frameDimensions: {
        width: 24,
        height: 26,
      },
    },
    tq_fire_green: {
      fileName: `spritesheets/green.png`,
      frameDimensions: {
        width: 24,
        height: 26,
      },
    },
    tq_fire_purple: {
      fileName: `spritesheets/purple.png`,
      frameDimensions: {
        width: 24,
        height: 26,
      },
    },
    tq_fire_blue: {
      fileName: `spritesheets/blue.png`,
      frameDimensions: {
        width: 24,
        height: 26,
      },
    },
    tq_fire_extinguisher_updown: {
      fileName: "spritesheets/fire_extinguisher_updown.png",
      frameDimensions: {
        width: 32,
        height: 64,
      },
    },
    tq_fire_extinguisher_rightleft: {
      fileName: "spritesheets/fire_extinguisher_rightleft.png",
      frameDimensions: {
        width: 64,
        height: 32,
      },
    },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: "tq_fire_red",
      layers: [],
    },
  },
  events: {
    onLevelDidLoad: init,
    onMapDidLoad: init,
    onPlayerDidInteract,
    onPlayerUsedTool,
    onPlayerStoppedUsingTool,
  },
};

// Export full object configuration
module.exports = FIRE_OBJECT;
