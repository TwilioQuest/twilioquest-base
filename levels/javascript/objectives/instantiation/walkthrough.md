# Fancier Objects

The goal of this exercise is to familiarize yourself with JavaScript [object literal notation](https://javascript.info/object#literals-and-properties).

Most of your work in the JavaScript lab has used built-in objects and "primitive" data types like Numbers, Strings, and Booleans. Sometimes, your code needs to be able to represent more complex data concepts specific to your code, like Users, Blog Posts, Likes, or Subscriptions for example.

In this exercise, you'll learn one tool at your disposal to create more complex data - an [object literal](https://javascript.info/object#literals-and-properties). An object you create in this way can have its own properties, and can be assigned to a single variable.

Create a file called `construction.js` in your code folder. Your code folder is located here:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

In this file, you must create a function called `construct`. Here is some code you can use as a starting point - it already has the function defined, but doesn't yet work as described in the objective:

```js
function construct(name) {
  let person = {};

  return person;
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const somePerson = construct('Kevin');
console.log('name is: ' + somePerson.name); // should be "Kevin"
console.log('duration is: ' + somePerson.duration); // should be 1000
```

When your function works as directed in the objective, click the *HACK* button to validate your work.

## Useful links

* [JavaScript.info - Object literal notation](https://javascript.info/object#literals-and-properties)
* [MDN - Object Initialization](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)
* [JavaScript.info - Returning values from functions](https://javascript.info/function-basics#returning-a-value)
* [MDN - Function Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
