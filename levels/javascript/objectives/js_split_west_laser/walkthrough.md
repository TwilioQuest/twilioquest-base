<%
const worldState = levelState.javascriptWorldState;
const isObjectiveReady = worldState.beamTwoOnline &&
  worldState.beamThreeOnline &&
  worldState.beamFourOnline;
%>

# Objective Help

<% 
if (isObjectiveReady) {
%>

This task will require everything you have learned about JavaScript so far! Classes, array methods, and boolean logic will all be required.

Create a file called `ducktypium.js` in your code folder. Your code folder is located here:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

In this file, you must create a class called `Ducktypium`. Here is some code you can use as a starting point - it already has the class defined, but doesn't yet work as described in the objective:

```js
class Ducktypium {
  constructor(color) {
    // your code here
  }

  // your code here
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const dt = new Ducktypium('red');

console.log(dt.color); // prints 'red'

console.log(dt.refract('blue')); // prints 'purple'
console.log(dt.refract('red')); // prints 'red'

dt.calibrate([3, 5, 1]);

console.log(dt.calibrationSequence); // prints [3, 9, 15]
```

Remember that you can revisit the other wings of the lab to practice any of the skills you learned before.

Once you have implemented the `Ducktypium` class as described in the objective, click *HACK* and reverse the experiment! You've got this!

## Helpful Links

* [JavaScript.info - Full Reference](https://javascript.info/)
* [MDN JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction)

<% } else { %>
You won't be able to complete this objective until you:

1. Find the three lost scientists
1. Use their activation codes to enable the three other beams in this room

Explore the rest of the lab - one scientist each can be found in the areas to the south, east, and west of the main experiment room (the one you are in right now).

Once the other three beams are back online, **return here to enable the final beam**.
<% } %>