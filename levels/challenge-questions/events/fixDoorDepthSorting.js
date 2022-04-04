function fixDoorWallDepthSorting(event, world) {
  if (event.name === "mapDidLoad") {
    // Use the depth sorting hack from the Open Source
    // extension to ensure these wall tiles always render
    // above the player. They also will render below the
    // overlapping doorFrame objects.
    world.forEachEntities(
      "doorWallBackingTop",
      (wall) => (wall.sprite.body.height = wall.sprite.body.height * 2)
    );
    world.forEachEntities(
      "doorFrame_locked",
      (wall) => (wall.sprite.body.height = wall.sprite.body.height * 3)
    );
    world.forEachEntities(
      "doorFrame_unlocked",
      (wall) => (wall.sprite.body.height = wall.sprite.body.height * 3)
    );
    world.forEachEntities(
      "doorFrameTop",
      (wall) => (wall.sprite.body.height = wall.sprite.body.height * 2.1)
    );
  }
}

module.exports = fixDoorWallDepthSorting;
