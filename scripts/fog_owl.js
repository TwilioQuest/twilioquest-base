const MISSION_COMPUTER_ARROW = 'floating_arrow_mission_computer';
const CEDRIC_ARROW = 'floating_arrow_cedric';
let localHasHadFirstConversation = false;

module.exports = function(event, world) {
  // First run onboarding sequence
  if (
    event.name === 'levelDidLoad' &&
    !world.getState('hadFirstConversation')
  ) {
    world.startConversation('cedric_initial', 'cedric', 500);
  }

  if (
    event.name === 'conversationDidEnd' &&
    event.npc.conversation === 'cedric_initial'
  ) {
    world.showEntities(CEDRIC_ARROW, 0);
  }

  if (
    event.name === 'conversationDidEnd' &&
    event.npc.conversation === 'cedric'
  ) {
    world.setState('hadFirstConversation', true);
    localHasHadFirstConversation = true;
    world.hideEntities(CEDRIC_ARROW);
  }

  // Return from basic training with encouragement
  if (
    event.name === 'levelDidLoad' &&
    world.getState('hadFirstConversation') &&
    world.getState('hasVisitedBasicTraining') &&
    !world.getState('hasReceivedBasicTrainingKudos')
  ) {
    if (
      world.getState('hasCompletedBasicEight') || 
      world.getState('hasCompletedBasicSafety')
    ) {
      world.setState('hasReceivedBasicTrainingKudos', true);
      world.startConversation('cedric_congrats', 'cedric', 500);
    } else {
      world.startConversation('cedric_encourage', 'cedric', 500);
    }
  }

  // Manage visibility of mission computer arrow
  if (
    event.name === 'playerDidInteract' &&
    event.target.name === 'mission_computer'
  ) {
    world.setState('hasSeenMissionComputer', true);
    world.hideEntities(MISSION_COMPUTER_ARROW);
  } else if (
    !world.getState('hasSeenMissionComputer') &&
    (world.getState('hadFirstConversation') || localHasHadFirstConversation)
  ) {
    world.showEntities(MISSION_COMPUTER_ARROW, 0);
  }
};
