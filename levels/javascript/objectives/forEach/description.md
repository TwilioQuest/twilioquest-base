# For Each Their Own

<div class="aside">
<h3>To-Do List</h3>
<ul>
  <li>Create a file called <code>freightScanner.js</code></li>
  <li>Create a function called <code>scan</code> that takes an array of strings as an argument.</li>
  <li>Your function must <b>return a number</b>, the total number of times the string <code>contraband</code> appeared in the input array.</li>
  <li>Click <em>HACK</em> when finished.</li>
</ul>
</div>

Inside one of the secure cargo holds in the **Infinite Loop**, you find one of the security nodes you need to disable. This node is currently locked down because of a misbehaving JavaScript function that is intended to scan the freighter's cargo for suspicious contents. 

You'll need to repair this function in order to hack the node and retrieve the missing index for the **Infinite Loop** master password.

## Papers, please

Create a file called `freightScanner.js` in your code folder. Inside this file, [create a JavaScript function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) called `scan`.

This function should take a single argument - an array of strings. Your `scan` function must loop through all the strings in this array, and examine each one using [boolean logic](https://javascript.info/ifelse). 

If a string in the array is equal to the value `contraband`, then you should [increment](https://javascript.info/operators#increment-decrement) a number which would represent the number of times you have found `contraband`. Once you have looped through the entire array, **return the number of times you found the string `contraband` within the array**.

Some example code you can use as a starting point is found on the "Help" tab. 

Once your code is ready, click the *HACK* button to hack this security node and receive a password index you'll need to free the electrical engineer!
