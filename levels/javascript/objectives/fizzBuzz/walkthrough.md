# A Common Trick

This problem is a variaton on [the commonly used interview algorithm known as "Fizz Buzz"](https://learnjswith.me/javascript-fizzbuzz/). Its not a particularly useful algorithm, but it is a good way to cement your knowledge of conditionals and learn about a new type of operator!

## Is a number divisible? Use the remainder (modulus) operator

Your script must detect if a number is divisible by another number. There is an operator in JavaScript (and most other languages) that will let you detect this called the `Remainder Operator`. This operator is represented by `%` and returns the remainder left over when dividing two numbers.

For example:

```js
12 % 5 === 2;
4 % 2 === 0;
12 % 3 === 0;
```

If one number is evenly divisible by another number, the result of the `%` operator will be `0`.

## Starter code

Create a new JavaScript file at this location:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>/fizzBuzz.js`.

You can use the following as starter code:

```js
const numberInput = Number(process.argv[2]);
let output = '';

if (false) {
  output += 'Java';
}

if (false) {
  output += 'Script';
}

if (false) {
  output = String(numberInput);
}

console.log(output);
```

Test your code against different inputs with:

```bash
node fizzBuzz.js 15
```

Once you feel your code is buzzing along correctly, click the *HACK* button!
