// console.log('😍❤️'); 

const age = 14;
const isOldEnough = 18;

if (age >= isOldEnough){
    console.log(`Congratulations! your age, ${age} years old, is viable to take driver's license! 😁👍`);
}else{
    const yearsLeft = isOldEnough - age;
    console.log(`
    Regrettably, you, ${age} years old, are not old enough to apply for a driver's license.. 🥲 
    Wait another ${yearsLeft} years. 🚗`);
}


const birthYear = 2012;

let century;
if (birthYear <= 2000){
    century = 20;
}else{
    century =21;
}

console.log(century);