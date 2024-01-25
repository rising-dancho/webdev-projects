'use strict';

// Selecting elements
const score0Elmnt = document.getElementById('.score--0');
const score1Elmnt = document.getElementById('score--1');
const currentScore1Elmnt = document.querySelector('#current--0');
const currentScore2Elmnt = document.querySelector('#current--1');
const btnRollElmnt = document.querySelector('.btn--roll');
const btnNewGame = document.querySelector('.btn--new');

let player1Score = 0;
let player2Score = 0;

let currenteScore = 0;
btnRollElmnt.addEventListener('click', function () {
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    currentScore1Elmnt.textContent = currenteScore += diceRoll;
    console.log(diceRoll);

    document.querySelector(".dice").setAttribute("src", './img/dice-6.png');
});



btnNewGame.addEventListener('click', function () {
    location.reload();
});

