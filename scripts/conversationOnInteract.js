module.exports = function (self, event, world) {
  if (self !== event.target) {
    // This isn't our conversationalist
    return;
  }

  if (self.isConversationDisabled) {
    return;
  }

  if (self.observation) {
    // The "observation" property can be set to have the Operator
    // make an observation about a character without kicking off a convo
    world.showNotification(self.observation);
    return;
  }

  // Default to conversation and ensure appropriate values are set
  const conversationName = self.conversation;
  const conversationAvatar = self.conversationAvatar;

  if (!conversationName) {
    console.error(`"conversationName" property not set on interaction target.`);
    return;
  }

  if (!conversationAvatar) {
    console.error(
      `"conversationAvatar" property not set on interaction target.`
    );
    return;
  }

  // Kick off conversation
  world.startConversation(conversationName, conversationAvatar);
};
