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
// ❌ How and when to change the score?
// ❌ How and when to change the high score?
// ❌ How and when to show the winner?
// ❌ How to implement the Responses after each number change?
// ❌ How to reset the game after pressing "Again" button?


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

        document.body.style.backgroundColor = "#60B347";
    }

});