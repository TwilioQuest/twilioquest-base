# Data Types and the Fab Five

A JavaScript program operates on different types of data. It could be simple data like numbers or strings of text, or more complex data like users, tweets, or credit cards. Learning how to represent data in a program is an important first step in learning to code JavaScript.

JavaScript has several [built-in data types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures) you can use to represent different kinds of data in your code. All of them are useful, but there are a few important data types you will use all the time. Let's get ready to meet them!

## Introducing the Fab Five data types

Whether it's the [1995 Chicago Bulls](https://en.wikipedia.org/wiki/1995–96_Chicago_Bulls_season), the [Spice Girls](https://en.wikipedia.org/wiki/Spice_Girls), or the [Teen Titans](https://en.wikipedia.org/wiki/Teen_Titans_Go!_(TV_series)), it seems like great teams always come in groups of five.

JavaScript data types are no different. There are **five data types** you will use all the time in JavaScript. Together, they can represent just about any kind of data you could imagine. Let's get to know each one!

<details>
<summary>Strings</summary>

You've encountered this one already - [Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) represent a sequence of characters. You might use these in your code to store data like usernames, comments, and email addresses.

You can create a string variable like this, by including text between two single quote (`'`) characters:

```js
let myString = 'something cool';
```

</details>

<details>
<summary>Numbers</summary>

You've seen this one before, too - [Numbers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) represent numerical values. You use numbers in your code to add up high scores or calculate the
time before a cab driver arrives.

You can create a number variable like this, by simply typing the number right after the assignment operator (`=`):

```js
let myNumber = 999999; // Don't put commas in the number - just the digits
```

</details>

<details>
<summary>Booleans</summary>

The next data type is a new one - the goofily-named "[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)". Boolean values represent the concept of `true` or `false`, which ends up being pretty important in programming. Usually, you use true/false information to make your code behave differently based on some condition. We'll cover how to use Booleans in greater depth later.

You can create a boolean variable like this, by typing `true` or `false` after the assignment operator (`=`):

```js
let myBoolean = true;
```

</details>

<details>
<summary>Arrays</summary>

The next data type is another very important one - the sci-fi-sounding data type known as the "[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)". An array **represents a list** of other kinds of data. Any other data type can be included as an **element** (an individual list item) of an array. We'll learn all kinds of fun things to do with arrays later.

You can create an array variable like this - elements in the array are enclosed with square brackets (`[` and `]`), and are separated inside the list with 
commas:

```js
let myArray = [ 'Apples', 'Oranges', 777, true ];
```
</details>

<details>
<summary>Objects</summary>

Last, but certainly not least, is the all-important [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object). Without getting too hung up on the details, you can consider all the kinds of data you can use in your code to be different kinds of **objects**. Strings, Arrays, Numbers, and Booleans are all special kinds of objects.

As a programmer, you can (and often will) create your own kinds of objects. When you need to represent a special kind of data in your application, a kind of data that's not built-in to JavaScript, you will usually create an object to represent that data. Here's how you might create an object variable to represent a piece of fruit:

```js
let myFruit = {
  name: 'Apple',
  color: 'red',
  isDelicious: true,
  weightInGrams: 10
};
```

Objects have **properties** (also sometimes called **keys**) with associated **values**. In the example above, the object named `myFruit` has a property named `isDelicious`, which has been set to the boolean value `true`. Object properties can be set to any type of value, even other objects.

You can create an object in a few different ways, but the method above creates an object using [literal notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer). After the assignment operator (`=`), you can enclose an object's properties inside two curly braces (`{` and `}`). A property name is written first, followed by a colon (`:`). After the colon, the property's value is assigned. If an object needs multiple properties, you can separate them using a comma (`,`).

</details>

## With their powers combined...
Using the five data types above, it is possible to represent pretty much any kind of data. Often, it is useful to have more specific data types (like [Dates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date), [Sets](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set), or [your own custom types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)), but you can get pretty far with just these data types.  Below is an example of a complex piece of data, represented only using the fab five data types:

```js
let batman = {
  name: 'Bruce Wayne',
  age: 44,
  aliases: ['Batman', 'Caped Crusader', 'Dark Knight'],
  enemies: [
    { name: 'Joker', atLarge: true },
    { name: 'The Penguin', atLarge: false },
    { name: 'Catwoman', atLarge: true },
    { name: 'Mr. Freeze', atLarge: false }
  ]
};
```

<details>
<summary>Sneak Preview: JavaScript Object Notation</summary>

The fab five data types are the key ingredients of [JSON](https://www.json.org/), the JavaScript Object Notation. Because of the flexibility of these data types, JSON has become the most common way to transport data between applications over the Internet. We won't get into that just yet, but you haven't heard the last of JSON.
</details>

## Completing this hack attempt

Now that we know about the Fab Five, we need to write a program that creates variables that store a reference to all five data types. The example code in the code editor contains comments that describe the variables you need to create, but here they are again for reference.

* A string named `awesomeString`, set with a value of `I love strings`.
* A number called `luckyNumber`, set with a value of `777`.
* A boolean called `mulletLooksGood`, set with a value of `false`.
* An array called `daBulls`, set with a value of `['MJ', 'Scottie', 'Dennis', 'Ron', 'Steve']`.
* An object called `batmanObject`, set with the value below.

```js
let aVariableNameYouNeedToChange = {
  name: 'Bruce Wayne',
  age: 44,
  alias: 'Batman'
}
```

Each variable must be **named and initialized exactly**. Double-check your spelling! In the case of objects and arrays, **you won't be able to leave out or include any extra properties** either. Just stick to the data shown above.

Once you have declared each of the variables in your code, in a way that conforms to the instructions above, click the *HACK* button to receive your reward.
