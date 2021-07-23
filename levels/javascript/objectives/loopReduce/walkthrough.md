# Find The Indexes

The goal of this exercise to learn how to [execute code to calculate a value based on items in an existing array](https://javascript.info/array-methods#reduce-reduceright).

Create a file called `freightMass.js` in your code folder. Your code folder is located here:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

In this file, you must create a function called `calculateMass`. Here is some code you can use as a starting point - it already has the function defined, but doesn't yet work as described in the objective:

```js
function calculateMass(freightItems) {
  // This is a placeholder for the total length in characters of all strings
  // in the freightItems array
  let totalMass = 0;

  /*
  Replace this comment with your code.
  Use the array reduce() function to replace the value of totalMass.
  Note that it is possible to use forEach or other loop types to do this, but
  using "reduce" is probably the most elegant solution!
  */

  return totalMass;
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const mass = calculateMass(['dog', 'donkey', 'cat']);
console.log('Total mass of items is ' + mass); // should be 12
```

You should use the [the array's built-in "reduce" function](https://javascript.info/array-methods#reduce-reduceright) to perform this task. Use the `length` property of the strings in the array to determine how many characters long they are.

When your function works as directed in the objective, click the *HACK* button to validate your work.

## Useful links

* [JavaScript.info - Array reduce function](https://javascript.info/array-methods#reduce-reduceright)
* [JavaScript.info - if statements](https://javascript.info/ifelse)
* [JavaScript.info - Returning values from functions](https://javascript.info/function-basics#returning-a-value)
* [MDN - Function Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
