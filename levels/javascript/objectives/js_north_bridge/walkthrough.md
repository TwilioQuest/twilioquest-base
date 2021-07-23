# Learning the If Statement

The goal of this objective is to learn how to conditionally execute code using an [if statement](https://javascript.info/ifelse#the-if-statement). In programming, you will often want to execute code only when certain conditions are met - like if a user is logged in, or if a given file exists.

[Learn more about how an if statement works on MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals).

Here's a quick example of an if statement that uses the [comparison operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) (the `===` operator) to see if two strings of text are the same, and to print some text if they are:

```js
const animal = 'Dog';

if (animal === 'Dog') {
  console.log('woof!');
}
```

A comparison statement evaluates to a [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures) `true` or `false`. If the statement is true, the code inside the if statement (the parts inside the curly braces `{` `}`) is executed.

## Building bridges

To extend the bridge, you need to create a file called `northBridgeControl.js` in your code folder. Your code folder is located here:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

Just as you did when you retrieved the password from the lead scientist's office, you will need to work with [command line arguments](https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/). Your code will print a specific message if and only if a certain argument is passed in.

Here is some code you can use as a starting point, which gets the value of the first argument passed in to your script. However, the if statement **will not work** as currently written. You'll need to change it to satisfy the objective.

```js
const argumentValue = process.argv[2];

// Modify the if statement below to execute if and only if "argumentValue" is
// equal to the string "EXTEND"
if (false) {
  console.log('Extending bridge!');
}
```

You can test the code above by running it like this - this should print the message:

```bash
node northBridgeControl.js EXTEND
```

This should not print anything:

```bash
node northBridgeControl.js GO
```

Once your script is working as described in the objective, click *HACK* to validate your work!

## Helpful Resources

* [MDN Intro to Conditionals](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
* [JavaScript.info - If Statement](https://javascript.info/ifelse#the-if-statement)
* [MDN - JavaScript data types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
