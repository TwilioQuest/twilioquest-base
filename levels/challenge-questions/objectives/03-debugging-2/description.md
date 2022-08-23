# Dark Ducktypium Radiation Counter

<div class="aside">
<h3>Requirements</h3>
<ul>
  <li>Inspect the function in the QuestIDE.</li>
  <li>Fix all bugs in the code.</li>
  <li>Once you're done, press <em>HACK</em>.</li>
</ul>
</div>

It looks like this section of the forge repairs the software bugs caused by exposure to raw Dark Ducktypium. This program in particular seems to be responsible for counting the total radiation in the reservoirs.

## The sumRadLevels Function

The `sumRadLevels` function takes an array of reservoir objects. These objects contain a bunch of metadata describing the state of the reservoirs.

Each reservoir object has a `radiation` property with an object value. This `radiation` object has a `radsCountCurrent` value indicating the current amount of radiation.

This function should return the total radiation for each reservoir summed together.

Once you've fixed the bugs in this function, click the _HACK_ button!
