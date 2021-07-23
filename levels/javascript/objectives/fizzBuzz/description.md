# A Faint Buzzing Sound

<div class="aside">
<h3>To-Do List</h3>
<ul>
  <li>Create a file called <code>fizzBuzz.js</code></li>
  <li>Get a number as a command line argument</li>
  <li>Print <code>Java</code>, <code>Script</code>, <code>JavaScript</code>, or the number its self as described in the table below.</li>
</ul>
</div>

In a largely empty section of the botany lab, you find a dusty old chest. It has clearly not been opened for some time, and you can't help but wonder what might be inside.

A quick inspection of the lock mechanism suggests that its internal heuristics may be corrupted. Replacing them with a working program may help to open the lock.

## Fixing the chest's lock mechanism

Create a file called `fizzBuzz.js` in your code folder. Your program must take a single command line argument, which is an integer number. An example invocation might look like this:

```bash
node fizzBuzz.js 15
```

Your program must print one of four things, depending on the number passed in. Here is what your program should print, and under what circumstances:

| Input Number | Printed Value |
| ------------ | ------------- |
| Divisible by 3          | "Java"          |
| Divisible by 5          | "Script"        |
| Divisible by 3 AND 5    | "JavaScript"    |
| NOT divisible by 3 OR 5 | Input Number |

For example:

* If the argument is `3`, your program should print `Java`
* If the argument is `5`, your program should print `Script`
* If the argument is `15`, your program should print `JavaScript`
* If the argument is `7`, your program should print `7`

Once your program works as described above, click the *HACK* button!
