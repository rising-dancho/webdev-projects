// const friends = ['Ben', 'Ten', 'Nabuto'];
// friends.push('Vitlog');

// console.log(friends);

function tipCalculator(bill) {
    let tip;
    return tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;
}

const bill = [275, 40, 430];

console.log(`The bill was ${bill[0]}, the tip was ${tipCalculator(bill[0])}, and the total value ${bill[0] + tipCalculator(bill[0])}`);
