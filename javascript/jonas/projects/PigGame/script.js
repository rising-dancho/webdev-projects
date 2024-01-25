'use strict';

// Selecting elements
const score0Elmnt = document.querySelector('.score');
const score1Elmnt = document.getElementById('score--1');
const currentScoreElmnt = document.querySelector('.current-score');
const btnRollElmnt = document.querySelector('.btn--roll');
const btnNewGame = document.querySelector('.btn--new');
let currentScore = 0;
let rollDiceScore = 0;

score0Elmnt.textContent = 0;
score1Elmnt.textContent = 0;

btnRollElmnt.addEventListener('click', function () {
    currentScoreElmnt.textContent = currentScore++;
    // console.log(currentScoreElmnt.textContent);
});


btnNewGame.addEventListener('click', function(){
    location.reload();
});