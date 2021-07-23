# Opening the supply chest

<div class="aside">
<h3>To-Do List</h3>
<ul>
  <li>Create a file called <code>chestConfiguration.js</code></li>
  <li>Declare three variables as described in the table below</li>
  <li><em>HACK</em> when finished</li>
</ul>
</div>

You notice a chest with supplies intended for Operators in the TwilioQuest program (like you). It should be freely accessible, but it's currently locked down. To access these supplies, you can employ the **configuration override method you used earlier**.

Create a file called `chestConfiguration.js` in your code folder. Inside this file, declare the following variables to override the security settings for this chest:

| Variable Name | Value |
| ------------- | ----- |
| `verifiedUser` | A [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) value `true` |
| `accessLevel` | A [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) value of `7` |
| `favoriteRobot` | A [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) value set to `Cedric` |

Once you have done this, click the *HACK* button to check your work and override the laser setting for this security barrier.
