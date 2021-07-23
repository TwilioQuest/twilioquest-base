# First Class

<div class="aside">
<h3>To-Do List</h3>
<ul>
  <li>Create a file called <code>classes.js</code>.</li>
  <li>Create a class called <code>Materializer</code> that takes a single string argument.</li>
  <li>Your function must return an object as described below.</li>
</ul>
</div>

The north wing of the lab contains a strange device in the center of the room, the purpose of which was not immediately obvious when you entered. Inspecting the console in front of you, you deduce that this is a control panel for a **matter instantiator**. That must be the large chamber in the center of the room!

The console, however, is filled with error logs indicating that it was damaged during the lab explosion. If you can get this console (and another just like it) back online, the chamber in the middle of the lab should be functional again.

## Fixing the console with class

In order to fix this component of the matter instantiator, you must override as piece of JavaScript code that provides a configuration object used in the transformation process.

Create a file called `classes.js` in your code folder. Inside that file, [create a class](https://javascript.info/class) called `Materializer`.

It should have:

- a property called `target` that is set equal to the first argument of the constructor
- an `activated` property that defaults to `false`
- an instance function called `activate` that sets `activated` to true
- an instance function called `materialize` that returns the value of an instance's `target` property if the `activated` property is set to true. Otherwise, it returns `undefined` (nothing is returned).

When you have created a `Materializer` class which meets the criteria above, click *HACK* to validate your work!
