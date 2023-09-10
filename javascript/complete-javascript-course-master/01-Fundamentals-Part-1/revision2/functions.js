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

// // FUNCTIONS DECLARATION

// function calcAge1(birthYear){
//     // const age = 2037 - birthYear; 
//     return 2023 - birthYear;
// }
// const myAge = calcAge1(1992);
// console.log(myAge);

// // FUNCTION EXPRESSION (anonymous function)
// const calcAge2 = function (birthYear){
//     return 2023 - birthYear;
// }

// const age2 = calcAge2(1992);
// console.log(age2);

// ARROW FUNCTION 
// parameter => (calculation to be returned)
// const calcAge3 = birthYear => 2023-birthYear;
// console.log(calcAge3(1992));

// const yearUntilRetirement = birthYear => {
//     const age = 2023 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }
// console.log(yearUntilRetirement(1992));

// const yearsUntilRetirement = (birthYear, firstName) =>{
//     const age = 2023 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years.`;
// }

// console.log(yearsUntilRetirement(1992,"adfinem"));
// console.log(yearsUntilRetirement(1970,"dancho"));

// function cutFruitPieces(fruit){
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges){
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//     return juice;
// };
// console.log(fruitProcessor(2,3));

const calculateAge = function (birthYear, currentYear) {
    const age = currentYear - birthYear;
    return age;
}


const yearsUntilRetirement = function (birthYear, firstName, currentYear) {
    const age = calculateAge(birthYear, currentYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
       
    } else {
        // return "already retired";
        console.log(`${firstName} already retired 🎉`);
        return -1; // returning a number because the entry (argument) is a number
    }


}

console.log(yearsUntilRetirement(1992, 'Jose', 2023));
console.log(yearsUntilRetirement(1950, 'Mike', 2023));
