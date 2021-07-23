# Complex Conditions

<div class="aside">
<h3>To-Do List</h3>
<ul>
  <li>Create a file called <code>enhancedLifeDetector.js</code></li>
  <li>Print out the appropriate tree life status depending on which command line argument your script receives (see table below)</li>
</ul>
</div>

The final bridge separating you from the botanist is also disabled. Similar to the west bridge, this one has failed because the **Tree Life Detector** is under configured.

This time, you'll need to create an enchanced version of the Tree Life Detector script to extend the bridge.

## An enhanced Tree Life Detector

Create a file called `enhancedLifeDetector.js` in your code folder. This program will take a single **command line argument** - a single-digit `Number` indicating the current life status of a tree. It then prints out a human-readable string of text indicating the current status of a tree.

Nearby, you see a mapping of tree life status IDs to human-readable strings with more statuses than just `alive` and `other`:

| Tree Life Status ID | Tree Status |
| ------------------- | ----------- |
| 0 | "alive" |
| 1 | "flowering" |
| 2 | "shedding" |
| 3+ | "other" |

When your script is executed, it should print out the proper human-readable string of text based on the ID number that is passed in.

If the script is executed like this:

```bash
node treeLifeDetector.js 2
```

It should print the string `shedding`. If the number passed in is not 0, 1, or 2, your script should print `other`.

To complete this challenge, you'll need to employ more complex boolean logic than you did previously. Check the **Help** section for more details.

Once your `enhancedLifeDetector.js` script behaves in this way, click the *HACK* button to validate your work!
