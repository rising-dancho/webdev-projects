/*  ===============
    PRIMITIVE DATA TYPES 
===================
*/

// String
const firstName = 'Sarah';

// Number
const age = 31;
const temp = 98.9;

// Boolean
const hasKids = false;

// Null
const aptNumber = null;

// Undefined
const score = undefined;

// Symbol
const id = Symbol('id');

// BigInt
const n = 23145353n;

/*  ===============
    REFERENCE TYPES : any reference type is an object
===================
*/

// Array
const numbers = [1, 2, 3, 4];

// Object
const person = {
    name: "adfinem"
}

// Function
function hello(){
    console.log("hello");
}

let output = hello;

console.log(output, typeof output);
