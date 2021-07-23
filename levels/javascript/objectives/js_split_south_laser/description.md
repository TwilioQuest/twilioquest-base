<%
const worldState = levelState.javascriptWorldState;
const isObjectiveReady = worldState.southWing && 
  worldState.southWing.hadSavedConversation;
%>

# Enable Beam 2

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
  <li>Create a file called <code>sortOrder.js</code></li>
  <li>It must take two command line arguments, which you must compare</li>
  <li>Your script should print <code>-1</code>, <code>0</code>, or <code>1</code> as described below, based on alphabetical order</li>
</ul>
<% } else { %>
<ul>
  <li>Find and speak to the botanist in the south wing of the lab</li>
  <li>Return here to enable beam 2</li>
</ul>
<% } %>
</div>

<% if (isObjectiveReady) { %>

Using the botanist's activation code, you access the controls for this stasis beam. After running a quick diagnostic routine, you see that the laser is missing a key piece of functionality - a script that **sorts strings in alphabetical order**.

You'll need to rewrite this sorting script in order to restart the laser.

## Getting things sorted

In your code folder, create a script called `sortOrder.js`. This script will take **two command line arguments** - a pair of strings that should be compared to see which one comes first alphabetically (letter casing is not important).

To test your script, you would execute it like this:

```bash
node sortOrder.js cats dogs
```

Your script should determine if the first string is before, after, or in the same position (equal) to the second string, alphabetically. For each case, you should print out a number with `console.log` as described below.

* When the first argument is **earlier** in the alphabet than the second, your script should print `-1`.
* When the first argument is the **same** as the second, your script should print `0`.
* When the first argument is **later** in the alphabet than the second, your function should print `1`.

When your script implements this comparison functionality, click the *HACK* button to restart this laser!

<% } else { %>

You examine the controls of this stasis beam, but they're currently locked down. You'll need **the botanist's access code** in order to enable this laser.

The botanist is most likely in the lab's **south wing**, where they had previously been studying the effect of ducktypium on plant life.

**Speak to the botanist** to receive the access code for this beam.

<% } %>
