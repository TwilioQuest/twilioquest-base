module.exports = {
  animations: {},
  properties: {
    sprite: {
      spriteSheet: "arrow",
      layers: [],
    },
  },
  spriteSheets: {
    arrow: {
      fileName: "./arrow.png",
      frameDimensions: {
        width: 32,
        height: 18,
      },
    },
    press_spacebar: {
      fileName: "./press_spacebar.png",
      type: "image",
    },
  },
  events: {
    onMapDidLoad: handleMapDidLoad,
    onPlayerDidInteract: handlePlayerInteraction,
  },
};

//#region Event Handlers
function handleMapDidLoad(self, event, world) {
  setupArrow(self);
  setupTextImage(self);
  // needed to also show/hide the text image attached to the arrow
  // whenever either method is called on the arrow object
  setupFunctionExtensions(self);
}

function handlePlayerInteraction(self, event, world) {
  // checking for whether the target of the player's interaction event is this object, to avoid
  // having the arrow hidden during any arbitrary player interaction
  if (event.target === self) {
    hide(self);
  }
}
//#endregion

//#region Functions
function setupArrow(self) {
  orientVertically(self, self.angle);
  applyHoverTween(self.game, self.sprite);
}

function orientVertically(self, angle = 270) {
  self.sprite.angle = angle;
  self.sprite.anchor.setTo(0, 0.5);
}

function setupTextImage(self) {
  self.textImage = self.game.add.sprite(
    self.sprite.x + 3,
    self.sprite.y - self.sprite.width,
    "press_spacebar"
  );
  self.textImage.anchor.setTo(0.5, 1);

  applyHoverTween(self.game, self.textImage);
}

function applyHoverTween(game, sprite) {
  const hoverAdjustment = 2;

  const tween = game.add.tween(sprite).to(
    {
      y: sprite.y + hoverAdjustment,
    },
    400, // time
    Phaser.Easing.Exponential.In,
    undefined,
    undefined,
    -1, // repeat infinitely
    true // yoyo)
  );

  tween.start();
}

// Extends both the "show" and "hide" methods on the SpriteObject class to also show/hide the text image
function setupFunctionExtensions(self) {
  extendMethod(self, "show", () => setTextImageVisibility(self, true));
  extendMethod(self, "hide", () => setTextImageVisibility(self, false));
}

/**
 * Extends the functionality of an object's method
 * @param {object} obj - A reference to the object that has the target method
 * @param {string} targetMethod - A string used to access the method belonging to the obj
 * @param {function} callback - The function which extends the functionality of the target method
 */
function extendMethod(obj, targetMethod, callback) {
  if (!obj) {
    console.warn(
      `Obj is missing, null, or undefined! Valid obj must be provided to extend a method belonging to it.`
    );
  }

  const selfFunc = obj[targetMethod];

  if (selfFunc) {
    obj[targetMethod] = () => {
      selfFunc.call(obj);
      callback(obj);
    };
  } else {
    console.warn(`No method [${targetMethod}] could be found on [${obj}]!`);
  }
}

function setTextImageVisibility(self, visibility) {
  if (self.textImage) {
    self.textImage.visible = visibility;
  }
}
//#endregion
