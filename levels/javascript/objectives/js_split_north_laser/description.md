<%
const worldState = levelState.javascriptWorldState;
const isObjectiveReady = worldState.northWing &&
worldState.northWing.hadSavedConversation;
%>

# Enable Beam 4

<style>
table.lasers {
  margin-top: 10px;
}
table.lasers th, table.lasers td {
  text-align: center !important;
}
table.lasers td span {
  font-weight: bold;
}
table.lasers td span.on {
  color: green;
}
table.lasers td span.off {
  color: red;
}
</style>

<table class="lasers">
  <tr>
    <th>BEAM 1</th>
    <th>BEAM 2</th>
    <th>BEAM 3</th>
    <th>BEAM 4</th>
  </tr>
  <tr>
    <td>
      <% if (worldState.beamOneOnline) { %>
        <span class="on">ONLINE</span>
      <% } else { %>
        <span class="off">OFFLINE</span>
      <% } %>
    </td>
    <td>
      <% if (worldState.beamTwoOnline) { %>
        <span class="on">ONLINE</span>
      <% } else { %>
        <span class="off">OFFLINE</span>
      <% } %>
    </td>
    <td>
      <% if (worldState.beamThreeOnline) { %>
        <span class="on">ONLINE</span>
      <% } else { %>
        <span class="off">OFFLINE</span>
      <% } %>
    </td>
    <td>
      <% if (worldState.beamFourOnline) { %>
        <span class="on">ONLINE</span>
      <% } else { %>
        <span class="off">OFFLINE</span>
      <% } %>
    </td>
  </tr>
</table>

<div class="aside">
<h3>To-Do List</h3>
<% 
if (isObjectiveReady) {
%>
<ul>
  <li>Create a file called <code>targetingSolution.js</code></li>
  <li>Create a class called <code>TargetingSolution</code> using the specification in this objective</li>
</ul>
<% } else { %>
<ul>
  <li>Find and speak to the theoretical physicist, who is trapped in the north wing of the lab</li>
  <li>Return here to enable beam 4</li>
</ul>
<% } %>
</div>

<% if (isObjectiveReady) { %>

After you input the physicist's passcode, the display comes to life and you start to troubleshoot the systems connected to Beam 4.

It looks like this beam's targeting systems were damaged during the accident. To restart this beam, you'll need to implement a new targeting mechanism for the laser using [JavaScript classes](https://javascript.info/class) and [object literals](https://javascript.info/object#literals-and-properties).

## Restarting the beam

Create a file called `targetingSolution.js` in your code folder. Inside this file, [create a JavaScript class](https://javascript.info/class) called `TargetingSolution`. This class will store targeting information for the laser, and provide a formatted string containing the target coordinates.

This class's constructor should take one argument - an object literal containing the precise x, y, and z coordinates of the target within the 3D space of the lab.

Your `TargetingSolution` constructor should store the the following three properties as instance variables from the configuration object.

| property | type          |
| -------- | ------------- |
| x   | number        |
| y    | number |
| z    | number |

In addition, your class must implement an instance function called `target` which returns a formatted string containing the instance's target coordinates in the format `(x, y, z)`, including the parens, spaces, and commas.

Here is example usage of the class you must create.

```js
const sln = new TargetingSolution({
  x: 45,
  y: 12,
  z: -1
});

console.log(sln.target()); // Should output a string of (45, 12, -1)
```

**Note that your target function must use the exact formatting and spacing as shown!**

As always, code you can use as a starting point can be found on the Help tab. Once your code is ready, click the *HACK* button to bring this laser back online!

<% } else { %>

You examine the controls of this stasis beam, but they're currently locked down. You'll need **the theoretical physicist's access code** in order to enable this laser.

The theoretical physicist is most likely in the lab's **north wing**, where they had been studying the ability of ducktypium to bend spacetime and manipulate matter.

**Speak to the theoretical physicist** to receive the access code for this beam.

<% } %>
