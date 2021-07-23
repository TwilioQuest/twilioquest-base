# Getting started with Array Built-Ins

The goal of this objective is to familiarize you with [the functions that are built in to array objects](https://javascript.info/array-methods) to help you work with the data in those arrays. Specifically, this objective will require that you use the following functions:

* [sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort), which **changes an existing array (mutates it)** by sorting all the elements within it.
* [slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), which **creates a new array** which is a subset of a given array.

## Starter code

Create a new file called `getFirstAmountSorted.js` in your code folder, located here:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

Inside this file, paste the following starter code.

```js
function getFirstAmountSorted(inputArray, numberOfItems) {
  // Step 1: sort inputArray alphabetically
  // Step 2: create an array which contains the first N items of the sorted
  //         array - the number of items is provided in the numberOfItems 
  //         variable
  // Step 3: return the new array you created at step 2
}

// The lines of code below test your function when you execute your code in
// the terminal - they are not required for your function to work
const newArray = getFirstAmountSorted(['cat', 'apple', 'bat'], 2);
console.log(newArray); // << should print out ['apple', 'bat']
```

Your job is to implement the guts of the `getFirstAmountSorted` function as described in the Objective tab. Once your function sorts and slices as described, mash that *HACK* button!

## Helpful Resources

* [JavaScript.info - array methods](https://javascript.info/array-methods)
* [MDN sort function reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
* [MDN slice function reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
