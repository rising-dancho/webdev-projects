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

console.log(
    ` bills: ${bills}
`, `tips: ${tips}
`, `total: ${totals}`);


function calcAverage(arr) {
    // This function calculates the average of all numbers in the given array.
    let sum = 0;
    for (let i=0; i<totals.length;i++) {
        sum += totals[i];
    }
    console.log(` sum total: ${sum}`)
    return sum / totals.length;
}

console.log(` average: ${calcAverage(totals)}`);

// First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

// To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

// Call the function with the totals array.




