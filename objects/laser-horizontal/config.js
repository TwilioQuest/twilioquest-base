const createLaserConfig = require("../../scripts/createLaserConfig");

module.exports = createLaserConfig(
  "laserHorizontal",
  "LaserBlockade_horizontal.png",
  {
    width: 72,
    height: 48,
  },
  function renderObjectiveCompleted(self) {
    if (self.sprite.body) {
      self.sprite.body.enable = false;
    }
  }
);
