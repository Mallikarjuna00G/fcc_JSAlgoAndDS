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

function getCaloriesFromInputs(list) {
    let calories = 0;

    for (const item of list) {
        const currVal = cleanInputString(item.value);
        const invalidInputMatch = isInvalidInput(currVal);

        if(invalidInputMatch) {
            alert(`Invalid input: ${invalidInputMatch[0]}`);
            isError = true;
            return null;
        }

        calories += Number(currVal);
    }
    return calories;
}

function calculateCalories(e) {
    e.preventDefault();
    isError = false;

    const breakfastNumberInputs = document.querySelectorAll('#breakfast input[type="number"]');
    const lunchNumberInputs = document.querySelectorAll('#lunch input[type="number"]');
    const dinnerNumberInputs = document.querySelectorAll('#dinner input[type="number"]');
    const snacksNumberInputs = document.querySelectorAll('#snacks input[type="number"]');
    const exerciseNumberInputs = document.querySelectorAll('#exercise input[type="number"]');

    const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
    const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
    const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
    const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
    const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);

    const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);

    if(isError) {
        return;
    }

    const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
    const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;

    const surplusOrDeficit = (remainingCalories < 0) ? ("Surplus") : ("Deficit");

    output.innerHTML = `
    <span class="${surplusOrDeficit.toLowerCase()}">${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}</span>
    <hr>
    <p>${budgetCalories} Calories Budgeted</p>
    <p>${consumedCalories} Calories Consumed</p>
    <p>${exerciseCalories} Calories Burned</p>
    `;

    output.classList.remove('hide');
}

calorieCounter.addEventListener('submit', calculateCalories);

function clearForm() {
    const inputContainers = Array.from(document.querySelectorAll('.input-container'));

    for (const container of inputContainers) {
        container.innerHTML = '';
    }
    budgetNumberInput.value = '';
    output.innerText = '';
    output.classList.add('hide');
}

clearButton.addEventListener('click', clearForm);