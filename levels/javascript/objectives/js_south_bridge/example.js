// This is what your variable declaration should look like in your
// separate shouldWater.js file!

const MILLISECONDS_IN_A_SECOND = 1000;
const SECONDS_IN_A_MINUTE = 60;
const MINUTES_IN_AN_HOUR = 60;
const MILLISECONDS_IN_AN_HOUR =
  MILLISECONDS_IN_A_SECOND * SECONDS_IN_A_MINUTE * MINUTES_IN_AN_HOUR;

function shouldWater(treeType, lastWatered) {
  const currentTime = Date.now();

  // alive tree, water every 8 hours

  // dead tree, never water

  // fruit tree, water every 8 hours

  // autumn tree, water every 8 hours

  return false;
}

// These are your test cases! You don't need to mess with them!
//
// They call your function with various inputs and print them
// out to your console when you run this file with Node.js
console.log(shouldWater(0, Date.now()));
console.log(shouldWater(0, Date.now() - 8 * MILLISECONDS_IN_AN_HOUR - 1));
console.log(shouldWater(0, Date.now() - 8 * MILLISECONDS_IN_AN_HOUR));
console.log(shouldWater(1, Date.now() - 24 * MILLISECONDS_IN_AN_HOUR));
