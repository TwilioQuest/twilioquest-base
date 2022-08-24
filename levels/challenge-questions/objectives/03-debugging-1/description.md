# Dark Ducktypium Reservoir Monitor

<div class="aside">
<h3>Requirements</h3>
<ul>
  <li>Inspect the function in the QuestIDE.</li>
  <li>Fix all bugs in the code.</li>
  <li>Once you're done, press <em>HACK</em>.</li>
</ul>
</div>

It looks like this section of the forge repairs the software bugs caused by exposure to raw Dark Ducktypium. This program in particular seems to be responsible for detecting when a reservoir of Dark Ducktypium has overfilled.

## The monitorReservoirs Function

The `monitorReservoirs` function takes an array of reservoir objects. These objects contain a bunch of metadata describing the state of the reservoirs.

The two properties important for this function are `contents` and `type`.

- `contents` is a number showing how much ducktypium in the reservoir
- `type` is a string indicating the variety of ducktypium in the reservoir

Only reservoirs with a `type` of `"raw"` that have 100 or more ducktypium in their `contents` should be returned in an array by this function.

Once you've fixed the bugs in this function, click the _HACK_ button!
