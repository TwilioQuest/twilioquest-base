const FSM = require("./FSM");

const initOpenCloseFsm =
  ({ modifyPhysicsBodyWithStateChange = true } = {}) =>
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
            // TODO: If we came from opening, we should start the closing anim
            // not all the way at the beginning
            self.playAnimation("closing").then(() => fsm.action("complete"));
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
            // TODO: If we came from closing, we should start the opening anim
            // not all the way at the beginning
            self.playAnimation("opening").then(() => fsm.action("complete"));
          },
        },
      },
      "closed"
    );

    self.setState({ fsm });
  };

module.exports = initOpenCloseFsm;
