# Find The Indexes

The goal of this exercise to learn how to [execute code to create a new array, based on items in an existing array](https://javascript.info/array-methods#map).

Create a file called `freightMutator.js` in your code folder. Your code folder is located here:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

In this file, you must create a function called `mutate`. Here is some code you can use as a starting point - it already has the function defined, but doesn't yet work as described in the objective:

```js
function mutate(freightItems) {
  // This is an array variable you can override with your mutated array
  let mutatedItems = [];

  /*
  Replace this comment with your code.
  Use the array map() function to replace mutatedItems with a new array of
  strings from the input array that have been converted to ALL CAPS
  */

  return mutatedItems;
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const mutated = mutate(['dog', 'ray gun', 'cat']);
console.log('Mutated Items');
console.log(mutated); // should be ['DOG', 'CAT', 'ZIPPERS']
```

You should use the [the array's built-in "map" function](https://javascript.info/array-methods#map) to perform this task. To convert a string to all caps, you can use the [built-in toUpperCase() function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase).

When your function works as directed in the objective, click the *HACK* button to validate your work.

## Useful links

* [JavaScript.info - Array map function](https://javascript.info/array-methods#map)
* [MDN - toUpperCase() function for strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
* [JavaScript.info - if statements](https://javascript.info/ifelse)
* [JavaScript.info - Returning values from functions](https://javascript.info/function-basics#returning-a-value)
* [MDN - Function Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
