<%
const worldState = levelState.javascriptWorldState;
const isObjectiveReady = worldState.northWing && 
  worldState.northWing.hadSavedConversation;
%>

# Objective Help

<% if (isObjectiveReady) { %>

In this objective, you will need to combine what you learned about objects and classes in the north wing of the lab to create a solution.

In this exercise, you need to [create a class](https://javascript.info/class) based on the specification in the objective.

Create a file called `targetingSolution.js` in your code folder. Your code folder is located here:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

In this file, you must create a class called `TargetingSolution`. Here is some code you can use as a starting point - it already has the class defined, but doesn't yet work as described in the objective:

```js
class TargetingSolution {
  constructor(config) {
    // your code here
  }

  // your code here
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const m = new TargetingSolution({
  x: 10,
  y: 15,
  z: 900
});

console.log(m.target()); // would print "(10, 15, 900)"
```

When your function works as directed in the objective, click the *HACK* button to validate your work. You can do this!

## Useful links

* [JavaScript.info - Classes](https://javascript.info/class)
* [MDN - Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
* [JavaScript.info - Object literal notation](https://javascript.info/object#literals-and-properties)
* [MDN - Object Initialization](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)


<% } else { %>

You examine the controls of this stasis beam, but they're currently locked down. You'll need **the theoretical physicist's access code** in order to enable this laser.

The theoretical physicist is most likely in the lab's **north wing**, where they had been studying the ability of ducktypium to bend spacetime and manipulate matter.

**Speak to the theoretical physicist** to receive the access code for this beam.

<% } %>
