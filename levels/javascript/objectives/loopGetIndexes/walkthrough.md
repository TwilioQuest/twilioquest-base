# Find The Indexes

The goal of this exercise to learn how to [use loops to "iterate" through the items in an array](https://javascript.info/array-methods#iterate-foreach). A common task in programming is to take a list of input items and do a unit of work for each item. Processing each item in a list of items is called "looping" or "iteration". That's what you'll need to do in order to complete this objective.

Create a file called `freightScanner2.js` in your code folder. Your code folder is located here:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

In this file, you must create a function called `scan`. Here is some code you can use as a starting point - it already has the function defined, but doesn't yet work as described in the objective:

```js
function scan(freightItems) {
  let contrabandIndexes = [];

  /*
  Replace this comment with your code.

  Your code needs to:
  - Loop through every item in the freightItems array
  - if the item is equal to "contraband", add the current index of the item 
    to contrabandIndexes - hint: use the array "push()" method

  */

  return contrabandIndexes;
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const indexes = scan(['dog', 'contraband', 'cat', 'zippers', 'contraband']);
console.log('Contraband Indexes: ' + indexes); // should be [1, 4]
```

When your function works as directed in the objective, click the *HACK* button to validate your work.

## Useful links

* [JavaScript.info - Iteration with forEach](https://javascript.info/array-methods#iterate-foreach)
* [JavaScript.info - if statements](https://javascript.info/ifelse)
* [JavaScript.info - array push](https://javascript.info/array#methods-pop-push-shift-unshift)
* [JavaScript.info - Returning values from functions](https://javascript.info/function-basics#returning-a-value)
* [MDN - Function Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
