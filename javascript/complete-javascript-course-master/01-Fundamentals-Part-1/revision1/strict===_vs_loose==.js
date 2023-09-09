// equality operators == vs ===
// strict equality operator === : NO type coercion (auto convert to same data type)
// loose equality operator  == : YES type coercion (auto convert to same data type)

// const age = 18;
// if (age === 18) { //strict
//     console.log('you are an adult now 😁');
// } else if ('18' == 18) { //lose
//     console.log('you are an adult now 😁');
// }

// console.log(Boolean('18' === 18));
// console.log(Boolean('18' == 18));
// console.log(Boolean(18 === 18));

let favorite = Number(prompt("What's your favorite number?"));

if (Number(favorite) === 23) { // type not coerced requires "sort of" conversion
    console.log('Cool! 23 is a cool numbah');
} else if (Number(favorite) === 7) {
    console.log('7 is also a cool numbah too');
} else if (Number(favorite) === 9) {
    console.log('9 is pretty cool bruh');
} else {
    console.log('uhh.. dunno dat numbah');
}

// != not strict comparison operator
// !== strict comparison operator

if (favorite !== 23 && favorite !== 9 && favorite !==7) console.log('why not 23 or 9 or 7?');



