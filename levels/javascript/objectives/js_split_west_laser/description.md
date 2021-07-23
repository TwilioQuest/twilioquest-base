<%
const worldState = levelState.javascriptWorldState;
const isObjectiveReady = worldState.beamTwoOnline &&
  worldState.beamThreeOnline &&
  worldState.beamFourOnline;
%>

# Enable the Final Beam

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
  <li>Create a file called <code>ducktypium.js</code></li>
  <li>Create a <code>Ducktypium</code> class as described in the objective, using all the skills you have learned.</li>
  <li>Click <em>HACK</em> once you have finished to reverse the experiment!</li>
</ul>
<% } else { %>
<ul>
  <li>Find the three lost scientists in the lab and get their activation codes</li>
  <li>Use the activation codes to enable beams 2, 3, and 4</li>
  <li>Return here to enable the final beam</li>
</ul>
<% } %>
</div>

<% 
if (isObjectiveReady) {
%>

With the other three beams online, you now have the opportunity to **reverse the failed experiment** and save reality as we know it!

You busily scan the controls of the primary beam to analyze the problem in the previous experiment. It looks like the lead scientist's calculations were indeed correct, and it should have worked as planned. The explosion was actually caused by another error, which **appears to be deliberate sabotage!** You vow to uncover the culprit behind this sabotage, but for now, you return your attention to the task at hand.

The sabotaged JavaScript file was deleted with no backup that you can find. You'll need to create a replacement for this important utility. The file in question describes the properties of ducktypium, and performs a number of tasks related to the crystal stabilization process.

## The Ducktypium Class

In your code folder, create a file named `ducktypium.js`. Inside of it, create a class called `Ducktypium`. The constructor should take a single string argument, a crystal color, and store that data in an instance variable named `color`. The **color can only be `red`, `blue`, or `yellow`**. The constructor should [throw an error](https://javascript.info/try-catch#throwing-our-own-errors) if the argument is any other string.

When the class is created, it should **also define a property** called `calibrationSequence` that is initally set to be an **empty array**.

The Ducktypium class must implement two instance methods: `refract` and `calibrate`. Each of these functions will be described below.

## The `refract` method

One of the required methods describes the refractive properties of ducktypium when it is exposed to colored light.

The `refract` method must take a single string argument, which must be one of `red`, `blue`, or `yellow`. The method should [throw an error](https://javascript.info/try-catch#throwing-our-own-errors) if the argument is any other string, just like the constructor. This function should **return a single string**, which is the color produced by the combination of the instance's `color` property and the color passed in to the `refract` function.

* If the instance's `color` property is the same as the argument passed in, return that value
* If the combination of colors is different, it should return a string which is the combination of those two [primary colors](https://en.wikipedia.org/wiki/Primary_color). 

For reference, primary colors combine in the following ways:

* <span style="color:red">red</span> + <span style="color:blue">blue</span> = <span style="color:purple">purple</span>
* <span style="color:red">red</span> + <span style="color:#ad9400">yellow</span> = <span style="color:orange">orange</span>
* <span style="color:#ad9400">yellow</span> + <span style="color:blue">blue</span> = <span style="color:green">green</span>

## The `calibrate` method

The other required method creates a calibration sequence required to stabilize a ducktypium crystal.

The `calibrate` method takes a single argument, an array of numbers. With this input array, you must do the following:

* Sort the numbers from smallest to largest
* Multiply each number in the array by `3`
* Assign the resulting array to the `Ducktypium` instance's `calibrationSequence` variable.

## Example usage

When completed, your Ducktypium class should behave as in the following example.

```js
// The following would produce an error
try {
  const badColor = new Ducktypium('pink');
} catch(e) {
  console.log('Color must be red, yellow, or blue!');
}

// Create a new instance of the class
const dt = new Ducktypium('red');

console.log(dt.color); // prints 'red'

console.log(dt.refract('blue')); // prints 'purple'
console.log(dt.refract('red')); // prints 'red'

dt.calibrate([3, 5, 1]);

console.log(dt.calibrationSequence); // prints [3, 9, 15]
```

Example code you may use as a starting point may be found on the Help tab. This will take all your JavaScript skills, but you can do it! The fate of The Cloud hangs in the balance.

When your `ducktypium.js` script is ready, click the *HACK* button to reverse the experiment!

<% } else { %>
To reverse the failed ducktypium experiment, you must **bring all four stasis beams back online**, including this one (Beam 1). Beams 2, 3, and 4 must go back online first before this beam can be enabled.

The lead scientist has told you that **her colleagues have the activation codes** required to restart the other three lasers. Search the rest of the lab for these three scientists, and **use their codes** to restart the other lasers in this room.

Once the other three beams are back online, **return here to enable the final beam**.
<% } %>
