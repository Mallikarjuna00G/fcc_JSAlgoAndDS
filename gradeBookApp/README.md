# Review JavaScript Fundamentals by Building a Gradebook App

In this mini project, you will get to review JavaScript fundamentals like functions, variables, conditionals and more by building a gradebook app.

This will give you an opportunity to solve small problems and get a better understanding of the basics.

## Step1:

<p>A teacher has finished grading their students' tests and needs your help to calculate the average score for the class.</p>

<p>Complete the <code>getAverage</code> function which takes in an array of test scores and returns the average score.</p>

<p>The average is calculated by adding up all the scores and dividing by the total number of scores.</p>

**Example Code**

```
average = sum of all scores / total number of scores
```

<p>A couple of function calls have been provided for you so you can test out your code.</p>

<p><strong>Tips</strong></p>

- You can use a loop to iterate over the `scores` array and add up all the scores.
- You can use the `length` property to get the total number of scores.

**Source file link:** [gradeBookApp_step1.js](./gradeBookApp_step1.js)


```js
function getAverage(scores) {
    let temp = 0;
    for (const item of scores){
        temp += item;
    }
    return temp / scores.length;
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));
```


### Execution logs: 

    71.7
    85.4


---

## Step2:

<p>Now the teacher needs your help converting the student score to a letter grade.</p>

<p>Complete the <code>getGrade</code> function that takes a number <code>score</code> as a parameter. Your function should return a string representing a letter grade based on the score.</p>

<p>Here are the scores and their corresponding letter grades:</p>

<p><strong>Tips</strong></p>

**Source file link:** [gradeBookApp_step2.js](./gradeBookApp_step2.js)


```js
function getAverage(scores) {
    let sum = 0;

    for (const score of scores) {
        sum += score;
    }

    return sum / scores.length;
}

function getGrade(score) {
    let grade = "";

    if(score < 60) {
        grade = "F";
    }
    else if(score < 70) {
        grade = "D";
    }
    else if(score < 80) {
        grade = "C";
    }
    else if(score < 90) {
        grade = "B";
    }
    else if(score < 100) {
        grade = "A";
    }
    else {
        grade = "A++";
    }
    return grade;
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));
```


### Execution logs: 

    A
    B
    F


---

## Step3:

<p>The teacher is really happy with the program you have created so far. But now they want to have an easy way to check if a student has a passing grade. A passing grade is anything that is not an <code>"F"</code>.</p>

<p>Complete the function <code>hasPassingGrade</code> that takes a student score as a parameter. Your function should return <code>true</code> if the student has a passing grade and <code>false</code> if they do not.</p>

<p><strong>Tips</strong></p>

**Source file link:** [gradeBookApp_step3.js](./gradeBookApp_step3.js)


```js
function getAverage(scores) {
    let sum = 0;

    for (const score of scores) {
        sum += score;
    }

    return sum / scores.length;
}

function getGrade(score) {
    if (score === 100) {
        return "A++";
    } else if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function hasPassingGrade(score) {
    if(getGrade(score) === "F") {
        return false;
    }
    else {
        return true;
    }
}


console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));
```


### Execution logs: 

    true
    false
    true


---

## Step4:

<p>Now that the teacher has all of the information they need, they want to be able to message the student with the results.</p>

<p>Complete the <code>studentMsg</code> function with <code>totalScores</code> and <code>studentScore</code> for parameters. The function should return a string representing a message to the student.</p>

<p>If the student passed the course, the string should follow this format:</p>

**Example Code**

```
Class average: average-goes-here. Your grade: grade-goes-here. You passed the course.
```

<p>If the student failed the course, the string should follow this format:</p>

**Example Code**

```
Class average: average-goes-here. Your grade: grade-goes-here. You failed the course.
```

<p>Replace <code>average-goes-here</code> with the average of the total scores.
Replace <code>grade-goes-here</code> with the student's grade.</p>

<p><strong>Tips</strong></p>

- Use the `getAverage` function to get the class average.
- Use the `getGrade` function to get the student's grade.
- Use string concatenation (`+`) to build the message.
- Be careful with the punctuation and spaces in the message.

**Source file link:** [gradeBookApp_step4.js](./gradeBookApp_step4.js)


```js
function getAverage(scores) {
    let sum = 0;
  
    for (const score of scores) {
          sum += score;
    }
  
    return sum / scores.length;
}
  
function getGrade(score) {
    if (score === 100) {
        return "A++";
    } else if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}
  
function hasPassingGrade(score) {
    return getGrade(score) !== "F";
}
  
function studentMsg(totalScores, studentScore) {
    let avg = getAverage(totalScores);
    let grade = getGrade(studentScore);
    let result = "failed";
    if(hasPassingGrade(studentScore)) {
        result = "passed";
    }
    return "Class average: " + avg + ". Your grade: " + grade + ". You " + result + " the course.";
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));
  
```


### Execution logs: 

    Class average: 71.7. Your grade: F. You failed the course.
    Class average: 50.8. Your grade: A++. You passed the course.


---
