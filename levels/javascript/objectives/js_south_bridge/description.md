# Sprinkle, Sprinkle, Little Plant

<div class="aside">
<h3>To-Do List</h3>
<ul>
  <li>Create a file called <code>shouldWater.js</code></li>
  <li>Get two numbers as command line arguments - the first is a tree's life status ID, and the second is its dryness level.</li>
  <li>If the first argument is <code>0</code> AND the second argument is greater than <code>10</code>, print the text <code>WATER</code></li>
</ul>
</div>

Tucked away in the southeast corner of the botany lab, you notice another system that was damaged during the ducktypium incident. It looks like the automated sprinkler system has gone offline, which has also somehow **disabled the south bridge**.

In order to keep the plants hydrated - and to extend the south bridge - you'll need to fix the automated sprinkler system.

## Making it rain

An inspection of the sprinkler system reveals another issue with its boolean logic. To fix it, create a file named `shouldWater.js` in your code folder. This script will take **two command line arguments** - both will be numbers.

* The first argument is a plant's life status - `0` means the plant is alive
* The second is the plant's dryness level - anything above `10` means the plant needs water

An example invocation of your script with a live plant (status `0` ) and dryness level `20` would look like this:

```bash
node shouldWater.js 0 20
```

To make the sprinkler system function properly, this script should print the string `WATER` only if the first argument to the script is `0` and the second argument is a number greater than `10`. It should not print anything otherwise.

Once your code behaves as described above, click the *HACK* button to fix the sprinkler!
