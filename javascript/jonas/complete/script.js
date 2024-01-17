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


// BMI = mass / (height * height)


// const massMark = 78;
// const heightMark = 1.69;

// const massJohn = 92;
// const heightJohn = 1.95;


// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark);
// console.log(BMIJohn);

// const markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI);



// /* Write your code below. Good luck! 🙂 */

// // CHALLENGE #2
// // Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

// //      1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

// //         "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

// //      2. Modify the outputs above to use template literals to include the BMI values in the outputs.

// //         Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

// //         Note: Don't round the BMI values. Leave them as they are.

// if(BMIMark > BMIJohn){
//     console.log(`Mark's BMI is higher than John's!`);
// }else{
//     console.log(`John's BMI is higher than Mark's!`);
// }


// // 1.) Print a nice output to the console, telling the user who has the higher BMI. The message can be either:
// // "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// // 2.) Modify the outputs above to use template literals to include the BMI values in the outputs.


// BMI = mass / (height * height)


// const massMark = 78;
// const heightMark = 1.69;

// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;
// console.log(`Mark: ${BMIMark}`);
// console.log(`John: ${BMIJohn}`);
// console.log(`Is Mark's BMI higher than John's? Answer: ${markHigherBMI}`);


// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`); 
// }else{
//    console.log(`John's BMI (${BMIJohn}) is higher than Marr's (${BMIMark})`);
// }

const inputYear = '1992';
// const numYear = Number(inputYear);
console.log(Number(inputYear) + 18);

// can only convet to:
// Number();
// String();
// Boolean();



// const tweet = prompt("Create your tweet");
// const tweetCount = tweet.length;
// const tweetUnder140 = tweet.slice(0, 140);
// console.log(tweetCount);
// alert(tweetUnder140);

// alert(prompt("Create your tweet").slice(0, 140));
// alert(`You have written ${tweetCount} characters, you have ${140 - tweetCount} characters remaining`);


// let name = prompt("What is your name?");
// let initial = name.slice(0,1);
// let restOfName = name.slice(1, name.length);

// alert(`Hello, ${initial.toUpperCase() + restOfName.toLowerCase()}!`);


// const dogAge = prompt("What is the age of you dog?");
// let humanAge = ((dogAge - 2) * 4) + 21;
// alert(`Your dog's age is ${dogAge}, but in human years his'/her's age would be ${humanAge}`);


// function getMilk() {
//     alert("getting milk!!");
// }

// function getMilk() {   
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("enterHouse");
//   }

// function lifeInWeeks(age) {

//     /************Don't change the code above************/

//     //Write your code here.
//     // create a function that tells us how many days, weeks and months we have left if we live until 90 years old.
//     // You have x days, y weeks, and z months left.
//     // For this challenge, assume there are 365 days in a year, 52 weeks in a year and 12 months in a year.


//     const averageLifeSpan = 90;
//     const lifeRemaining = 90 - age;
//     const days = lifeRemaining * 365;
//     const weeks = lifeRemaining * 52;
//     const months = lifeRemaining * 12;
//     // const weeks = Math.floor(days / 7);
//     // const months = Math.floor(weeks / 4);

//     alert(`You have ${days} days, ${weeks} weeks, and ${months} months left.`)


//     /*************Don't change the code below**********/
// }

// const age = prompt("How old are you?");
// lifeInWeeks(age);


// function getMilk(money) {
//     const cost = 1.5;
//     let bottles = Math.floor(money / cost);
//     const change = money - (cost * bottles);
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log(`buyMilk: $${cost}`);
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("enterHouse");
//     alert(`The milk costs $${cost}. You payed $${money} which can buy you ${bottles} bottles. Your change is $${change}.`);
// }
// const money = prompt("How much would you pay for milk?");
// getMilk(money);



// function getMilk(money) {
//     const costPerBottle = 1.5;
//     const numBottles = calcBottle(money,costPerBottle);
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("buy " + numBottles + " bottles of milk");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("enterHouse");
//     const change = calcChange(money, costPerBottle);
//     return {
//         // returning a dictionary
//         bottles: numBottles,
//         change: change
//     };
// }

