# Find The Indexes

The goal of this exercise to learn how to [filter the items in an array](https://javascript.info/array-methods#filter), to remove the items you don't need in your code.

Create a file called `freightFilter.js` in your code folder. Your code folder is located here:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

In this file, you must create a function called `scanAndFilter`. Here is some code you can use as a starting point - it already has the function defined, but doesn't yet work as described in the objective:

```js
function scanAndFilter(freightItems, forbiddenString) {
  // This is an array variable you can override with your filtered array
  let filteredItems = [];

  /*
  Replace this comment with your code.
  Use the array filter() function to replace filteredItems with a new array of
  strings that don't include the value of forbiddenString
  */

  return filteredItems;
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const filtered = scanAndFilter(
  ['dog', 'ray gun', 'cat', 'zippers', 'ray gun'],
  'ray gun'
);
console.log('Filtered Items');
console.log(filtered); // should be ['dog', 'cat', 'zippers']
```

You should use the [the array's built-in "filter" function](https://javascript.info/array-methods#filter) to perform this task.

When your function works as directed in the objective, click the *HACK* button to validate your work.

## Useful links

* [JavaScript.info - Array filters](https://javascript.info/array-methods#filter)
* [JavaScript.info - if statements](https://javascript.info/ifelse)
* [JavaScript.info - Returning values from functions](https://javascript.info/function-basics#returning-a-value)
* [MDN - Function Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
