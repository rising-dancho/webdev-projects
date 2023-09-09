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

function fruitProcessor(apples, oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
};

const appleJuice = fruitProcessor(5,1);
console.log(`ordered apple beverage: ${appleJuice}`);

const orangeJuice = fruitProcessor(1,4);
console.log(`ordered orange beverage: ${orangeJuice}`);



