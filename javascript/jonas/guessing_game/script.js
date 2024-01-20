'use strict';
// PROBLEM: Create the game logic.

//  UNDERSTANDING THE PROBLEM 
// Responses: 
// 📈 Too high! 
// 📉 Too low! 
// 💥 You lost the game!
// 🎉 Correct Number!
// Score: down if wrong ; green if correct
// #60B347 winner color
// High Score: high score saved to a variable

//  BREAKING UP INTO SUB-PROBLEMS 
// TODO:
// ✅ How to check the user's number against the random number?
// ✅ how to get the random number compare with the number in the input field?
// ✅ How to toggle between winner
// ✅ press "Again" button: set to defualt: score, ?, input field, "Start guessing. . .", Background color #222
// ❌ How and when to change the score?
// ❌ How and when to change the high score?
// ❌ How to implement the Responses after each number change?


const number = Math.floor((Math.random() * 20)) + 1;
// console.log(number);

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    document.querySelector('.number').textContent = guess;
    console.log(guess, typeof guess);

    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No number!';
    } else if (guess > number) {
        document.querySelector('.message').textContent = '📈 Too high!';
    } else if (guess < number) {
        document.querySelector('.message').textContent = '📉 Too low!';
    } else if (guess === number) {
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('body').style.backgroundColor = "#60B347";
    }
});

document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('.message').textContent = 'Start guessing. . .';
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.guess').value = "";
    document.querySelector('.number').textContent = "?";
    document.querySelector('.score').textContent = "20";
});

