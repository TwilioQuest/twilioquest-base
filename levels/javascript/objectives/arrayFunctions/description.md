# Get Your Items in Order

<div class="aside">
<h3>To-Do List</h3>
<ul>
  <li>Create a file called <code>getFirstAmountSorted.js</code></li>
  <li>Create a function called <code>getFirstAmountSorted</code> that behaves as described in the objective below.</li>
  <li>Click <em>HACK</em> when finished.</li>
</ul>
</div>

After stepping aboard the **Infinite Loop**, you see that the explosion has also caused several of their own systems to malfunction, including this barrier. You'll have to fix some of the array processing code aboard the ship in order to access the areas within.

You find the bit of code causing this barrier to remain closed. Like the previous barriers you encountered, you'll need to fix a misbehaving JavaScript function that deals with **array processing**.

## Slicing and sorting

Create a file called `getFirstAmountSorted.js` in your code folder. Inside it, create a function called `getFirstAmountSorted`. This function will take **two arguments**. The first arugment should be an array. The second argument should be a number. Your function must do the following:

* Begin by sorting the input array (the first argument) into alphabetical order
* Once the input array is sorted, **return a new array array** which is the first `N` elements of the input array, where `N` is the value of the second argument to your function

Example usage of your function:

```js
const outputArray = getFirstAmountSorted(['bird', 'dog', 'cat', 'ant'], 2);
// outputArray is now ['ant', 'bird']
```
Here are more example inputs and outputs:

| array                                       | number | return                                      |
| ------------------------------------------- | ------ | ------------------------------------------- |
| ['third', 'second', 'first']                | 2      | ['first', 'second' ]                        |
| ['golden', 'terrier']                       | 1      | ['golden']                                  |
| ['cheerios', 'apple jacks', 'lucky charms'] | 3      | ['apple jacks', 'cheerios', 'lucky charms'] |
| ['golden', 'terrier', 'boxer']              | 0      | [ ]                                          |

Example code you can use as a starting point **can be found on the Help tab**. Once your function works as described above, click the *HACK* button.