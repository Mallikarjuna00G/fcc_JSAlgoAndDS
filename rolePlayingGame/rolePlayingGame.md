# Learn Basic JavaScript by Building a Role Playing Game

JavaScript is a powerful scripting language that you can use to make web pages interactive. It's one of the core technologies of the web, along with HTML and CSS. All modern browsers support JavaScript.

In this practice project, you'll learn fundamental programming concepts in JavaScript by coding your own Role Playing Game. You'll learn how to work with arrays, strings, objects, functions, loops, `if`/`else` statements, and more.

## Step001:

<p>JavaScript is a powerful language which allows you to build websites that are interactive.</p>

<p><em>Note</em>: For all remaining projects in this curriculum, you will need a basic level of knowledge in HTML and CSS. If you are new to HTML and CSS, please go through the <a href="https://www.freecodecamp.org/learn/2022/responsive-web-design/">Responsive Web Design Certification</a>.</p>

<p>To get started, create your standard HTML boilerplate with a <code>DOCTYPE</code>, <code>html</code>, <code>head</code>, and <code>body</code>, then add a <code>meta</code> tag for the <code>charset</code>. Add a <code>title</code> element and use the text <code>RPG - Dragon Repeller</code> for it. Include a <code>link</code> tag for your stylesheet to link the <code>styles.css</code> file.</p>

<p>Finally, create a <code>div</code> element with <code>id</code> set to <code>game</code> within your <code>body</code>.</p>

**Source file link:** [rolePlayingGame_step001.js](./rolePlayingGame_step001.js)


```js

```


### Execution logs: 

---

## Step002:

<p>Now you can start writing your JavaScript. Begin by creating a <code>script</code> element. This element is used to load JavaScript into your HTML file.</p>

**Source file link:** [rolePlayingGame_step002.js](./rolePlayingGame_step002.js)


```js

```


### Execution logs: 

---

## Step003:

<p>One of the most powerful tools is your developer console. Depending on your browser, this might be opened by pressing <code>F12</code> or <code>Ctrl+Shift+I</code>. On Mac, you can press <code>Option + ⌘ + C</code> and select "Console". You can also click the "Console" button above the preview window to see our built-in console.</p>

<p>The developer console will include errors that are produced by your code, but you can also use it to see values of variables in your code, which is helpful for debugging.</p>

<p>Add a <code>console.log("Hello World");</code> line between your <code>script</code> tags. Then click the "Console" button to open the console. You should see the text <code>"Hello World"</code>.</p>

**Source file link:** [rolePlayingGame_step003.js](./rolePlayingGame_step003.js)


```js

```


### Execution logs: 

---

## Step004:

<p>Before you start writing your project code, you should move it to its own file to keep things organized.</p>

<p>Remove your <code>console.log("Hello World");</code> line. Then give your now empty <code>script</code> element a <code>src</code> attribute set to <code>./script.js</code>.</p>

**Source file link:** [rolePlayingGame_step004.js](./rolePlayingGame_step004.js)


```js

```


### Execution logs: 

---

## Step005:

<p>Your view has been switched to your new <code>script.js</code> file. Remember that you can use the tabs above to switch between files.</p>

<p>Add your <code>console.log("Hello World");</code> line to this file, and see it appear in your console.</p>

**Source file link:** [rolePlayingGame_step005.js](./rolePlayingGame_step005.js)


```js

```


### Execution logs: 

---

## Step006:

<p>Remove your <code>console.log("Hello World");</code> line to begin writing your project code.</p>

<p>In the previous project, you learned how to work with variables and the <code>let</code> keyword like this:</p>

<p>You also learned how to initialize a variable with a value like this:</p>

<p>Use the <code>let</code> keyword to declare a variable called <code>xp</code> and assign it the value of <code>0</code>, a number.</p>

**Source file link:** [rolePlayingGame_step006.js](./rolePlayingGame_step006.js)


```js

```


### Execution logs: 

---

## Step007:

<p>Initialize another variable called <code>health</code> with a value of <code>100</code>, and a variable called <code>gold</code> with a value of <code>50</code>.</p>

**Source file link:** [rolePlayingGame_step007.js](./rolePlayingGame_step007.js)


```js

```


### Execution logs: 

---

## Step008:

<p>Create another variable called <code>currentWeaponIndex</code> and set it to <code>0</code>.</p>

**Source file link:** [rolePlayingGame_step008.js](./rolePlayingGame_step008.js)


```js

```


### Execution logs: 

---

## Step009:

<p>Declare a variable called <code>fighting</code> but do not initialize it with a value.</p>

**Source file link:** [rolePlayingGame_step009.js](./rolePlayingGame_step009.js)


```js

```


### Execution logs: 

---

## Step010:

<p>Declare two more variables named <code>monsterHealth</code> and <code>inventory</code>.</p>

<p>For your <code>inventory</code> variable, assign it the value of an array containing the string <code>"stick"</code>.</p>

<p>Remember that you worked with arrays in the previous project like this:</p>

**Source file link:** [rolePlayingGame_step010.js](./rolePlayingGame_step010.js)


```js

```


### Execution logs: 

---

## Step011:

<p>In your role playing game, users will be able to track their stats, buy weapons, and fight monsters. Before you can continue with the interactive JavaScript portion of the game, you need to first create the HTML elements that will display the game information.</p>

<p>Create four <code>div</code> elements within your <code>#game</code> element. Give them the following respective <code>id</code> values, in order: <code>stats</code>, <code>controls</code>, <code>monsterStats</code>, and <code>text</code>.</p>

**Source file link:** [rolePlayingGame_step011.js](./rolePlayingGame_step011.js)


```js

```


### Execution logs: 

---

## Step012:

<p>Create three <code>span</code> elements within your <code>#stats</code> element. Give each of them the class <code>stat</code>. Then give the first one the text <code>XP: 0</code>, the second one the text <code>Health: 100</code>, and the third one the text <code>Gold: 50</code>.</p>

**Source file link:** [rolePlayingGame_step012.js](./rolePlayingGame_step012.js)


```js

```


### Execution logs: 

---

## Step013:

<p>Wrap the numbers <code>0</code>, <code>100</code>, and <code>50</code> in <code>span</code> elements, and wrap those new <code>span</code> elements in <code>strong</code> elements. Then give your new <code>span</code> elements <code>id</code> values of <code>xpText</code>, <code>healthText</code>, and <code>goldText</code>, respectively.</p>

<p>Your answer should follow this basic structure:</p>

**Source file link:** [rolePlayingGame_step013.js](./rolePlayingGame_step013.js)


```js

```


### Execution logs: 

---

## Step014:

<p>For your <code>#controls</code> element, create three <code>button</code> elements. The first should have the <code>id</code> set to <code>button1</code>, and the text <code>Go to store</code>. The second should have the <code>id</code> set to <code>button2</code>, and the text <code>Go to cave</code>. The third should have the <code>id</code> set to <code>button3</code>, and the text <code>Fight dragon</code>.</p>

**Source file link:** [rolePlayingGame_step014.js](./rolePlayingGame_step014.js)


```js

```


### Execution logs: 

---

## Step015:

<p>JavaScript interacts with the HTML using the <dfn>Document Object Model</dfn>, or DOM. The DOM is a tree of objects that represents the HTML. You can access the HTML using the <code>document</code> object, which represents your entire HTML document.</p>

<p>One method for finding specific elements in your HTML is using the <code>querySelector()</code> method. The <code>querySelector()</code> method takes a CSS selector as an argument and returns the first element that matches that selector. For example, to find the <code>&lt;h1&gt;</code> element in your HTML, you would write:</p>

<p>Note that <code>h1</code> is a string and matches the CSS selector you would use.</p>

<p>Create a <code>button1</code> variable and use <code>querySelector()</code> to assign it your element with the <code>id</code> of <code>button1</code>. Remember that CSS <code>id</code> selectors are prefixed with a <code>#</code>.</p>

**Source file link:** [rolePlayingGame_step015.js](./rolePlayingGame_step015.js)


```js

```


### Execution logs: 

---

## Step016:

<p>We have run into a slight problem. You are trying to query your page for a button element, but your <code>script</code> tag is in the <code>head</code> of your HTML. This means your code runs before the browser has finished reading the HTML, and your <code>document.querySelector()</code> will not see the button - because the browser hasn't processed it yet.</p>

<p>To fix this, move your <code>script</code> element out of the <code>head</code> element, and place it at the end of your <code>body</code> element (just before the closing <code>&lt;/body&gt;</code> tag.)</p>

**Source file link:** [rolePlayingGame_step016.js](./rolePlayingGame_step016.js)


```js

```


### Execution logs: 

---

## Step017:

<p><code>button1</code> is a variable that is not going to be reassigned. If you are not going to assign a new value to a variable, it is best practice to use the <code>const</code> keyword to declare it instead of the <code>let</code> keyword. This will tell JavaScript to throw an error if you accidentally reassign it.</p>

<p>Change your <code>button1</code> variable to be declared with the <code>const</code> keyword.</p>

**Source file link:** [rolePlayingGame_step017.js](./rolePlayingGame_step017.js)


```js

```


### Execution logs: 

---

## Step018:

<p>Use <code>querySelector()</code> to get the other two <code>button</code> elements using their <code>id</code>s: <code>button2</code> and <code>button3</code>. Store them in variables called <code>button2</code> and <code>button3</code>. Remember to use <code>const</code>.</p>

**Source file link:** [rolePlayingGame_step018.js](./rolePlayingGame_step018.js)


```js

```


### Execution logs: 

---

## Step019:

