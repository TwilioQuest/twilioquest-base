# One Thing or Another

The conditional statements we've already learned about let us run one block of code if a condition is true. But what if you have more than one condition and more than one block of code you only need to run one of them?

## The Else Statement

An else statement works alongside the if statement, it cannot exist on its own. When an if statement's conditional expression evaluate to false the else block is run instead. This lets us do one thing if our condition is true, and something else if our condition is false.

Here is an example function called `test` that uses an `if` and `else` statement together.

```js
function test(input) {
  if (input === true) {
    // execute this code block only if input is true
    return 'success';
  } else {
    // execute this code block only if input is not true
    return 'failure';
  }
}
```

When the function `test` is called with the `input` true, it will return the value `"success"`. If `input` is any other value `test` will return `"failure"`.

Here are some example inputs to our test function:

```js
test(true); // 'success'
test(false); // 'failure'
test('a string value'); // 'failure'
test(123); // 'failure'
```

## The Else If Chain

Sometimes one `if` statement isn't enough! For these cases you can chain if else statements. Below is an example function called `getLetterFromNumber` demonstrating this technique.

```js
function getLetterFromNumber(number) {
  if (number === 1) {
    // execute this code block only if input is true
    return 'A';
  } else if (number === 2) {
    // execute this code block only if input is not true
    return 'B';
  } else if (number === 3) {
    // execute this code block only if input is not true
    return 'C';
  } else {
    return 'other';
  }
}
```

This `getLetterFromNumber` function will take in an integer that corresponds to a letter of the alphabet. If `number` is `1` it will return the first letter of the alphabet, `A`. This function example only supports the first three numbers in the alphabet.

If any other value is given for `number`, then the string `other` will be returned.

## Completing this hack attempt

In this challenge we're going to create a `spellNumber` function. It is going to require the usage of an else if chain, much like the `getLetterFromNumber` function above.

`spellNumber` will take in an integer from 1 to 9. It will then return the name of that number as a string. So, `1` as an input will return the string `"one"`.

If the input isn't an integer from 1 to 9 the function should return `"other"` instead.

Your function must be **named and initialized exactly**. Double-check your spelling!

Once you have declared you function and called it in your code, in a way that conforms to the instructions above, click the _HACK_ button to receive your reward.