// function calcBottle(startingMoney, costPerBottle) {
//     const numberOfBottles = Math.floor(startingMoney / costPerBottle);
//     return numberOfBottles;
// }

// function calcChange(startingMoney, costPerBottle) {
//     const change = money % costPerBottle;
//     return change;
// }

// const money = prompt("How much would you pay for milk?");

// const getMilkResult = getMilk(money);
// alert(`
// You payed $${money} 
// which can buy you ${getMilkResult.bottles} bottles. 

// Your change is $${getMilkResult.change}.`);



// // BMI CALC
// //Create your function below this line.
// function bmiCalculator(weight, height){
//     const resultBMI = Math.round(weight / Math.pow(height,2));
//     return resultBMI;
// }

// //The first parameter should be the weight and the second should be the height.

// const weight = prompt(`What is your current weight(kg)?`);
// const height = prompt(`What is your height(m)?`);

// alert(bmiCalculator(weight, height));


// /* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

// var bmi = bmiCalculator(65, 1.8); 

// bmi should equal 20 when it's rounded to the nearest whole number.

// */

// let num = Math.random();
// num = Math.floor(num * 6) + 1;
// console.log(num);


// const person = prompt("What is your name?");
// const crush = prompt("What is the name of your crush?");

// let lovesScore = Math.random();
// lovesScore = Math.floor(lovesScore * 100) + 1;

// // console.log(randomNum);

// if (lovesScore == 100) {
//     alert(`
//     ${person} ❤️ ${crush}

//     ${lovesScore}%

//     You love each other like Kanye loves Kanye.
//     `);
// } else if(lovesScore > 30 && lovesScore < 70) {
//      alert(`
//     ${person} ❤️ ${crush}

//     ${lovesScore}%
//     `);  
// } else if(lovesScore <= 30){
//     alert(`
//     ${person} ❤️ ${crush}

//     ${lovesScore}%

//     You go together like oil and water.
//     `);
// }


// function bmiCalculator(weight, height) {
//     const resultBMI = Math.round(weight / Math.pow(height, 2));
//     let interpretation;

//     if (resultBMI < 18.5) {
//         interpretation = `Your BMI is ${resultBMI}, so you are underweight.`;
//     } else if (resultBMI >= 18.5 && resultBMI <= 24.9) {
//         interpretation = `Your BMI is ${resultBMI}, so you are normal.`;
//     } else if (resultBMI >= 25 && resultBMI <= 29.9) {
//         interpretation = `Your BMI is ${resultBMI}, so you are overweight.`;
//     } else if (resultBMI >= 30 && resultBMI <= 34.9) {
//         interpretation = `Your BMI is ${resultBMI}, so you are obese.`;
//     } else {
//         interpretation = `Your BMI is ${resultBMI}, so you are extremely obese.`;
//     }
//     return interpretation;
// }

// //The first parameter should be the weight and the second should be the height.

// const weight = prompt(`What is your current weight(kg)?`);
// const height = prompt(`What is your height(m)?`);

// alert(bmiCalculator(weight, height));


// /* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

// var bmi = bmiCalculator(65, 1.8); 

// bmi should equal 20 when it's rounded to the nearest whole number.

// */



// function isLeap(year) {

//     /**************Don't change the code above****************/

//     //Write your code here.    
//     // if (year % 4 === 0 && !(year % 100)) {
//     //     return `${year} is a leap year`;
//     // }else if(year % 4 === 0 && year % 100 && year % 500){
//     //     return `${year} is a leap year`;
//     // }else {
//     //     return `${year} is not a leap year`;
//     // }

//     if (year % 4 === 0) {
//         if (!(year % 100 === 0)) {
//             return 'Leap year.';
//         } else if (year % 100 === 0 && year % 500 === 0) {
//             return 'Leap year.';
//         }
//     } else {
//         return 'Not leap year.';
//     }
//     /**************Don't change the code below****************/
// }

