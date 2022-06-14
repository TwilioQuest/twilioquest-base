# Flatten an Array

<div class="aside">
<h3>Requirements</h3>
<ul>
  <li>Create a function called `flattenArray`.</li>
  <li>This function receives an array that may contain numbers, strings, objects, or additional arrays.</li>
  <li>Return a new array that contains all the elements of the input array after being flattened.</li>
  <li>If the input array is empty, return the string "Pure Ducktypium!".</li>
  <li>Once you're done, press <em>HACK</em>.</li>
</ul>
</div>

It looks like this part of the forge is responsible for generating power and distributing it to the rest of the system. This particular terminal is tasked with removing Dark Ducktypium impurities.

Create a function called `flattenArray` that accepts an array containing any number of elements, each of varying types. This function should return a new, flattened (taking all the elements inside sub-arrays, from any depth, and lifting them to the top) array.

<br>

## Examples

- `[]` -> `Pure Ducktypium!`
- `[1, "two", 3, "four"]` -> `[1, "two", 3, "four"]`
- `[1, 3, 3, 7, ["legacy wuz here"]]` -> `[1, 3, 3, 7, "legacy wuz here"]`
- `["python’, ["javascript’, ["api’, ["messaging’]]]]` -> `["python’, "javascript’, "api’, "messaging’]`

<br>

Once you've writen this function, click the _HACK_ button!