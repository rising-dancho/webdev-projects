// ternary operator 
// syntax : condition ? action : else (this part is mandatory).
// age >= 18 ? console.log(`i like to drink wine 🍷`) : console.log(`i like to drink water 🌊`);


const age = 10;
const drink = age >= 18 ? ` wine 🍷` : `water 🌊`;
console.log('ternary', drink);

// the normal way

let drink2;
if (age>=18){
    drink2 = ` wine 🍷`;
}else{
    drink2 = `water 🌊`;
}
console.log('if-else', drink2);

console.log(`i like to drink ${age >= 18 ? ` wine 🍷` : `water 🌊`}`); // wow!!