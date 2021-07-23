<%
const worldState = levelState.javascriptWorldState;
const isObjectiveReady = worldState.southWing && 
  worldState.southWing.hadSavedConversation;
%>


# Restarting The Laser

<% if (isObjectiveReady) { %>

After learning about conditional logic in the south wing, you're ready to take on this challenge! Create a file named `sortOrder.js` in your code folder, located here:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

Use the following code as a starting point:

```js
const firstValue = process.argv[2];
const secondValue = process.argv[3];

// Your comparison code (if statements) go here
```

Your code will need to print out one of three numbers, based on whether the first value is before, the same as, or after the second value alphabetically. If your script were executed like this:

```bash
node sortOrder.js cats dogs
```

It should print `-1`, since `cats` comes before `dogs` alphabetically. If it were executed like this:

```bash
node sortOrder.js cats CATS
```

It should print `0`, since the strings `cats` and `CATS` are alphabetically equivalent. Finally, if it were executed like this:

```bash
node sortOrder.js dogs cats
```

It should print `1`, since `dogs` comes after `cats` alphabetically.


Your code will need to [compare strings with alphabeitcally, as demonstrated here](https://javascript.info/comparison#string-comparison). Also, you may need to convert the strings to the same case before comparison using [toLowerCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase).

This should be very similar to the tasks you needed to complete in the south wing of the lab - go back and reference that code if you need to.

Click *HACK* when your script behaves as described in the Objective. You can do this!

## Useful Resources

* [MDN conditionals reference](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
* [JavaScript.info - string comparison](https://javascript.info/comparison#string-comparison)

<% } else { %>

You examine the controls of this stasis beam, but they're currently locked down. You'll need **the botanist's access code** in order to enable this laser.

The botanist is most likely in the lab's **south wing**, where they had previously been studying the effect of ducktypium on plant life.

**Speak to the botanist** to receive the access code for this beam.

<% } %>
