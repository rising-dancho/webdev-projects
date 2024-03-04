let x = Math.floor(Math.random() * 100 + 1);
let y = Math.floor(Math.random() * 50 + 1);

let sum = x + y;
let sumOutput = `${x} + ${y} = ${sum}`;

let difference = x - y;
let differenceOutput = `${x} - ${y} = ${difference}`;

let product = x * y;
let productOutput = `${x} * ${y} = ${product}`;

let quotient = x / y;
let quotientOutput = `${x} / ${y} = ${quotient}`;

let remainder = x % y;
let rmOutput = `${x} % ${y} = ${remainder}`;

console.log(sumOutput);
console.log(differenceOutput);
console.log(productOutput);
console.log(quotientOutput);
console.log(rmOutput);
