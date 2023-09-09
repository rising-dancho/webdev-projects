const firstName = 'adfinem';
const job = 'teacher';
const birthYear = '1992';
const year = 2023;

//  type coercion : javascript automatically converts the number into a string
// const dancho = "I'm "+ firstName + ", a " + (year - birthYear) + ' years old ' + job;
// console.log(dancho);

// version 2: using TEMPLATE LITERALS `` by typing/writing back ticks.
// const age = (year - birthYear);

const dancho2 = `I'm ${firstName}, a ${year - birthYear} years old ${job}.`
console.log(dancho2);
console.log(`
This 
is 
a
multi-line
string`);