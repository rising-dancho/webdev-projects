// Create a new string called "myNewString" that holds the value of "Developer", using the value from "myString"
const myString = 'developer';

// const characters = myString.split('');
// console.log(characters, typeof String(characters));

console.log(myString[0]);

const capitalD = myString[0].toUpperCase();
const restOfTheWord = myString.slice(1);
console.log(restOfTheWord); 

// answer1:
console.log(capitalD + restOfTheWord);
// answer2:
console.log(myString.charAt(0).toUpperCase() + restOfTheWord);
// answer3:
console.log(`${myString.charAt(0).toUpperCase()}${restOfTheWord}`);

let string1 = "Test";
let object1 = {age: 31};
let array1 = [0,1,2,3,4,5];

let testString = Array.isArray(string1);
let testObj = Array.isArray(object1);
let testArray = Array.isArray(array1);

console.log(testString);
console.log(testObj);
console.log(testArray);

let array2 = [0,1,2,3,4,5,6,7,8,9];
let arrayLen = array2.length
console.log(arrayLen);