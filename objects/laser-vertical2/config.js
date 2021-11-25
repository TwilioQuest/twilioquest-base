const createLaserConfig = require("../../scripts/createLaserConfig");

module.exports = createLaserConfig(
  "laserVertical2",
  "LaserBlockade-vertical2.png",
  {
    width: 24,
    height: 72,
  },
  function renderObjectiveCompleted(self) {
    if (self.sprite.body) {
      const findObjectWithKey = (objectgroup, key) => {
        return objectgroup.objects.find((object) =>
          object.properties.some(
            (property) => property.name === "key" && property.value === key
          )
        );
      };

      const objectCompletedBody = findObjectWithKey(
        self.objectgroup,
        "objectiveCompleted"
      );

      if (!objectCompletedBody) {
        console.error(
          `Vertical Laser barrier is missing object completed body.`,
          self
        );
        return;
      }

      self.sprite.body.setSize(
        objectCompletedBody.width,
        objectCompletedBody.height,
        objectCompletedBody.x,
        objectCompletedBody.y
      );
    }
  }
);
