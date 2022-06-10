const DIRECTION_LEFT_TO_RIGHT = "DIRECTION_LEFT_TO_RIGHT";
const DIRECTION_RIGHT_TO_LEFT = "DIRECTION_RIGHT_TO_LEFT";

module.exports = function scrollSelfHorizontally(self, world, speed) {
  const { widthInPixels } = world.__internals.level.map;

  const scrollDirection =
    speed > 0 ? DIRECTION_LEFT_TO_RIGHT : DIRECTION_RIGHT_TO_LEFT;
  self.sprite.body.velocity.x += speed;

  self.sprite.update = () => {
    const { body } = self.sprite;

    const leftEdge = body.x;
    if (
      scrollDirection === DIRECTION_LEFT_TO_RIGHT &&
      leftEdge > widthInPixels
    ) {
      body.x = -body.width;
    }

    const rightEdge = body.x + body.width;
    if (scrollDirection === DIRECTION_RIGHT_TO_LEFT && rightEdge < 0) {
      body.x = widthInPixels;
    }
  };
};
