// This is what your variable declaration should look like in your
// separate shouldWater.js file!

const MILLISECONDS_IN_A_SECOND = 1000;
const SECONDS_IN_A_MINUTE = 60;
const MINUTES_IN_AN_HOUR = 60;
const MILLISECONDS_IN_AN_HOUR =
  MILLISECONDS_IN_A_SECOND * SECONDS_IN_A_MINUTE * MINUTES_IN_AN_HOUR;

function shouldWater(treeType, lastWatered) {
  const currentTime = Date.now();

  if (treeType === 0) {
    // alive tree, water every 8 hours
    return currentTime >= lastWatered + 8 * MILLISECONDS_IN_AN_HOUR;
  }

  if (treeType === 1) {
    // dead tree, never water
    return false;
  }

  if (treeType === 2) {
    // fruit tree, water every 8 hours
    return currentTime >= lastWatered + 4 * MILLISECONDS_IN_AN_HOUR;
  }

  if (treeType === 3) {
    // autumn tree, water every 8 hours
    return currentTime >= lastWatered + 16 * MILLISECONDS_IN_AN_HOUR;
  }

  return false;
}
