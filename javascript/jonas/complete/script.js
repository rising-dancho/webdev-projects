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

let bill = 275;

let choice = prompt(`
Bill Amount: 
a.) 275 dollars
b.) 40 dollars
c.) 430 dollars`
);


switch (choice) {
    case 'a':
        bill = 275;
        break;
    
    case 'b':
        bill = 40;
        break;
    
    case 'c':
        bill = 430;
        break;
    default:
        console.log(`pls write a, b, or c. no other choices are allowed.`)
}

const tip = bill >= 50 && bill <= 300 ? bill *.15 : bill*.20;

// let tipPercentage;
// determine tip percentage
// if (bill >= 50 && bill <= 300 ){
//     tipPercentage = `15%`
// }else{
//     tipPercentage = `20%`
// }


console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
// console.log(`-  you spent ${bill} dollars. so the tip should be ${tip} dollars. which is ${tipPercentage} percent of your spending.`);


//  lol the only acceptable answer.. word for word.. sad. i included a dot and it wont pass the test. sad.
// const bill = 275;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);