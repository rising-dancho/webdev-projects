// Ways to declare a variable
// var, let, const

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName     camelCase
// first_name    underscore
// FirstName     PascalCase
// firstname     owercase

let firstName = 'John';
let lastName = 'Doe';
let age = '30';

console.log(firstName, lastName, age);

console.log(age);

let score = 1;
score = 1;

if (true) score = score + 1;
console.log(score);

const x = 100;
const arr = [1, 2, 3, 4];

arr.push(5);
console.log(arr);

const person = {
    name: 'John'
};

console.log(person.name);
person.name = 'Wick';
console.log(person.name);
person.email = 'johnwich@gmail.com';
console.table(person);