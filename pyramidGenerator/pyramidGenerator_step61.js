const character = "#";
const count = 8;
const rows = [];

function padRow() {
    const test = "Testing";
    return test;
}
// console.log(test);  // Commented because `test` is not visible here.


const call = padRow();

for (let i = 0; i < count; i = i + 1) {
    rows.push(character.repeat(i + 1));
}

let result = "";

for (const row of rows) {
    result = result + "\n" + row;
}

console.log(result);
