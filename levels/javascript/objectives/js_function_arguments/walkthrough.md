# Learn to write a JavaScript Function

The goal of this exercise to learn how to [create a Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) that takes **arguments** (also called "parameters"). An **argument** is a piece of input data your functions can use to produce different outputs.

Create a file called `politeLasers.js` in your code folder. Your code folder is located here:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

In this file, you must create a function called `getLaserSetting`. Here is some code you can use as a starting point - it already has the function defined, but doesn't yet work as described in the objective:

```js
function getLaserSetting(magicWord) {
  if (magicWord === 'the magic word here') {
    return 'what should this be?';
  } else {
    return 'ON';
  }
}

const currentSetting = getLaserSetting('right now!');
console.log('The current laser setting is: ' + currentSetting);
```

In the objective, it says that your function should retun the string `OFF` when the first argument to the function (`magicWord` in the example above) is the string `please`. It should return `ON` with any other input.

When your function works as directed in the objective, click the *HACK* button to validate your work.

## Useful links

* [JavaScript.info Function Guide](https://javascript.info/function-basics)
* [Function declaration](https://javascript.info/function-basics#function-declaration)
* [Returning values from functions](https://javascript.info/function-basics#returning-a-value)
* [MDN Function Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
