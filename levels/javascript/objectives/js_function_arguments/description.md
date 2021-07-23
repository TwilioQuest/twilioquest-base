# Winning at Arguments

<div class="aside">
<h3>To-Do List</h3>
<ul>
  <li>Create a file called <code>politeLasers.js</code></li>
  <li>Create a function called <code>getLaserSetting</code> that takes a single string argument.</li>
  <li>If the argument is "please", return the string "OFF". Otherwise, return the string "ON".</li>
  <li>Click <em>HACK</em> when finished</li>
</ul>
</div>

This security barrier is also malfunctioning, and before long, you can see why. Your old pal Glen in IT had configured this security barrier to only shut down if asked nicely.

To clear this barrier, you will need to write a function that takes [arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) (also called "parameters"), and execute some basic [boolean logic](https://javascript.info/ifelse).

Read the "Help" section for more information on function arguments. If you need help on using Boolean logic, you may want to conquer the challenges of the lab's **south wing** first.

## Bringing down the barrier

Similar to the previous barrier, this one is powered by a **JavaScript function** that determines if the barrier's lasers are `"ON"` or `"OFF"`. You'll need to **override this function** to disable the laser barrier.

Create a file called `politeLasers.js` in your code folder. Inside this file, [create a JavaScript function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) called `getLaserSetting`, just as you did in the last challenge.

This time, your function must return a different value based on the **first argument** to the `getLaserSetting` function. If the first argument is the string `please`, return `OFF`. If the first argument is anything else, return `ON`.

Once your code is ready, click the *HACK* button to override the laser command function.
