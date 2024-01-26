'use strict';

// Selecting elements
const score1Elmnt = document.getElementById('score--0');
const score2Elmnt = document.getElementById('score--1');

const activePlayer1Elmnt = document.querySelector('.player--0');
const activePlayer2Elmnt = document.querySelector('.player--1');

const currentScore1Elmnt = document.getElementById('current--0');
const currentScore2Elmnt = document.getElementById('current--1');

const btnRollElmnt = document.querySelector('.btn--roll');
const btnNewGameElmnt = document.querySelector('.btn--new');
const btnHoldElmnt = document.querySelector('.btn--hold');

let player1Score = 0;
let player2Score = 0;
let currentScore1 = 0;
let currentScore2 = 0;

// let activePlayer = false;
let player1Active = false;
let player2Active = false;
    
function deactivatePlayer1() {
  activePlayer1Elmnt.classList.remove('player--active');
  activePlayer2Elmnt.classList.add('player--active');
  // activating PLAYER 1
  player1Active = true;
  player2Active = false;
}

function deactivatePlayer2() {
  activePlayer2Elmnt.classList.remove('player--active');
  activePlayer1Elmnt.classList.add('player--active');
  // activating PLAYER 2
  player2Active = true;
  player1Active = false;
}

let scoreApplied = true;

// ROLL DICE
btnRollElmnt.addEventListener('click', function () {
  let diceRoll = Math.floor(Math.random() * 6) + 1;
  if (player1Active === true) {
    currentScore2Elmnt.textContent = currentScore2 += diceRoll;
    player2Score = currentScore2;
    
  } else {
    currentScore1Elmnt.textContent = currentScore1 += diceRoll;
    player1Score = currentScore1;
  }

  switch (diceRoll) {
    case 1:
      // currenteScore = 0;
      if (player1Active === false) {
        // PLAYER 1
        currentScore1 = 0;
        currentScore1Elmnt.textContent = currentScore1;
      } else {
        // PLAYER 2
        currentScore2 = 0;
        currentScore2Elmnt.textContent = currentScore2;
      }
      document.querySelector(".dice").setAttribute("src", './img/dice-1.png');
      break;
    case 2:
      document.querySelector(".dice").setAttribute("src", './img/dice-2.png');
      break;
    case 3:
      document.querySelector(".dice").setAttribute("src", './img/dice-3.png');
      break;
    case 4:
      document.querySelector(".dice").setAttribute("src", './img/dice-4.png');
      break;
    case 5:
      document.querySelector(".dice").setAttribute("src", './img/dice-5.png');
      break;
    case 6:
      document.querySelector(".dice").setAttribute("src", './img/dice-6.png');
      break;
    default:
      console.log("error");
  }
});

// NEW GAME
btnNewGameElmnt.addEventListener('click', function () {
  location.reload();
});

// HOLD
btnHoldElmnt.addEventListener('click', function () {

  if (player1Active === false) {
    deactivatePlayer1();
    player1Score = currentScore1;
    score1Elmnt.textContent = player1Score;
    currentScore1Elmnt.textContent = 0;
  } else {
    deactivatePlayer2();
    player2Score = currentScore2;
    score2Elmnt.textContent = player2Score;
    currentScore2Elmnt.textContent = 0;
  }
});