<p>Similar to your <code>#stats</code> element, your <code>#monsterStats</code> element needs two <code>span</code> elements. Give them the class <code>stat</code> and give the first element the text <code>Monster Name: </code> and the second the text <code>Health: </code>. After the text in each, add a <code>strong</code> element with an empty nested <code>span</code> element. Give the first inner <code>span</code> element an <code>id</code> of <code>monsterName</code> and the second inner <code>span</code> element an <code>id</code> of <code>monsterHealth</code>.</p>

**Source file link:** [rolePlayingGame_step019.js](./rolePlayingGame_step019.js)


```js

```


### Execution logs: 

---

## Step020:

<p>Give your <code>#text</code> element the following text:</p>

**Source file link:** [rolePlayingGame_step020.js](./rolePlayingGame_step020.js)


```js

```


### Execution logs: 

---

## Step021:

<p>Now we need some quick styling. Start by giving the <code>body</code> a <code>background-color</code> set to <code>#0a0a23</code>.</p>

**Source file link:** [rolePlayingGame_step021.js](./rolePlayingGame_step021.js)


```js

```


### Execution logs: 

---

## Step022:

<p>Give the <code>#text</code> element a <code>background-color</code> of <code>#0a0a23</code>, a <code>color</code> of <code>#ffffff</code>, and <code>10px</code> of padding on all sides.</p>

**Source file link:** [rolePlayingGame_step022.js](./rolePlayingGame_step022.js)


```js

```


### Execution logs: 

---

## Step023:

<p>Give your <code>#game</code> a maximum width of <code>500px</code> and a maximum height of <code>400px</code>. Set the <code>background-color</code> to <code>#ffffff</code> and the <code>color</code> to <code>#ffffff</code>.</p>

<p>Use margins to center it by setting the top margin to <code>30px</code>, bottom margin to <code>0px</code>, and the left and right margin to <code>auto</code>.</p>

<p>Finally, give it <code>10px</code> of padding on all four sides.</p>

**Source file link:** [rolePlayingGame_step023.js](./rolePlayingGame_step023.js)


```js

```


### Execution logs: 

---

## Step024:

<p>Using a selector list (<code>selector1, selector2</code>) give both your <code>#controls</code> and <code>#stats</code> elements a <code>border</code> of <code>1px solid #0a0a23</code>, a <code>#0a0a23</code> text color, and <code>5px</code> of <code>padding</code>.</p>

**Source file link:** [rolePlayingGame_step024.js](./rolePlayingGame_step024.js)


```js

```


### Execution logs: 

---

## Step025:

<p>Give your <code>#monsterStats</code> element the same <code>border</code> and <code>padding</code> as your <code>#stats</code> element. Set its color to <code>#ffffff</code> and give it a <code>#c70d0d</code> background.</p>

**Source file link:** [rolePlayingGame_step025.js](./rolePlayingGame_step025.js)


```js

```


### Execution logs: 

---

## Step026:

<p>For now, hide your <code>#monsterStats</code> element with the <code>display</code> property. Do not change any of the other styling.</p>

**Source file link:** [rolePlayingGame_step026.js](./rolePlayingGame_step026.js)


```js

```


### Execution logs: 

---

## Step027:

<p>Next, give your <code>.stat</code> elements a <code>padding-right</code> of <code>10px</code>.</p>

**Source file link:** [rolePlayingGame_step027.js](./rolePlayingGame_step027.js)


```js

```


### Execution logs: 

---

## Step028:

<p>Finally, you will need to add some styles for your buttons. Start by setting the <code>cursor</code> property to <code>pointer</code>. Then set the text <code>color</code> to <code>#0a0a23</code> and the <code>background-color</code> to <code>#feac32</code>.</p>

