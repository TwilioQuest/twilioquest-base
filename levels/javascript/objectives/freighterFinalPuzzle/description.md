<%
const worldState = levelState.javascriptWorldState;
%>

# The Master Password

<div class="aside">
<h3>To-Do List</h3>
<ul>
  <li>Recover six indexes which will reveal the six characters in the <b>Infinite Loop</b>'s master password.</li>
  <li>The indexes can be found by hacking <b>security nodes</b> inside the freighter.</li>
  <li>After recovering all six indexes, use them to find the correct letters for the password in the 2D array below.</li>
  <li>Click <em>HACK</em> to test the password.</li>
</ul>
</div>

Beyond the barrier, you can see the TwilioQuest research team's **electrical engineer**! She has one of the activation codes you need to restart the ducktypium experiment. However, she is still trapped behind a barrier that is different from the others aboard the **Infinite Loop**.

This barrier requires a special 6-letter **master password**. The clues you need to decipher the password can be found by exploring the rest of the ship, and hacking into the **security nodes** present in the ship's six secure cargo holds. Once you have hacked all six security nodes, you may return here and attempt to guess the password.

## Deciphering the password

The **Infinite Loop**'s master password is six characters long. Each character in the password can be found in the following [two-dimensional array](https://medium.com/javascript-in-plain-english/javascript-multi-dimensional-arrays-7186e8edd03).

```js
const passwordArray = [
  ['Q', 'W', 'E', 'R', 'T', 'Y'],
  ['A', 'S', 'D', 'F', 'G', 'H'],
  ['Z', 'X', 'C', 'V', 'B', 'N'],
  ['U', 'I', 'O', 'P', '!', '@'],
  ['H', 'J', 'K', 'L', '#', '$'],
  ['M', '%', '^', '&', '*', '?']
];
```

Each **security node** inside the freighter contains an index within this array for one character of the password. The index will be given to you in the form `[x][y]`, where `x` is the numerical index of the "row" the character is in, and `y` is the numerical index of the "column" the character is in. Here are the indexes you have found so far:
<%
// Password is "F!N!TE"
const nodes = worldState.eastWingSecNodes || [];
const ii = [
  nodes[0] ? '`[1][3]`' : 'Not Found',
  nodes[1] ? '`[3][4]`' : 'Not Found',
  nodes[2] ? '`[2][5]`' : 'Not Found',
  nodes[3] ? '`[3][4]`' : 'Not Found',
  nodes[4] ? '`[0][4]`' : 'Not Found',
  nodes[5] ? '`[0][2]`' : 'Not Found'
];
%>

| 1st Char | 2nd Char | 3rd Char | 4th Char | 5th Char | 6th Char |
| -------- | -------- | -------- | -------- | -------- | -------- |
| <%= ii[0] %> | <%= ii[1] %> | <%= ii[2] %> | <%= ii[3] %> | <%= ii[4] %> | <%= ii[5] %> |

Once you have found all six indexes, return here and use them to decipher the password!