// const year = prompt("Enter a year:");
// alert(isLeap(year));

// const guestList = ["Angela", "Jack", "Pam","James","Lara","Jason"];

// // console.log(guestList[0]);
// // guestList.length
// guestList.includes("Angela");


// let fizzBuzzResult = [];
// let counter = 0;
// function fizzBuzz() {
//     counter++;
//     if (counter % 3 === 0 && !(counter % 5 === 0)) {
//         fizzBuzzResult.push('fizz');
//         alert('fizz');

//     } else if (!(counter % 3 === 0) && counter % 5 === 0) {
//         fizzBuzzResult.push('buzz');
//         alert('buzz');
//     } else if (counter % 3 === 0 && counter % 5 === 0) {
//         fizzBuzzResult.push('fizzBuzz');
//         alert('fizzBuzz');
//     } else {
//         fizzBuzzResult.push(counter);
//         alert(fizzBuzzResult);
//     }
// }

// // 3 fizz
// // 5 buzz
// // 3 && 5 fizzBuzz
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();

// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();

// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();



// const names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

// function whosPaying(names) {

//     /******Don't change the code above*******/

//     //Write your code here.
//     let randomNum = Math.floor(Math.random() * names.length);
//     // console.log(typeof randomNum);
//     console.log(names.length);
//     return `${names[randomNum]} is going to buy lunch today!`;

//     /******Don't change the code below*******/
// }

// alert(whosPaying(names));


// let numBottles = 99;
// let decrement = numBottles - 1;
// function beer() {
//     while (decrement > 0) {
//         console.log(`${numBottles} bottles of beer on the wall, ${numBottles} bottles of beer.
// Take one down and pass it around, ${decrement} bottles of beer on the wall.`);
//         if (decrement != 0) {
//             decrement--;
//         } else {
//             decrement = `no more`;
//         }

//         numBottles = decrement;
//         numBottles++;
//     }
//     console.log(`1 bottle of beer on the wall, 1 bottle of beer.
// Take one down and pass it around, no more bottles of beer on the wall.`);
//     console.log(`No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.`);
// }

// beer();

// var numberOfBottles = 99
// while (numberOfBottles >= 0) {
//     var bottleWord = "bottle";
//     if (numberOfBottles === 1) {
//         bottleWord = "bottles";
//     }
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
//     console.log(numberOfBottles + " " + bottleWord + " of beer,");
//     console.log("Take one down, pass it around,");
//     numberOfBottles--;
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
// }



// let fizzBuzzResult = [];

// function fizzBuzz() {
//     for (let counter = 1; counter <= 15 + 1; counter++) {

//         if (counter % 3 === 0 && !(counter % 5 === 0)) {
//             fizzBuzzResult.push('fizz');
//             console.log('fizz');
//         } else if (!(counter % 3 === 0) && counter % 5 === 0) {
//             fizzBuzzResult.push('buzz');
//             console.log('buzz');
//         } else if (counter % 3 === 0 && counter % 5 === 0) {
//             fizzBuzzResult.push('fizzBuzz');
//             console.log('fizzBuzz');
//         } else {
//             fizzBuzzResult.push(counter);
//             console.log(fizzBuzzResult);
//         }

//     }
// }

// // 3 fizz
// // 5 buzz
// // 3 && 5 fizzBuzz
// fizzBuzz();


// function fibonacciGenerator(n) {

//     let sequenceArray = [];
//     let dummyArray = [`tae`, `bitlog`, `tite`];

//     for (var i = 0; i < n; i++) {
//         let lastPosition = 0;
//         let beforePosition = 0;
//         let nextPosition = 0;

//         if (i === 0 || i === 1) {
//             sequenceArray.push(i);
//             console.log(sequenceArray[sequenceArray.length - 1]);
//         }
//         else if (sequenceArray.length >= 2) {
//             lastPosition = sequenceArray[sequenceArray.length - 1];
//             beforePosition = sequenceArray[sequenceArray.length - 2];

