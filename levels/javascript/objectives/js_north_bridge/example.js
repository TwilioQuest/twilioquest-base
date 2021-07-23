// This is what your variable declaration should look like in your
// separate onOneCondition.js file!

function sayHi(argument) {
  if (argument === true) {
    return 'Bye!';
  }
}

// These are your test cases! You don't need to mess with them!
//
// They call your function with various inputs and print them
// out to your console when you run this file with Node.js
console.log(sayHi(true));
console.log(sayHi(false));
console.log(sayHi('a string'));
