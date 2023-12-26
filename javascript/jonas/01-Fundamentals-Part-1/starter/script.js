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
