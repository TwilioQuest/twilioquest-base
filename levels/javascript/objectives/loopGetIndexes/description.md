# Constant Vigilance

<div class="aside">
<h3>To-Do List</h3>
<ul>
  <li>Create a file called <code>freightScanner2.js</code></li>
  <li>Create a function called <code>scan</code> that takes an array of strings as an argument.</li>
  <li>Your function must <b>return an array of numbers</b>. The array must contain the indexes of all occurrences of the string <code>contraband</code> in the input array.</li>
  <li>Click <em>HACK</em> when finished.</li>
</ul>
</div>

Inside one of the secure cargo holds in the **Infinite Loop**, you find one of the security nodes you need to disable to reach the TwilioQuest program's electrical engineer. 

This node is currently locked down because of a misbehaving JavaScript function intended to scan the freighter's cargo for suspicious contents.

You'll need to repair this function in order to hack the node and retrieve the missing index for the **Infinite Loop** master password.

## Implementing the scanner

Create a file called `freightScanner2.js` in your code folder. Inside this file, [create a JavaScript function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) called `scan`.

This function should take a single argument - an array of strings. Your `scan` function must loop through all the strings in this array, and examine each one using [boolean logic](https://javascript.info/ifelse).

If a string in the input array is equal to the value `contraband`, add the [index](https://javascript.info/array#declaration) of that item to an **output array**. When you have finished scanning the entire input array, **return the output array**, which should contain all the indexes of suspicious items in the array.

For example, given an input array of:

```js
['contraband', 'apples', 'cats', 'contraband', 'contraband']
```

Your function should return the array:

```js
[0, 3, 4]
```

This list contains the position inside the input array of all the `contraband` strings.

Some example code you can use as a starting point is found on the "Help" tab. 

Once your code is ready, click the *HACK* button to hack this security node and receive a password index you'll need to free the electrical engineer!
