# Let There Be Life

<div class="aside">
<h3>To-Do List</h3>
<ul>
  <li>Create a file called <code>treeLifeDetector.js</code></li>
  <li>If it is passed the number <code>0</code> as a command line argument, print <code>alive</code></li>
  <li>If it is passed any other number as a command line argument, print <code>other</code></li>
</ul>
</div>

While searching for the means to extend the west bridge in the lab, you discover this control panel. Apparently, the west bridge is disabled because the lab's **Tree Life Detector** system has been damaged.

**You'll need to repair the Tree Life Detector** before you can continue onward toward the botanist.

## Fixing the Tree Life Detector

Create a file called `treeLifeDetector.js` in your code folder. This program will take a single **command line argument** - a single-digit `Number` indicating the current life status of a tree. You see a current mapping of tree life status IDs to human-readable strings posted next to the control panel:

| Tree Life Status ID | Tree Status |
| ------------------- | ----------- |
| 0 | "alive" |
| 1 | "other" |
| 2 | "other" |
| 3+ | "other" |

When your script is executed, it should print out the proper human-readable string of text based on the ID number that is passed in.

If the script is executed like this:

```bash
node treeLifeDetector.js 0
```

It should print the string `alive`.

If the script is executed with any other number, like this:

```bash
node treeLifeDetector.js 2
```

It should print the string `other`.

Once your `treeLifeDetector.js` script behaves in this way, click the *HACK* button to validate your repair!
