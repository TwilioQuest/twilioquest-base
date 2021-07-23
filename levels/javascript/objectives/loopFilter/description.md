# Filter Out The Noise

<div class="aside">
<h3>To-Do List</h3>
<ul>
  <li>Create a file called <code>freightFilter.js</code></li>
  <li>Create a function called <code>scanAndFilter</code> that takes an array of strings as the first argument, and string as the second.</li>
  <li>Your function must <b>return an array of strings</b>. The array should contain all the items in the input array, except for any occurrences of the string specified by the second argument to your function.</li>
  <li>Click <em>HACK</em> when finished.</li>
</ul>
</div>

Inside one of the secure cargo holds in the **Infinite Loop**, you find one of the security nodes you need to disable to reach the TwilioQuest program's electrical engineer. 

This node is currently locked down because of a misbehaving JavaScript function intended to scan the freighter's cargo and filter out any suspicious contents.

You'll need to repair this function in order to hack the node and retrieve the missing index for the **Infinite Loop** master password.

## Scan and filter

Create a file called `freightFilter.js` in your code folder. Inside this file, [create a JavaScript function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) called `scanAndFilter`.

This function should take two arguments - an array of strings, and a string of text to filter out from that array. Your `scanAndFilter` function should use the [array filter](https://javascript.info/array-methods#filter) function for this purpose. Your function must then **return the filtered array**.

Your function might be called like this, and return the result described in the example:

```js
const cargo = ['apples', 'ray guns', 'oranges', 'tacos', 'ray guns'];

const filteredCargo = scanAndFilter(cargo, 'ray guns');
// filteredCargo should now be ['apples', 'oranges', 'tacos']
```

Some example code you can use as a starting point is found on the "Help" tab. 

Once your code is ready, click the *HACK* button to hack this security node and receive a password index you'll need to free the electrical engineer!
