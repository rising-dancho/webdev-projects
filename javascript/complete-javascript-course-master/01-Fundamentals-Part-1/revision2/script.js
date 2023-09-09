'use strict';

// let hasDriversLicense = false;
// const passTest = true; 

// if (passTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log(`i can drive 👍`);

// // console.log(`drivers license? ${hasDriversLicense}`);

// function
// function logger(){
//     console.log('my name is adfinem');
// }

// calling / running / invoking the function
// logger();


// FUNCTIONS DECLARATION
// function fruitProcessor(apples, oranges){
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// };

// const appleJuice = fruitProcessor(5,1);
// console.log(`ordered apple beverage: ${appleJuice}`);

// const orangeJuice = fruitProcessor(1,4);
// console.log(`ordered orange beverage: ${orangeJuice}`);

// FUNCTIONS DECLARATION

function calcAge1(birthYear){
    // const age = 2037 - birthYear; 
    return 2023 - birthYear;
}
const myAge = calcAge1(1992);
console.log(myAge);

// FUNCTION EXPRESSION (anonymous function)
const calcAge2 = function (birthYear){
    return 2023 - birthYear;
}

const age2 = calcAge2(1992);
console.log(age2);

// ARROW FUNCTION (anonymous function)
birthYear => 2037-birthYear;