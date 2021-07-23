<%
const worldState = levelState.javascriptWorldState;
const isObjectiveReady = worldState.eastWing && 
  worldState.eastWing.hadSavedConversation;
%>

# Objective Help

<% if (isObjectiveReady) { %>

To complete this objective, you'll have to combine several techniques you learned while saving the electrical engineer from the **Infinite Loop**.

Create a file called `laserPower.js` in your code folder. Your code folder is located here:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

In this file, you must create a function called `calculatePower`. Here is some code you can use as a starting point - it already has the function defined, but doesn't yet work as described in the objective:

```js
function calculatePower(powerSettings) {
  let totalPower = 0;

  return totalPower;
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const laserPower = calculatePower([1, 3, 8]);
console.log('Required laser power is ' + laserPower); // should be 24
```

All the skills you need to overcome this challenge were required to get you to this point. You can do this!

Once your `calculatePower` function works as described in the Objective, click the *HACK* button.

## Useful links

* [JavaScript.info - Array reduce function](https://javascript.info/array-methods#reduce-reduceright)
* [JavaScript.info - Array map function](https://javascript.info/array-methods#map)
* [JavaScript.info - if statements](https://javascript.info/ifelse)
* [JavaScript.info - Returning values from functions](https://javascript.info/function-basics#returning-a-value)
* [MDN - Function Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

<% } else { %>

You examine the controls of this stasis beam, but they're currently locked down. You'll need **the electrical engineer's access code** in order to enable this laser.

The electrical engineer is most likely aboard the supply freighter docked in the lab's **east wing**. They had been processing a new shipment of supplies when the explosion hit.

**Speak to the electrical engineer** to receive the access code for this beam.

<% } %>
