# A Transformational Moment

<div class="aside">
<h3>To-Do List</h3>
<ul>
  <li>Create a file called <code>freightMutator.js</code></li>
  <li>Create a function called <code>mutate</code> that takes an array of strings as the only argument.</li>
  <li>Your function must <b>return an array of strings</b>. The array should contain all the items in the input array, except that they have all been converted to ALL CAPS.</li>
  <li>Click <em>HACK</em> when finished.</li>
</ul>
</div>

Inside one of the secure cargo holds in the **Infinite Loop**, you find one of the security nodes you need to disable to reach the TwilioQuest program's electrical engineer. 

This node is currently locked down because of a misbehaving JavaScript function intended to scan the freighter's cargo and normalize the contents for efficient packaging.

You'll need to repair this function in order to hack the node and retrieve the missing index for the **Infinite Loop** master password.

## Change the world - or at least an array

Create a file called `freightMutator.js` in your code folder. Inside this file, [create a JavaScript function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) called `mutate`.

This function should take one argument - an array of strings to be transformed. Your `mutate` function should use the [array "map"](https://javascript.info/array-methods#map) function to take every string in the input array and convert it to ALL CAPS. Your function must then **return the mutated array**.

Your function might be called like this, and return the result described in the example:

```js
const cargo = ['apples', 'ray guns', 'oranges'];

const mutatedCargo = mutate(cargo);
// mutatedCargo should now be ['APPLES', 'RAY GUNS', 'ORANGES']
```

Some example code you can use as a starting point is found on the "Help" tab. 

Once your code is ready, click the *HACK* button to hack this security node and receive a password index you'll need to free the electrical engineer!
