/**
 * Here is our first function named "isPositive".
 *
 * We're going to explore our first new set of operators, less than (<) and greater than (>).
 * These operators tell us which of the two values are larger or smaller.
 *
 * Here are a few examples using these two new operators:
 * let example1 = 8 < 10; // true
 * let example2 = -8 < -2; // false
 * let example3 = 11 > 2.3; // true
 * let example4 = 2 > 80; // false
 *
 * For this isPositive function we want to:
 * - return true if the inputed number is greater than 0
 * - return false otherwise
 */
function isPositive(number) {
  // use the "return" keyword to return the result of your function
  return false; // We don't want to leave false hardcoded!
}

/**
 * Here is our second function named "isInteger".
 *
 * For this function, we're going to need to use the equality operator (===). This
 * operator will tell us if two values are equal to eachother.
 *
 * Here are some examples of this operator in action:
 * let example1 = 10 === 10; // true
 * let example2 = 5 === 10; // false
 * let example3 = "20" === 20; // false
 *
 * An Integer is also sometimes known as a "whole number". This means its a number that
 * doesn't have a decimal point in it. So 4, 100, and 31 are all integers. However, 2.3,
 * 9.1231, and 100.1 are NOT integers. Checkout the help section for more information on
 * integers!
 *
 * Another way to say this is: numbers with a remainder of 0 when dived by 1 are integers.
 * To write this function we'll need to remember how to use the remainder (%) operator
 * from the earlier arithmetic operators objective!
 *
 * For this isInteger function we want to:
 * - return true if the number is an integer
 * - return false otherwise
 */
function isInteger(number) {
  return false; // We don't want to leave false hardcoded!
}

/**
 * Here is our third function named "isNumber".
 *
 * For this function, we're going to use the equality operator (===) again!
 *
 * JavaScript does not have a built in function to determine if a value is a number.
 * However, it does have a built in special operator called `typeof`. This operator
 * will tell you the type of the value its used on. Checkout the help for more
 * information on typeof!
 *
 * Here's some examples of the `typeof` operator in action:
 * let example1 = typeof 0; // "number"
 * let example2 = typeof -3.5; // "number"
 * let example3 = typeof "test string"; // "string"
 * let example4 = typeof true; // "boolean"
 *
 * To complete this function, we need to use `typeof` and `===` together.
 *
 * For this isNumber function we want to:
 * - return true if the input is a number
 * - return false otherwise
 */
function isNumber(number) {
  return false; // We don't want to leave false hardcoded!
}

// The lines of code below will test your functions when you click the "Play"
// button. Check the output to ensure you're creating the variables you need!
console.log(`Lets use isPositive with 10 for input: ${isPositive(10)}`);
console.log(`Lets use isPositive with -10 for input: ${isPositive(-10)}`);
console.log(`Lets use isInteger with 10 for input: ${isInteger(10)}`);
console.log(`Lets use isInteger with 2.5 for input: ${isInteger(2.5)}`);
console.log(`Lets use isNumber with 10 for input: ${isNumber(10)}`);
console.log(`Lets use isNumber with "test" for input: ${isNumber('test')}`);

// Ignore these lines for now - it "exports" your functions so TwilioQuest can
// exercise and validate them
module.exports = {
  isPositive,
  isInteger,
  isNumber,
};
