module.exports = function scrollSelfHorizontally(self, world, speed) {
  const { widthInPixels } = world.__internals.level.map;

  self.sprite.body.velocity.x += speed;

  self.sprite.update = () => {
    const { body } = self.sprite;

    const leftEdge = body.x;
    const rightEdge = body.x + body.width;

    if (leftEdge > widthInPixels) {
      body.x = -body.width;
    } else if (rightEdge < 0) {
      body.x = widthInPixels;
    }
  };
};