//             // alert(`lastPosition: ${lastPosition}`);
//             // alert(`beforePosition: ${beforePosition}`);

//             nextPosition = beforePosition + lastPosition;
//             sequenceArray.push(nextPosition);
//         }
//     }
//     return sequenceArray;
// }

// let n = prompt("Enter the number of length of the sequence");

// let output = fibonacciGenerator(n);
// console.log(output);
// // console.log(dummyArray[dummyArray.length - 2]);


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


// BMI = mass / (height * height)


// const massMark = 78;
// const heightMark = 1.69;

// const massJohn = 92;
// const heightJohn = 1.95;


// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark);
// console.log(BMIJohn);

// const markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI);



// /* Write your code below. Good luck! 🙂 */

// // CHALLENGE #2
// // Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

// //      1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

// //         "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

// //      2. Modify the outputs above to use template literals to include the BMI values in the outputs.

// //         Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

// //         Note: Don't round the BMI values. Leave them as they are.

// if(BMIMark > BMIJohn){
//     console.log(`Mark's BMI is higher than John's!`);
// }else{
//     console.log(`John's BMI is higher than Mark's!`);
// }


// // 1.) Print a nice output to the console, telling the user who has the higher BMI. The message can be either:
// // "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// // 2.) Modify the outputs above to use template literals to include the BMI values in the outputs.


// BMI = mass / (height * height)


// const massMark = 78;
// const heightMark = 1.69;

// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;
// console.log(`Mark: ${BMIMark}`);
// console.log(`John: ${BMIJohn}`);
// console.log(`Is Mark's BMI higher than John's? Answer: ${markHigherBMI}`);


// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`); 
// }else{
//    console.log(`John's BMI (${BMIJohn}) is higher than Marr's (${BMIMark})`);
// }

// const inputYear = '1992';
// // const numYear = Number(inputYear);
// console.log(Number(inputYear) + 18);

// can only convet to:
// Number();
// String();
// Boolean();

// 1.) Print a nice output to the console, telling the user who has the higher BMI. The message can be either:
// "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2.) Modify the outputs above to use template literals to include the BMI values in the outputs.


// BMI = mass / (height * height)


// const massMark = 78;
// const heightMark = 1.69;

// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;
// console.log(`Mark: ${BMIMark}`);
// console.log(`John: ${BMIJohn}`);
// console.log(`Is Mark's BMI higher than John's? Answer: ${markHigherBMI}`);


// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`); 
// }else{
//    console.log(`John's BMI (${BMIJohn}) is higher than Marr's (${BMIMark})`);
// }


/* Write your code below. Good luck! 🙂 */

/*
CHALLENGE #3
There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:

    1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

    2. Compare the team's average scores to determine the winner of the competition, and print to the console:

    "Dolphins win the trophy" if Dolphins win, or

    "Koalas win the trophy" if Koalas win, or

    "Both win the trophy" if their average scores are equal.


TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.
*/

// Dolphins scored 96, 108, and 89
// Koalas scored 88, 91, and 110

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// console.log('Dolphins: ', scoreDolphins);
// console.log('Koalas: ', scoreKoalas);
// console.log('\n');

// if (scoreDolphins > scoreKoalas) {
//     // console.log(`Dolphins win the tournament with the score of ${scoreDolphins}`);
//     console.log(`Dolphins win the trophy`);
// } else if (scoreDolphins === scoreKoalas) {
//     console.log(`Both win the trophy`);
// } else {
//     // console.log(`Koalas win the tournament with the score of ${scoreKoalas}`);
//     console.log(`Koalas win the trophy`);
// }


/*
CHALLENGE #4
Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:

    Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

    Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

    Example: The bill was 275, the tip was 41.25, and the total value 316.25.

Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

TEST DATA: Test with different bill values: 275, 40, and 430

*/
// ternary operator syntax : condition ? action : else (this part is mandatory).

// let bill = 275;

