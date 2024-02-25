let amount = '99.5';
let opinion = 1;

// string conversion to number
// amount = parseInt(amount);
amount = +amount; /* + converts to a number*/
amount = Number(amount);

// int conversion to string
amount = amount.toString();
amount = String(amount);

// string conversion to decimal
amount = parseFloat(amount);

// int conversion to boolean
opinion = Boolean(opinion);

// NaN possibilities
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log('foo' / 3);


console.log(opinion, typeof opinion);