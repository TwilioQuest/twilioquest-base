# Comparison Operators

A function allows us to run the same code instrutions multiple times on different inputs. This is useful because we can write logic once and use it many times throughout our code base.

## Equality

One of the first things you might want to ask about two values is "are they the same?" The comparison operator for equality `===` let's you ask this question. This operator works similarly to the arithmetic operators, however it returns a boolean. If the returned boolean is `true` the question is correct. If a `false` boolean value is returned, the question was incorrect.

Here are some examples of the equality operator in action:

```js
123 === 123; // true
123 === 456; // false
false === false; // true
```

You can also use the equality operator to compare different data types:

```js
'string value' === 987; // false
true === 'hello world'; // false
```

You can compare the values inside of a variable too:

```js
let stringVariable = 'hello';

stringVariable === 'hello'; // true
```

Sometimes, when you're writing code you want to know if something is different rather than the same. For example, pretend you know the IP address for a dangerous user. If you want to let in all traffic except that IP address, you would want to make sure a visitor's IP address is not equal to the dagnerous IP.

To check if two values are not equal to eachother, we use the not equal operator `!==`. It functions exactly opposite of the equality operator.

Here are some examples of the operator in action:

```js
123 !== 123; // false
123 !== 456; // true
false !== false; // false
```

## Greater/Less Than

Another valuable question we can ask about our values is "which value is greater or less than the other?" To ask this question, we can use the greater than `>` and less than `<` operators.

Here are some examples of these operators in use:

```js
1 < 2; // true
2 > 1; // true
1 < -1; // false
2 > 10; // false
1 < 1; // false
2 > 2; // false
```

These operators will also work on strings; however, the [effects are not always immediately intuitive](https://javascript.info/comparison#string-comparison). For example, `a` is sorted before `A`. Be careful when comparing strings this way!

```js
'apples' < 'Apples'; // true
'aaac' > 'aaab'; // true
'ccc' < 'ccc'; // false
```

## The combination!

When you compare two values that are the same with the less than or greater than operators you get false. Sometimes though, you want to tell if something is `greater than or equal` to something else. For this class of question, we have the combination operators greater than or equal `>=` and less than or equal `<=`.

Examples!

```js
1 <= 2; // true
2 >= 1; // true
1 <= -1; // false
2 >= 10; // false
1 <= 1; // true
2 >= 2; // true
```

## Integers

An integer is also sometimes called a "whole number". It is a number that doesn't have a decimal component. Integers are important for a lot of use cases where you don't want to have fractions. For instance, if you're tallying up votes you do not want to count 0.3 of a vote.

Some integers: `1`, `0`, `-1`.
Some NOT integers: `1.1`, `1.333`, `100.1`.

Another way to think about a decimal component is that an integer can be cleanly divided by 1. We can check to see if this is true of a number by using the remainder operator `%` from our previous arithmetic objective.

```js
1 % 1; // 0
0 % 1; // 0
-1 % 1; // 0
1.1 % 1; // 0.1
1.333 % 1; // 0.333
100.1 % 1; // 0.1
```

## typeof operator

JavaScript has a few special operators. One of these is the `typeof` operator. This operator returns a string that describes the type of the value it is used on.

```js
typeof 1; // "number"
typeof 'string value'; // "string"
typeof false; // "boolean"
```

This lets us do checks to see if a variable is of the type we expect it to be. A common usage for this is to ensure that a variable passed into our function is the correct type.

```js
let userInput = 'hello world';

typeof userInput === 'string'; // true
```

We'll use this tactic in our next objective!

## Completing this hack attempt

To complete this challenge, write the three functions as specified by their comments.

Your functions must be **named and initialized exactly**. Double-check your spelling!

Once you have declared you function and called it in your code, in a way that conforms to the instructions above, click the _HACK_ button to receive your reward.
