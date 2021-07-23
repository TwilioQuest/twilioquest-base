# Learn to write a JavaScript Function

The goal of this exercise to learn how to [create a Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) in JavaScript. A **function** is a chunk of reusable code that you can **call** again and again to perform a specific task.

In many of the examples you have seen so far, you may have noticed that we are using a function that is built in to JavaScript called `console.log`. The job of this function is to print a string of text to the terminal window. To clear this barrier, you'll need to create your own function.

Create a file called `laserFunction.js` in your code folder. Your code folder is located here:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

In this file, you must create a function called `getLaserSetting`. Here is some code you can use as a starting point - it already has the function defined, but it is currently returning the wrong value:

```js
function getLaserSetting() {
  const setting = 42; // <- You'll need to change this line of code!
  return setting;
}

const currentSetting = getLaserSetting();
console.log('The current laser setting is: ' + currentSetting);
```

You will need to change the contents of the function declared above to satsify this objective. The open and close curly braces (the `{` and `}` characters) denote the start and the end of the code inside the function. Only code written between the `{` and `}` characters will be executed as part of your function!

Your function must **return** the correct value for the laser setting, as described in the objective. Use what you have learned about variables to make the necessary change. When your function works as directed in the objective tab, click the *HACK* button to validate your work.

## Useful links

* [JavaScript.info Function Guide](https://javascript.info/function-basics)
* [Function declaration](https://javascript.info/function-basics#function-declaration)
* [Returning values from functions](https://javascript.info/function-basics#returning-a-value)
* [MDN Function Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
