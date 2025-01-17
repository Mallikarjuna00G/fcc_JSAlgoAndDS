const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

result.textContent = "Waiting....";

checkButton.addEventListener("click", () => {
    const text = textInput.value;
    const textFiltered = text.replace(/[^a-zA-Z0-9]/gi, "").toLowerCase();
    if (textFiltered === "") {
        alert("Please input a value");
        result.style.border = "2px solid #9c9797";
    } else {
        const flag = textFiltered === textFiltered.split('').reverse().join('');
        result.textContent = `${text} is ${flag ? "" : "not "}a palindrome`;
        if(flag) {
            result.style.border = "2px solid lightgreen";
        } else {
            result.style.border = "2px solid #A00000";
        }
    }
});

textInput.addEventListener("keyup", () => {
    result.textContent = "Waiting....";
    result.style.border = "2px solid #9c9797";
})