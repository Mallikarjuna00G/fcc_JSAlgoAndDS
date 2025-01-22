const output = document.getElementById("output");
const convertBtn = document.getElementById("convert-btn");
const inputNumber = document.getElementById("number");

convertBtn.addEventListener("click", checkUserInput);

inputNumber.addEventListener("keydown", (e) => {
    console.log('gello')
    if(e.key === 'Enter') {
        checkUserInput();
    }
})

function checkUserInput() {
    if(!inputNumber.value) {
        output.textContent = "Please enter a valid number";
    } else {
        const inputNumberInt = parseInt(inputNumber.value);
        if(!isNaN(inputNumberInt)) {
            if(inputNumberInt < 0) {
                output.textContent = "Please enter a number greater than or equal to 1";
            } else if(inputNumberInt >= 4000) {
                output.textContent = "Please enter a number less than or equal to 3999";
            } else {
                output.textContent = convertArabicToRoman(inputNumber.value);
            }
        }
    }
}

/**
 * name: convertArabicToRoman
 * type: function
 * input: string
 * output: string
 * Limitation: only works for value less than 4000.
 */
function convertArabicToRoman(arabicInString) {
    const inputNumberReversed = arabicInString.split('').reverse();
    let romanNumber = "";

    // Conversion happens here
    inputNumberReversed.forEach((digit, i) => {
        const placeValue = 10**i;
        const faceValue = parseInt(digit);

        const grouper = (arr) => {
            let temp = '';
            if(faceValue < 4) {
                temp = arr[0].repeat(faceValue);
            } else if(faceValue == 4) {
                temp = arr[1];
            } else if(faceValue == 5) {
                temp = arr[2];
            } else if(faceValue < 9) {
                temp = arr[2] + arr[0].repeat(faceValue - 5);
            } else if(faceValue === 9) {
                temp = arr[3];
            }
            romanNumber = temp + romanNumber;
        };
        switch(placeValue) {
            case 1:
                grouper(['I', 'IV', 'V', 'IX']);
                break;
            case 10:
                grouper(['X', 'XL', 'L', 'XC']);
                break;
            case 100:
                grouper(['C', 'CD', 'D', 'CM']);
                break;
            case 1000:
                // Note that we are passing only one element through the array
                // beacause we are limiting the input value to less than 4000.
                // If the requirement is changed to input value greater than 3999,
                // accordingly code change is needed.
                grouper(["M"]);
                break;
        }
    });
    return romanNumber;
}