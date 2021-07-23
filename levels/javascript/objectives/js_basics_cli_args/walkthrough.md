# Winning The Arguments

The goal of this objective is to familiarize you with the concept of [command line arguments](https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/). This is data that is passed in to your JavaScript code when it is executed, to give it some context when it runs.

So far, you have been running your test scripts with a command that looks like this.

```bash
node someProgram.js
```

Then, your code runs, executing the instructions that you have written.

However, it is frequently useful to pass some initial data into a program that you have written. We call this initial data **arguments**. To execute a script with arguments, you can type in additional text after the name of your code file, separated by spaces. Here is an example of executing a script with three arguments:

```bash
node someProgram.js "argument one" "another argument" allOneWordNoQuotes
```

You can access these arguments in your code using a special list named [process.argv](https://nodejs.org/docs/latest/api/process.html#process_process_argv).

In this objective, you've been asked to write a program that works with a command line argument. This is a bit tricky at first, so here's the code you'll need as a starting point:

```js
// The line of code below reads in the value of the argument passed in after
// the name of your script
const argumentValue = process.argv[2];

// This line of code converts the argument to a numeric value
const numberValue = Number(argumentValue);

// This line of code divides the input number by two, and stores the result in
// a variable named "result"
const result = numberValue / 2;

// You need to finish the line of code below! How would you print out the
// result to the terminal window without hard coding the number 42?
console.log(42);
```

Add the code above to a file called `divideByTwo.js` in your code directory. For reference, your code folder can be found here:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

Once you have done this, you'll need to change the last line of the program to actually print out the result of dividing the input number by two. To test out your code, execute it from a terminal like this.

```bash
node divideByTwo.js 400
```

If your code is correct, it would print out the number `200` after executing. Remember, you'll need to edit the starter code above to make this work!

Once your script is working correctly, click the *HACK* button.

## Helpful Resources

* [Node.js Command Line Arguments](https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/)
* [Reference docs for process.argv](https://nodejs.org/docs/latest/api/process.html#process_process_argv)
