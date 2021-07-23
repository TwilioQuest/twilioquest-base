# More Complex Boolean Logic

Some boolean comparisons are more complex than others. You may have to evaluate multiple conditions to determine whether or how to branch your code. To do this, you'll need to use the boolean AND ( `&&` ) and OR ( `||` ) operators. These are sometimes called **logical operators**.

[Learn more about these operators on JavaScript.info](https://javascript.info/logical-operators).

Here's a quick example of an if statement with more complex comparisons.

```js
const name = 'Cedric';
const isRobot = true;
const awesomenessLevel = 1000;

if (
  name === 'Cedric' &&
  isRobot &&
  awesomenessLevel > 10
) {
  console.log('Yup, that is our Cedric!');
}
```

## Sprinkles on top

To fix the sprinkler system, create a file called `shouldWater.js` in your code folder. Your code folder is located here:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

This time, you'll need to consider two arguments in your script - use the code below as a starting point:

```js
const lifeStatus = Number(process.argv[2]);
const drynessLevel = Number(process.argv[3]);

// Your if statement goes below...
if (false) {
  console.log('WATER');
}
```

You can test the code above by running it like this:

```bash
node shouldWater.js 1 20
```

The above should print nothing - it's dryness level is above 10, but it's life status is 1 and not 0.

This should print `WATER`, since the first argument is `0` and the second argument is greater than `10`:

```bash
node shouldWater.js 0 11
```

Once your script is working as described in the objective, click *HACK* to validate your work!

## Helpful Resources

* [MDN Intro to Conditionals](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
* [JavaScript.info - Logical Operators](https://javascript.info/logical-operators)
