# Guide Cedric to the Temple

<div class="aside">
<h3>Requirements</h3>
<ul>
  <li>Enter a list of up, down, left, and right instructions to guide Cedric to the temple entrance.</li>
  <li>Once you're done, press <em>HACK</em>.</li>
</ul>
</div>

Cedric is out searching for the Dark Ducktypium Helm, but his optical sensors have gone offline. He needs you to give him instructions on how to follow the path into the temple door.

To guide Cedric, you'll need to create a list of instructions. The valid instructions are `up`, `down`, `left`, and `right`. Each of these will tell Cedric to move one square on the path.

For example, to tell Cedric to move right once and then down twice you would enter the string: `right down down`. The instructions `up down left right` would have Cedric end up right where he started.

<% const imagePath = await resolveAbsolutePath("images/challenge-questions/turtle_x4.png") %>

![Path for cedric to walk to the temple](<%= imagePath %>)

Once you've written out Cedric's instructions in the input on the right, click the _HACK_ button!
