const character = "#";
const count = 8;
const rows = [];

function padRow(name) {
    const test = "Testing";
    console.log("This works!");
    return test;
    console.log("This works!");  // This does not get displayed.
}
// console.log(test);  // Commented because `test` is not visible here.


const call = padRow("Mallikarjuna G");
console.log(call);

for (let i = 0; i < count; i = i + 1) {
    rows.push(character.repeat(i + 1));
}

let result = "";

for (const row of rows) {
    result = result + "\n" + row;
}

console.log(result);
