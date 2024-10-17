const character = "#";
const count = 8;
const rows = [];

function addTwoNumbers(a, b) {
    return a + b;
}

const sum = addTwoNumbers(5, 10);
console.log(sum);


function padRow(name) {
    return name;
}

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
