const npcBuilder = require('./builder');

function init(self, event, world) {
  // Override the sprite sheet used based on Tiled configuration
  self.sprite.loadTexture(`npc_${self.spritesheet}`);

  // Start the idle animation loop
  self.playAnimation(`npc_${self.spritesheet}_idle`, true);
}

function onPlayerDidInteract(self, event, world) {
  // Check if the interaction event target was self
  if (event.target.spritesheet === self.spritesheet) {
    if (self.observation) {
      // The "observation" property can be set to have the Operator
      // make an observation about a character without kicking off a convo
      world.showNotification(self.observation);
    } else {
      // Conversation Pug file and avatar can be set manually by property - 
      // if this was not done, fall back to the spritesheet name
      const conversationName = self.conversation || self.spritesheet;
      const conversationAvatar = self.conversationAvatar || self.spritesheet;

      // Kick off conversation
      world.startConversation(conversationName, conversationAvatar);
    }
  }
}

// Base NPC object, to be decorated for each built-in NPC
const NPC_OBJECT = {
  animations: {},
  spriteSheets: {},
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

// Add all built-in NPC animations and spritesheets
npcBuilder(NPC_OBJECT);

// Export full object configuration
module.exports = NPC_OBJECT;
