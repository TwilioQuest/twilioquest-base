# Dark Ducktypium Reservoir Monitor

<div class="aside">
<h3>Requirements</h3>
<ul>
  <li>Inspect the function in the QuestIDE.</li>
  <li>Fix all bugs in the code.</li>
  <li>Once you're done, press <em>HACK</em>.</li>
</ul>
</div>

It looks like this section of the forge was created to repair some of the bugs introduced to programs by exposure to raw Dark Ducktypium. This program seems to be responsible for detecting when a reservoir of Dark Ducktypium has been overfilled.

The function takes an array of reservoir objects. These reservoir objects contain a bunch of metadata properties describing their state. One important property for this function is the `contents` property. This is a number showing how much ducktypium is in the reservoir. This program should also check the `type` property of a reservoir. Only type `"raw"` reservoirs should be filtered out if their `contents` are reach or exceed 100.

Once you've fixed the bugs in this function, click the _HACK_ button!
