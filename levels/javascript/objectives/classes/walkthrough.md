# High Class

The goal of this exercise is to familiarize yourself with JavaScript [classes](https://javascript.info/class). "Classes" are new kinds of objects that you can create in your own code. 

Most of your work in the JavaScript lab has used built-in objects and "primitive" data types like Numbers, Strings, and Booleans. Classes represent more complex data concepts specific to your code, like Users, Blog Posts, Likes, or Subscriptions for example. Unlike [object literals](https://javascript.info/object#literals-and-properties), classes can also have behaviors that operate on their data.

In this exercise, you need to [create a class](https://javascript.info/class) based on the specification in the objective.

Create a file called `classes.js` in your code folder. Your code folder is located here:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

In this file, you must create a class called `Materializer`. Here is some code you can use as a starting point - it already has the class defined, but doesn't yet work as described in the objective:

```js
class Materializer {
  constructor(targetName) {
    // your code here
  }

  // your code here
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const m = new Materializer('Kevin');
console.log(m.activated); // would print "false"

m.activate();
console.log(m.activated); // would print "true"

console.log(m.materialize()); // would print "Kevin"
```

When your function works as directed in the objective, click the *HACK* button to validate your work.

## Useful links

* [JavaScript.info - Classes](https://javascript.info/class)
* [MDN - Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
