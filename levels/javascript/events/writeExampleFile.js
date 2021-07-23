const jetpack = require('fs-jetpack');
const path = require('path');

const objectiveExampleScriptMap = {
  /*
  js_south_bridge: 'shouldWater',
  js_scientist_bridge: 'treeAnalyzer',
  fizzBuzz: 'javaScriptDecryption',
  arrays: 'freighterInventory',
  arrays2: 'addFirstToLast',
  arrayFunctions: 'getFirstAmountSorted',
  js_split_south_laser: {
    scriptFileName: 'southLaser',
    arePrereqsMet: worldState =>
      worldState &&
      worldState.southWing &&
      worldState.southWing.hadSavedConversation,
  },
  */
};

module.exports = function writeExampleFile(world, objectiveName, worldState) {
  if (!isObjectiveImplemented(objectiveName)) {
    return;
  }

  const objective = objectiveExampleScriptMap[objectiveName];

  if (!areObjectivePrereqsMet(objective, worldState)) {
    return;
  }

  const scriptFileName = `${getObjectiveScriptFileName(objective)}.js`;

  const { value: TQ_JAVASCRIPT_WORKSPACE_PATH } = world.getContext(
    'env'
  ).TQ_JAVASCRIPT_WORKSPACE_PATH;

  if (
    !jetpack.exists(path.join(TQ_JAVASCRIPT_WORKSPACE_PATH, scriptFileName))
  ) {
    // If no script file exists with appropriate name, create file for the player with the example code
    // TODO: Dynamically source this file path:
    const objectivesPath = path.join(
      world.levelsDirectoryPath,
      'javascript',
      'objectives'
    );
    const exampleFilePath = path.join(
      objectivesPath,
      objectiveName,
      'example.js'
    );
    const example = jetpack.read(exampleFilePath);
    jetpack.write(
      path.join(TQ_JAVASCRIPT_WORKSPACE_PATH, scriptFileName),
      example
    );
  }
};

function isObjectiveImplemented(objectiveName) {
  return Object.keys(objectiveExampleScriptMap).includes(objectiveName);
}

function getObjectiveScriptFileName(objective) {
  if (typeof objective === 'object') {
    return objective.scriptFileName;
  }

  return objective;
}

function areObjectivePrereqsMet(objective, worldState) {
  if (typeof objective === 'object') {
    return objective.arePrereqsMet(worldState);
  }

  return true;
}
