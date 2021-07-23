# Time to Get Loopy

The goal of this exercise to learn how to [use loops to "iterate" through the items in an array](https://javascript.info/array-methods#iterate-foreach). A common task in programming is to take a list of input items and do a unit of work for each item. Processing each item in a list of items is called "looping" or "iteration". That's what you'll need to do in order to complete this objective.

Create a file called `freightScanner.js` in your code folder. Your code folder is located here:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

In this file, you must create a function called `scan`. Here is some code you can use as a starting point - it already has the function defined, but doesn't yet work as described in the objective:

```js
function scan(freightItems) {
  let contrabandCount = 0;

  /*
  Replace this comment with your code.

  Your code needs to:
  - Loop through every item in the freightItems array
  - if the item is equal to "contraband", increase contrabandCount by one

  */

  return contrabandCount;
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const numItems = scan(['dog', 'contraband', 'cat', 'zippers', 'contraband']);
console.log('Number of "contraband": ' + numItems); // should be 2
```

When your function works as directed in the objective, click the *HACK* button to validate your work.

## Useful links

* [JavaScript.info - Iteration with forEach](https://javascript.info/array-methods?utm_source=twilioquest-3#iterate-foreach)
* [JavaScript.info - if statements](https://javascript.info/ifelse)
* [JavaScript.info - incrementing numbers](https://javascript.info/operators#increment-decrement)
* [JavaScript.info - Returning values from functions](https://javascript.info/function-basics#returning-a-value)
* [MDN - Function Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
