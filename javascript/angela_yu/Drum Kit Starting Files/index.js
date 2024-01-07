// // simple way
// document.querySelector("button.drum").addEventListener("click", handleClick);

// function handleClick(){
//     alert("i got clicked");
// }

// // anonymous function way
// document.querySelector("button.drum").addEventListener("click", function (){
//     alert("i got clicked");
// });

// // add event listener to all buttons using: forEach
// const buttons = document.querySelectorAll("button");

// buttons.forEach(function(button){
//     button.addEventListener("click", function(){
//         alert("i got clicked!");
//     })
// })

// // add event listener to all buttons using: for loop
// const numOfButtons = document.querySelectorAll(".drum").length;

// for(var i=0; i<numOfButtons; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function(){
//         alert("i got clicked!");
//     })
// }

// function add(num1, num2) {
//     return Number(num1) + Number(num2);
// }
// function sub(num1, num2) {
//     return Number(num1) - Number(num2);
// }
// function mult(num1, num2) {
//     return Number(num1) * Number(num2);
// }
// function div(num1, num2) {
//     return Number(num1) / Number(num2);
// }

// function calculator(num1, num2, operator) {
//     return operator(Number(num1), Number(num2));
// }
// const numOfButtons = document.querySelectorAll(".drum").length;
// for (var i = 0; i < numOfButtons; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//         const num1 = prompt("Enter first number");
//         const num2 = prompt("Enter second number");
//         const operator = prompt("Choose an operator: [1] add, [2] sub, [3] mult, [4] div");
//         if (operator === "add" || operator === "1") {
//             alert("Sum: " + calculator(num1, num2, add));
//         } else if (operator === "sub" || operator === "2") {
//             alert("Difference: " + calculator(num1, num2, sub));
//         } else if (operator === "mult" || operator === "3") {
//             alert("Product: " + calculator(num1, num2, mult));
//         } else if (operator === "div" || operator === "4") {
//             alert("Quotient: " + calculator(num1, num2, div));
//         } else {
//             alert("Incorrect entry. Please try again..");
//         }
//     })
// }

// // add event listener to all buttons using: for loop
// const numOfButtons = document.querySelectorAll(".drum").length;

// for (var i = 0; i < numOfButtons; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function () {

//         if (this.innerHTML == "w") {
//             var audio = new Audio("./sounds/tom-1.mp3");

//         } else if (this.innerHTML == "a") {
//             var audio = new Audio("./sounds/tom-2.mp3");
//         } else if (this.innerHTML == "s") {
//             var audio = new Audio("./sounds/tom-3.mp3");
//         } else if (this.innerHTML == "d") {
//             var audio = new Audio("./sounds/tom-4.mp3");
//         } else if (this.innerHTML == "j") {
//             var audio = new Audio("./sounds/snare.mp3");
//         } else if (this.innerHTML == "k") {
//             var audio = new Audio("./sounds/crash.mp3");
//         } else if (this.innerHTML == "l") {
//             var audio = new Audio("./sounds/kick-bass.mp3");
//         }
//         audio.play();
//     })
// }

// var houseKeeper1 = {
//  yearsOfExperience: 12,
//  name: "Jane",
//  cleaningReppertoire: ["bathroom","lobby","bedroom"]
// }

// alert(houseKeeper1.yearsOfExperience +  houseKeeper1.name +  houseKeeper1.cleaningReppertoire);

// function HouseKeeper(yearsOfExperience, name, cleaningReppertoire) {
//     this.yearsOfExperience = yearsOfExperience;
//     this.name = name;
//     this.cleaningReppertoire = cleaningReppertoire;
// }

// var employee1 = new HouseKeeper("12", "titi", "kumantot");
// console.log(employee1);
// alert(employee1.name);

// // 2 ways to create callback functions
// $0.addEventListener("click", function(event){
//     console.log(event);
// });

// $0.addEventListener("click", respondToClick(event));
// function respondToClick(event) {
//      console.log(event);
// }

// add event listener to all buttons using: for loop
const numOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

document.addEventListener("keydown", function (event) {
    // console.log(event);
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key){
    switch (key) {
        case "w":
            var audio = new Audio("./sounds/tom-1.mp3");
            break;
        case "a":
            var audio = new Audio("./sounds/tom-2.mp3");
            break;
        case "s":
            var audio = new Audio("./sounds/tom-3.mp3");
            break;
        case "d":
            var audio = new Audio("./sounds/tom-4.mp3");
            break;
        case "j":
            var audio = new Audio("./sounds/snare.mp3");
            break;
        case "k":
            var audio = new Audio("./sounds/crash.mp3");
            break;
        case "l":
            var audio = new Audio("./sounds/kick-bass.mp3");
            break;

        default:
            console.log("whooops!! something happened");
    }
    audio.play();
}


function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  
}



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
