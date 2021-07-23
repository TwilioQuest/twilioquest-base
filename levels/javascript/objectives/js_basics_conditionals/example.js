/**
 * For this "isNumber" function we should recreate the same function we built
 * in the last objective.
 */
function isNumber(number) {
  return false; // Let's replace this line with the code from the previous objective.
}

/**
 * Our new function "safeDouble" double any number put into it. However, it will also make
 * sure that the input passed into it is actually a number first.
 *
 * To do that we're going to use our isNumber function inside the conditional statement below.
 * If isNumber returns true we want to perform our sum operation as normal. If it does not, we
 * will not execute any code.
 */
function safeDouble(number) {
  // We'll never execute the code in this if statement right now! We should change that!
  if (false) {
    return 42; // <- that can't be right! Return the real answer
  }  
}

// The lines of code below will test your variables when you click the "Play"
// button. Check the output to ensure you're creating the variables you need!
console.log(`Lets use sum with 3 & 6 for inputs: ${safeDouble(3)}`);
console.log(`Lets use 10 & 4 for inputs: ${safeDouble(10)}`);
console.log(`Lets use 2 & 3 for inputs: ${safeDouble('not number')}`);

// Ignore this line for now - it "exports" your function so TwilioQuest can
// exercise and validate it
module.exports = {
  isNumber,
  safeDouble,
};
