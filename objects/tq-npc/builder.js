const NPC_LIST = [
  'cedric', 'chiara', 'corey', 'craig', 'fredric_holo', 'fredric', 'kevin',
  'marcus', 'margaret', 'megan', 'mica', 'ryan' 
];

module.exports = (npcObject) => {
  NPC_LIST.forEach((npcName) => {
    // Add spritesheet
    npcObject.spriteSheets[`npc_${npcName}`] = {
      fileName: `spritesheets/${npcName}.png`,
      frameDimensions: {
        width: 32,
        height: 32
      }
    };

    // Configure animations
    const animations = require(`./animations/${npcName}`);
    npcObject.animations[`npc_${npcName}_idle`] = animations.idle || {
      frames: [0],
      frameRate: 0,
      loop: true
    };
  });
};
