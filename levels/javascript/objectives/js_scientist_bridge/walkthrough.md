# Branch Your Code, Or Else!

The goal of this exercise is to learn to use an [else-if statement](https://javascript.info/ifelse#several-conditions-else-if). You use these statements when your conditional logic needs to branch in one of many different directions.

[Learn more about how an else-if statement works on MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals).

Here's a quick example of an if statement that uses else-if:

```js
const ninjaTurtle = 'Leonardo';

if (ninjaTurtle === 'Leonardo') {
  console.log('leads');
} else if (ninjaTurtle === 'Donatello') {
  console.log('does machines');
} else if (ninjaTurtle === 'Raphael') {
  console.log('cool, but cruel');
} else if (ninjaTurtle === 'Michelangelo') {
  console.log('party dude');
} else {
  console.log('not a ninja turtle');
}
```

In this example, a different string is printed out depending on what the current value of the `ninjaTurtle` variable.

## Fixing the Tree Life Detector

To extend the bridge, you need to create a file called `enhancedLifeDetector.js` in your code folder. Your code folder is located here:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

You will need to work with a [command line argument](https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/) - a single-digit number that specifies whether a tree is alive, or in some other status.

Here is some code you can use as a starting point, which gets the value of the first argument passed in to your script.

```js
// These lines of code take in the argument from the command line
const argumentValue = process.argv[2];
const treeLifeStatus = Number(argumentValue);

// Write your if statement below here!

```

You can test the code above by running it like this - the following should print the string `flowering`:

```bash
node enhancedLifeDetector.js 1
```

This should print the text `other`:

```bash
node enhancedLifeDetector.js 3
```

The other potential statuses, by number, are listed in the table in the **Objective** tab.

Once your script is working as described in the objective, click *HACK* to validate your work!

## Helpful Resources

* [MDN Intro to Conditionals](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
* [JavaScript.info - else-if Statement](https://javascript.info/ifelse#several-conditions-else-if)
