const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

checkBtn.addEventListener("click", () => {
    if(!userInput.value) {
        alert('Please provide a phone number')
    }
    const phoneRegex = /^(?:(?:1\s*)?)((\(\d{3}\)|\d{3}))[-\s]?(\d{3})[-\s]?(\d{4})$/g;
    let str = "V"
    if(!userInput.value.match(phoneRegex)) {
        str = "Inv"
    }

    resultsDiv.textContent = `${str}alid US number: ${userInput.value}`;
});

clearBtn.addEventListener("click", () => {
    resultsDiv.textContent = "";
})