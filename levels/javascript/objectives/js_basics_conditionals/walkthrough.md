# Conditional Logic

Conditional statements allow our functions to execute different pieces of code based on their inputs. We can use the operators and functions we've learned about to determine which branch of code we want to execute.

## The If Statement

The most basic conditional statement is called the `if statement`. This statement allows you to write code that only runs if a certain condition is met. It is made up of 3 main parts.

### The declaration

There is the declaration of the conditional statement using the `if` keyword.

```js
if
```

### The conditional expression

Then there is the actual conditional expression used to tell your program under which conditions it should be true. In the example below `input < 10` is our conditional expression.

```js
if (input < 10)
```

An expression is a term for a sequence of code that evaluates to a value. In our example, the expression `input < 10` evalutes to `true` or `false` depending on the value of `input` when our code is run.

Another example of an expression is `2 + 2`. This expression will always evaluate to `4` because there are no variables inside the expression.

### The code block

Finally, we have the code block that completes the if statement. All of the code written inside of this block will only be run if the conditional expression is true.

```js
if (input < 10) {
  // do something special
}
```

## Completing this hack attempt

In this challenge we're building a `safeDouble` function. This function will double its input's value (multiply it by 2). However, this `safeDouble` function will only perform the doubling if its input is a number.

To complete this challenge, we need to export two functions `isNumber` and `safeDouble`. We can go ahead and copy the contents of `isNumber` from the previous objective on `comparison operators`. For the doubling logic, we need to multiply our function's input by 2 before we return it.

The `isNumber` function we created will be used as our conditional expression. If it returns true our input is a number! The return statement with our doubling logic belongs inside the code block of our if statement.

Your functions must be **named and initialized exactly**. Double-check your spelling!

Once you have declared you function and called it in your code, in a way that conforms to the instructions above, click the _HACK_ button to receive your reward.
