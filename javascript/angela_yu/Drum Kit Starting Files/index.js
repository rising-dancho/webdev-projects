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

function add(num1, num2) {
    return Number(num1) + Number(num2);
}
function sub(num1, num2) {
    return Number(num1) - Number(num2);
}
function mult(num1, num2) {
    return Number(num1) * Number(num2);
}
function div(num1, num2) {
    return Number(num1) / Number(num2);
}

function calculator(num1, num2, operator) {
    return operator(Number(num1), Number(num2));
}
const numOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        const num1 = prompt("Enter first number");
        const num2 = prompt("Enter second number");
        const operator = prompt("Choose an operator: [1] add, [2] sub, [3] mult, [4] div");
        if (operator === "add" || operator === "1") {
            alert(calculator(num1, num2, add));
        } else if (operator === "sub" || operator === "2") {
            alert(calculator(num1, num2, sub));
        } else if (operator === "mult" || operator === "3") {
            alert(calculator(num1, num2, mult));
        } else if (operator === "div" || operator === "4") {
            alert(calculator(num1, num2, div));
        } else {
            alert("Incorrect entry. Please try again..");
        }

    })
}
