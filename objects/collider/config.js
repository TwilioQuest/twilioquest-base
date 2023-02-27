module.exports = {
  animations: {},
  spriteSheets: {},
  properties: {
    sprite: {
      useGidAsDefaultFrameIndex: true,
      layers: [],
    },
  },
  events: {
    onMapDidLoad: handleMapDidLoad,
  },
};

function handleMapDidLoad(self, event, world) {
  // legacy entity would make the collider invisible during construction,
  // so we're mirroring that behavior here to avoid having pink collider
  // objects from showing up in the game world
  self.sprite.alpha = 0;
}
