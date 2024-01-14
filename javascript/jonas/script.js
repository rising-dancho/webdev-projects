const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

/* Write your code below. Good luck! 🙂 */

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];


for (let i = 0; i < bills.length; i++) {
    // console.log(calcTip(bills[i]));
    tips.push(calcTip(bills[i]));
    // console.log(tips);
    let total = tips[i] + bills[i];
    totals.push(total);
}

console.log(`bills: ${bills}`, `tips: ${tips}`, `total: ${totals}`);