// let choice = prompt(`
// Bill Amount: 
// a.) 275 dollars
// b.) 40 dollars
// c.) 430 dollars`
// );


// switch (choice) {
//     case 'a':
//         bill = 275;
//         break;

//     case 'b':
//         bill = 40;
//         break;

//     case 'c':
//         bill = 430;
//         break;
//     default:
//         console.log(`pls write a, b, or c. no other choices are allowed.`)
// }

// const tip = bill >= 50 && bill <= 300 ? bill *.15 : bill*.20;

// let tipPercentage;
// determine tip percentage
// if (bill >= 50 && bill <= 300 ){
//     tipPercentage = `15%`
// }else{
//     tipPercentage = `20%`
// }


// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
// console.log(`-  you spent ${bill} dollars. so the tip should be ${tip} dollars. which is ${tipPercentage} percent of your spending.`);


//  lol the only acceptable answer.. word for word.. sad. i included a dot and it wont pass the test. sad.
// const bill = 275;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

'use strict';

// // BMI = mass / (height * height)


// const massMark = 78;
// const heightMark = 1.69;

// const massJohn = 92;
// const heightJohn = 1.95;


// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark);
// console.log(BMIJohn);

// const markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI);


// CHALLENGE #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

// Your task is to write some code to help them:

// Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

// Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

// Log the value of BMIMark and BMIJohn to the console.

// BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

// TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.



// 👋 OPTIONAL: You can watch my solution in video format in the next lecture



// IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).


// BMI = mass / (height * height) 
// mass = kg; height= meters;

// Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

// // Log the value of BMIMark and BMIJohn to the console.

// const massMark = 78; //kg
// const heightMark = 1.69; //meters
// const massJohn = 92;
// const heightJohn = 1.95;


// // function bmiCalculator(mass, height) {
// //     return BMI = mass / (height * height);
// // }

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn =  massJohn / (heightJohn * heightJohn);


// // console.log(`Mark's BMI: ${BMIMark}`);
// // console.log(`Johns's BMI: ${BMIJohn}`);

// console.log(BMIMark);
// console.log(BMIJohn);

// CHALLENGE #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

// 1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

// "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

// 2. Modify the outputs above to use template literals to include the BMI values in the outputs.

// Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

// Note: Don't round the BMI values. Leave them as they are.

// 👋 OPTIONAL: You can watch my solution in video format in the next lecture

// IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).


// const massMark = 78; //kg
// const heightMark = 1.69; //meters
// const massJohn = 92;
// const heightJohn = 1.95;


// function bmiCalculator(mass, height) {
//     return BMI = mass / (height * height);
// }

// // function bmiCalculator(mass, height) {
// //     return BMI = mass / (height * height);
// // }

// // const BMIMark = bmiCalculator(massMark, heightMark);
// // const BMIJohn = bmiCalculator(massJohn, heightJohn);

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn =  massJohn / (heightJohn  *  heightJohn);

// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// } else {
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// }

// CHALLENGE #3
// There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

// Your tasks:

// 1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

// 2. Compare the team's average scores to determine the winner of the competition, and print to the console:

// "Dolphins win the trophy" if Dolphins win, or

// "Koalas win the trophy" if Koalas win, or

// "Both win the trophy" if their average scores are equal.



// TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.



// 👋 OPTIONAL: You can watch my solution in video format in the next lecture

// 1. Calculate the average score for each team, using the test data included below. 
// Dolphins scored 96, 108, and 89

// function average(score1, score2, score3) {
//     return (score1 + score2 + score3) / 3;
// }

// const scoreDolphins = average(96, 108, 89);
// const scoreKoalas = average(88, 91, 110);

// // 2. Compare the team's average scores to determine the winner of the competition, and print to the console:

// // "Dolphins win the trophy" if Dolphins win, or

// // "Koalas win the trophy" if Koalas win, or

// // "Both win the trophy" if their average scores are equal.

