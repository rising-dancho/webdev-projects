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
