'use strict';
// PROBLEM: Create the game logic.

// UNDERSTANDING THE PROBLEM 
// Responses: 
// 📉 Too low! 
// 📈 Too high! 
// 💥 You lost the game!
// 🎉 Correct Number!
// Score: down if wrong ; green if correct
// #60B347 winner color
// High Score: high score saved to a variable

// BREAKING UP INTO SUB-PROBLEMS 
// How to check the user number against the random number

const number = Math.floor((Math.random() * 20)) + 1;
// console.log(number);

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    document.querySelector('.number').textContent = guess;
    console.log(guess, typeof guess);

    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No number!';
    }
});