// if (scoreDolphins > scoreKoalas) {
//     console.log("Dolphins win the trophy");
// } else if (scoreKoalas > scoreDolphins) {
//     console.log("Koalas win the trophy");
// } else {
//     console.log("Both win the trophy");
// }

// CHALLENGE #4
// Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

// Your tasks:

// Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

// Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

// Example: The bill was 275, the tip was 41.25, and the total value 316.25.

// Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

// TEST DATA: Test with different bill values: 275, 40, and 430

// HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2

// HINT 2: Value X is between 50 and 300, if it's >= 50 && <= 300 😉



// 👋 OPTIONAL: You can watch my solution in video format in the next lecture

// In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.'

// TEST DATA: Test with different bill values: 275, 40, and 430

// function tipCalculator(bill) {
//     let tip;
//     return tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;
// }

// const bill = [275, 40, 430];

// console.log(`The bill was ${bill[0]}, the tip was ${tipCalculator(bill[0])}, and the total value ${bill[0] + tipCalculator(bill[0])}`);

// function expression
// const aFunctionExpression = function (paremeter) {
//     return console.log(`i am a function expression ${paremeter}`);
// }

// // calc year
// const calcAge = function (birthYear) {
//     return 2024 - birthYear;
// }

// // arrow function
// const calcAge2 = birthYear => 2024 - birthYear;
// // var = [parameter] => return [statement];

// // Calculate retirement 
// const yearsUntilRetirement = (birthYear, name) => {
//     const age = 2024 - birthYear;
//     const retirement = 65 - age;
//     return `${name} has ${retirement} years until retirement`;
// }
// //  add (paramter1, paramter2) or {} accordingly

// console.log(yearsUntilRetirement(1992, "Jr"));

// CHALLENGE #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

// Your tasks:

// Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

// Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

// Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

// Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

// Ignore draws this time. Instead, log No team wins... to the console if there is no winner.

// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

// TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.

// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// // A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
// function checkWinner(avgDolphins, avgKoalas) {
//     const doubleAvgDolphins = avgDolphins * 2;
//     const doubleAvgKoalas = avgKoalas * 2;
//     if (avgDolphins >= doubleAvgKoalas) {
//         console.log(`Dolphins win 🏆(${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= doubleAvgDolphins) {
//         console.log(`Koalas win 🏆(${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         console.log(`No team wins...`);
//     }
// }
// // TEST 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// checkWinner(scoreDolphins, scoreKoalas);

// // TEST 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// checkWinner(scoreDolphins, scoreKoalas);

// const friends = ['Ben', 'Ten', 'Nabuto'];
// friends.push('Vitlog');

// console.log(friends);

// CHALLENGE #2
// Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// Your tasks:

// Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

// And now let's use arrays! So, create an array called bills containing the test data below.

// Create an array called tips containing the tip value for each bill, calculated from the function you created before.

// BONUS: Create an array totals containing the total values, so the bill + tip.

// TEST DATA: 125, 555, and 44.



// 👋 OPTIONAL: You can watch my solution in video format in the next lecture

// function calcTip(bill) {
//     return bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];


// console.log(`The bill was ${bills[0]}, the tip was ${tips[0]}, and the total value ${bills[0] + tips[0]}`);


// const jose = {
//     firstName: 'Jose',
//     lastName: 'Perez',
//     age: 2024 - 1992,
//     job: 'student',
//     friends: ['n/a']
// };

// console.log(`${jose.firstName}
// ${jose.lastName}
// ${jose.age}
// ${jose.job}
// ${jose.friends}`);

// console.log(`${jose['firstName']}
// ${jose['lastName']}
// ${jose['age']}
// ${jose['job']}
// ${jose['friends']}`);

// const nameKey = 'Name';
// console.log(`${jose['first' + nameKey]}`);
// console.log(`${jose['last' + nameKey]}`);

// const interestedIn = prompt(`What do you want to know about Jose?
// Choose between firstName, lastName, age, job, and friends`);

// if(jonas[interestedIn]){
//     console.log(jonas[interestedIn]);
// }else {
//     console.log(`Wrong entry! Please choose between firstName, lastName, age, job, and friends`);
// }

