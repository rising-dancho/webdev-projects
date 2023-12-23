// alert("Hello Worrld!"); 

// let js = "amazing";
// if (js === 'amazing') alert('JavaScript is FUN!');

// js = 'boring';
// if (js === 'amazing') alert('JavaScript is FUN!');


// const firstName = "Jay-ar";
// const job = 'trainee';
// const birthYear = 1992;
// const year = 2023;

// // const jayar = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// // console.log(jayar);

// const jayarNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;
// console.log(jayarNew);

// const age = 15;
// const isOldEnough = age >= 18;

// if(isOldEnough) {
//     console.log(`Sarah can start driving license 🏎️`);
// }else{
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }



// // CHALLENGE #1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(`(BMI) Mark: ${BMIMark}`, `
// (BMI) John: ${BMIJohn}
// `);


// // mark : 78kg, 1.69m
// const massMark = 78; 
// const heightMark = 1.69;

// // john : 92 kg, 1.95m
// const massJohn = 92;
// const heightJohn = 1.95;

// let mass = massMark;
// let height = heightMark;

// let BMI = mass / (height * height);

// const BMIMark = BMI;

// console.log('Mark',BMIMark);

// mass = massJohn;
// height = heightJohn;

// BMI = mass / (height * height);

// const BMIJohn = BMI;

// console.log('John', BMIJohn);


/* Write your code below. Good luck! 🙂 */

// CHALLENGE #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

//      1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

//         "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

//      2. Modify the outputs above to use template literals to include the BMI values in the outputs.

//         Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

//         Note: Don't round the BMI values. Leave them as they are.

if(BMIMark > BMIJohn){
    console.log(`Mark's BMI is higher than John's!`);
}else{
    console.log(`John's BMI is higher than Mark's!`);
}