<p>Then set the <code>background-image</code> property to <code>linear-gradient(#fecc4c, #ffac33)</code>. Lastly, set the <code>border</code> to <code>3px solid #feac32</code>.</p>

**Source file link:** [rolePlayingGame_step028.js](./rolePlayingGame_step028.js)


```js

```


### Execution logs: 

---

## Step029:

<p>Just like you did with the buttons, create variables for the following <code>id</code>s and use <code>querySelector()</code> to give them the element as a value:</p>

<p><code>text</code>, <code>xpText</code>, <code>healthText</code>, <code>goldText</code>, <code>monsterStats</code>, and <code>monsterName</code>.</p>

<p>Remember to declare these with the <code>const</code> keyword, and name the variables to match the <code>id</code>s.</p>

**Source file link:** [rolePlayingGame_step029.js](./rolePlayingGame_step029.js)


```js

```


### Execution logs: 

---

## Step030:

<p>Finally, use <code>querySelector()</code> to get the <code>#monsterHealth</code> element. Because you have already declared a <code>monsterHealth</code> variable earlier, you need to use a different variable name for this element.</p>

<p>Declare a new variable with the <code>const</code> keyword and name it <code>monsterHealthText</code>.</p>

**Source file link:** [rolePlayingGame_step030.js](./rolePlayingGame_step030.js)


```js

```


### Execution logs: 

---

## Step031:

<p>In the previous project, you learned how to create a function like this:</p>

<p>Create an empty function named <code>goStore</code>.</p>

**Source file link:** [rolePlayingGame_step031.js](./rolePlayingGame_step031.js)


```js

```


### Execution logs: 

---

## Step032:

<p>For now, make your <code>goStore</code> function output the message <code>"Going to store."</code> to the console.</p>

**Source file link:** [rolePlayingGame_step032.js](./rolePlayingGame_step032.js)


```js

```


### Execution logs: 

---

## Step033:

<p>Now create a <code>goCave</code> function that prints <code>"Going to cave."</code> to the console.</p>

**Source file link:** [rolePlayingGame_step033.js](./rolePlayingGame_step033.js)


```js

```


### Execution logs: 

---

## Step034:

<p>Now create a <code>fightDragon</code> function that prints <code>"Fighting dragon."</code> to the console.</p>

**Source file link:** [rolePlayingGame_step034.js](./rolePlayingGame_step034.js)


```js

```


### Execution logs: 

---

## Step035:

<p>In the previous project, you learned how to work with single line and multi-line comments like this:</p>

<p>Add a single-line comment that says <code>initialize buttons</code>.</p>

**Source file link:** [rolePlayingGame_step035.js](./rolePlayingGame_step035.js)


```js

```


### Execution logs: 

---

## Step036:

<p><code>button1</code> represents your first <code>button</code> element. These elements have a special property called <code>onclick</code>, which you can use to determine what happens when someone clicks that button.</p>

<p>You can access properties in JavaScript a couple of different ways. The first is with <dfn>dot notation</dfn>. Here is an example of using dot notation to set the <code>onclick</code> property of a button to a function reference.</p>

<p>In this example, <code>button</code> is the button element, and <code>myFunction</code> is a reference to a function. When the button is clicked, <code>myFunction</code> will be called.</p>

<p>Use dot notation to set the <code>onclick</code> property of your <code>button1</code> to the function reference of <code>goStore</code>. Note that <code>button1</code> is already declared, so you don't need to use <code>let</code> or <code>const</code>.</p>

**Source file link:** [rolePlayingGame_step036.js](./rolePlayingGame_step036.js)


```js

```


### Execution logs: 

---

## Step037:

<p>Using the same syntax, set the <code>onclick</code> properties of <code>button2</code> and <code>button3</code> to <code>goCave</code> and <code>fightDragon</code> respectively.</p>

<p>Once you have done that, open your console and try clicking the buttons on your project.</p>

**Source file link:** [rolePlayingGame_step037.js](./rolePlayingGame_step037.js)


```js

```


### Execution logs: 

---

## Step038:

<p>The <code>innerText</code> property controls the text that appears in an HTML element. For example:</p>

<p>The following example would change the text of the <code>p</code> element from <code>Demo content</code> to <code>Hello World</code>.</p>

<p>When a player clicks your <code>Go to store</code> button, you want to change the buttons and text. Remove the code inside the <code>goStore</code> function and add a line that updates the text of <code>button1</code> to say <code>"Buy 10 health (10 gold)"</code>.</p>

**Source file link:** [rolePlayingGame_step038.js](./rolePlayingGame_step038.js)


```js

```


### Execution logs: 

---

## Step039:

<p>Now, add a line that updates the text of <code>button2</code> to say <code>"Buy weapon (30 gold)"</code> and update the text of <code>button3</code> to say <code>"Go to town square"</code>.</p>

**Source file link:** [rolePlayingGame_step039.js](./rolePlayingGame_step039.js)


```js

```


### Execution logs: 

---

## Step040:

<p>You will also need to update the functions that run when the buttons are clicked again.</p>

<p>In your <code>goStore()</code> function, update the <code>onclick</code> property for each button to run <code>buyHealth</code>, <code>buyWeapon</code>, and <code>goTown</code>, respectively.</p>

**Source file link:** [rolePlayingGame_step040.js](./rolePlayingGame_step040.js)


```js

```


### Execution logs: 

---

## Step041:

<p>Now you need to modify your display text. Change the <code>innerText</code> property of the <code>text</code> variable to be <code>"You enter the store."</code>.</p>

**Source file link:** [rolePlayingGame_step041.js](./rolePlayingGame_step041.js)


```js

```


### Execution logs: 

---

## Step042:

<p>Create three new empty functions called <code>buyHealth</code>, <code>buyWeapon</code>, and <code>goTown</code>.</p>

**Source file link:** [rolePlayingGame_step042.js](./rolePlayingGame_step042.js)


```js

```


### Execution logs: 

---

## Step043:

<p>Move your <code>goTown</code> function above your <code>goStore</code> function. Then copy and paste the contents of the <code>goStore</code> function into the <code>goTown</code> function.</p>

**Source file link:** [rolePlayingGame_step043.js](./rolePlayingGame_step043.js)


```js

```


### Execution logs: 

---

## Step044:

<p>In your <code>goTown</code> function, change your <code>button</code> elements' <code>innerText</code> properties to be <code>"Go to store"</code>, <code>"Go to cave"</code>, and <code>"Fight dragon"</code>. Update your <code>onclick</code> properties to be <code>goStore</code>, <code>goCave</code>, and <code>fightDragon</code>, respectively.</p>

<p>Finally, update <code>innerText</code> property of your <code>text</code> to be <code>"You are in the town square. You see a sign that says Store."</code>.</p>

**Source file link:** [rolePlayingGame_step044.js](./rolePlayingGame_step044.js)


```js

```


### Execution logs: 

---

## Step045:

<p>You need to wrap the text <code>Store</code> in double quotes. Because your string is already wrapped in double quotes, you'll need to escape the quotes around <code>Store</code>. You can escape them with a backslash <code>\</code>.  Here is an example:</p>

<p>Wrap the text <code>Store</code> in double quotes within your <code>text.innerText</code> line.</p>

**Source file link:** [rolePlayingGame_step045.js](./rolePlayingGame_step045.js)


```js

```


### Execution logs: 

---

## Step046:

<p>You have repetition in the <code>goTown</code> and <code>goStore</code> functions. Repetition in your code is a sign that you need another function.</p>

<p>In the previous project, you learned how to work with function parameters like this:</p>

<p>Function parameters act as placeholders for values that you pass to the function when you call it.</p>

<p>Create an empty <code>update</code> function that takes a parameter called <code>location</code>.</p>

**Source file link:** [rolePlayingGame_step046.js](./rolePlayingGame_step046.js)


```js

```


### Execution logs: 

---

## Step047:

<p>In your role playing game, you will be able to visit different locations like the <strong>store</strong>, the <strong>cave</strong>, and the <strong>town square</strong>. You will need to create a data structure that will hold the different locations.</p>

<p>Use <code>const</code> to create a variable called <code>locations</code> and assign it an empty array.</p>

**Source file link:** [rolePlayingGame_step047.js](./rolePlayingGame_step047.js)


```js

```


### Execution logs: 

---

## Step048:

<p>Before you can begin to build out your <code>locations</code> array, you will first need to learn about <dfn>objects</dfn>. Objects are an important data type in JavaScript. The next few steps will be dedicated to learning about them so you will better understand how to apply them in your project.</p>

<p>Objects are non primitive data types that store key-value pairs. Non primitive data types are mutable data types that are not <code>undefined</code>, <code>null</code>, <code>boolean</code>, <code>number</code>, <code>string</code>, or <code>symbol</code>. Mutable means that the data can be changed after it is created.</p>

<p>Here is the basic syntax for an object:</p>

<p>You will learn about keys and values in the next few steps.</p>

<p>For now, create a <code>const</code> variable called <code>cat</code> and assign it an empty object <code>{}</code>.</p>

<p>Below that <code>cat</code> variable, add a <code>console.log(cat)</code> statement to see the object in the console.</p>

**Source file link:** [rolePlayingGame_step048.js](./rolePlayingGame_step048.js)


```js

```


### Execution logs: 

---

## Step049:

<p>Objects are similar to <code>arrays</code>, except that instead of using indexes to access and modify their data, you access the data in objects through <code>properties</code>.</p>

<p>Properties consist of a key and a value. The key is the name of the property, and the value is the data stored in the property.</p>

<p>Here is an example of an object with a single property:</p>

<p>Inside your <code>cat</code> object, add a new property. The key should be <code>name</code> and the value should be the string <code>"Whiskers"</code>.</p>

<p>Open up the console to see the updates to your object.</p>

**Source file link:** [rolePlayingGame_step049.js](./rolePlayingGame_step049.js)


```js

```


### Execution logs: 

---

## Step050:

<p>If the property name (key) of an object has a space in it, you will need to use single or double quotes around the name.</p>

<p>Here is an example of an object with a property name that has a space:</p>

<p>If you tried to write a key without the quotes, it would throw an error:</p>

<p>Add a new property with a key of <code>"Number of legs"</code> and value of <code>4</code> to the <code>cat</code> object.</p>

<p>Open up the console to see the output.</p>

**Source file link:** [rolePlayingGame_step050.js](./rolePlayingGame_step050.js)


```js

```


### Execution logs: 

---

## Step051:

<p>There are two ways to access the properties of an object: dot notation (<code>.</code>) and bracket notation (<code>[]</code>), similar to an array.</p>

<p>Dot notation is what you use when you know the name of the property you're trying to access ahead of time.</p>

<p>Here is a sample of using dot notation (<code>.</code>) to read the <code>name</code> property of the <code>developer</code> object:</p>

<p>Update your console statement to access the <code>name</code> property of the <code>cat</code> object using dot notation.</p>

<p>Open up the console to see the <code>name</code> of <code>"Whiskers"</code> logged to the console.</p>

**Source file link:** [rolePlayingGame_step051.js](./rolePlayingGame_step051.js)


```js

```


### Execution logs: 

---

## Step052:

<p>The second way to access the properties of an object is bracket notation (<code>[]</code>). If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.</p>

<p>Here is a sample of using bracket notation to read an object's property:</p>

<p>Update your console statement to use bracket notation to access the property <code>"Number of legs"</code> of the <code>cat</code> object.</p>

<p>Open up the console to see the output.</p>

**Source file link:** [rolePlayingGame_step052.js](./rolePlayingGame_step052.js)


```js

```


### Execution logs: 

---

## Step053:

<p>Later on in the curriculum, you will dive deeper into objects. But for now, it is time to apply what you have learned to your role playing game.</p>

<p>Start by deleting your <code>cat</code> object and console statement.</p>

**Source file link:** [rolePlayingGame_step053.js](./rolePlayingGame_step053.js)


```js

```


### Execution logs: 

---

## Step054:

<p>Your locations <code>array</code> will hold different locations like the <strong>store</strong>, the <strong>cave</strong>, and the <strong>town square</strong>. Each location will be represented as an object.</p>

<p>Inside your locations array, add an object. Inside that object add a key called <code>name</code> with a value of <code>"town square"</code>.</p>

<p>Remember to follow this syntax:</p>

**Source file link:** [rolePlayingGame_step054.js](./rolePlayingGame_step054.js)


```js

```


### Execution logs: 

---

## Step055:

<p>Just like array values, object properties are separated by a comma. Add a comma after your <code>name</code> property and add a <code>button text</code> property with the value of an empty array.</p>

<p>Since the property name has a space in it, you will need to surround it with quotes.</p>

**Source file link:** [rolePlayingGame_step055.js](./rolePlayingGame_step055.js)


```js

```


### Execution logs: 

---

## Step056:

<p>Give your empty <code>button text</code> array three string elements. Use the three strings being assigned to the button <code>innerText</code> properties in the <code>goTown</code> function. Remember that array values are separated by commas.</p>

**Source file link:** [rolePlayingGame_step056.js](./rolePlayingGame_step056.js)


```js

```


### Execution logs: 

---

## Step057:

<p>Create another property in your object called <code>button functions</code>. Give this property an array containing the three functions assigned to the <code>onclick</code> properties in the <code>goTown</code> function. Remember that these functions are variables, not strings, and should not be wrapped in quotes.</p>

**Source file link:** [rolePlayingGame_step057.js](./rolePlayingGame_step057.js)


```js

```


### Execution logs: 

---

## Step058:

<p>Add one final property to the object named <code>text</code>. Give this property the same string value as the one assigned to <code>text.innerText</code> in the <code>goTown</code> function.</p>

**Source file link:** [rolePlayingGame_step058.js](./rolePlayingGame_step058.js)


```js

```


### Execution logs: 

---

## Step059:

<p>Add a second object to your <code>locations</code> array (remember to separate them with a comma). Following the pattern you used in the first object, create the same properties but use the values from the <code>goStore</code> function. Set the <code>name</code> property to <code>store</code>.</p>

**Source file link:** [rolePlayingGame_step059.js](./rolePlayingGame_step059.js)


```js

```


### Execution logs: 

---

## Step060:

<p>Now you can consolidate some of your code. Start by copying the code from inside the <code>goTown</code> function and paste it into your <code>update</code> function. Then, remove all the code from inside the <code>goTown</code> and <code>goStore</code> functions.</p>

**Source file link:** [rolePlayingGame_step060.js](./rolePlayingGame_step060.js)


```js

```


### Execution logs: 

---

## Step061:

<p>Instead of assigning the <code>innerText</code> and <code>onclick</code> properties to specific strings and functions, the <code>update</code> function will use data from the <code>location</code> that is passed into it. First, that data needs to be passed.</p>

<p>Inside the <code>goTown</code> function, call the <code>update</code> function. Here is an example of calling a function named <code>myFunction</code>:</p>

**Source file link:** [rolePlayingGame_step061.js](./rolePlayingGame_step061.js)


```js

```


### Execution logs: 

---

## Step062:

<p>Now it is time to use your <code>update</code> function. Pass in your <code>locations</code> array into the <code>update</code> function call.</p>

<p>You pass arguments by including them within the parentheses of the function call. For example, calling <code>myFunction</code> with an <code>arg</code> argument would look like:</p>

<p>Pass your <code>locations</code> array into the <code>update</code> call.</p>

**Source file link:** [rolePlayingGame_step062.js](./rolePlayingGame_step062.js)


```js

```


### Execution logs: 

---

## Step063:

<p>The <code>locations</code> array contains two locations: the <code>"town square"</code> and the <code>"store"</code>. Currently you are passing that entire array into the <code>update</code> function.</p>

<p>Pass in only the first element of the <code>locations</code> array by adding <code>[0]</code> at the end of the variable. For example: <code>myFunction(arg[0]);</code>.</p>

<p>This is called <dfn>bracket notation</dfn>. Values in an array are accessed by index. Indices are numerical values and start at <code>0</code> - this is called zero-based indexing. <code>arg[0]</code> would be the first element in the <code>arg</code> array.</p>

**Source file link:** [rolePlayingGame_step063.js](./rolePlayingGame_step063.js)


```js

```


### Execution logs: 

---

## Step064:

<p>Now your <code>update</code> function needs to use the argument you pass into it.</p>

<p>Inside the <code>update</code> function, change the value of the <code>button1.innerText</code> assignment to be <code>location["button text"]</code>. That way, you use bracket notation to get the <code>"button text"</code> property of the <code>location</code> object passed into the function.</p>

**Source file link:** [rolePlayingGame_step064.js](./rolePlayingGame_step064.js)


```js

```


### Execution logs: 

---

## Step065:

<p><code>location["button text"]</code> is an array with three elements. Change the <code>button1.innerText</code> assignment to be <code>location["button text"][0]</code> which represents the first element of the array.</p>

**Source file link:** [rolePlayingGame_step065.js](./rolePlayingGame_step065.js)


```js

```


### Execution logs: 

---

## Step066:

<p>Now update <code>button2.innerText</code> and <code>button3.innerText</code> to be assigned the second and third values of the <code>"button text"</code> array, respectively.</p>

**Source file link:** [rolePlayingGame_step066.js](./rolePlayingGame_step066.js)


```js

```


### Execution logs: 

---

## Step067:

<p>Following the same pattern as you did for the button text, update the three buttons' <code>onclick</code> assignments to be the first, second, and third values of the <code>"button functions"</code> array.</p>

**Source file link:** [rolePlayingGame_step067.js](./rolePlayingGame_step067.js)


```js

```


### Execution logs: 

---

## Step068:

<p>Finally, update the <code>text.innerText</code> assignment to equal the <code>text</code> from the <code>location</code> object. However, instead of using bracket notation, use <dfn>dot notation</dfn>.</p>

<p>Here is an example of accessing the <code>name</code> property of an object called <code>person</code>:</p>

**Source file link:** [rolePlayingGame_step068.js](./rolePlayingGame_step068.js)


```js

```


### Execution logs: 

---

## Step069:

<p>Now update your <code>goStore</code> function to call the <code>update</code> function. Pass the second element of the <code>locations</code> array as your argument.</p>

<p>To make sure your refactoring is correct, try clicking your first button again. You should see the same changes to your webpage that you saw earlier.</p>

**Source file link:** [rolePlayingGame_step069.js](./rolePlayingGame_step069.js)


```js

```


### Execution logs: 

---

## Step070:

<p>Create two more empty functions named <code>fightSlime</code> and <code>fightBeast</code>. These functions will be used in your upcoming <code>cave</code> object.</p>

**Source file link:** [rolePlayingGame_step070.js](./rolePlayingGame_step070.js)


```js

```


### Execution logs: 

---

## Step071:

<p>Add a third object to the <code>locations</code> array. Give it the same properties as the other two objects.</p>

<p>Set <code>name</code> to <code>cave</code>. Set <code>button text</code> to an array with the strings <code>"Fight slime"</code>, <code>"Fight fanged beast"</code>, and <code>"Go to town square"</code>. Set the <code>"button functions"</code> to an array with the variables <code>fightSlime</code>, <code>fightBeast</code>, and <code>goTown</code>. Set the <code>text</code> property to <code>"You enter the cave. You see some monsters."</code>.</p>

**Source file link:** [rolePlayingGame_step071.js](./rolePlayingGame_step071.js)


```js

```


### Execution logs: 

---

## Step072:

<p>Now that you have a <code>"cave"</code> location object, update your <code>goCave</code> function to call <code>update</code> and pass that new <code>"cave"</code> location. Remember that this is the third element in your <code>locations</code> array.</p>

<p>Don't forget to remove your <code>console.log</code> call!</p>

**Source file link:** [rolePlayingGame_step072.js](./rolePlayingGame_step072.js)


```js

```


### Execution logs: 

---

## Step073:

<p>Now that your <code>"store"</code> and <code>"cave"</code> locations are complete, you can code the actions the player takes at those locations. Inside the <code>buyHealth</code> function, set <code>gold</code> equal to <code>gold</code> minus <code>10</code>.</p>

<p>For example, here is how you would set <code>num</code> equal to <code>5</code> less than <code>num</code>: <code>num = num - 5;</code>.</p>

**Source file link:** [rolePlayingGame_step073.js](./rolePlayingGame_step073.js)


```js

```


### Execution logs: 

---

## Step074:

<p>After the <code>gold</code> is updated, add a line to set <code>health</code> equal to <code>health</code> plus <code>10</code>.</p>

**Source file link:** [rolePlayingGame_step074.js](./rolePlayingGame_step074.js)


```js

```


### Execution logs: 

---

## Step075:

<p>There is a shorthand way to add or subtract from a variable called <dfn>compound assignment</dfn>. For example, changing <code>num = num + 5</code> to compound assignment would look like <code>num += 5</code>.</p>

<p>Update both lines inside your <code>buyHealth</code> function to use compound assignment.</p>

**Source file link:** [rolePlayingGame_step075.js](./rolePlayingGame_step075.js)


```js

```


### Execution logs: 

---

## Step076:

<p>Now that you are updating the <code>gold</code> and <code>health</code> variables, you need to display those new values on the game screen. You have retrieved the <code>healthText</code> and <code>goldText</code> elements in a prior step.</p>

<p>After your assignment lines, assign the <code>innerText</code> property of <code>goldText</code> to be the variable <code>gold</code>. Use the same pattern to update <code>healthText</code> with the <code>health</code> variable.</p>

<p>You can test this by clicking your <code>"Go to store"</code> button, followed by your <code>"Buy Health"</code> button.</p>

<p><strong>Note:</strong> Your answer should only be two lines of code.</p>

**Source file link:** [rolePlayingGame_step076.js](./rolePlayingGame_step076.js)


```js

```


### Execution logs: 

---

## Step077:

<p>What if the player doesn't have enough gold to buy health? You should use an <code>if</code> statement to check if the player has enough gold to buy health.</p>

<p>In the previous project, you learned how to work with <code>if</code> statements like this:</p>

<p>Start by placing all of the code in your <code>buyHealth</code> function inside an <code>if</code> statement. For the <code>if</code> statement condition, check if <code>gold</code> is greater than or equal to <code>10</code>.</p>

**Source file link:** [rolePlayingGame_step077.js](./rolePlayingGame_step077.js)


```js

```


### Execution logs: 

---

## Step078:

<p>Now when a player tries to buy health, it will only work if they have enough money. If they do not, nothing will happen. Add an <code>else</code> statement where you can put code to run if a player does not have enough money.</p>

<p>In the previous project, you learned how to work with <code>else</code> statements like this:</p>

**Source file link:** [rolePlayingGame_step078.js](./rolePlayingGame_step078.js)


```js

```


### Execution logs: 

---

## Step079:

<p>Inside the <code>else</code> statement, set <code>text.innerText</code> to equal <code>"You do not have enough gold to buy health."</code>.</p>

**Source file link:** [rolePlayingGame_step079.js](./rolePlayingGame_step079.js)


```js

```


### Execution logs: 

---

## Step080:

<p>Use <code>const</code> to create a <code>weapons</code> variable above your <code>locations</code> array. Assign it an empty array.</p>

**Source file link:** [rolePlayingGame_step080.js](./rolePlayingGame_step080.js)


```js

```


### Execution logs: 

---

## Step081:

<p>Just like your <code>locations</code> array, your <code>weapons</code> array will hold objects. Add four objects to the <code>weapons</code> array, each with two properties: <code>name</code> and <code>power</code>. The first should have the <code>name</code> set to <code>"stick"</code> and the <code>power</code> set to <code>5</code>. The second should be <code>"dagger"</code> and <code>30</code>. The third, <code>"claw hammer"</code> and <code>50</code>. The fourth, <code>"sword"</code> and <code>100</code>.</p>

**Source file link:** [rolePlayingGame_step081.js](./rolePlayingGame_step081.js)


```js

```


### Execution logs: 

---

## Step082:

<p>Inside your <code>buyWeapon</code> function, add an <code>if</code> statement to check if <code>gold</code> is greater than or equal to <code>30</code>.</p>

**Source file link:** [rolePlayingGame_step082.js](./rolePlayingGame_step082.js)


```js

```


### Execution logs: 

---

## Step083:

<p>Similar to your <code>buyHealth</code> function, set <code>gold</code> equal to <code>30</code> less than its current value. Make sure this is inside your <code>if</code> statement.</p>

**Source file link:** [rolePlayingGame_step083.js](./rolePlayingGame_step083.js)


```js

```


### Execution logs: 

---

## Step084:

<p>The value of the <code>currentWeaponIndex</code> variable corresponds to an index in the <code>weapons</code> array. The player starts with a <code>"stick"</code>, since <code>currentWeaponIndex</code> starts at <code>0</code> and <code>weapons[0]</code> is the <code>"stick"</code> weapon.</p>

<p>In the <code>buyWeapon</code> function, use compound assignment to add <code>1</code> to <code>currentWeaponIndex</code> - the user is buying the next weapon in the <code>weapons</code> array.</p>

**Source file link:** [rolePlayingGame_step084.js](./rolePlayingGame_step084.js)


```js

```


### Execution logs: 

---

## Step085:

<p>In the previous project, you learned how to use the increment operator to increase a variable by <code>1</code>.</p>

<p>Change your <code>currentWeaponIndex</code> assignment to use the increment operator.</p>

**Source file link:** [rolePlayingGame_step085.js](./rolePlayingGame_step085.js)


```js

```


### Execution logs: 

---

## Step086:

<p>Now update the <code>goldText</code> element to display the new value of <code>gold</code>, and update the <code>text</code> element to display <code>"You now have a new weapon."</code>.</p>

**Source file link:** [rolePlayingGame_step086.js](./rolePlayingGame_step086.js)


```js

```


### Execution logs: 

---

## Step087:

<p>You should tell the player what weapon they bought. In between the two lines you just wrote, use <code>let</code> to initialize a new variable called <code>newWeapon</code>. Set this to equal <code>weapons</code>.</p>

**Source file link:** [rolePlayingGame_step087.js](./rolePlayingGame_step087.js)


```js

```


### Execution logs: 

---

## Step088:

<p>Use bracket notation to access an object within the <code>weapons</code> array and assign it to your <code>newWeapon</code> variable. Place the variable <code>currentWeaponIndex</code> within the brackets.</p>

<p>When you use a variable in bracket notation, you are accessing the property or index by the <em>value</em> of that variable.</p>

<p>For example, this code uses the <code>index</code> variable to access a value of <code>array</code>.</p>

**Source file link:** [rolePlayingGame_step088.js](./rolePlayingGame_step088.js)


```js

```


### Execution logs: 

---

## Step089:

<p><code>weapons[currentWeaponIndex]</code> is an object. Use dot notation to get the <code>name</code> property of that object.</p>

**Source file link:** [rolePlayingGame_step089.js](./rolePlayingGame_step089.js)


```js

```


### Execution logs: 

---

## Step090:

<p>In the previous project, you learned how to work with the concatenation operator to insert variables into a string like this:</p>

<p>Update the string <code>"You now have a new weapon."</code> to <code>"You now have a "</code> followed by the name of the new weapon, and remember to end the sentence with a period.</p>

**Source file link:** [rolePlayingGame_step090.js](./rolePlayingGame_step090.js)


```js

```


### Execution logs: 

---

## Step091:

<p>Back at the beginning of this project, you created the <code>inventory</code> array. Add the <code>newWeapon</code> to the end of the <code>inventory</code> array using the <code>push()</code> method.</p>

<p>In the previous project, you learned how to work with the <code>push</code> method like this:</p>

**Source file link:** [rolePlayingGame_step091.js](./rolePlayingGame_step091.js)


```js

```


### Execution logs: 

---

## Step092:

<p>Up until now, any time <code>text.innerText</code> was updated, the old text was erased. This time, use the <code>+=</code> operator to add text to the end of <code>text.innerText</code>.</p>

<p>Add the string <code>" In your inventory you have: "</code> - include the spaces at the beginning and the end.</p>

**Source file link:** [rolePlayingGame_step092.js](./rolePlayingGame_step092.js)


```js

```


### Execution logs: 

---

## Step093:

<p>At the end of the second <code>text.innerText</code> string you just added, use the concatenation operator to add the contents of <code>inventory</code> to the string.</p>

**Source file link:** [rolePlayingGame_step093.js](./rolePlayingGame_step093.js)


```js

```


### Execution logs: 

---

## Step094:

<p>Add an <code>else</code> statement to your <code>buyWeapon</code> function. In that statement, set <code>text.innerText</code> to equal <code>"You do not have enough gold to buy a weapon."</code>.</p>

**Source file link:** [rolePlayingGame_step094.js](./rolePlayingGame_step094.js)


```js

```


### Execution logs: 

---

## Step095:

<p>Once a player has the best weapon, they cannot buy another one. Wrap all of the code in your <code>buyWeapon</code> function inside another <code>if</code> statement. The condition should check if <code>currentWeaponIndex</code> is less than <code>3</code> - the index of the last weapon.</p>

**Source file link:** [rolePlayingGame_step095.js](./rolePlayingGame_step095.js)


```js

```


### Execution logs: 

---

## Step096:

<p>Arrays have a <code>length</code> property that returns the number of items in the array. You may want to add new values to the <code>weapons</code> array in the future.</p>

<p>Change your <code>if</code> condition to check if <code>currentWeaponIndex</code> is less than the length of the <code>weapons</code> array. An example of checking the length of an array <code>myArray</code> would look like <code>myArray.length</code>.</p>

**Source file link:** [rolePlayingGame_step096.js](./rolePlayingGame_step096.js)


```js

```


### Execution logs: 

---

## Step097:

<p>Now it is time to test your <code>buyWeapon</code> function. Right now, the <code>gold</code> amount is set to <code>50</code>. But to properly see the results of your <code>buyWeapon</code> function, the amount should be set to something higher.</p>

<p>Update the <code>gold</code> amount to <code>250</code>.</p>

<p><em>NOTE</em>: The HTML has already been updated to reflect this change.</p>

<p>To test your <code>buyWeapon</code> function, open up the console. Then click on the <code>"Go to store"</code> button followed by the <code>"Buy weapon (30 gold)"</code> button four times.</p>

**Source file link:** [rolePlayingGame_step097.js](./rolePlayingGame_step097.js)


```js

```


### Execution logs: 

---

## Step098:

<p>When you were testing your function, you should have seen an error message in the console. This error is due to the condition in the <code>buyWeapon</code> function.</p>

<p>The <code>currentWeaponIndex</code> variable is the index of the <code>weapons</code> array, but array indexing starts at zero. The index of the last element in an array is one less than the length of the array.</p>

<p>Change the <code>if</code> condition to check <code>weapons.length - 1</code>, instead of <code>weapons.length</code>.</p>

<p>Test out your <code>buyWeapon</code> function again to see the error message disappear.</p>

**Source file link:** [rolePlayingGame_step098.js](./rolePlayingGame_step098.js)


```js

```


### Execution logs: 

---

## Step099:

<p>If the player has purchased all of the weapons in the inventory, the player should not be able to purchase any more and a message should be displayed.</p>

<p>Add an <code>else</code> statement for your outer <code>if</code> statement. Inside this new <code>else</code> statement, set <code>text.innerText</code> to <code>"You already have the most powerful weapon!"</code>.</p>

<p>Test your <code>buyWeapon</code> function again to make sure the message is displayed when the player has the most powerful weapon.</p>

**Source file link:** [rolePlayingGame_step099.js](./rolePlayingGame_step099.js)


```js

```


### Execution logs: 

---

## Step100:

<p>Now that you are finished testing that portion of the <code>buyWeapon</code> function, you can set your <code>gold</code> variable back to <code>50</code>.</p>

<p><em>Note</em>: The HTML has already been updated to reflect the original value of <code>gold</code>.</p>

**Source file link:** [rolePlayingGame_step100.js](./rolePlayingGame_step100.js)


```js

```


### Execution logs: 

---

## Step101:

<p>Once a player has the most powerful weapon, you can give them the ability to sell their old weapons.</p>

<p>In the outer <code>else</code> statement, set <code>button2.innerText</code> to <code>"Sell weapon for 15 gold"</code>. Also set <code>button2.onclick</code> to the function name <code>sellWeapon</code>.</p>

**Source file link:** [rolePlayingGame_step101.js](./rolePlayingGame_step101.js)


```js

```


### Execution logs: 

---

## Step102:

<p>Create an empty <code>sellWeapon</code> function.</p>

**Source file link:** [rolePlayingGame_step102.js](./rolePlayingGame_step102.js)


```js

```


### Execution logs: 

---

## Step103:

<p>Players should not be able to sell their only weapon. Inside the <code>sellWeapon</code> function, add an <code>if</code> statement with a condition that checks if the length of the <code>inventory</code> array is greater than <code>1</code>.</p>

**Source file link:** [rolePlayingGame_step103.js](./rolePlayingGame_step103.js)


```js

```


### Execution logs: 

---

## Step104:

<p>Inside the <code>if</code> statement, set <code>gold</code> equal to <code>15</code> more than its current value. Also update <code>goldText.innerText</code> to the new value.</p>

**Source file link:** [rolePlayingGame_step104.js](./rolePlayingGame_step104.js)


```js

```


### Execution logs: 

---

## Step105:

<p>The next step is to create a variable called <code>currentWeapon</code>.</p>

<p>Use the <code>let</code> keyword to create a variable named <code>currentWeapon</code>. Don't assign it a value yet.</p>

**Source file link:** [rolePlayingGame_step105.js](./rolePlayingGame_step105.js)


```js

```


### Execution logs: 

---

## Step106:

<p>In the previous project, you learned how to work with the <code>shift()</code> method to remove the first element from an array like this:</p>

<p>Use the <code>shift()</code> method to take the first element from the <code>inventory</code> array and assign it to your <code>currentWeapon</code> variable.</p>

**Source file link:** [rolePlayingGame_step106.js](./rolePlayingGame_step106.js)


```js

```


### Execution logs: 

---

## Step107:

<p>After your <code>currentWeapon</code>, use the concatenation operator to set <code>text.innerText</code> to the string <code>"You sold a "</code>, then <code>currentWeapon</code>, then the string <code>"."</code>.</p>

**Source file link:** [rolePlayingGame_step107.js](./rolePlayingGame_step107.js)


```js

```


### Execution logs: 

---

## Step108:

<p>Now use the <code>+=</code> operator to add the string <code>" In your inventory you have: "</code> and the contents of <code>inventory</code> to the <code>text.innerText</code>. Make sure to include the space at the beginning and end of the <code>" In your inventory you have: "</code> string.</p>

**Source file link:** [rolePlayingGame_step108.js](./rolePlayingGame_step108.js)


```js

```


### Execution logs: 

---

## Step109:

<p>Use an <code>else</code> statement to run when the <code>inventory</code> length is not more than one. Set the <code>text.innerText</code> to say <code>"Don't sell your only weapon!"</code>.</p>

**Source file link:** [rolePlayingGame_step109.js](./rolePlayingGame_step109.js)


```js

```


### Execution logs: 

---

## Step110:

<p>Now you can start the code to fight monsters. To keep your code organized, your <code>fightDragon</code> function has been moved for you to be near the other <code>fight</code> functions.</p>

<p>Below your <code>weapons</code> array, define a <code>monsters</code> variable and assign it an array. Set that array to have three objects, each with a <code>name</code>, <code>level</code>, and <code>health</code> properties. The first object's values should be <code>"slime"</code>, <code>2</code>, and <code>15</code>, in order. The second should be <code>"fanged beast"</code>, <code>8</code>, and <code>60</code>. The third should be <code>"dragon"</code>, <code>20</code>, and <code>300</code>.</p>

**Source file link:** [rolePlayingGame_step110.js](./rolePlayingGame_step110.js)


```js

```


### Execution logs: 

---

## Step111:

<p>Fighting each type of monster will use similar logic. Create an empty function called <code>goFight</code> to manage this logic.</p>

**Source file link:** [rolePlayingGame_step111.js](./rolePlayingGame_step111.js)


```js

```


### Execution logs: 

---

## Step112:

<p>In your <code>fightSlime</code> function, set <code>fighting</code> equal to <code>0</code> - the index of <code>slime</code> in the <code>monsters</code> array. Remember that you already declared <code>fighting</code> earlier in your code, so you do not need <code>let</code> or <code>const</code> here.</p>

<p>On the next line, call the <code>goFight</code> function.</p>

**Source file link:** [rolePlayingGame_step112.js](./rolePlayingGame_step112.js)


```js

```


### Execution logs: 

---

## Step113:

<p>Following the same pattern as the <code>fightSlime</code> function, use that code in the <code>fightBeast</code> and <code>fightDragon</code> functions. Remember that <code>beast</code> is at index <code>1</code> and <code>dragon</code> is at index <code>2</code>. Also, remove the <code>console.log</code> call from your <code>fightDragon</code> function.</p>

**Source file link:** [rolePlayingGame_step113.js](./rolePlayingGame_step113.js)


```js

```


### Execution logs: 

---

## Step114:

<p>At the end of your code, create two empty functions named <code>attack</code> and <code>dodge</code>.</p>

**Source file link:** [rolePlayingGame_step114.js](./rolePlayingGame_step114.js)


```js

```


### Execution logs: 

---

## Step115:

<p>Add a new object to the end of the <code>locations</code> array, following the same properties as the rest of the objects. Set <code>name</code> to <code>"fight"</code>, <code>"button text"</code> to an array with <code>"Attack"</code>, <code>"Dodge"</code>, and <code>"Run"</code>, <code>"button functions"</code> to an array with <code>attack</code>, <code>dodge</code>, and <code>goTown</code>, and <code>text</code> to <code>"You are fighting a monster."</code>.</p>

**Source file link:** [rolePlayingGame_step115.js](./rolePlayingGame_step115.js)


```js

```


### Execution logs: 

---

## Step116:

<p>In the <code>goFight</code> function, call your <code>update</code> function with the fourth object in <code>locations</code> as an argument.</p>

**Source file link:** [rolePlayingGame_step116.js](./rolePlayingGame_step116.js)


```js

```


### Execution logs: 

---

## Step117:

<p>Below your <code>update</code> call, set the <code>monsterHealth</code> to be the health of the current monster. You can get this value by accessing the <code>health</code> property of <code>monsters[fighting]</code> with dot notation.</p>

**Source file link:** [rolePlayingGame_step117.js](./rolePlayingGame_step117.js)


```js

```


### Execution logs: 

---

## Step118:

<p>By default, the HTML element that shows the monster's stats has been hidden with CSS. When the player clicks the "Fight dragon" button, the monster's stats should be displayed. You can accomplish this by using the <dfn>style</dfn> and <dfn>display</dfn> properties on the <code>monsterStats</code> element.</p>

<p>The <code>style</code> property is used to access the inline style of an element and the <code>display</code> property is used to set the visibility of an element.</p>

<p>Here is an example of how to update the display for a paragraph element:</p>

<p>Display the <code>monsterStats</code> element by updating the <code>display</code> property of the <code>style</code> property to <code>block</code>.</p>

**Source file link:** [rolePlayingGame_step118.js](./rolePlayingGame_step118.js)


```js

```


### Execution logs: 

---

## Step119:

<p>Now, you will need to update the text for the current monster's name and health.</p>

<p>Start by assigning <code>monsters[fighting].name</code> to the <code>innerText</code> property of <code>monsterName</code>. Then, assign <code>monsterHealth</code> to the <code>innerText</code> property of <code>monsterHealthText</code>.</p>

**Source file link:** [rolePlayingGame_step119.js](./rolePlayingGame_step119.js)


```js

```


### Execution logs: 

---

## Step120:

<p>Now you can build the <code>attack</code> function. First, update the <code>text</code> message to say <code>"The &lt;monster name&gt; attacks."</code>, replacing <code>&lt;monster name&gt;</code> with the name of the monster. Remember you can use the concatenation operator for this.</p>

**Source file link:** [rolePlayingGame_step120.js](./rolePlayingGame_step120.js)


```js

```


### Execution logs: 

---

## Step121:

<p>On a new line, use the addition assignment operator(<code>+=</code>), to add the string <code>" You attack it with your &lt;weapon&gt;."</code> to the <code>text</code> value, replacing <code>&lt;weapon&gt;</code> with the player's current weapon. Additionally, remember that this line of text starts with a space so it will properly display.</p>

**Source file link:** [rolePlayingGame_step121.js](./rolePlayingGame_step121.js)


```js

```


### Execution logs: 

---

## Step122:

<p>Next, set <code>health</code> to equal <code>health</code> minus the monster's level. Remember you can get this from the <code>monsters[fighting].level</code> property.</p>

**Source file link:** [rolePlayingGame_step122.js](./rolePlayingGame_step122.js)


```js

```


### Execution logs: 

---

## Step123:

<p>Set <code>monsterHealth</code> to <code>monsterHealth</code> minus the power of the player's current weapon.</p>

<p>Remember that you can access the power of the player's current weapon using <code>weapons[currentWeaponIndex].power</code>.</p>

**Source file link:** [rolePlayingGame_step123.js](./rolePlayingGame_step123.js)


```js

```


### Execution logs: 

---

## Step124:

<p>The <code>Math</code> object in JavaScript contains static properties and methods for mathematical constants and functions. One of those is <code>Math.random()</code>, which generates a random number from <code>0</code> (inclusive) to <code>1</code> (exclusive). Another is <code>Math.floor()</code>, which rounds a given number down to the nearest integer.</p>

<p>Using these, you can generate a random number within a range. For example, this generates a random number between <code>1</code> and <code>5</code>: <code>Math.floor(Math.random() * 5) + 1;</code>.</p>

<p>Following this pattern, use the addition operator (<code>+</code>) to add a random number between <code>1</code> and the value of <code>xp</code> to your <code>monsterHealth -= weapons[currentWeaponIndex].power</code>.</p>

**Source file link:** [rolePlayingGame_step124.js](./rolePlayingGame_step124.js)


```js

```


### Execution logs: 

---

## Step125:

<p>Update <code>healthText.innerText</code> and <code>monsterHealthText.innerText</code> to equal <code>health</code> and <code>monsterHealth</code>.</p>

**Source file link:** [rolePlayingGame_step125.js](./rolePlayingGame_step125.js)


```js

```


### Execution logs: 

---

## Step126:

<p>Add an <code>if</code> statement to check if <code>health</code> is less than or equal to <code>0</code>. If it is, call the <code>lose</code> function.</p>

**Source file link:** [rolePlayingGame_step126.js](./rolePlayingGame_step126.js)


```js

```


### Execution logs: 

---

## Step127:

<p>You can make an <code>else</code> statement conditional by using <code>else if</code>. Here's an example:</p>

<p>At the end of your <code>if</code> statement, add an <code>else if</code> statement to check if <code>monsterHealth</code> is less than or equal to <code>0</code>. In your <code>else if</code>, call the <code>defeatMonster</code> function.</p>

**Source file link:** [rolePlayingGame_step127.js](./rolePlayingGame_step127.js)


```js

```


### Execution logs: 

---

## Step128:

<p>At the end of your code, create the <code>defeatMonster</code> and <code>lose</code> functions. Leave them empty for now.</p>

**Source file link:** [rolePlayingGame_step128.js](./rolePlayingGame_step128.js)


```js

```


### Execution logs: 

---

## Step129:

<p>Inside the <code>dodge</code> function, set <code>text.innerText</code> equal to the string <code>"You dodge the attack from the &lt;monster&gt;"</code>. Replace <code>&lt;monster&gt;</code> with the name of the monster, using the <code>name</code> property.</p>

**Source file link:** [rolePlayingGame_step129.js](./rolePlayingGame_step129.js)


```js

```


### Execution logs: 

---

## Step130:

<p>In your <code>defeatMonster</code> function, set <code>gold</code> equal to <code>gold</code> plus the monster's level times <code>6.7</code>. Remember you can get the monster's level by using <code>monsters[fighting].level</code>.</p>

<p>Here is an example of setting <code>num</code> to <code>num</code> plus <code>5</code> * <code>8</code>: <code>num += 5 * 8</code>. Use <code>Math.floor()</code> to round the result down.</p>

**Source file link:** [rolePlayingGame_step130.js](./rolePlayingGame_step130.js)


```js

```


### Execution logs: 

---

## Step131:

<p>Set <code>xp</code> to <code>xp</code> plus the monster's level.</p>

**Source file link:** [rolePlayingGame_step131.js](./rolePlayingGame_step131.js)


```js

```


### Execution logs: 

---

## Step132:

<p>Now update <code>goldText</code> and <code>xpText</code> to display the updated values.</p>

**Source file link:** [rolePlayingGame_step132.js](./rolePlayingGame_step132.js)


```js

```


### Execution logs: 

---

## Step133:

<p>Finish the <code>defeatMonster</code> function by calling the <code>update</code> function with <code>locations[4]</code> as the argument.</p>

**Source file link:** [rolePlayingGame_step133.js](./rolePlayingGame_step133.js)


```js

```


### Execution logs: 

---

## Step134:

<p>Your <code>locations</code> array doesn't have a fifth element, so <code>locations[4]</code> doesn't work.</p>

<p>Add a new object at the end of the <code>locations</code> array, following the same structure as the other objects. Set <code>name</code> to <code>"kill monster"</code>, set <code>"button text"</code> to an array with three <code>"Go to town square"</code> strings, set <code>"button functions"</code> to an array with three <code>goTown</code> variables, and set <code>text</code> to <code>"The monster screams Arg! as it dies. You gain experience points and find gold."</code>.</p>

**Source file link:** [rolePlayingGame_step134.js](./rolePlayingGame_step134.js)


```js

```


### Execution logs: 

---

## Step135:

<p>The word <code>"Arg!"</code> should have quotes around it. Besides escaping quotes, there is another way you can include quotation marks inside a string.</p>

<p>Change the double quotes around the string <code>"The monster screams Arg! as it dies. You gain experience points and find gold."</code> to single quotes <code>'</code>, then add double quotes around <code>"Arg!"</code>.</p>

**Source file link:** [rolePlayingGame_step135.js](./rolePlayingGame_step135.js)


```js

```


### Execution logs: 

---

## Step136:

<p>After a monster is defeated, the monster's stat box should no longer display.</p>

<p>On the first line of the <code>update</code> function, use <code>monsterStats.style.display</code> to change the <code>display</code> value to <code>none</code>.</p>

**Source file link:** [rolePlayingGame_step136.js](./rolePlayingGame_step136.js)


```js

```


### Execution logs: 

---

## Step137:

<p>In the <code>lose</code> function, call the <code>update</code> function and pass in the sixth object of your <code>locations</code> array. Note that you haven't created this object just yet.</p>

**Source file link:** [rolePlayingGame_step137.js](./rolePlayingGame_step137.js)


```js

```


### Execution logs: 

---

## Step138:

<p>At the end of your code, create a <code>restart</code> function. Inside this function, set <code>xp</code> to <code>0</code>, <code>health</code> to <code>100</code>, <code>gold</code> to <code>50</code>, <code>currentWeaponIndex</code> to <code>0</code>, and set <code>inventory</code> to an array with the string <code>stick</code>.</p>

<p>Also update the <code>innerText</code> properties of <code>goldText</code>, <code>healthText</code>, and <code>xpText</code> to their current values.</p>

<p>Finally, call the <code>goTown()</code> function.</p>

**Source file link:** [rolePlayingGame_step138.js](./rolePlayingGame_step138.js)


```js

```


### Execution logs: 

---

## Step139:

<p>In the <code>locations</code> array, add another object at the end. Set the <code>name</code> property to <code>"lose"</code>, set <code>"button text"</code> to an array with three <code>"REPLAY?"</code> strings, set <code>"button functions"</code> to an array with three <code>restart</code> variables, and set <code>text</code> to <code>"You die. &amp;#x2620;"</code>.</p>

<p>In a later step, you will update the code for the <code>&amp;#x2620;</code> emoticon text to properly display on the page.</p>

**Source file link:** [rolePlayingGame_step139.js](./rolePlayingGame_step139.js)


```js

```


### Execution logs: 

---

## Step140:

<p>Back to your <code>attack</code> function - inside the <code>else if</code> block, create another <code>if</code> and <code>else</code> statement. If the player is fighting the dragon (<code>fighting</code> would be <code>2</code>), call the <code>winGame</code> function. Move the <code>defeatMonster()</code> call to the <code>else</code> block.</p>

<p>For this step, you will need to use the strict equality (<code>===</code>) operator to check if <code>fighting</code> is equal to <code>2</code>.</p>

**Source file link:** [rolePlayingGame_step140.js](./rolePlayingGame_step140.js)


```js

```


### Execution logs: 

---

## Step141:

<p>In order for the <code>&amp;#x2620;</code> emoticon text to properly display on the page, you will need to use the <dfn>innerHTML</dfn> property.</p>

<p>The <code>innerHTML</code> property allows you to access or modify the content inside an HTML element using JavaScript.</p>

<p>Here is an example of updating the content for this paragraph element using the <code>innerHTML</code>  property.</p>

<p>In the <code>update</code> function, change <code>text.innerText</code> to <code>text.innerHTML</code>.</p>

**Source file link:** [rolePlayingGame_step141.js](./rolePlayingGame_step141.js)


```js

```


### Execution logs: 

---

## Step142:

<p>After the <code>lose</code> function, create a function called <code>winGame</code>. Inside the <code>winGame</code> function, call the <code>update</code> function and pass in <code>locations[6]</code>.</p>

**Source file link:** [rolePlayingGame_step142.js](./rolePlayingGame_step142.js)


```js

```


### Execution logs: 

---

## Step143:

<p>Add another object in the <code>locations</code> array. Everything should be the same as the <code>lose</code> object, except the <code>name</code> should be <code>"win"</code> and the <code>text</code> should be <code>"You defeat the dragon! YOU WIN THE GAME! &amp;#x1F389;"</code>.</p>

**Source file link:** [rolePlayingGame_step143.js](./rolePlayingGame_step143.js)


```js

```


### Execution logs: 

---

## Step144:

<p>While your game is feature-complete at this stage, there are things you can do to make it more fun and engaging. To get started, you'll give <code>monsters</code> a dynamic attack value.</p>

<p>Inside your <code>attack</code> function, change your <code>health -= monsters[fighting].level;</code> line to <code>health -= getMonsterAttackValue(monsters[fighting].level);</code>. This sets <code>health</code> equal to <code>health</code> minus the return value of the <code>getMonsterAttackValue</code> function, and passes the <code>level</code> of the monster as an argument.</p>

**Source file link:** [rolePlayingGame_step144.js](./rolePlayingGame_step144.js)


```js

```


### Execution logs: 

---

## Step145:

<p>Below your <code>attack</code> function, create an empty function named <code>getMonsterAttackValue</code>. It should take <code>level</code> as a parameter.</p>

**Source file link:** [rolePlayingGame_step145.js](./rolePlayingGame_step145.js)


```js

```


### Execution logs: 

---

## Step146:

<p>The attack of the monster will be based on the monster's <code>level</code> and the player's <code>xp</code>. In the <code>getMonsterAttackValue</code> function, use <code>const</code> to create a variable called <code>hit</code>. Assign it the equation <code>(level * 5) - (Math.floor(Math.random() * xp));</code>.</p>

<p>This will set the monster's attack to five times their <code>level</code> minus a random number between <code>0</code> and the player's <code>xp</code>.</p>

**Source file link:** [rolePlayingGame_step146.js](./rolePlayingGame_step146.js)


```js

```


### Execution logs: 

---

## Step147:

<p>Log the value of <code>hit</code> to the console to use in debugging. Remember that you can do this with <code>console.log()</code>.</p>

**Source file link:** [rolePlayingGame_step147.js](./rolePlayingGame_step147.js)


```js

```


### Execution logs: 

---

## Step148:

<p>In the previous project, you learned how to work with the <code>return</code> keyword to return a value from a function like this:</p>

<p>Use the <code>return</code> keyword to return the value of <code>hit</code> at the end of the function.</p>

**Source file link:** [rolePlayingGame_step148.js](./rolePlayingGame_step148.js)


```js

```


### Execution logs: 

---

## Step149:

<p>If you play the game in its current state you might notice a bug. If your <code>xp</code> is high enough, the <code>getMonsterAttackValue</code> function will return a negative number, which will actually add to your total health when fighting a monster! You can fix this issue by using a <dfn>ternary operator</dfn> to ensure negative values are not returned.</p>

<p>The ternary operator is a conditional operator and can be used as a one-line <code>if-else</code> statement. The syntax is: <code>condition ? expressionIfTrue : expressionIfFalse</code>.</p>

<p>Here is an example of returning a value using an <code>if-else</code> statement and a refactored example using a ternary operator:</p>

<p>In <code>getMonsterAttackValue</code>, change <code>return hit</code> to a ternary operator that returns <code>hit</code> if <code>hit</code> is greater than <code>0</code>, or returns <code>0</code> if it is not.</p>

**Source file link:** [rolePlayingGame_step149.js](./rolePlayingGame_step149.js)


```js

```


### Execution logs: 

---

## Step150:

<p>In your attack function, find the line of code that updates the <code>monsterHealth</code> variable and place it within an <code>if</code> block with a condition that calls the <code>isMonsterHit</code> function.</p>

**Source file link:** [rolePlayingGame_step150.js](./rolePlayingGame_step150.js)


```js

```


### Execution logs: 

---

## Step151:

<p>Add an <code>else</code> statement to the first <code>if</code> statement inside your <code>attack()</code> function. In the <code>else</code> statement, use the <code>+=</code> operator to add the text <code>" You miss."</code> to the end of <code>text.innerText</code>.</p>

**Source file link:** [rolePlayingGame_step151.js](./rolePlayingGame_step151.js)


```js

```


### Execution logs: 

---

## Step152:

<p>Now create the <code>isMonsterHit</code> function. This will return a <dfn>boolean</dfn> value (true or false) to be used in your <code>if</code> statement. Return the result of the comparison <code>Math.random() &gt; .2</code>.</p>

**Source file link:** [rolePlayingGame_step152.js](./rolePlayingGame_step152.js)


```js

```


### Execution logs: 

---

## Step153:

<p>The player should hit if either <code>Math.random() &gt; .2</code> <strong>or</strong> if the player's health is less than <code>20</code>.</p>

<p>At the end of your <code>return</code> statement, use the <dfn>logical OR</dfn> operator <code>||</code> and check if <code>health</code> is less than <code>20</code>.</p>

<p>The logical OR operator will use the first value if it is truthy – that is, anything apart from <code>NaN</code>, <code>null</code>, <code>undefined</code>, <code>0</code>, <code>-0</code>, <code>0n</code>, <code>""</code>, and <code>false</code>. Otherwise, it will use the second value.</p>

<p>For example: <code>num &lt; 10 || num &gt; 20</code>.</p>

**Source file link:** [rolePlayingGame_step153.js](./rolePlayingGame_step153.js)


```js

```


### Execution logs: 

---

## Step154:

<p>On every attack, there should be a chance that the player's weapon breaks. At the end of the <code>attack</code> function, add an empty <code>if</code> statement with the condition <code>Math.random() &lt;= .1</code>.</p>

**Source file link:** [rolePlayingGame_step154.js](./rolePlayingGame_step154.js)


```js

```


### Execution logs: 

---

## Step155:

<p>Use the <code>+=</code> operator to add <code>" Your &lt;weapon&gt; breaks."</code>, with a space in front of <code>Your</code>, to the end of <code>text.innerText</code>. Replace <code>&lt;weapon&gt;</code> with the last item in the <code>inventory</code> array using <code>inventory.pop()</code>, which will remove the last item in the array AND return it so it appears in your string.</p>

**Source file link:** [rolePlayingGame_step155.js](./rolePlayingGame_step155.js)


```js

```


### Execution logs: 

---

## Step156:

<p>Remember that the increment operator <code>++</code> can be used to increase a variable's value by <code>1</code>. There is also a <dfn>decrement operator</dfn> <code>--</code> that can be used to decrease a variable's value by <code>1</code>. For example :</p>

<p>Decrement the value of <code>currentWeaponIndex</code> in your <code>if</code> statement, after you update the text.</p>

**Source file link:** [rolePlayingGame_step156.js](./rolePlayingGame_step156.js)


```js

```


### Execution logs: 

---

## Step157:

<p>We don't want a player's only weapon to break. The logical AND operator checks if two statements are true.</p>

<p>Use the <dfn>logical AND</dfn> operator <code>&amp;&amp;</code> to add a second condition to your <code>if</code> statement. The player's weapon should only break if <code>inventory.length</code> does not equal (<code>!==</code>) one.</p>

<p>Here is an example of an <code>if</code> statement with two conditions:</p>

**Source file link:** [rolePlayingGame_step157.js](./rolePlayingGame_step157.js)


```js

```


### Execution logs: 

---

## Step158:

<p>Now you can add a small easter egg (hidden feature) to your game.</p>

<p>Create a new function called <code>easterEgg</code> which calls the <code>update</code> function with <code>locations[7]</code> as the argument.</p>

**Source file link:** [rolePlayingGame_step158.js](./rolePlayingGame_step158.js)


```js

```


### Execution logs: 

---

## Step159:

<p>Create an empty <code>pick</code> function with a parameter named <code>guess</code>.</p>

**Source file link:** [rolePlayingGame_step159.js](./rolePlayingGame_step159.js)


```js

```


### Execution logs: 

---

## Step160:

<p>Create two new functions named <code>pickTwo</code> and <code>pickEight</code>.</p>

<p>Inside each of those, call the <code>pick()</code> function and pass either <code>2</code> or <code>8</code> as the argument depending on the function name.</p>

**Source file link:** [rolePlayingGame_step160.js](./rolePlayingGame_step160.js)


```js

```


### Execution logs: 

---

## Step161:

<p>Add another object to your <code>locations</code> array. Set <code>name</code> to <code>"easter egg"</code>, set <code>"button text"</code> to an array with the strings <code>"2"</code>, <code>"8"</code>, and <code>"Go to town square?"</code>, set <code>"button functions"</code> to an array with the variables <code>pickTwo</code>, <code>pickEight</code>, and <code>goTown</code>, and <code>text</code> to <code>"You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!"</code>.</p>

**Source file link:** [rolePlayingGame_step161.js](./rolePlayingGame_step161.js)


```js

```


### Execution logs: 

---

## Step162:

<p>Inside <code>pick</code>, use <code>const</code> to initialize a variable named <code>numbers</code> and set it to an empty array.</p>

**Source file link:** [rolePlayingGame_step162.js](./rolePlayingGame_step162.js)


```js

```


### Execution logs: 

---

## Step163:

<p>After your <code>numbers</code> array, create a <code>while</code> loop that runs as long as <code>numbers.length</code> is less than <code>10</code>.</p>

<p>In the previous project, you learned how to work with <code>while</code> loops like this:</p>

**Source file link:** [rolePlayingGame_step163.js](./rolePlayingGame_step163.js)


```js

```


### Execution logs: 

---

## Step164:

<p>Inside your <code>while</code> loop, push a random number between <code>0</code> and <code>10</code> to the end of the <code>numbers</code> array. You can create this random number with <code>Math.floor(Math.random() * 11)</code>.</p>

**Source file link:** [rolePlayingGame_step164.js](./rolePlayingGame_step164.js)


```js

```


### Execution logs: 

---

## Step165:

<p>After the <code>while</code> loop, set <code>text.innerText</code> to equal <code>"You picked &lt;someGuess&gt;. Here are the random numbers:"</code>. Replace <code>&lt;someGuess&gt;</code> with the <code>guess</code> function parameter.</p>

**Source file link:** [rolePlayingGame_step165.js](./rolePlayingGame_step165.js)


```js

```


### Execution logs: 

---

## Step166:

<p>At the end of the string, before the final quote, insert the new line escape character <code>\n</code>. This will cause the next part you add to <code>text.innerText</code> to appear on a new line.</p>

**Source file link:** [rolePlayingGame_step166.js](./rolePlayingGame_step166.js)


```js

```


### Execution logs: 

---

## Step167:

<p>In the previous project, you learned how to work with <code>for</code> loops like this:</p>

<p><code>for</code> loops are declared with three expressions separated by semicolons: <code>for (a; b; c)</code>, where <code>a</code> is the initialization expression, <code>b</code> is the condition, and <code>c</code> is the final expression.</p>

<p>In this step, create a <code>for</code> loop where <code>i</code> is initialized to <code>0</code>, the loop runs as long as <code>i</code> is less than <code>10</code>, and <code>i</code> is incremented by <code>1</code> after each iteration using the increment operator <code>++</code>.</p>

**Source file link:** [rolePlayingGame_step167.js](./rolePlayingGame_step167.js)


```js

```


### Execution logs: 

---

## Step168:

<p>Now you can write the logic to run in the loop. Inside your <code>for</code> loop, use the <code>+=</code> operator to add to the end of <code>text.innerText</code>. Add the number at index <code>i</code> of the <code>numbers</code> array, using <code>numbers[i]</code>. Then add a new line, using the escape sequence you used earlier.</p>

**Source file link:** [rolePlayingGame_step168.js](./rolePlayingGame_step168.js)


```js

```


### Execution logs: 

---

## Step169:

<p>The <code>.includes()</code> method determines if an array contains an element and will return either <code>true</code> or <code>false</code>.</p>

<p>Here is an example of the <code>.includes()</code> syntax:</p>

<p>After your <code>for</code> loop, add an <code>if</code> statement to check if the <code>guess</code> is in the <code>numbers</code> array. You can use the <code>.includes()</code> method to check if the array contains the <code>guess</code>.</p>

**Source file link:** [rolePlayingGame_step169.js](./rolePlayingGame_step169.js)


```js

```


### Execution logs: 

---

## Step170:

<p>Inside the <code>if</code> statement, add the string <code>"Right! You win 20 gold!"</code> to the end of <code>text.innerText</code>. Also, add <code>20</code> to the value of <code>gold</code> and update the <code>goldText.innerText</code>.</p>

**Source file link:** [rolePlayingGame_step170.js](./rolePlayingGame_step170.js)


```js

```


### Execution logs: 

---

## Step171:

<p>Now add an <code>else</code> statement. Inside, add <code>"Wrong! You lose 10 health!"</code> to the end of <code>text.innerText</code>. Subtract <code>10</code> from <code>health</code> and update <code>healthText.innerText</code>.</p>

**Source file link:** [rolePlayingGame_step171.js](./rolePlayingGame_step171.js)


```js

```


### Execution logs: 

---

## Step172:

<p>Since you subtracted health from the player, you need to check if the player's <code>health</code> is less than or equal to <code>0</code>. If it is, call the <code>lose</code> function.</p>

**Source file link:** [rolePlayingGame_step172.js](./rolePlayingGame_step172.js)


```js

```


### Execution logs: 

---

## Step173:

<p>Looking at your <code>"kill monster"</code> object, <code>"button functions"</code> currently has three <code>goTown</code> variables. Replace the third one with <code>easterEgg</code> - this is how a player will access the hidden feature of the game. Do not change the <code>"button text"</code>.</p>

<p>With this, your RPG game is complete! You can now play around - can you defeat the dragon?</p>

**Source file link:** [rolePlayingGame_step173.js](./rolePlayingGame_step173.js)


```js

```


### Execution logs: 

---
