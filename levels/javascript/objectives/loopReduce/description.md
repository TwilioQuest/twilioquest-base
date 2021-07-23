# A Bit Reductive

<div class="aside">
<h3>To-Do List</h3>
<ul>
  <li>Create a file called <code>freightMass.js</code></li>
  <li>Create a function called <code>calculateMass</code> that takes an array of strings as the only argument.</li>
  <li>Your function must <b>return a number</b> - the result of finding the length of all strings in the input array, and adding those numbers together.</li>
  <li>Click <em>HACK</em> when finished.</li>
</ul>
</div>

Inside one of the secure cargo holds in the **Infinite Loop**, you find one of the security nodes you need to disable to reach the TwilioQuest program's electrical engineer. 

This node is currently locked down because of a misbehaving JavaScript function intended to scan the freighter's cargo and calculate its total mass.

You'll need to repair this function in order to hack the node and retrieve the missing index for the **Infinite Loop** master password.

## Fixing the mass calculation

Create a file called `freightMass.js` in your code folder. Inside this file, [create a JavaScript function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) called `calculateMass`.

This function should take one argument - an array of strings. Your `calculateMass` function should use the [array "reduce"](https://javascript.info/array-methods#reduce-reduceright) function to take every string in the input array, find out how long the string is, and keep a running tally of the **total length of all strings in the array**. Your function should then return this total length (the "mass" of the cargo).

Your function might be called like this, and return the result described in the example:

```js
const cargo = ['cat', 'dog', 'bird'];

const mass = calculateMass(cargo);
// mass should now be 10
```

Some example code you can use as a starting point is found on the "Help" tab. 

Once your code is ready, click the *HACK* button to hack this security node and receive a password index you'll need to free the electrical engineer!
