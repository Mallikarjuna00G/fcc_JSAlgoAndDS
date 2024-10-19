const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');

const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');

let isError = false;

function cleanInputString(str) {
    const regex = /[+-\s]/g;  // [] represents character class
    return str.replace(regex, "");
}

function isInvalidInput(str) {
    // const regex = /[0-9]+e[0-9]+/i;  // To match exponential number (Ex. 10e-4)
    const regex = /\d+e\d+/;  // \d represent a digit
    return str.match(regex);
}

// console.log(isInvalidInput("1e3"));  // This will return an array with all the details of the passed parameter. 
// console.log(isInvalidInput("10"));  // This will return null