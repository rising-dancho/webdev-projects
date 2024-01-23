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
// ✅ change the highscore once game is over
// ✅ check if the new score is higher than the old score
// ✅ if new score is higher: replace the old highscore
// ✅ save the highscore to local storage and readd the value on reload
// ✅ check if the new score is higher than the high score in local storage if yes: replace


const secretNumber = Math.floor((Math.random() * 20)) + 1;
// console.log(number);

const highscoreUI = document.querySelector('.highscore');
const checkUI = document.querySelector('.check');
const messageUI = document.querySelector('.message');
const scoreUI = document.querySelector('.score');
const numberUI = document.querySelector('.number');
const bodyUI = document.querySelector('body');

let score = 20;
let highscore = localStorage.getItem("highScore");
console.log("what is this", !(localStorage.getItem("highScore")));
console.log("value inside storage", localStorage.getItem("highScore"));

// if there is no "highScore" stored value in storage: run populateStorage();
if (!localStorage.getItem("highScore")) {
    populateStorage();
}
else {
    setHighScore();
}

function populateStorage() {
    // get the text content of ".highscore" and save it into local storage with name/keyName "highScore"
    localStorage.setItem("highScore", highscoreUI.textContent);
}

function setHighScore() {
    // get the highscore from storage and show it on the webpage
    const currentHighScore = localStorage.getItem("highScore");
    highscoreUI.textContent = currentHighScore;
}

function disableCheckButton() {
    checkUI.disabled = true;
    checkUI.style.backgroundColor = "#adb5bd";
    checkUI.style.cursor = "not-allowed";
}

function displayMessage(message) {
    messageUI.textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {

    const guess = Number(document.querySelector('.guess').value);
    numberUI.textContent = guess;
    // console.log(guess, typeof guess);

    if (!guess) {
        displayMessage('⛔ No number!');
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        bodyUI.style.backgroundColor = "#60B347";
        numberUI.style.width = "30rem";
        disableCheckButton();
        // updating the highscore
        // console.log(`current highscore: ${highscore}`);
        // console.log(`score: ${score}`);
        if (score > highscore) {
            highscore = highscoreUI.textContent = score;
            localStorage.setItem("highScore", highscore);
            // console.log(`highscore: ${highscore}`);
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            // ternary
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            if (score >= 0) scoreUI.textContent = --score;
        } else {
            displayMessage('💥 You lost the game!');
            scoreUI.textContent = 0;
            document.querySelector('body').style.backgroundColor = "#ff8787";
            disableCheckButton();
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    location.reload();
});


// REFERENCE FOR THE TERNARY:
// if (guess > secretNumber) {
//     document.querySelector('.message').textContent = '📈 Too high!';
//     if (document.querySelector('.number').value !== "") {
//         // console.log(--score);
//         if (score >= 0) document.querySelector('.score').textContent = --score;
//         if (score === 0) {
//             document.querySelector('.message').textContent = '💥 You lost the game!';
//             document.querySelector('body').style.backgroundColor = "#ff8787";
//             disableCheckButton();
//         }
//     }
// }
// if (guess < secretNumber) {
//     document.querySelector('.message').textContent = '📉 Too low!';
//     if (document.querySelector('.number').value !== "") {
//         // console.log(--score);
//         if (score >= 0) document.querySelector('.score').textContent = --score;
//         if (score === 0) {
//             document.querySelector('.message').textContent = '💥 You lost the game!';
//             document.querySelector('body').style.backgroundColor = "#ff8787";
//             disableCheckButton();
//         }
//     }
// }