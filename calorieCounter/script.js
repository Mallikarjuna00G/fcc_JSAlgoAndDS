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

function addEntry() {
    // const targetId = '#' + entryDropdown.value;  // Will be used directly in the template literal.
    // const targetInputContainer = document.querySelector(targetId + ' .input-container');  // Normal way

    // const targetInputContainer = document.querySelector(`${targetId} .input-container`);  // Template literal.

    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);  // Template literal.

    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;  // returns a NodeList of all the elements that match the selector.

    const HTMLString = `
    <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
    <input type="text" placeholder="Name" id="${entryDropdown.value}-${entryNumber}-name" />
    <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
    <input type="number" placeholder="Calories" id="${entryDropdown.value}-${entryNumber}-calories" min="0"/>
    `;  // template literal

    targetInputContainer.insertAdjacentHTML('beforeend', HTMLString);

}

addEntryButton.addEventListener('click', addEntry);