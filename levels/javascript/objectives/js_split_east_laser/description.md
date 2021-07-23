<%
const worldState = levelState.javascriptWorldState;
const isObjectiveReady = worldState.eastWing && 
  worldState.eastWing.hadSavedConversation;
%>


# Enable Beam 3

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
  <li>Create a file called <code>laserPower.js</code></li>
  <li>Create a function called <code>calculatePower</code> that takes an array of numbers as the only argument.</li>
  <li>Your function must <b>return a number</b>. The number should be the result of transforming and combining the input array as described in the objective.</li>
  <li>Click <em>HACK</em> when finished.</li>
</ul>
<% } else { %>
<ul>
  <li>Find and speak to the electrical engineer in the east wing of the lab</li>
  <li>Return here to enable beam 3</li>
</ul>
<% } %>
</div>

<% if (isObjectiveReady) { %>

After you input the electrical engineer's passcode, the display comes to life and you start to troubleshoot the systems connected to Beam 3.

It looks like the beam was knocked offline due to an error in how it calculates the power to send through the laser beam. This logic is governed by a JavaScript function that you'll need to fix.

You'll have to draw on everything you've learned about arrays to overcome this challenge.

## Restarting the beam

Create a file called `laserPower.js` in your code folder. Inside this file, [create a JavaScript function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) called `calculatePower`.

This function should take one argument - an array of numbers. This array contains the aggregate power settings for the laser, but the input numbers are off by a little bit.  

Your `calculatePower` function should first adjust all the values in the input array by **multiplying them by two**. Afterward, you must **add all those numbers together**, and **return the result** from your function.

Once your code is ready, click the *HACK* button to bring this laser back online!

<% } else { %>

You examine the controls of this stasis beam, but they're currently locked down. You'll need **the electrical engineer's access code** in order to enable this laser.

The electrical engineer is most likely aboard the supply freighter docked in the lab's **east wing**. They had been processing a new shipment of supplies when the explosion hit.

**Speak to the electrical engineer** to receive the access code for this beam.

<% } %>
