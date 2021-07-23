# Branch Your Code, Or Else!

The goal of this exercise is to learn to use an [else statement](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals). Previously, you used an [if statement](https://javascript.info/ifelse#the-if-statement) to specify a block of code that would execute if a certain condition was met. An `else` statement allows you to specify code that runs in any other case.

[Learn more about how an if/else statement works on MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals).

Here's a quick example of an if statement that has an `else` clause:

```js
const luckyNumber = 7;

if (luckyNumber === 7) {
  console.log('Yup, 7 is a lucky number.');
} else {
  console.log('I think only 7 is a lucky number, right?');
}
```

In this example, the second string is printed if `luckyNumber` is set to any other number besides `7`.

## Fixing the Tree Life Detector

To extend the bridge, you need to create a file called `treeLifeDetector.js` in your code folder. Your code folder is located here:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

You will need to work with a [command line argument](https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/) - a single-digit number that specifies whether a tree is alive, or in some other status.

Here is some code you can use as a starting point, which gets the value of the first argument passed in to your script.

```js
// These lines of code take in the argument from the command line
const argumentValue = process.argv[2];
const treeLifeStatus = Number(argumentValue);

// Write your if statement below here!

```

You can test the code above by running it like this - the following should print the string `alive`:

```bash
node treeLifeDetector.js 0
```

This should print the text `other`:

```bash
node treeLifeDetector.js 3
```

Once your script is working as described in the objective, click *HACK* to validate your work!

## Helpful Resources

* [MDN Intro to Conditionals](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
* [JavaScript.info - Else Statement](https://javascript.info/ifelse#the-else-clause)
* [MDN - JavaScript data types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
