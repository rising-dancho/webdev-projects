//Map -Create a new array by doing something with each item in an array.

/* ========================= 
--> MAP ARRAY METHOD
============================ */
let numbers = [3, 56, 2, 48, 5];

// // APPROACH 1: (map function) : already returns an in built array
// function double(number) {
//   return number * 2;
// }

// const doubled = numbers.map(double);
// console.log('using .map:\t\t' + doubled);

// // APPROACH 2: (forEach function) : forEach, you have to create your own array and push to it
// const newNumber = [];
// function doubleNumber(x) {
//   newNumber.push(x * 2);
// }

// numbers.forEach(doubleNumber);
// console.log('using .forEach:\t\t' + newNumber);

//Filter - Create a new array by keeping the items that return true.

/* ========================= 
--> FILTER ARRAY METHOD
============================ */
numbers = [3, 56, 2, 48, 5];

// // APPROACH 1: (filter function)
// function aboveTen(number) {
//   return number > 10;
// }
// function belowTen(number) {
//   return number < 10;
// }

// const newNumbers = numbers.filter(belowTen);
// console.log(newNumbers);

// // APPROACH 2: (forEach function)
// let numbersArray = [];

// function greaterThanTen(number) {
//   number > 10 && numbersArray.push(number);
// }
// function lesserThanTen(number) {
//   number < 10 && numbersArray.push(number);
// }

// numbers.forEach(lesserThanTen);
// console.log(numbersArray);

//Reduce - Accumulate a value by doing something to each item in an array.

/* ========================= 
--> REDUCE ARRAY METHOD
============================ */
numbers = [3, 56, 2, 48, 5];

// // APPROACH 1: (reduce function)
// function add(accumulator, currentValue) {
//   console.log('accumulated value:\t\t ' + accumulator);
//   console.log('current number: \t\t ' + currentValue);
//   return accumulator + currentValue;
// }

// let total = numbers.reduce(add);
// console.log(total);

// // APPROACH 2: (forEach function)
// let newNumber = 0;

// function addValues(x) {
//   newNumber += x;
// }

// numbers.forEach(addValues);
// console.log(newNumber);

//Find - find the FIRST ITEM that matches from an array.

/* ========================= 
--> FIND ARRAY METHOD
============================ */
numbers = [3, 2, 48, 5, 56];

function lookUp(number) {
  return number > 50;
}

const result = numbers.find(lookUp);
console.log(result);

//FindIndex - find the index of the first item that matches.

/* ========================= 
--> FINDINDEX ARRAY METHOD
============================ */
function lookUpIndex(number) {
  return number > 50;
}

const resultIndex = numbers.findIndex(lookUpIndex);
console.log(resultIndex);
