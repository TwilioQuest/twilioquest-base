function processEastWingEvents(event, world, worldState) {
  let indexes = worldState.eastWingSecNodes || [
    false, false, false, false, false, false
  ];

  function checkIdx(name, i) {
    if (
      (
        event.name === 'objectiveCompleted' ||
        event.name === 'objectiveCompletedAgain'
      ) && event.objective === name
    ) {
      indexes[i] = true;
    }
  }

  checkIdx('forEach', 0);
  checkIdx('loopGetIndexes', 1);
  checkIdx('loopFilter', 2);
  checkIdx('loopMap', 3);
  checkIdx('loopReduce', 4);
  checkIdx('array2D', 5);

  worldState.eastWingSecNodes = indexes;
}

module.exports = { processEastWingEvents };
