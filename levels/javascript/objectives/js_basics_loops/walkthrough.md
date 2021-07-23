# Loops

Loops allows us to run the same code blocks multiple times. We tell a loop when to repeat and when not to repeat by using the same conditional statements we explored in the last objective.

## The While Statement

The most basic loop is called the `while statement`. This statement allows you to write code that will be run again only runs if a certain condition is met. It is made up of 3 main parts.

### The declaration

There is the declaration of the conditional statement using the `while` keyword.

```js
while
```

### The conditional expression

Then there is the actual conditional expression used to tell your program under which conditions it should be true. In the example below `input < 10` is our conditional expression. As long as this condition is true, our loop will run.

```js
while (input < 10)
```

An expression is a term for a sequence of code that evaluates to a value. In our example, the expression `input < 10` evalutes to `true` or `false` depending on the value of `input` when our code is run.

**NOTE:** It is possible that this condition is false immediately and then your loop will never run!

### Iterations

Every time a loop succesfully runs we call that an iteration. In JavaScript, and many other programming lanugages we count iterations starting at 0 instead of 1. Therefore, the first time through your loop is iteration 0, the second time is iteration 1, the third time is iteration 2, and so on.

### The code block

Finally, we have the code block that completes the while statement. All of the code written inside of this block will only be run if the conditional expression is true.

```js
while (input < 10) {
  // do something special
}
```

After the code in the block has executed from top to bottom, your code will check to see if the conditional expression is true again and the cycle repeats!

### Beware the inifinite loop!

A common issue to run into when working with loops is the infinite loop. It happens if your conditional expression evaluates to true, but you never have any code variable change the expresion to false.

This is an example of an infinite loop. The conditional expression true is always true!

```js
while (true) {
  // do something!
}
```

This is a problem, because it means your code will never advance past this point. Additionally, every time a loop iterates some of your computer's memory is used until the loop finishes all of its iterations. This means, if a loop never finishes iterating, it will eventually use all the memory your computer has provided your program and the program will crash!

### Loop Iteration Index

When you want to write a while loop that runs `N` number of times, a common stratgey is to use an `index` variable to keep count of the iterations you've run through. So iteration 0 is index = 0, iteration 1 is index = 1, and so on.

Every time we do an iteration through our while loop, we then increase our index value as well.

Finally, on every iteration we make sure our current index is less than the total number of iterations `N` we want to run.

```js
// start at iteration 0
let index = 0;

while (index < N) {
  // do something!

  // increase our index count for the next loop
  index = index + 1;
}
```

## Completing this hack attempt

In this challenge we're building a `power` function. This function will take its first argument `base` and raise it to the power specified by the second argument `power`. We're replicating the power function often found in Albebra course material.

This function is mathematically represented like `2 ^ 3 = 8`. In this example, 2 is the base, 3 is the power, and 8 is our total.

A power function is equivalent to multiplying the base number by itself for the number of times equal to the power. So, `2 ^ 3 = 8` is the same as `2 * 2 * 2 = 8`.

To complete this challenge, we need to export the function `power`. The power function will use a while loop that iterates once for each `power`. It will create a `total` variable that starts at the value of 1. For every iteration, the while loop will multiply the `total` variable by the `base` input.

Your function must be **named and initialized exactly**. Double-check your spelling!

Once you have declared you function and called it in your code, in a way that conforms to the instructions above, click the _HACK_ button to receive your reward.