// jose.location = 'Philippines';
// jose.sport = 'Mauy Thai';


// console.log(jose.location);
// console.log(jose.sport);
// console.log(jose);

// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037-1992,
//     'teacher',
//     ['Micheal','Peter','Steven']
// ];

// Challenge
// "Jonas has 3 friends, and his best friend is called Micheal"
// console.log(`${jonasArray[0]} has ${jonasArray[4].length} friends, and his best friend is ${jonasArray[4][0]}`);

// const jose = {
//     firstName: 'Jose',
//     lastName: 'Perez',
//     age: 2024 - 1992,
//     job: 'student',
//     friends: ['Micheal','Peter','Steven']
// };

// // Challenge
// // "Jonas has 3 friends, and his best friend is called Micheal"
// console.log(`${jose.firstName} has ${jose.friends.length} friends, and his bestfriend's name is  ${jose.friends[0]}`);


// const jose = {
//     firstName: 'Jose',
//     lastName: 'Perez',
//     birthYear: 1992,
//     job: 'student',
//     friends: ['Micheal', 'Peter', 'Steven'],
//     hasDriversLicense: true,


//     // calcAge: function (birthYear) {
//     //     return 2024 - birthYear;
//     // }
//     // calcAge: function () {
//     //     return 2024 - this.birthYear;
//     // }
//     calcAge: function () {
//         this.age = 2024 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function () {
//         return `${jose.firstName} is a ${jose.calcAge()} old teacher, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
//     }
// };

// console.log(jose.calcAge());

// // Challenge
// // Jonas is a 46 years old teacher. and he has a driver's license

// console.log(jose.getSummary());

// CHALLENGE #3
// Let's go back to Mark and John comparing their BMIs!

// This time, let's use objects to implement the calculations! 
// Remember: BMI = mass / (height * height) (mass in kg and height in meters).

// Your tasks:

// For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

// Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property, and also return it from the method.

// Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

// TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.



// 👋 OPTIONAL: You can watch my solution in video format in the next lecture

// IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).

/* Write your code below. Good luck! 🙂 */

// BMI = mass / (height * height
// Mark Miller and John Smith
/* Write your code below. Good luck! 🙂 */

// function calcBMI(mass, height){
//     return mass / (height * height)
// }

// const mark = {
//   fullName: 'Mark Miller',
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = calcBMI(this.mass, this.height);
//     return this.bmi;
//   }
// };

// const john = {
//   fullName: 'John Smith',
//   mass: 92,
//   height: 1.95,
//    calcBMI: function () {
//     this.bmi = calcBMI(this.mass, this.height);
//     return this.bmi;
//   }
// };

// mark.calcBMI();
// john.calcBMI();

// console.log(mark.bmi, john.bmi);

// // "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

// if (mark.bmi > john.bmi) {
//   console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
// } else if (john.bmi > mark.bmi) {
//   console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
// }


