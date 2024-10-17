# Learn Introductory JavaScript by Building a Pyramid Generator

JavaScript is a powerful scripting language that you can use to make web pages interactive. It's one of the core technologies of the web, along with HTML and CSS. All modern browsers support JavaScript.

In this practice project, you'll learn fundamental programming concepts in JavaScript by coding your own Pyramid Generator. You'll learn how to work with arrays, strings, functions, loops, `if`/`else` statements, and more.

## Step1:

<p>JavaScript is the programming language that powers the web. Unlike the HTML and CSS you have learned previously, JavaScript is most commonly used to write logic instead of markup.</p>

<p>In this project, you will learn the basics of Javascript and apply those concepts to building a pyramid generator.</p>

A pyramid generator is a program where you can set the 
- type of character, 
- the count for the pyramid, and 
- the direction of the pyramid. 
 
The program will then generate a pyramid based on those inputs.

**Source file link:** [pyramidGenerator_step1.js](./pyramidGenerator_step1.js)


```js
console.log("Let's build a pyramid using Javascript basics");
console.log("#########");
console.log(" ####### ");
console.log("  #####  ");
console.log("   ###   ");
console.log("    #    ");

```


### Execution logs: 

    Let's build a pyramid using Javascript basics
    #########
     ####### 
      #####  
       ###   
        #    


---

## Step2:

<p>One of the most important concepts in programming is variables. A <dfn>variable</dfn> points to a specific memory address that stores a value. Variables are given a name which can be used throughout your code to access that value.</p>

<p>Declaring a variable means giving it a name. In JavaScript, this is often done with the <code>let</code> keyword. For example, here is how you would declare a <code>hello</code> variable:</p>

Variable naming follows specific rules: 

names can include 
- letters, 
- numbers, 
- dollar signs, and 
- underscores, 
 
but cannot contain 
- spaces and 
- must not begin with a number.

<p>Use the <code>let</code> keyword to declare a variable called <code>character</code>.</p>

<p><em>Note</em>: It is common practice to end statements in JavaScript with a semicolon. <code>;</code></p>

**Source file link:** [pyramidGenerator_step2.js](./pyramidGenerator_step2.js)


```js
let hello;
```


### Execution logs: 

---

## Step3:

<p>Your <code>character</code> variable currently does not have a value. You can assign a value using the <dfn>assignment</dfn> operator <code>=</code>. For example:</p>

<p>Assigning a value to a variable at the moment of its declaration is known as <dfn>initialization</dfn>.</p>

<p>Initialize your <code>character</code> variable by assigning it the value <code>"Hello"</code> during its declaration.</p>

**Source file link:** [pyramidGenerator_step3.js](./pyramidGenerator_step3.js)


```js
let character = "Hello";
```


### Execution logs: 

---

## Step4:

