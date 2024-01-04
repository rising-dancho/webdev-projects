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

// add event listener to all buttons using: for loop
const numOfButtons = document.querySelectorAll(".drum").length;

for(var i=0; i<numOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        alert("i got clicked!");
    })
}