// while condition is TRUE
// `Lifting weigt repetition 1`
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weigt repetition ${rep}`);
// }


// for (let i = 0; i < 5; i++) {
//   console.log(jonas[i]);
// }

// const jonas = [
//   'Jonas',
//   'Schmedtmann',
//   2037 - 1992,
//   'teacher',
//   ['Micheal', 'Peter', 'Steven']
// ];

// // continue : exit (skip) the current iteration of the loop (skip current count)
// console.log('----ONLY STRINGS----');
// for (let i = 0; i <= jonas.length; i++) {
//   if (typeof jonas[i] !== 'string') continue;
//   console.log(jonas[i], typeof jonas[i]);
// }

// // break : terminates the loop or switch statement
// console.log('----BREAK UPON SEEING A NUMBER----');
// for (let i = 0; i <= jonas.length; i++) {
//   if (typeof jonas[i] === 'number') break;
//   console.log(jonas[i], typeof jonas[i]);
// }


// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1992,
//     'teacher',
//     ['Micheal', 'Peter', 'Steven']
//   ];
  
//   // continue : exit (skip) the current iteration of the loop (skip current count)
//   console.log('----ONLY STRINGS----');
//   for (let i=0; i<=jonas.length;i++){
//     if(typeof jonas[i] !== 'string') continue;
//     console.log(jonas[i], typeof jonas[i]);
//   }
  
//   // break : terminates the loop or switch statement
//   console.log('----BREAK UPON SEEING A NUMBER----');
//   for (let i=0; i<=jonas.length;i++){
//     if(typeof jonas[i] === 'number') break;
//     console.log(jonas[i], typeof jonas[i]);
//   }
  
// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1992,
//     'teacher',
//     ['Micheal', 'Peter', 'Steven']
//   ];
  
//   for(let i = jonas.length -1; i >= 0; i--){
//   console.log(jonas[i]);
//   }
  

//  let rep = 1;
// while (rep <= 10) {
//   console.log(`Lifting weight repetition ${rep}`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() *7) + 1;
// // console.log(dice);

// while(dice !== 7){
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() *7) + 1;
//   if(dice !== 6) console.log('Loop is about to end...'); 
// }

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// /* Write your code below. Good luck! 🙂 */

// let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// const tips = [];
// const totals = [];


// for (let i = 0; i < bills.length; i++) {
//     // console.log(calcTip(bills[i]));
//     tips.push(calcTip(bills[i]));
//     // console.log(tips);
//     let total = tips[i] + bills[i];
//     totals.push(total);
// }

// console.log(
//     ` bills: ${bills}
// `, `tips: ${tips}
// `, `total: ${totals}`);


// function calcAverage(arr) {
//     // This function calculates the average of all numbers in the given array.
//     let sum = 0;
//     for (let i=0; i<totals.length;i++) {
//         sum += totals[i];
//     }
//     console.log(` sum total: ${sum}`)
//     return sum / totals.length;
// }

// console.log(` average: ${calcAverage(totals)}`);

// // First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

// // To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

// // Call the function with the totals array.


// Remember, we're gonna use strict mode in all scripts now!
'use strict';


///////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEM:
// We work for a company building a smart home thermometer. 
// Our most recent task is this: "Given an array of temperatures of one day, 
// calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// 1) Understanding the problem
// What is amplitude? 
// - The temperature amplitude is the difference between 
// the minimum and maximum temperature that occurred within 
// a specific recording time period (e.g. last 24h).
// - How to get the minimum/maximum temp in javascript?
// - Whats the error?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it


// const temperatures1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const temperatures2 = [7, -4, -10, -5, 'error', 12, 31, 22, 12, 19, 23, 1];

// function calcAmplitude(temp) {

//   let max = temp[0];
//   let min = temp[0];

//   for (let i = 0; i < temp.length; i++) {
//     let currentTemp = temp[i];

//     if (typeof currentTemp !== 'number') continue;
//     if (currentTemp > max) {
//       max = currentTemp;
//     } else if (currentTemp < min) {
//       min = currentTemp
//     }
//   }
//   const amplitude = max - min;
//   return `max: ${max}; min: ${min}; amplitude: ${amplitude}`;
// }

// console.log(calcAmplitude(temperatures1));

// TODO: make the function receive two arrays of temparatures 


function calcAmplitudeNew(temp1, temp2) {

  let temperatures = temp1.concat(temp2);

  let max = temperatures[0];
  let min = temperatures[0];

  for (let i = 0; i < temperatures.length; i++) {
    let currentTemp = temperatures[i];

    if (typeof currentTemp !== 'number') continue;
    if (currentTemp > max) {
      max = currentTemp;
    } else if (currentTemp < min) {
      min = currentTemp
    }
  }
  const amplitude = max - min;
  return `max: ${max}; min: ${min}; amplitude: ${amplitude}`;
}
const temp1 = [3,1,1];
const temp2 = [6,2,2];

calcAmplitudeNew(temp1, temp2);