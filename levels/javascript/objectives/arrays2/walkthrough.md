# Objective Help

To complete this objective, create a file called `addFirstToLast.js` in your code folder. Your code folder is located here:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

Inside `addFirstToLast.js`, you will need to define a function called `addFirstToLast` that takes a single argument - an array of strings. Your function will then need to return a string, which is the result of concatenating the first and last items in the array together.

Here is some example code you can use as a starting point:

```js
function addFirstToLast(inputArray) {
  let firstAndLast = '';

  // Only execute this code if the array has items in it
  if (inputArray.length > 0) {
    // Change the line below! What should it be?
    firstAndLast = inputArray[999] + inputArray[999];
  }

  return firstAndLast;
}

// The lines of code below will test your function when you run it from the
// command line with Node.js
console.log(addFirstToLast(['first', 'second', 'third']));
console.log(addFirstToLast(['golden', 'terrier']));
console.log(addFirstToLast(['cheerio']));
console.log(addFirstToLast([]));
```

To make this code work, you will need to access the items in the array at the proper **indexes** - [read about how to do that here](https://javascript.info/array#declaration). An "index" is a number that indicates a particular location within the array, first to last. In programming, indexes like this one **always start at zero**.

Once you have modified your function to work as described, click the *HACK* button to check your work!

## Helpful links

* [Creating Arrays - JavaScript.info](https://javascript.info/array)
* [MDN Array Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
* [JavaScript first steps - Array](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays)