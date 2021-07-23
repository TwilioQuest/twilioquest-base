# Learn to execute JavaScript code

The goal of this exercise is to familiarize you with creating and executing JavaScript programs on your computer. For this exercise, we will provide you with all the code you need to complete the challenge. In future exercises though, you'll need to write more of the code yourself!

<details>
<summary>Step 1: Create a JavaScript code file</summary>

You will first need to create a new file on your computer called `sayPlease.js` inside the folder your created as your TwilioQuest workspace. As a reminder, that folder is located here:

`<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>`

The **file extension** (the `.js` part) indicates what kind of file you are creating. Sound files might have a `.mp3` extension. A Microsoft Word document might have a `.docx` extension. JavaScript files (usually) have a `.js` extension.

It will probably be convenient to create these files using the terminal interface, since you will need to use it later anyway to execute your JavaScript code.

To create the file on Mac or Linux, use the following commands in the terminal app:

```bash
cd "<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>"
touch sayPlease.js
```

In PowerShell on Windows, use the following commands:

```bash
cd "<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>"
New-Item sayPlease.js
```

</details>


<details>
<summary>Step 2: Open the file and write code for the solution</summary>

After creating your JavaScript file, now you need to put some code in it! Much like you might use Photoshop to open and edit an image file, you will want a program installed on your computer to edit code files. In programming, these tools are called **Integrated Development Environments (IDEs)** or **text editors**.

If you don't have one of these programs installed, we recommend trying [Visual Studio Code](https://code.visualstudio.com/). VS Code is a programming text editor that is relatively light weight, but comes with many helpful out-of-the-box features and is capable of doing very complex and powerful things once you get the hang of it.

Using VS Code or the text editor of your choice, open the `sayPlease.js` file. Initially, the file probably will not have anything inside it.

For this challenge, we'll actually provide you all the code you need - take the code below, and copy it into the file. Don't worry if you don't understand what it does just yet, but as you will see in a moment, it uses a built-in JavaScript function called `console.log` to print a line of text to the terminal window:

```js
console.log('Glen, will you please open the barrier?');
```

Once you add this code to the file, make sure you **save the changes you made!** Now, you're ready to execute the code and see what it does.

</details>

<details>
<summary>Step 3: Execute the code and ensure that it works</summary>

Now, we will use the Node.js runtime you installed to actually execute the code inside `sayPlease.js`. Usually, you will do this using the command prompt application on your computer - Terminal.app on a Mac, or PowerShell on Windows.

Open your terminal application and enter the following command to ensure your "current working directory" is the folder where you created `sayPlease.js`.

```bash
cd "<%= env.TQ_JAVASCRIPT_WORKSPACE_PATH.value %>"
```

Next, use the `node` command to execute your JavaScript code:

```bash
node sayPlease.js
```

After you run the command above, you should see your polite request to Glen printed out to the console.

</details>

Throughout TwilioQuest, you will be asked to create, edit, and execute code files just as described above.

When your `sayPlease.js` file can run and print out the necessary message, click the *HACK* button to submit your request to IT.
