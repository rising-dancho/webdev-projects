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
// ✅ How to implement the Responses after each number change?
// ✅ How to check the user's number against the random number?
// ✅ how to get the random number compare with the number in the input field?
// ✅ How to toggle between winner
// ✅ press "Again" button: set to defualt: score, ?, input field, "Start guessing. . .", Background color #222
// ✅ How and when to change the score?
// ❌ How and when to change the high score?


const number = Math.floor((Math.random() * 20)) + 1;
// console.log(number);

let score = 20;

function disableCheckButton() {
    document.querySelector(".check").disabled = true;
    document.querySelector(".check").style.backgroundColor = "#adb5bd";
    document.querySelector(".check").style.cursor = "not-allowed";
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    document.querySelector('.number').textContent = guess;
    console.log(guess, typeof guess);

    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No number!';
    }

    if (guess > number) {
        document.querySelector('.message').textContent = '📈 Too high!';
        if (document.querySelector('.number').value !== "") {
            // console.log(--score);
            if (score >= 0) document.querySelector('.score').textContent = --score;
            if (score === 0) {
                document.querySelector('.message').textContent = '💥 You lost the game!';
                document.querySelector('body').style.backgroundColor = "#f03e3e";
                disableCheckButton();
            }
        }
    }
    if (guess < number) {
        document.querySelector('.message').textContent = '📉 Too low!';
        if (document.querySelector('.number').value !== "") {
            // console.log(--score);
            if (score >= 0) document.querySelector('.score').textContent = --score;
            if (score === 0) {
                document.querySelector('.message').textContent = '💥 You lost the game!';
                document.querySelector('body').style.backgroundColor = "#f03e3e";
                disableCheckButton();
            }
        }
    }
    if (guess === number) {
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('body').style.backgroundColor = "#60B347";
        disableCheckButton();
    }
});

document.querySelector('.again').addEventListener('click', function () {
    location.reload();
});
