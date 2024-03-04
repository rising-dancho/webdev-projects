let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberries', 'blueberries', 'raspberries'];

// fruits.push(berries);
// x = fruits[3][1];

const allFruits = [fruits, berries];

// add values of another array to another array using concat
x = fruits.concat(berries); // put contents of berries array inside fruit array
// Spread Operator (...)
x = [...fruits, ...berries]; // same thing as concat just more fancy

const arr = [1, 2, [3, 4], 5, [6, 7], 8];
// remove nested arrays and just flatten into a single array
x = arr.flat();

// Static Methods on Array object
x = Array.isArray(fruits); // checks if something is an array
x = Array.from("12345"); // makes an array out of each character of the input

const a = 1;
const b = 2;
const c  = 3;

x = Array.of(a,b,c); // array of the values of variables

console.log(x);
