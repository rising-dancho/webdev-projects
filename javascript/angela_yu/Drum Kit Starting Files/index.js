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

// add event listener to all buttons using: for loop
const numOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        makeSound(this.innerHTML);
    });
}

document.addEventListener("keydown", function (event) {
    // console.log(event);
    makeSound(event.key);
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


// // 2 ways to create callback functions
// $0.addEventListener("click", function(event){
//     console.log(event);
// });

// $0.addEventListener("click", respondToClick(event));
// function respondToClick(event) {
//      console.log(event);
// }

