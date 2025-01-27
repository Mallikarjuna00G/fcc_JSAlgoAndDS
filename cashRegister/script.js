console.clear();
let price = 19.5;  // price of the item
let cid = [
  ['PENNY', 0.5],
  ['NICKEL', 0],
  ['DIME', 0],
  ['QUARTER', 0],
  ['ONE', 0],
  ['FIVE', 0],
  ['TEN', 0],
  ['TWENTY', 0],
  ['ONE HUNDRED', 0]
];  // cash in drawer

let currencyUnit = [
  ['PENNY', 0.01],
  ['NICKEL', 0.05],
  ['DIME', 0.1],
  ['QUARTER', 0.25],
  ['ONE', 1],
  ['FIVE', 5],
  ['TEN', 10],
  ['TWENTY', 20],
  ['ONE HUNDRED', 100]
]

const cash = document.getElementById("cash");
const changeDue = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");

purchaseBtn.addEventListener("click", () => {
    let cidTotal = cid.reduce((acc, el) => acc + el[1], 0);
    let numCash = parseFloat(cash.value);
    
    if(numCash < price) {
        alert("Customer does not have enough money to purchase the item");
        return;
    } else if(numCash === price) {
        changeDue.textContent = "No change due - customer paid with exact cash";
        return;
    } else {
        let changeDueTotal = numCash - price;
        // case cid < changeDue || exact change not available  ===> INSUFFICIENT
        if(changeDueTotal > cidTotal) {
            changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
        }
        // case cid > changeDue && we can return change ==> OPEN
        else {
            let balance = changeDueTotal;
            let str = '';
            for(let i = cid.length - 1; i >= 0; i--) {
                let [cur, amt] = cid[i];
                let [cur0, amt0] = currencyUnit[i];

                if(balance >= amt0) {
                    const q = Math.trunc(balance / amt0);
                    const temp = q * amt0;
                    let t2 = 0;
                    // console.log(amt, amt0, q, temp)
                    if(amt >= temp) {
                        balance -= temp;
                        t2 = temp;
                    } else {
                        balance -= amt;
                        t2 = amt;
                    }
                    if(amt) {
                        str += ` ${cur}: $${t2}`;
                        // console.log(str);
                    }
                }
                balance = parseFloat(balance.toFixed(2));
                // case cid === changeDue ==> CLOSED
                if(balance === 0 && changeDueTotal === cidTotal) {
                    changeDue.textContent = "Status: CLOSED" + str;
                    return;
                }
                if(balance === 0) {
                    changeDue.textContent = "Status: OPEN" + str;
                    return;
                    // break;
                }
                // console.log(balance);
            }
            if(balance !== 0) {
                changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
                return;
                // break;
            }
            
        }
    }
})
