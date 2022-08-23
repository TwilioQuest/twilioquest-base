# Dark Ducktypium Diagnostics

<div class="aside">
<h3>Requirements</h3>
<ul>
  <li>Inspect the function in the QuestIDE.</li>
  <li>Fix all bugs in the code.</li>
  <li>Once you're done, press <em>HACK</em>.</li>
</ul>
</div>

It looks like this section of the forge repairs the software bugs caused by exposure to raw Dark Ducktypium. This program in particular seems to produce diagnostic information for the reservoirs.

## The findLongestDiagnosticUrl Function

The `findLongestDiagnosticUrl` function takes an array of reservoir objects. These objects contain a bunch of metadata describing the state of the reservoirs.

Each reservoir object has a [corresponding diagnostic URL](https://www.twilio.com/quest/ducktypium-diagnostics). Metadata from the reservoir is put into the query params of the URL to display correct information.

This function should return the longest diagnostic URL from the list of provided URLs.

Once you've fixed the bugs in this function, click the _HACK_ button!
