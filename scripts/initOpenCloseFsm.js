const FSM = require("./FSM");

const initOpenCloseFsm =
  ({
    modifyPhysicsBodyWithStateChange = true,
    smoothTransitionBetweenOpeningAndClosing = true,
  } = {}) =>
  (self) => {
    const fsm = new FSM(
      {
        closed: {
          actions: {
            open: () => fsm.transition("opening"),
          },
          onEnter: () => {
            self.playAnimation("closed");

            if (modifyPhysicsBodyWithStateChange && self.sprite.body) {
              self.sprite.body.enable = true;
            }
          },
        },
        closing: {
          actions: {
            open: () => fsm.transition("opening"),
            complete: () => fsm.transition("closed"),
          },
          onEnter: () => {
            const closingAnimation =
              self.sprite.animations.getAnimation("closing");

            const startingFrame = smoothTransitionBetweenOpeningAndClosing
              ? closingAnimation.frameTotal - self.sprite.frame
              : undefined;

            self
              .playAnimation("closing", false, { startingFrame })
              .then(() => fsm.action("complete"));
          },
        },
        open: {
          actions: {
            close: () => fsm.transition("closing"),
          },
          onEnter: () => {
            self.playAnimation("open");

            if (modifyPhysicsBodyWithStateChange && self.sprite.body) {
              self.sprite.body.enable = false;
            }
          },
        },
        opening: {
          actions: {
            close: () => fsm.transition("closing"),
            complete: () => fsm.transition("open"),
          },
          onEnter: () => {
            const startingFrame = smoothTransitionBetweenOpeningAndClosing
              ? self.sprite.frame
              : undefined;

            self
              .playAnimation("opening", false, { startingFrame })
              .then(() => fsm.action("complete"));
          },
        },
      },
      self.initialState ?  self.initialState : "closed"
    );

    self.setState({ fsm });
  };

module.exports = initOpenCloseFsm;