<p>JavaScript has seven primitive data types, with String being one of them. In JavaScript, a <dfn>string</dfn> represents a sequence of characters and can be enclosed in either single (<code>'</code>) or double (<code>"</code>) quotes.</p>

<p>Note that strings are <dfn>immutable</dfn>, which means once they are created, they cannot be changed. The variable can still be reassigned another value.</p>

<p>Change your <code>"Hello"</code> string to use single quotes.</p>

**Source file link:** [pyramidGenerator_step4.js](./pyramidGenerator_step4.js)


```js
let character = 'Hello';
```


### Execution logs: 

---

## Step5:

<p>The <dfn>console</dfn> allows you to print and view JavaScript output. You can send information to the console using <code>console.log()</code>. For example, this code will print <code>"Naomi"</code> to the console:</p>

**Example Code:**

```js
let developer = "Naomi";
console.log(developer);
```

<p>The code above accesses the <code>developer</code> variable with its name in the <code>console.log()</code>. Note that the value between the parentheses is the value that will be printed.</p>

<p>Print the value of the <code>character</code> variable to the console.</p>

**Source file link:** [pyramidGenerator_step5.js](./pyramidGenerator_step5.js)


```js
let character = 'Hello';
console.log(character);

```


### Execution logs: 

    Hello


---

## Step6:

<p>When a variable is declared with the <code>let</code> keyword, you can <dfn>reassign</dfn> (or change the value of) that variable later on. In this example, the value of <code>programmer</code> is changed from <code>"Naomi"</code> to <code>"CamperChan"</code>.</p>

**Example code:**

```js
let programmer = "Naomi";
programmer = "CamperChan";
```

<p>Note that when reassigning a variable, you do <strong>not</strong> use the <code>let</code> keyword again.</p>

<p>After your <code>console.log</code>, assign the value <code>"World"</code> to your <code>character</code> variable.</p>

**Source file link:** [pyramidGenerator_step6.js](./pyramidGenerator_step6.js)


```js
let character = 'Hello';
console.log(character);
character = "World";
```


### Execution logs: 

    Hello


---

## Step7:

<p>Now log your <code>character</code> variable to the console again. You should see the string <code>"Hello"</code>, then the string <code>"World"</code>, in the console.</p>

**Source file link:** [pyramidGenerator_step7.js](./pyramidGenerator_step7.js)


```js
let character = 'Hello';
console.log(character);
character = "World";
console.log(character);

```


### Execution logs: 

    Hello
    World


---

## Step8:

<p>When variable names are more than one word, there are specific naming conventions for how you capitalize the words. In JavaScript, the convention to use is <dfn>camel case</dfn>.</p>

<p>Camel case means that the first word in the name is entirely lowercase, but the following words are all title-cased. Here are some examples of camel case:</p>

**Example Code**

```js
let variableOne;
let secondVariable;
let yetAnotherVariable;
let thisIsAnAbsurdlyLongName;
```

<p>Use camel case to declare a new <code>secondCharacter</code> variable.</p>

**Source file link:** [pyramidGenerator_step8.js](./pyramidGenerator_step8.js)


```js
let character = 'Hello';
console.log(character);
character = "World";
console.log(character);
let secondCharacter;
```


### Execution logs: 

    Hello
    World


---

## Step9:

<p>When you declare a variable without initializing it, it is considered <dfn>uninitialized</dfn>. Currently, your <code>secondCharacter</code> variable is uninitialized.</p>

<p>Add a <code>console.log()</code> to see what the value of your <code>secondCharacter</code> variable is.</p>

**Source file link:** [pyramidGenerator_step9.js](./pyramidGenerator_step9.js)


```js
let character = 'Hello';
console.log(character);
character = "World";
let secondCharacter;
console.log(secondCharacter);

```


### Execution logs: 

    Hello
    [90mundefined[39m


---

## Step10:

<p>The default value of an uninitialized variable is <code>undefined</code>. This is a special data type that represents a value that does not have a definition yet.</p>

<p>You can still assign a value to an uninitialized variable. Here is an example:</p>

**Example Code**

```js
let uninitialized;
uninitialized = "assigned";
```

<p>Assign the string <code>"Test"</code> to your <code>secondCharacter</code> variable below your declaration. Open the console to see how your log has changed.</p>

**Source file link:** [pyramidGenerator_step10.js](./pyramidGenerator_step10.js)


```js
let character = 'Hello';
console.log(character);
character = "World";
let secondCharacter;
secondCharacter = "Test";
console.log(secondCharacter);
```


### Execution logs: 

    Hello
    Test


---

## Step11:

<p>You can also assign the value of a variable to another variable. For example:</p>

**Example Code**

```js
let first = "One";
let second = "Two";
second = first;
```

<p>The <code>second</code> variable would now have the value <code>"One"</code>.</p>

<p>To see this in action, change your <code>secondCharacter</code> assignment from <code>"Test"</code> to your <code>character</code> variable.</p>

**Source file link:** [pyramidGenerator_step11.js](./pyramidGenerator_step11.js)


```js
let character = 'Hello';
console.log(character);
character = "World";
let secondCharacter;
secondCharacter = character;
console.log(secondCharacter);
```


### Execution logs: 

    Hello
    World


---

## Step12:

<p>You are now ready to declare your next variable. Remove both <code>console.log</code> statements, and the <code>character</code> reassignment.</p>

<p>Also remove your <code>secondCharacter</code> variable, but leave the <code>character</code> initialization unchanged.</p>

**Source file link:** [pyramidGenerator_step12.js](./pyramidGenerator_step12.js)


```js
let character = 'Hello';
```


### Execution logs: 

---

## Step13:

<p>Before moving forward, you should take a moment to review the concepts you have learned.</p>

<p>Use the <code>let</code> keyword to declare a <code>profession</code> variable and an <code>age</code> variable. Initialize <code>profession</code> with the string <code>"teacher"</code>, but do not initialize <code>age</code> with any value.</p>

<p>Log both of your variables to the console to see the results.</p>

**Source file link:** [pyramidGenerator_step13.js](./pyramidGenerator_step13.js)


```js
let character = "Hello";
let profession = "teacher"
let age;

console.log(profession);
console.log(age);


```


### Execution logs: 

    teacher
    [90mundefined[39m


---

## Step14:

<p>Now that you have reviewed declaration and initialization, remove the code you wrote for your review.</p>

<p>Do not remove your <code>character</code> variable.</p>

**Source file link:** [pyramidGenerator_step14.js](./pyramidGenerator_step14.js)


```js
let character = "Hello";
```


### Execution logs: 

---

## Step15:

<p>Use <code>let</code> to declare a <code>count</code> variable. Assign it the <dfn>number</dfn> <code>8</code>. When using a number value, you do not use quotes. For example:</p>

**Example Code**

```jc
let money = 100;
```

**Source file link:** [pyramidGenerator_step15.js](./pyramidGenerator_step15.js)


```js
let character = "Hello";
let count = 8;
```


### Execution logs: 

---

## Step16:

<p>With the <code>number</code> data type, you can perform mathematical operations, like addition. Try printing <code>count + 1</code> to the console.</p>

**Source file link:** [pyramidGenerator_step16.js](./pyramidGenerator_step16.js)


```js
let character = "Hello";
let count = 8;
console.log(count + 1);

```


### Execution logs: 

    [33m9[39m


---

## Step17:

<p>You can also perform subtraction (<code>-</code>), multiplication (<code>*</code>), and division (<code>/</code>). Feel free to experiment with the operators and numbers in your <code>console.log</code>. When you are ready to move on, remove the <code>console.log</code>.</p>

**Source file link:** [pyramidGenerator_step17.js](./pyramidGenerator_step17.js)


```js
let character = "Hello";
let count = 8;

```


### Execution logs: 

---

## Step18:

<p>In programming, you will often need to work with lots of data. There are many data structures that can help you organize and manage your data. One of the most basic data structures is an <dfn>array</dfn>.</p>

<p>An <dfn>array</dfn> is a non-primitive data type that can hold a series of values. Non-primitive data types differ from primitive data types in that they can hold more complex data. Primitive data types like strings and numbers can only hold one value at a time.</p>

<p>Arrays are denoted using square brackets (<code>[]</code>). Here is an example of a variable with the value of an empty array:</p>

**Example Code**

```js
let array = [];
```

<p>Declare a <code>rows</code> variable and assign it an empty array.</p>

**Source file link:** [pyramidGenerator_step18.js](./pyramidGenerator_step18.js)


```js
let character = "Hello";
let count = 8;
let rows = [];
```


### Execution logs: 

---

## Step19:

<p>When an array holds values, or <dfn>elements</dfn>, those values are separated by commas. Here is an array that holds two strings:</p>

**Example Code**

```js
let array = ["first", "second"]
```

<p>Change your <code>rows</code> declaration to be an array with the strings <code>"Naomi"</code>, <code>"Quincy"</code>, and <code>"CamperChan"</code>. The order of values in an array is important, so follow that order. Remember that strings are case-sensitive.</p>

**Source file link:** [pyramidGenerator_step19.js](./pyramidGenerator_step19.js)


```js
let character = "Hello";
let count = 8;
let rows = ["Naomi", "Quincy", "CamperChan"];
```


### Execution logs: 

---

## Step20:

<p>You can access the values inside an array using the <dfn>index</dfn> of the value. An index is a number representing the position of the value in the array, starting from <code>0</code> for the first value.</p>

<p>You can access the value using <dfn>bracket notation</dfn>, such as <code>array[0]</code>.</p>

<p>Use <code>console.log</code> and bracket notation to print the first value in your <code>rows</code> array.</p>

**Source file link:** [pyramidGenerator_step20.js](./pyramidGenerator_step20.js)


```js
let character = "Hello";
let count = 8;
let rows = ["Naomi", "Quincy", "CamperChan"];
console.log(rows[0]);

```


### Execution logs: 

    Naomi


---

## Step21:

<p>Arrays are special in that they are considered <dfn>mutable</dfn>. This means you can change the value at an index directly.</p>

<p>For example, this code would assign the number <code>25</code> to the second element in the array:</p>

**Example Code**

```js
let array = [1, 2, 3];
array[1] = 25;
console.log(array); // prints [1, 25, 3]
```

<p>Update the <strong>third</strong> element of your <code>rows</code> array to be the number <code>10</code>. Then print the <code>rows</code> array to your console.</p>

**Source file link:** [pyramidGenerator_step21.js](./pyramidGenerator_step21.js)


```js
let character = "Hello";
let count = 8;
let rows = ["Naomi", "Quincy", "CamperChan"];
console.log(rows[0]);
rows[2] = 10;
console.log(rows);

```


### Execution logs: 

    Naomi
    [ [32m'Naomi'[39m, [32m'Quincy'[39m, [33m10[39m ]


---

## Step22:

<p>Notice how the value inside your <code>rows</code> array has been changed directly? This is called <dfn>mutation</dfn>. As you learn more about arrays, you will learn when to mutate an array, and when you should not.</p>

<p>Before moving on, this is a great opportunity to learn a common array use. Currently, your code accesses the last element in the array with <code>rows[2]</code>. But you may not know how many elements are in an array when you want the last one.</p>

<p>You can make use of the <code>.length</code> property of an array - this returns the number of elements in the array. To get the last element of any array, you can use the following syntax:</p>

**Example Code**

```js
array[array.length - 1]
```

<p><code>array.length</code> returns the number of elements in the array. By subtracting <code>1</code>, you get the index of the last element in the array. You can apply this same concept to your <code>rows</code> array.</p>

<p>Update your <code>rows[2]</code> to dynamically access the last element in the <code>rows</code> array. Refer to the example above to help you.</p>

<p>You should not see anything change in your console.</p>

**Source file link:** [pyramidGenerator_step22.js](./pyramidGenerator_step22.js)


```js
let character = "Hello";
let count = 8;
let rows = ["Naomi", "Quincy", "CamperChan"];
console.log(rows[0]);
rows[rows.length - 1] = 10;
console.log(rows);

```


### Execution logs: 

    Naomi
    [ [32m'Naomi'[39m, [32m'Quincy'[39m, [33m10[39m ]


---

## Step23:

<p>For now, remove your first console log and your <code>rows[rows.length - 1]</code> assignment. Leave the second <code>rows</code> log statement for later.</p>

**Source file link:** [pyramidGenerator_step23.js](./pyramidGenerator_step23.js)


```js
let character = "Hello";
let count = 8;
let rows = ["Naomi", "Quincy", "CamperChan"];
console.log(rows);

```


### Execution logs: 

    [ [32m'Naomi'[39m, [32m'Quincy'[39m, [32m'CamperChan'[39m ]


---

## Step24:

<p>In the last few steps, you learned all about working with arrays. Take a moment to review what you have learned.</p>

<p>Start by declaring a <code>cities</code> variable and initializing it as an array of the strings <code>"London"</code>, <code>"New York"</code>, and <code>"Mumbai"</code>. Then log that variable to the console.</p>

<p>After logging, change the last element of <code>cities</code> to the string <code>"Mexico City"</code>, then log the <code>cities</code> variable again.</p>

<p>When done correctly, you should see this output in the console.</p>

**Example Code**

```
[ "London", "New York", "Mumbai" ]
[ "London", "New York", "Mexico City" ]
```

**Source file link:** [pyramidGenerator_step24.js](./pyramidGenerator_step24.js)


```js
let character = "Hello";
let count = 8;
let rows = ["Naomi", "Quincy", "CamperChan"];
console.log(rows);
let cities = ["London", "New York", "Mumbai"];
console.log(cities);
cities[cities.length - 1] = "Mexico City";
console.log(cities);

```


### Execution logs: 

    [ [32m'Naomi'[39m, [32m'Quincy'[39m, [32m'CamperChan'[39m ]
    [ [32m'London'[39m, [32m'New York'[39m, [32m'Mumbai'[39m ]
    [ [32m'London'[39m, [32m'New York'[39m, [32m'Mexico City'[39m ]


---

## Step25:

<p>Now you are ready to move onto the next set of array lessons.</p>

<p>Remove all of your code from the previous step.</p>

**Source file link:** [pyramidGenerator_step25.js](./pyramidGenerator_step25.js)


```js
let character = "Hello";
let count = 8;
let rows = ["Naomi", "Quincy", "CamperChan"];
console.log(rows);
```


### Execution logs: 

    [ [32m'Naomi'[39m, [32m'Quincy'[39m, [32m'CamperChan'[39m ]


---

## Step26:

<p>A <dfn>method</dfn> in JavaScript is a function that's associated with certain values or objects. An example you've already encountered is the <code>.log()</code> method, which is part of the <code>console</code> object.</p>

<p>Arrays have their own methods, and the first you will explore is the <code>.push()</code> method. This allows you to "push" a value to the end of an array. Here is an example to add the number <code>12</code> to the end of an array:</p>

**Example Code**

```js
array.push(12);
```

<p>Use <code>.push()</code> to add the string <code>"freeCodeCamp"</code> to the end of your <code>rows</code> array. Add this code before your <code>console.log</code> so you can see the change you made to your array.</p>

**Source file link:** [pyramidGenerator_step26.js](./pyramidGenerator_step26.js)


```js
let character = "Hello";
let count = 8;
let rows = ["Naomi", "Quincy", "CamperChan"];
rows.push("freeCodeCamp");
console.log(rows);
```


### Execution logs: 

    [ [32m'Naomi'[39m, [32m'Quincy'[39m, [32m'CamperChan'[39m, [32m'freeCodeCamp'[39m ]


---

## Step27:

<p>Another method essential for this project is the <code>.pop()</code> method. It removes the last element from an array and <dfn>returns</dfn> that element.</p>

<p>When a method returns a value, you can think of it as giving the value back to you, making it available for use in other parts of your code.</p>

<p>Create a new variable called <code>popped</code> and assign it the result of <code>rows.pop()</code>. Then, log <code>popped</code> to the console.</p>

**Source file link:** [pyramidGenerator_step27.js](./pyramidGenerator_step27.js)


```js
let character = "Hello";
let count = 8;
let rows = ["Naomi", "Quincy", "CamperChan"];
rows.push("freeCodeCamp");
let popped = rows.pop();
console.log(popped);
console.log(rows);

```


### Execution logs: 

    freeCodeCamp
    [ [32m'Naomi'[39m, [32m'Quincy'[39m, [32m'CamperChan'[39m ]


---

## Step28:

<p>You should have seen <code>"freeCodeCamp"</code> printed to the console. This is because <code>.pop()</code> returns the value that was removed from the array - and you pushed <code>"freeCodeCamp"</code> to the end of the array earlier.</p>

<p>But what does <code>.push()</code> return? Assign your existing <code>rows.push()</code> to a new <code>pushed</code> variable, and log it.</p>

**Source file link:** [pyramidGenerator_step28.js](./pyramidGenerator_step28.js)


```js
let character = "Hello";
let count = 8;
let rows = ["Naomi", "Quincy", "CamperChan"];
rows.push("freeCodeCamp");
let popped = rows.pop();
console.log(popped);
console.log(rows);
let pushed = rows.push("freeCodeCamp");
console.log(pushed);
console.log(rows);

```


### Execution logs: 

    freeCodeCamp
    [ [32m'Naomi'[39m, [32m'Quincy'[39m, [32m'CamperChan'[39m ]
    [33m4[39m
    [ [32m'Naomi'[39m, [32m'Quincy'[39m, [32m'CamperChan'[39m, [32m'freeCodeCamp'[39m ]


---

## Step29:

<p>Were you expecting to see <code>4</code> in the console? <code>.push()</code> returns the new length of the array, after adding the value you give it.</p>

<p>It is important to be aware of what values a method returns. Take some time to experiment with <code>.push()</code> and <code>.pop()</code>. When you are ready, remove all of your <code>.push()</code> and <code>.pop()</code> calls, and your <code>console.log</code> statements.</p>

**Source file link:** [pyramidGenerator_step29.js](./pyramidGenerator_step29.js)


```js
let character = "Hello";
let count = 8;
let rows = ["Naomi", "Quincy", "CamperChan"];
```


### Execution logs: 

---

## Step30:

<p>Change your <code>rows</code> declaration to be assigned an empty array again.</p>

<p>Also, change your <code>'Hello'</code> string to use double quotes again. Generally, it does not matter which of the two you prefer, but you will want to be consistent in that choice throughout your project.</p>

**Source file link:** [pyramidGenerator_step30.js](./pyramidGenerator_step30.js)


```js
let character = "Hello";
let count = 8;
let rows = [];
```


### Execution logs: 

---

## Step31:

<p>Declaring a variable with the <code>let</code> keyword allows it to be reassigned. This means you could change <code>character</code> later to be a completely different value.</p>

<p>For this project, you will not want to change these variable values. So instead, you should use <code>const</code> to declare them. <code>const</code> variables are special.</p>

<p>First, a <code>const</code> variable cannot be reassigned like a <code>let</code> variable. This code would throw an error:</p>

**Example Code**

```js
const firstName = "Naomi";
firstName = "Jessica";
```

<p>A <code>const</code> variable also cannot be uninitialized. This code would throw an error:</p>

**Example Code**

```js
const firstName;
```

<p>Replace your <code>let</code> keywords with <code>const</code>.</p>

**Source file link:** [pyramidGenerator_step31.js](./pyramidGenerator_step31.js)


```js
const character = "Hello";
const count = 8;
const rows = [];
```


### Execution logs: 

---

## Step32:

<p>You are now ready to start building your pyramid generator. Your <code>character</code> variable will serve as the building block for the pyramid.</p>

<p><code>"Hello"</code> might not work very well for that. Change the value of <code>character</code> to be the hash character <code>"#"</code>.</p>

**Source file link:** [pyramidGenerator_step32.js](./pyramidGenerator_step32.js)


```js
const character = "#";
const count = 8;
const rows = [];
```


### Execution logs: 

---

## Step33:

<p>To generate a pyramid, you will need to create multiple rows. When you have to perform a task repeatedly until a condition is met, you will use a <dfn>loop</dfn>. There are many ways to write a loop.</p>

<p>You are going to start with a basic <code>for</code> loop. <code>for</code> loops use the following syntax:</p>

**Example Code**

```js
for (iterator; condition; iteration) {
  logic;
}
```

<p>In the upcoming steps, you'll explore each component of a loop in detail. For now, construct a <code>for</code> loop that includes the terms <code>"iterator"</code>, <code>"condition"</code>, and <code>"iteration"</code> for the three components. Keep the loop <dfn>body</dfn>, the section within the curly braces <code>{}</code>, empty.</p>

**Source file link:** [pyramidGenerator_step33.js](./pyramidGenerator_step33.js)


```js
const character = "#";
const count = 8;
const rows = [];

// for ("iterator"; "condition"; "iteration") {
    
// }
```


**Note:** Part of the code has been commented out because, it is just a format of `for` loop.

### Execution logs: 

---

## Step34:

<p>Your loop now needs a proper iterator. The <dfn>iterator</dfn> is a variable you can declare specifically in your <code>for</code> loop to control how the loop iterates or goes through your logic.</p>

<p>It is a common convention to use <code>i</code> as your iterator variable in a loop. A <code>for</code> loop allows you to declare this in the parentheses <code>()</code>. For example, here is a <code>for</code> loop that declares an <code>index</code> variable and assigns it the value <code>100</code>.</p>

**Example Code**

```js
for (let index = 100; "second"; "third") {

}
```

<p>Replace the string <code>"iterator"</code> with a <code>let</code> declaration for the variable <code>i</code>. Assign it the value <code>0</code> to start. This will give the <code>i</code> variable the value <code>0</code> the <strong>first time</strong> your loop runs.</p>

**Source file link:** [pyramidGenerator_step34.js](./pyramidGenerator_step34.js)


```js
const character = "#";
const count = 8;
const rows = [];

// for (let i = 0; "condition"; "iteration") {
    
// }
```


**Note:** Part of the code has been commented out since it is not a valid code but just a format used to explain.

### Execution logs: 

---

## Step35:

<p>The <dfn>condition</dfn> of a <code>for</code> loop tells the loop how many times it should iterate. When the <code>condition</code> becomes false, the loop will stop.</p>

<p>In JavaScript, a Boolean value can be either <code>true</code> or <code>false</code>. These are not strings - you will learn more about the difference later on.</p>

<p>For now, you will use the <dfn>less than</dfn> operator (<code>&lt;</code>). This allows you to check if the value on the left is less than the value on the right. For example, <code>count &lt; 3</code> would evaluate to <code>true</code> if <code>count</code> is <code>2</code>, and <code>false</code> if <code>count</code> is <code>4</code>.</p>

<p>Replace your <code>"condition"</code> string with a condition to check if <code>i</code> is less than <code>count</code>.</p>

**Source file link:** [pyramidGenerator_step35.js](./pyramidGenerator_step35.js)


```js
const character = "#";
const count = 8;
const rows = [];

// for (let i = 0; i < count; "iteration") {
    
// }
```


**Note:** Part of the code has been commented out because it is not yet a valid syntax.

### Execution logs: 

---

## Step36:

<p>Your <dfn>iteration</dfn> statement will tell your loop what to do with the iterator after each run.</p>

<p>When you reassign a variable, you can use the variable to reference the previous value before the reassignment. This allows you to do things like add three to an existing number. For example, <code>bees = bees + 3;</code> would increase the value of <code>bees</code> by three.</p>

<p>Use that syntax to replace your <code>"iteration"</code> string with a reassignment statement that increases <code>i</code> by one.</p>

**Source file link:** [pyramidGenerator_step36.js](./pyramidGenerator_step36.js)


```js
const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
    
}
```


### Execution logs: 

---

## Step37:

<p>Your loop should now run eight times. Inside the body of the loop, print the value of the <code>i</code> iterator and see what happens.</p>

**Source file link:** [pyramidGenerator_step37.js](./pyramidGenerator_step37.js)


```js
const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
    console.log(i);
    
}
```


### Execution logs: 

    [33m0[39m
    [33m1[39m
    [33m2[39m
    [33m3[39m
    [33m4[39m
    [33m5[39m
    [33m6[39m
    [33m7[39m


---

## Step38:

<p>You should see the numbers zero through seven printed in your console, one per line. This will serve as the foundation for generating your pyramid.</p>

<p>Replace your log statement with a statement to push <code>i</code> to your <code>rows</code> array.</p>

**Source file link:** [pyramidGenerator_step38.js](./pyramidGenerator_step38.js)


```js
const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
    rows.push(i);
}
```


### Execution logs: 

---

## Step39:

<p>Unfortunately, now you cannot see what your loop is doing.</p>

<p>Use <code>let</code> to declare a <code>result</code> variable, and assign it an empty string. An empty string is represented by quotation marks with nothing between them, such as <code>""</code>.</p>

**Source file link:** [pyramidGenerator_step39.js](./pyramidGenerator_step39.js)


```js
const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
    rows.push(i);
}

let result = "";
```


### Execution logs: 

---

## Step40:

<p>Add a log statement to print the value of <code>result</code>. Depending on which console you use, you may not see anything printed.</p>

**Source file link:** [pyramidGenerator_step40.js](./pyramidGenerator_step40.js)


```js
const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
    rows.push(i);
}

let result = "";
console.log(result);

```


### Execution logs: 

    


---

## Step41:

<p>To manipulate the <code>result</code> string, you will use a different type of loop. Specifically, a <code>for...of</code> loop, which iterates over each item in an iterable object and temporarily assigns it to a variable.</p>

<p>The syntax for a <code>for...of</code> loop looks like:</p>

**Example Code**

```js
for (const value of iterable) {

}
```

<p>Note that you can use <code>const</code> because the variable only exists for a single iteration, not during the entire loop.</p>

<p>Create a <code>for...of</code> loop to iterate through your <code>rows</code> array, assigning each value to a <code>row</code> variable.</p>

**Source file link:** [pyramidGenerator_step41.js](./pyramidGenerator_step41.js)


```js
const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
    rows.push(i);
}

let result = "";
console.log(result);

for (const row of rows) {
    
}
```


### Execution logs: 

    


---

## Step42:

<p>Remember in your previous loop that you used the addition operator <code>+</code> to increase the value of <code>i</code> by <code>1</code>.</p>

<p>You can do a similar thing with a string value, by appending a new string to an existing string. For example, <code>hello = hello + " World";</code> would add the string <code>" World"</code> to the existing string stored in the <code>hello</code> variable. This is called <dfn>concatenation</dfn>.</p>

<p>In your <code>for...of</code> loop, use the addition operator to concatenate the <code>row</code> value to the <code>result</code> value.</p>

**Source file link:** [pyramidGenerator_step42.js](./pyramidGenerator_step42.js)


```js
const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
    rows.push(i);
}

let result = "";

for (const row of rows) {
    result = result + row;
}

console.log(result);
```


### Execution logs: 

    01234567


---

## Step43:

<p>Now all of your numbers are appearing on the same line. This will not work for creating a pyramid.</p>

<p>You will need to add a new line to each row. However, pressing the return key to insert a line break between quotes in JavaScript will result in a parsing error. Instead, you need to use the special <dfn>escape sequence</dfn> <code>\n</code>, which is interpreted as a new line when the string is logged. For example:</p>

**Example Code**

```js
lineOne = lineOne + "\n" + lineTwo;
```

<p>Use a second addition operator to concatenate a new line between the existing <code>result</code> value and the added <code>row</code> value.</p>

**Source file link:** [pyramidGenerator_step43.js](./pyramidGenerator_step43.js)


```js
const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
    rows.push(i);
}

let result = "";

for (const row of rows) {
    result = result + "\n" + row;
}

console.log(result);
```


### Execution logs: 

    
    0
    1
    2
    3
    4
    5
    6
    7


---

## Step44:

<p>Printing numbers won't result in a visually appealing pyramid. Now that you're outputting the formatted content of your <code>rows</code> array, it's time to update your original loop.</p>

<p>Instead of pushing <code>i</code> to the array, push the value of your <code>character</code> variable.</p>

**Source file link:** [pyramidGenerator_step44.js](./pyramidGenerator_step44.js)


```js
const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
    rows.push(character);
}

let result = "";

for (const row of rows) {
    result = result + "\n" + row;
}

console.log(result);
```


### Execution logs: 

    
    #
    #
    #
    #
    #
    #
    #
    #


---

## Step45:

<p>Now you have a series of <code>#</code> characters, but the pyramid shape is still missing. Fortunately, the <code>i</code> variable represents the current "row" number in your loop, enabling you to use it for crafting a pyramid-like structure.</p>

<p>To achieve this, you will use the <code>.repeat()</code> method available to strings. This method accepts a number as an argument, specifying the number of times to repeat the target string. For example, using <code>.repeat()</code> to generate the string <code>"Code! Code! Code!"</code>:</p>

**Example Code**

```js
const activity = "Code! ";
activity.repeat(3);
```

<p>Use the <code>.repeat()</code> method on your <code>character</code>, and give it <code>i</code> for the number.</p>

**Source file link:** [pyramidGenerator_step45.js](./pyramidGenerator_step45.js)


```js
const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
    rows.push(character.repeat(i));
}

let result = "";

for (const row of rows) {
    result = result + "\n" + row;
}

console.log(result);
```


### Execution logs: 

    
    
    #
    ##
    ###
    ####
    #####
    ######
    #######


---

## Step46:

<p>You're getting closer! At this point, you're encountering what's known as an <dfn>off-by-one error</dfn>, a frequent problem in zero-based indexing languages like JavaScript.</p>

<p>The first index of your <code>rows</code> array is <code>0</code>, which is why you start your <code>for</code> loop with <code>i = 0</code>. But repeating a string zero times results in nothing to print.</p>

<p>To fix this, add <code>1</code> to the value of <code>i</code> in your <code>.repeat()</code> call. Do not assign it back to <code>i</code> like you did in your loop conditions.</p>

**Source file link:** [pyramidGenerator_step46.js](./pyramidGenerator_step46.js)


```js
const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
    rows.push(character.repeat(i + 1));
}

let result = "";

for (const row of rows) {
    result = result + "\n" + row;
}

console.log(result);
```


### Execution logs: 

    
    #
    ##
    ###
    ####
    #####
    ######
    #######
    ########


---

## Step47:

<p>The logic for formatting this pyramid is likely going to get complicated, which means it's a great time to extract that code into a function.</p>

<p>A <dfn>function</dfn> is a block of code that can be reused throughout your application. Functions are declared with the following syntax:</p>

**Example Code**

```js
function name(parameter) {

}
```

<p>The <code>function</code> keyword tells JavaScript that the <code>name</code> variable is going to be a function. <code>parameter</code> is a variable that represents a value that is passed into the function when it is used. A function may have as many, or as few, <dfn>parameters</dfn> as you'd like. Like a <code>for</code> loop, the space between the curly braces is the <dfn>function body</dfn>.</p>

<p>Declare a <code>padRow</code> function. Do not create any parameter variables yet. The function body should be empty. Remember that you need to use camel case for your naming convention.</p>

**Source file link:** [pyramidGenerator_step47.js](./pyramidGenerator_step47.js)


```js
const character = "#";
const count = 8;
const rows = [];

function padRow() {

}

for (let i = 0; i < count; i = i + 1) {
    rows.push(character.repeat(i + 1));
}

let result = "";

for (const row of rows) {
    result = result + "\n" + row;
}

console.log(result);

```


### Execution logs: 

    
    #
    ##
    ###
    ####
    #####
    ######
    #######
    ########


---

## Step48:

<p>In order to use a function, you need to call it. A <dfn>function call</dfn> tells your application to run the code from the function wherever you choose to call it. The syntax for a function call is the function name followed by parentheses. For example, this code defines and calls a <code>test</code> function.</p>

**Example Code**

```js
function test() {

}

test();
```

<p>Call your <code>padRow</code> function.</p>

**Source file link:** [pyramidGenerator_step48.js](./pyramidGenerator_step48.js)


```js
const character = "#";
const count = 8;
const rows = [];

function padRow() {

}

padRow();

for (let i = 0; i < count; i = i + 1) {
    rows.push(character.repeat(i + 1));
}

let result = "";

for (const row of rows) {
    result = result + "\n" + row;
}

console.log(result);

```


### Execution logs: 

    
    #
    ##
    ###
    ####
    #####
    ######
    #######
    ########


---

## Step49:

<p>You are calling your <code>padRow</code> function, but not doing anything with that function call. All functions in JavaScript <dfn>return</dfn> a value, meaning they provide the defined result of calling them for you to use elsewhere.</p>

<p>To see the result of calling your <code>padRow</code> function, declare a <code>call</code> variable and assign your existing <code>padRow</code> call to that variable.</p>

**Source file link:** [pyramidGenerator_step49.js](./pyramidGenerator_step49.js)


```js
const character = "#";
const count = 8;
const rows = [];

function padRow() {

}

const call = padRow();

for (let i = 0; i < count; i = i + 1) {
    rows.push(character.repeat(i + 1));
}

let result = "";

for (const row of rows) {
    result = result + "\n" + row;
}

console.log(result);

```


### Execution logs: 

    
    #
    ##
    ###
    ####
    #####
    ######
    #######
    ########


---

## Step50:

<p>Now add a log statement to print the value of your <code>call</code> variable.</p>

**Source file link:** [pyramidGenerator_step50.js](./pyramidGenerator_step50.js)


```js
const character = "#";
const count = 8;
const rows = [];

function padRow() {

}

const call = padRow();
console.log(call);

for (let i = 0; i < count; i = i + 1) {
    rows.push(character.repeat(i + 1));
}

let result = "";

for (const row of rows) {
    result = result + "\n" + row;
}

console.log(result);

```


### Execution logs: 

    [90mundefined[39m
    
    #
    ##
    ###
    ####
    #####
    ######
    #######
    ########


---

## Step51:

<p>Your <code>call</code> variable has an <code>undefined</code> value, even though you defined it! This is because your <code>padRow</code> function does not currently return a value. By default, functions return <code>undefined</code> as their value.</p>

<p>In order to return something else, you need to use the <code>return</code> keyword. Here is an example of a function that returns the string <code>"Functions are cool!"</code>:</p>

<p>Use the <code>return</code> keyword to have your function return the string <code>"Hello!"</code>.</p>

**Source file link:** [pyramidGenerator_step51.js](./pyramidGenerator_step51.js)


```js

```


### Execution logs: 

---

## Step52:

<p>When you have a value that is explicitly written in your code, like the <code>"Hello!"</code> string in your function, it is considered to be <dfn>hard-coded</dfn>. Hard-coding a value inside a function might not make it as reusable as you'd like.</p>

<p>Instead, you can define <dfn>parameters</dfn> for the function. Parameters are special variables that are given a value when you call the function, and can be used in your function to dynamically change the result of the function's code.</p>

<p>To add a parameter to your function, you need to add a variable name inside the parentheses. For example, this <code>demo</code> function has a <code>name</code> parameter:</p>

<p><code>name</code> sounds like a useful parameter, so go ahead and add it to your <code>padRow</code> function.</p>

**Source file link:** [pyramidGenerator_step52.js](./pyramidGenerator_step52.js)


```js

```


### Execution logs: 

---

## Step53:

<p>A function does not have to return a hard-coded value. It can return the value stored in a variable. Parameters are special variables for a function, so they can also be returned.</p>

<p>Change your <code>padRow</code> function to <code>return</code> the <code>name</code> parameter directly.</p>

**Source file link:** [pyramidGenerator_step53.js](./pyramidGenerator_step53.js)


```js

```


### Execution logs: 

---

## Step54:

<p>If you open your console again, you'll see that your <code>padRow</code> function is returning <code>undefined</code>, even though you defined a return value! This is because parameters need to be given a value when you <strong>call</strong> the function.</p>

<p>When you pass a value to a function call, that value is referred to as an <dfn>argument</dfn>. Here is an example of calling a <code>demo</code> function and passing <code>"Naomi"</code> as the argument for the <code>name</code> parameter.</p>

<p>Pass your own name as the argument for the <code>name</code> parameter in your <code>padRow</code> call. Remember that your name is a string, so you'll need to use quotes.</p>

**Source file link:** [pyramidGenerator_step54.js](./pyramidGenerator_step54.js)


```js

```


### Execution logs: 

---

## Step55:

<p>Before moving on, take a moment to review how functions work.</p>

<p>Declare a function named <code>addTwoNumbers</code>. This function should take two arguments and return the sum of those two arguments.</p>

<p>Your function should not use hard-coded values. An example of a hard-coded function might be:</p>

<p>This function would return <code>"John Doe"</code> regardless of the arguments passed to the parameters <code>firstName</code>, and <code>lastName</code>, so <code>"John Doe"</code> is considered a hard-coded value.</p>

<p>Declare a <code>sum</code> variable and assign it the value of calling your <code>addTwoNumbers</code> function with <code>5</code> and <code>10</code> as the arguments. Log the <code>sum</code> variable to the console.</p>

**Source file link:** [pyramidGenerator_step55.js](./pyramidGenerator_step55.js)


```js

```


### Execution logs: 

---

## Step56:

<p>With that quick review complete, you should remove your <code>addTwoNumbers</code> function, <code>sum</code> variable, and log statement.</p>

**Source file link:** [pyramidGenerator_step56.js](./pyramidGenerator_step56.js)


```js

```


### Execution logs: 

---

## Step57:

<p>Variables in JavaScript are available in a specific <dfn>scope</dfn>. In other words, where a variable is declared determines where in your code it can be used.</p>

<p>The first scope is the global scope. Variables that are declared outside of any "block" like a function or <code>for</code> loop are in the <dfn>global scope</dfn>. Your <code>character</code>, <code>count</code>, and <code>rows</code> variables are all in the global scope.</p>

<p>When a variable is in the global scope, a function can access it in its definition. Here is an example of a function using a global <code>title</code> variable:</p>

<p>This example would return <code>"Professor Naomi"</code>. Update your <code>padRow</code> function to return the value of concatenating your <code>character</code> variable to the beginning of the <code>name</code> parameter.</p>

**Source file link:** [pyramidGenerator_step57.js](./pyramidGenerator_step57.js)


```js

```


### Execution logs: 

---

## Step58:

<p>Variables can also be declared inside a function. These variables are considered to be in the <dfn>local scope</dfn>, or <dfn>block scope</dfn>. A variable declared inside a function can only be used inside that function. If you try to access it outside of the function, you get a reference error.</p>

<p>To see this in action, use <code>const</code> to declare a <code>test</code> variable in your <code>padRow</code> function. Initialise it with the value <code>"Testing"</code>.</p>

<p>Then, below your function, try to log <code>test</code> to the console. You will see an error because it is not defined outside of the function's local scope. Remove that <code>console.log</code> to pass the tests and continue.</p>

**Source file link:** [pyramidGenerator_step58.js](./pyramidGenerator_step58.js)


```js

```


### Execution logs: 

---

## Step59:

<p>Values returned out of a function are used by calling the function. You can use the function call directly as the value it returns, or capture the returned value in a variable. This way, you can use the value assigned to a locally scoped variable, outside the function it was created in.</p>

<p>To use your <code>"Testing"</code> value, return it out of the <code>padRow</code> function by updating your <code>return</code> statement to return only the <code>test</code> variable.</p>

**Source file link:** [pyramidGenerator_step59.js](./pyramidGenerator_step59.js)


```js

```


### Execution logs: 

---

## Step60:

<p>Below the <code>return</code> statement, log the string <code>"This works!"</code> to the console.</p>

<p>After doing that, you will see that the string <code>"This works!"</code> does not display in the console, and the <code>console.log("This works!")</code> line is greyed out.</p>

<p>Copy the console log and paste it above the <code>return</code> statement. Now, the string <code>"This works!"</code> should appear in the console.</p>

<p>An important thing to know about the <code>return</code> keyword is that it does not just define a value to be returned from your function, it also stops the execution of your code inside a function or a block statement. This means any code after a <code>return</code> statement will not run.</p>

**Source file link:** [pyramidGenerator_step60.js](./pyramidGenerator_step60.js)


```js

```


### Execution logs: 

---

## Step61:

<p>Now your <code>call</code> variable has the value <code>"Testing"</code>. But your function is no longer using the <code>name</code> parameter.</p>

<p>Remove the <code>name</code> parameter from your function declaration, then remove your <code>"CamperChan"</code> string from the <code>padRow</code> call.</p>

<p>Also, remove both <code>console.log</code> from the <code>padRow</code> function.</p>

**Source file link:** [pyramidGenerator_step61.js](./pyramidGenerator_step61.js)


```js

```


### Execution logs: 

---

## Step62:

<p>Because your function was no longer using the parameter, changing the argument did not affect it.</p>

<p>Go ahead and remove the <code>test</code> declaration and <code>return</code> statement from your <code>padRow</code> function, so the function is empty again.</p>

**Source file link:** [pyramidGenerator_step62.js](./pyramidGenerator_step62.js)


```js

```


### Execution logs: 

---

## Step63:

<p>As expected, your function now returns <code>undefined</code> again. Your <code>call</code> variable is not necessary any more, so remove the <code>call</code> declaration and the <code>console.log</code> for the <code>call</code> variable.</p>

**Source file link:** [pyramidGenerator_step63.js](./pyramidGenerator_step63.js)


```js

```


### Execution logs: 

---

## Step64:

<p>In order to know how to format a row, your <code>padRow</code> function will need to know which row number you are on, and how many rows in total are being generated.</p>

<p>The best way to do this is by creating function parameters for them. Give your <code>padRow</code> function a <code>rowNumber</code> and <code>rowCount</code> parameter. Multiple parameters are separated by a comma:</p>

**Source file link:** [pyramidGenerator_step64.js](./pyramidGenerator_step64.js)


```js

```


### Execution logs: 

---

## Step65:

<p>Remember in an earlier step, you learned about return values. A function can <dfn>return</dfn> a value for your application to consume separately.</p>

<p>In a function, the <code>return</code> keyword is used to specify a return value. For example, this function would return the value given to the first parameter:</p>

<p>Use the <code>return</code> keyword to return the value of the <code>character</code> variable, repeated <code>rowNumber</code> times.</p>

**Source file link:** [pyramidGenerator_step65.js](./pyramidGenerator_step65.js)


```js

```


### Execution logs: 

---

## Step66:

<p>A <dfn>function call</dfn> allows you to actually use a function. You may not have been aware of it, but the methods like <code>.push()</code> that you have been using have been function calls.</p>

<p>A function is called by referencing the function's name, and adding <code>()</code>. Here's how to call a <code>test</code> function:</p>

<p>Replace the <code>character.repeat(i + 1)</code> in your <code>.push()</code> call with a function call for your <code>padRow</code> function.</p>

**Source file link:** [pyramidGenerator_step66.js](./pyramidGenerator_step66.js)


```js

```


### Execution logs: 

---

## Step67:

<p>Your <code>padRow</code> function has two parameters which you defined. Values are provided to those parameters when a function is called.</p>

<p>The values you provide to a function call are referred to as <dfn>arguments</dfn>, and you <dfn>pass</dfn> arguments to a function call. Here's a function call with <code>"Hello"</code> passed as an argument:</p>

<p>Pass <code>i + 1</code> and <code>count</code> as the arguments to your <code>padRow</code> call. Like parameters, arguments are separated by a comma.</p>

**Source file link:** [pyramidGenerator_step67.js](./pyramidGenerator_step67.js)


```js

```


### Execution logs: 

---

## Step68:

<p>You should now see the same bunch of characters in your console. Your <code>padRow</code> function is doing the exact same thing you were doing earlier, but now it's in a reusable section of its own.</p>

<p>Use the addition operator to concatenate a single space <code>" "</code> to the beginning and end of your repeated <code>character</code> string.</p>

<p>Remember that you can use the <code>+</code> operator to concatenate strings like this:</p>

**Source file link:** [pyramidGenerator_step68.js](./pyramidGenerator_step68.js)


```js

```


### Execution logs: 

---

## Step69:

<p>Now it is time for a bit of math. Consider a three-row pyramid. If we want it centered, it would look something like:</p>

<p>Empty spaces have been replaced with interpuncts, or middle dots, for readability. If you extrapolate the pattern, you can see that the spaces at the beginning and end of a row follow a pattern.</p>

<p>Update your blank space strings to be repeated <code>rowCount - rowNumber</code> times.</p>

<p>Open up the console to see the result.</p>

**Source file link:** [pyramidGenerator_step69.js](./pyramidGenerator_step69.js)


```js

```


### Execution logs: 

---

## Step70:

<p>You can pass full expressions as an argument. The function will receive the result of evaluating that expression. For example, these two function calls would yield the same result:</p>

<p>Looking at the pattern again:</p>

<p>Update the <code>character</code> value to be repeated <code>2 * rowNumber - 1</code> times.</p>

<p>Open up the console again to see the updated result.</p>

**Source file link:** [pyramidGenerator_step70.js](./pyramidGenerator_step70.js)


```js

```


### Execution logs: 

---

## Step71:

<p>Your pyramid generator now functions as expected. But this is an excellent opportunity to further explore the code you have written.</p>

<p>The addition operator is not the only way to add values to a variable. The <dfn>addition assignment</dfn> operator can be used as shorthand to mean "take the original value of the variable, add this value, and assign the result back to the variable." For example, these two statements would yield the same result:</p>

<p>Update your iterator statement in the <code>for</code> loop to use addition assignment.</p>

**Source file link:** [pyramidGenerator_step71.js](./pyramidGenerator_step71.js)


```js

```


### Execution logs: 

---

## Step72:

<p>Because you are only increasing <code>i</code> by <code>1</code>, you can use the <dfn>increment operator</dfn> <code>++</code>. This operator increases the value of a variable by 1, updating the assignment for that variable. For example, <code>test</code> would become <code>8</code> here:</p>

<p>Replace your addition assignment with the increment operator for your loop iteration.</p>

**Source file link:** [pyramidGenerator_step72.js](./pyramidGenerator_step72.js)


```js

```


### Execution logs: 

---

## Step73:

<p>Rather than having to pass <code>i + 1</code> to your <code>padRow</code> call, you could instead start your loop at <code>1</code>. This would allow you to create a one-indexed loop.</p>

<p>Update your iterator to start at <code>1</code> instead of <code>0</code>.</p>

**Source file link:** [pyramidGenerator_step73.js](./pyramidGenerator_step73.js)


```js

```


### Execution logs: 

---

## Step74:

<p>The pyramid looks a little funny now. Because you are starting the loop at <code>1</code> instead of <code>0</code>, you do not need to add one to <code>i</code> when you pass it to <code>padRow</code>.</p>

<p>Update the first argument of your <code>padRow</code> call to be <code>i</code>.</p>

**Source file link:** [pyramidGenerator_step74.js](./pyramidGenerator_step74.js)


```js

```


### Execution logs: 

---

## Step75:

<p>Unfortunately, now the bottom of the pyramid has disappeared. This is because you have created another <dfn>off-by-one error</dfn>.</p>

<p>Your original loop went for <code>i</code> values from <code>0</code> to <code>7</code>, because <code>count</code> is <code>8</code> and your condition requires <code>i</code> to be less than <code>count</code>. Your loop is now running for <code>i</code> values from <code>1</code> to <code>7</code>.</p>

<p>Your loop needs to be updated to run when <code>i</code> is <code>8</code>, too. Looking at your logic, this means your loop should run when <code>i</code> is <dfn>less than or equal to</dfn> <code>count</code>. You can use the less than or equal to operator <code>&lt;=</code> for this.</p>

<p>Update your loop condition to run while <code>i</code> is less than or equal to <code>count</code>.</p>

**Source file link:** [pyramidGenerator_step75.js](./pyramidGenerator_step75.js)


```js

```


### Execution logs: 

---

## Step76:

<p>Comments can be helpful for explaining why your code takes a certain approach, or leaving to-do notes for your future self.</p>

<p>In JavaScript, you can use <code>//</code> to leave a single-line comment in your code.</p>

<p>Add a single-line comment above your function to remind yourself to change the code to a different kind of loop.</p>

**Source file link:** [pyramidGenerator_step76.js](./pyramidGenerator_step76.js)


```js

```


### Execution logs: 

---

## Step77:

<p>JavaScript also has support for multi-line comments. A multi-line comment starts with <code>/*</code> and ends with <code>*/</code>.</p>

<p>Unlike a single-line comment, a multi-line comment will encapsulate multiple lines.</p>

<p>Use <code>/*</code> and <code>*/</code> to turn your current <code>for</code> loop, including the body, into a multi-line comment.</p>

**Source file link:** [pyramidGenerator_step77.js](./pyramidGenerator_step77.js)


```js

```


### Execution logs: 

---

## Step78:

<p>Your pyramid has disappeared again. That's okay - that is to be expected.</p>

<p>Before you create your new loop, you need to learn about <code>if</code> statements. An <dfn><code>if</code> statement</dfn> allows you to run a block of code only when a condition is met. They use the following syntax:</p>

<p>Create an <code>if</code> statement with the boolean <code>true</code> as the condition. In the body, print the string <code>"Condition is true"</code>.</p>

**Source file link:** [pyramidGenerator_step78.js](./pyramidGenerator_step78.js)


```js

```


### Execution logs: 

---

## Step79:

<p>You'll see the string printed in the console, because <code>true</code> is in fact true.</p>

<p>Change the condition of your <code>if</code> statement to the boolean <code>false</code>.</p>

**Source file link:** [pyramidGenerator_step79.js](./pyramidGenerator_step79.js)


```js

```


### Execution logs: 

---

## Step80:

<p>Now the string is no longer printing, because <code>false</code> is not <code>true</code>. But what about other values?</p>

<p>Try changing the condition to the string <code>"false"</code>.</p>

**Source file link:** [pyramidGenerator_step80.js](./pyramidGenerator_step80.js)


```js

```


### Execution logs: 

---

## Step81:

<p>The text has appeared again! This is because <code>"false"</code> is a string, which when evaluated to a boolean becomes <code>true</code>. This means <code>"false"</code> is a truthy value.</p>

<p>A <dfn>truthy value</dfn> is a value that is considered true when evaluated as a boolean. Most of the values you encounter in JavaScript will be truthy.</p>

<p>A <dfn>falsy value</dfn> is the opposite - a value considered false when evaluated as a boolean. JavaScript has a defined list of falsy values. Some of them include <code>false</code>, <code>0</code>, <code>""</code>, <code>null</code>, <code>undefined</code>, and <code>NaN</code>.</p>

<p>Try changing your <code>if</code> condition to an empty string <code>""</code>, which is a falsy value.</p>

**Source file link:** [pyramidGenerator_step81.js](./pyramidGenerator_step81.js)


```js

```


### Execution logs: 

---

## Step82:

<p>The text is gone again! Empty strings evaluate to <code>false</code>, making them a <dfn>falsy value</dfn>. You will learn more about truthy and falsy values in future projects.</p>

<p>In addition to <code>if</code> statements, JavaScript also has <dfn>else if</dfn> statements. <code>else if</code> statements allow you to check multiple conditions in a single block of code.</p>

<p>Here is the syntax for an <code>else if</code> statement:</p>

<p>If the first condition is <code>false</code>, JavaScript will check the next condition in the chain. If the second condition is <code>false</code>, JavaScript will check the third condition, and so on.</p>

<p>Below your <code>if</code> statement, add an <code>else if</code> statement that checks if <code>5</code> is less than <code>10</code>. Then inside the body of the <code>else if</code> statement, log the string <code>"5 is less than 10"</code> to the console.</p>

<p>Check the console to see the results.</p>

**Source file link:** [pyramidGenerator_step82.js](./pyramidGenerator_step82.js)


```js

```


### Execution logs: 

---

## Step83:

<p>Sometimes you will want to run different code when all of the <code>if...else if</code> conditions are <code>false</code>. You can do this by adding an <code>else</code> block.</p>

<p>An <code>else</code> block will only evaluate if the conditions in the <code>if</code> and <code>else if</code> blocks are not met.</p>

<p>Here the <code>else</code> block is added to the <code>else if</code> block.</p>

<p>Add an <code>else</code> block to the <code>else if</code> block. Inside the <code>else</code> block, log the string <code>"This is the else block"</code> to the console.</p>

<p>To see the results in the console, you can manually change the <code>&lt;</code> in the <code>else if</code> statement to <code>&gt;</code>. That will make the condition <code>false</code> and the <code>else</code> block will run.</p>

**Source file link:** [pyramidGenerator_step83.js](./pyramidGenerator_step83.js)


```js

```


### Execution logs: 

---

## Step84:

<p>Now that you have practiced working with <code>if...else if...else</code> statements, you can remove them from your code.</p>

<p>Once you complete that, use <code>let</code> to declare a <code>continueLoop</code> variable and assign it the boolean <code>false</code>. Then use <code>let</code> to declare a <code>done</code> variable and assign it the value <code>0</code>.</p>

**Source file link:** [pyramidGenerator_step84.js](./pyramidGenerator_step84.js)


```js

```


### Execution logs: 

---

## Step85:

<p>A <dfn><code>while</code></dfn> loop will run over and over again until the <code>condition</code> specified is no longer true. It has the following syntax:</p>

<p>Use that syntax to declare a <code>while</code> loop with <code>continueLoop</code> as the condition. The body should be empty.</p>

**Source file link:** [pyramidGenerator_step85.js](./pyramidGenerator_step85.js)


```js

```


### Execution logs: 

---

## Step86:

<p>Right now, if you change <code>continueLoop</code> to true, your <code>while</code> loop will run forever. This is called an <dfn>infinite loop</dfn>, and you should be careful to avoid these. An infinite loop can lock up your system, requiring a full restart to escape.</p>

<p>To avoid this, start by using the increment operator to increase the value of the <code>done</code> variable inside your loop.</p>

**Source file link:** [pyramidGenerator_step86.js](./pyramidGenerator_step86.js)


```js

```


### Execution logs: 

---

## Step87:

<p>The <dfn>equality</dfn> operator <code>==</code> is used to check if two values are equal. To compare two values, you'd use a statement like <code>value == 8</code>.</p>

<p>Below <code>done++</code> inside your loop, add an <code>if</code> statement. The statement should check if <code>done</code> is equal to <code>count</code> using the equality operator.</p>

**Source file link:** [pyramidGenerator_step87.js](./pyramidGenerator_step87.js)


```js

```


### Execution logs: 

---

## Step88:

<p>The equality operator can lead to some strange behavior in JavaScript. For example, <code>"0" == 0</code> is true, even though one is a string and one is a number.</p>

<p>The <dfn>strict equality</dfn> operator <code>===</code> is used to check if two values are equal and share the same type. As a general rule, this is the equality operator you should always use. With the strict equality operator, <code>"0" === 0</code> becomes false, because while they might have the same value of zero, they are not of the same type.</p>

<p>Update your <code>done == count</code> condition to use the strict equality operator.</p>

**Source file link:** [pyramidGenerator_step88.js](./pyramidGenerator_step88.js)


```js

```


### Execution logs: 

---

## Step89:

<p>When <code>done</code> has reached the value of <code>count</code>, we want the loop to stop executing.</p>

<p>Inside your <code>if</code> body, assign the boolean <code>false</code> to your <code>continueLoop</code> variable.</p>

**Source file link:** [pyramidGenerator_step89.js](./pyramidGenerator_step89.js)


```js

```


### Execution logs: 

---

## Step90:

<p>To make your pyramid generate again, push the result of calling <code>padRow</code> with <code>done</code> and <code>count</code> as the arguments to your <code>rows</code> array, similar to what you did in your first loop.</p>

**Source file link:** [pyramidGenerator_step90.js](./pyramidGenerator_step90.js)


```js

```


### Execution logs: 

---

## Step91:

<p>The <dfn>strict inequality</dfn> operator <code>!==</code> allows you to check if two values are not equal, or do not have the same type. The syntax is similar to the equality operator: <code>value !== 4</code>.</p>

<p>Update your <code>while</code> loop condition to check if <code>done</code> is not equal to <code>count</code>.</p>

**Source file link:** [pyramidGenerator_step91.js](./pyramidGenerator_step91.js)


```js

```


### Execution logs: 

---

## Step92:

<p>Since you have moved the comparison into the <code>while</code> condition, you can remove your entire <code>if</code> statement.</p>

**Source file link:** [pyramidGenerator_step92.js](./pyramidGenerator_step92.js)


```js

```


### Execution logs: 

---

## Step93:

<p>Your loop is no longer relying on the <code>continueLoop</code> variable. This makes the variable an <dfn>unused declaration</dfn>. Generally, you want to avoid unused declarations to prevent future confusion.</p>

<p>Remove your <code>continueLoop</code> variable.</p>

**Source file link:** [pyramidGenerator_step93.js](./pyramidGenerator_step93.js)


```js

```


### Execution logs: 

---

## Step94:

<p>Your pyramid generator is still working. However, it could be possible to end up with an infinite loop again.</p>

<p>Because you are only checking if <code>done</code> is not equal to <code>count</code>, if <code>done</code> were to be <strong>larger</strong> than <code>count</code> your loop would go on forever.</p>

<p>Update your loop's condition to check if <code>done</code> is less than or equal to <code>count</code>.</p>

**Source file link:** [pyramidGenerator_step94.js](./pyramidGenerator_step94.js)


```js

```


### Execution logs: 

---

## Step95:

<p>Using <code>done</code> to track the number of rows that have been generated is functional, but you can actually clean up the logic a bit further.</p>

<p>Arrays have a special <code>length</code> property that allows you to see how many values, or <dfn>elements</dfn>, are in the array. You would access this property using syntax like <code>myArray.length</code>.</p>

<p>Note that <code>rows.length</code> in the <code>padRow</code> call would give you an off-by-one error, because <code>done</code> is incremented <em>before</em> the call.</p>

<p>Update your condition to check if <code>rows.length</code> is less than <code>count</code>.</p>

**Source file link:** [pyramidGenerator_step95.js](./pyramidGenerator_step95.js)


```js

```


### Execution logs: 

---

## Step96:

<p>Replace the <code>done</code> reference in your <code>padRow</code> call with <code>rows.length + 1</code>.</p>

**Source file link:** [pyramidGenerator_step96.js](./pyramidGenerator_step96.js)


```js

```


### Execution logs: 

---

## Step97:

<p>Now you no longer need your <code>done</code> variable. Remove the increment operation from your loop, and the variable declaration for <code>done</code>.</p>

**Source file link:** [pyramidGenerator_step97.js](./pyramidGenerator_step97.js)


```js

```


### Execution logs: 

---

## Step98:

<p>That's a very clean and functional loop. Nice work! But there's still more to explore.</p>

<p>Use a multi-line comment to comment out your <code>while</code> loop.</p>

**Source file link:** [pyramidGenerator_step98.js](./pyramidGenerator_step98.js)


```js

```


### Execution logs: 

---

## Step99:

<p>What if you made your pyramid upside-down, or <dfn>inverted</dfn>? Time to try it out!</p>

<p>Start by creating a new <code>for</code> loop. Declare your iterator <code>i</code> and assign it the value of <code>count</code>, then use the boolean <code>false</code> for your condition and iteration statements.</p>

**Source file link:** [pyramidGenerator_step99.js](./pyramidGenerator_step99.js)


```js

```


### Execution logs: 

---

## Step100:

<p>Because you are going to loop in the opposite direction, your loop needs to run while <code>i</code> is greater than <code>0</code>. You can use the <dfn>greater than</dfn> operator <code>&gt;</code> for this.</p>

<p>Set your loop's condition to run when <code>i</code> is greater than <code>0</code>.</p>

**Source file link:** [pyramidGenerator_step100.js](./pyramidGenerator_step100.js)


```js

```


### Execution logs: 

---

## Step101:

<p>Your iteration statement is also going to be different. Instead of adding <code>1</code> to <code>i</code> with each loop, you need to subtract <code>1</code>.</p>

<p>Like you did earlier with <code>i = i + 1</code>, update your iteration statement to give <code>i</code> the value of subtracting <code>1</code> from itself.</p>

**Source file link:** [pyramidGenerator_step101.js](./pyramidGenerator_step101.js)


```js

```


### Execution logs: 

---

## Step102:

<p>Again, push the result of calling <code>padRow</code> with your <code>i</code> and <code>count</code> variables to your <code>rows</code> array.</p>

<p>Open up the console to see the upside-down pyramid.</p>

**Source file link:** [pyramidGenerator_step102.js](./pyramidGenerator_step102.js)


```js

```


### Execution logs: 

---

## Step103:

<p>Just like addition, there are different operators you can use for subtraction. The <dfn>subtraction assignment</dfn> operator <code>-=</code> subtracts the given value from the current variable value, then assigns the result back to the variable.</p>

<p>Replace your iterator statement with the correct statement using the subtraction assignment operator.</p>

**Source file link:** [pyramidGenerator_step103.js](./pyramidGenerator_step103.js)


```js

```


### Execution logs: 

---

## Step104:

<p>Because you are only subtracting one from <code>i</code>, you can use the <dfn>decrement operator</dfn> <code>--</code>.</p>

<p>Replace your subtraction assignment with the decrement operator.</p>

**Source file link:** [pyramidGenerator_step104.js](./pyramidGenerator_step104.js)


```js

```


### Execution logs: 

---

## Step105:

<p>Use a multi-line comment to comment out this loop as well, to prepare for the next approach.</p>

**Source file link:** [pyramidGenerator_step105.js](./pyramidGenerator_step105.js)


```js

```


### Execution logs: 

---

## Step106:

<p>You can actually build the inverted pyramid without needing to loop "backwards" like you did.</p>

<p>To do this, you'll need to learn a couple of new array methods. Start by using <code>const</code> to declare a <code>numbers</code> variable. Assign it an array with the elements <code>1</code>, <code>2</code>, and <code>3</code>. Then log the <code>numbers</code> array.</p>

**Source file link:** [pyramidGenerator_step106.js](./pyramidGenerator_step106.js)


```js

```


### Execution logs: 

---

## Step107:

<p>The <code>.unshift()</code> method of an array allows you to add a value to the <strong>beginning</strong> of the array, unlike <code>.push()</code> which adds the value at the end of the array. <code>.unshift()</code> returns the new length of the array it was called on.</p>

<p>Use <code>const</code> to declare an <code>unshifted</code> variable, and assign it the result of calling <code>.unshift()</code> on your <code>numbers</code> array. Pass <code>5</code> as the argument. Then print your <code>unshifted</code> variable.</p>

**Source file link:** [pyramidGenerator_step107.js](./pyramidGenerator_step107.js)


```js

```


### Execution logs: 

---

## Step108:

<p>Arrays also have a <code>.shift()</code> method. This will remove the <strong>first</strong> element of the array, unlike <code>.pop()</code> which removes the last element. Here is an example of the <code>.shift()</code> method:</p>

<p>The <code>numbers</code> array would be <code>[2, 3]</code>.</p>

<p>Directly below your <code>numbers</code> array, declare a <code>shifted</code> variable and assign it the result of calling <code>.shift()</code> on the <code>numbers</code> array. On the next line, log the <code>shifted</code> variable to the console.</p>

**Source file link:** [pyramidGenerator_step108.js](./pyramidGenerator_step108.js)


```js

```


### Execution logs: 

---

## Step109:

<p>Now that you've tried these methods, you can do another inverted pyramid approach. But first you need to clean up your experimentation.</p>

<p>Remove your <code>numbers</code> array, and the method calls and log calls.</p>

**Source file link:** [pyramidGenerator_step109.js](./pyramidGenerator_step109.js)


```js

```


### Execution logs: 

---

## Step110:

<p>Sometimes you may wish to bring back previous code that you commented out. You can do so by removing the <code>/*</code> and <code>*/</code> around that code. This is called <dfn>uncommenting</dfn>.</p>

<p>Uncomment only your first <code>for</code> loop. Leave the single line comment and the other two multi line comments in place.</p>

**Source file link:** [pyramidGenerator_step110.js](./pyramidGenerator_step110.js)


```js

```


### Execution logs: 

---

## Step111:

<p>Your pyramid is no longer inverted. This is because you are adding new rows to the <strong>end</strong> of the array.</p>

<p>Update your loop body to add new rows to the beginning of the array.</p>

**Source file link:** [pyramidGenerator_step111.js](./pyramidGenerator_step111.js)


```js

```


### Execution logs: 

---

## Step112:

<p>What if you had a way to toggle between an inverted pyramid and a standard pyramid?</p>

<p>Start by declaring an <code>inverted</code> variable, and assigning it the value <code>true</code>. You are not changing this variable in your code, but you will need to use <code>let</code> so our tests can modify it later.</p>

**Source file link:** [pyramidGenerator_step112.js](./pyramidGenerator_step112.js)


```js

```


### Execution logs: 

---

## Step113:

<p>Use an <code>if</code> statement to check if <code>inverted</code> is true. Remember that you do not need to use an equality operator here.</p>

**Source file link:** [pyramidGenerator_step113.js](./pyramidGenerator_step113.js)


```js

```


### Execution logs: 

---

## Step114:

<p>Now move your <code>.unshift()</code> call into your <code>if</code> block.</p>

**Source file link:** [pyramidGenerator_step114.js](./pyramidGenerator_step114.js)


```js

```


### Execution logs: 

---

## Step115:

<p>If your pyramid is not inverted, then you will want to have an <code>else</code> block that builds the pyramid in the normal order.</p>

<p>In earlier steps, you learned how to work with <code>else</code> statement like this:</p>

<p>Add an <code>else</code> block to your <code>if</code> block.</p>

**Source file link:** [pyramidGenerator_step115.js](./pyramidGenerator_step115.js)


```js

```


### Execution logs: 

---

## Step116:

<p>When <code>inverted</code> is false, you want to build a standard pyramid. Use <code>.push()</code> like you have in previous steps to achieve this.</p>

**Source file link:** [pyramidGenerator_step116.js](./pyramidGenerator_step116.js)


```js

```


### Execution logs: 

---

## Step117:

<p>Your pyramid generator is now in a finished state, with more functionality than you originally planned! The next step is to clean up your code.</p>

<p>Remove all comments, both single- and multi-line, from your code.</p>

**Source file link:** [pyramidGenerator_step117.js](./pyramidGenerator_step117.js)


```js

```


### Execution logs: 

---

## Step118:

<p>Nice work! Experiment with different values for your <code>character</code>, <code>count</code>, and <code>inverted</code> variables.</p>

<p>When you are ready to move on to your next project, set <code>character</code> to <code>"!"</code>, <code>count</code> to <code>10</code>, and <code>inverted</code> to <code>false</code> to continue.</p>

<p>Congratulations on completing your first JavaScript project!</p>

**Source file link:** [pyramidGenerator_step118.js](./pyramidGenerator_step118.js)


```js

```


### Execution logs: 

---
