# Literally an Object

<div class="aside">
<h3>To-Do List</h3>
<ul>
  <li>Create a file called <code>construction.js</code>.</li>
  <li>Create a function called <code>construct</code> that takes a single string argument.</li>
  <li>Your function must return an object as described below.</li>
</ul>
</div>

The north wing of the lab contains a strange device in the center of the room, the purpose of which was not immediately obvious when you entered. Inspecting the console in front of you, you deduce that this is a control panel for a **matter instantiator**. That must be the large chamber in the center of the room!

The console, however, is filled with error logs indicating that it was damaged during the lab explosion. If you can get this console (and another just like it) back online, the chamber in the middle of the lab should be functional again.

## Create an Object Literal

The matter instantiator is capable of creating new objects from thin air! The JavaScript function you'll need to fix in this objective is responsible for manufacturing objects also, using [object literal notation](https://javascript.info/object#literals-and-properties).

Create a file called `construction.js` in your code folder. Inside that file, create a function called `construct` that returns an [object literal](https://javascript.info/object#literals-and-properties) with the following properties:

| Property | Type    | Value   | Notes                                                                 |
| -------- | ------- | ------- | --------------------------------------------------------------------- |
| name     | string  | See Notes    | This will be the first argument passed to your `construct` function |
| material | string  | 'human' |                                                                       |
| assemble | boolean | true    |                                                                       |
| duration | number  | 1000    |                                                                       |

When you have written a function that can perform the task described above, click the *HACK* button!