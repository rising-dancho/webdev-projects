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

let activePlayer = true;
let activePlayer1 = true;
let activePlayer2 = true;

function deactivatePlayer1() {
  activePlayer1Elmnt.classList.remove('player--active');
  activePlayer2Elmnt.classList.add('player--active');
  console.log(activePlayer + "PLAYER 2");
  // deactivating PLAYER 1
  activePlayer = false;
}

function deactivatePlayer2() {
  activePlayer2Elmnt.classList.remove('player--active');
  activePlayer1Elmnt.classList.add('player--active');
  console.log(activePlayer + "PLAYER 1");
  // deactivating PLAYER 2
  activePlayer = true;
}

let scoreApplied = true;

// DICE ROLL
btnRollElmnt.addEventListener('click', function () {
  let diceRoll = Math.floor(Math.random() * 6) + 1;
  if (activePlayer === true) {
    currentScore2Elmnt.textContent = currentScore2 += diceRoll;
    player2Score = currentScore2;
    activePlayer = false;
  } else {
    currentScore1Elmnt.textContent = currentScore1 += diceRoll;
    player1Score = currentScore1;
    activePlayer = true;
  }

  switch (diceRoll) {
    case 1:
      // currenteScore = 0;
      if (activePlayer === true) {
        // PLAYER 1
        currentScore1Elmnt.textContent = currentScore1;
        activePlayer = true;
      } else {
        // PLAYER 2
        currentScore2Elmnt.textContent = currentScore2;
        activePlayer = false;
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

  if (activePlayer === true) {
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
