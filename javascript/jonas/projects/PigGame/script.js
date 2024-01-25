'use strict';

// Selecting elements
const score0Elmnt = document.getElementById('score--0');
const score1Elmnt = document.getElementById('score--1');
const activePlayer1Elmnt = document.querySelector('.player--0');
const activePlayer2Elmnt = document.querySelector('.player--1');
const playerElmnt = document.getElementsByClassName('player--0');

const currentScore1Elmnt = document.querySelector('#current--0');
const currentScore2Elmnt = document.querySelector('#current--1');
const btnRollElmnt = document.querySelector('.btn--roll');
const btnNewGameElmnt = document.querySelector('.btn--new');
const btnHoldElmnt = document.querySelector('.btn--hold');

let currenteScore = 0;
btnRollElmnt.addEventListener('click', function () {
  let diceRoll = Math.floor(Math.random() * 6) + 1;
  currentScore1Elmnt.textContent = currenteScore += diceRoll;
  // console.log(diceRoll);

  switch (diceRoll) {
    case 1:
      currenteScore = 0;
      currentScore1Elmnt.textContent = currenteScore;
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

btnNewGameElmnt.addEventListener('click', function () {
  location.reload();
});


let activePlayer = true;
let player1Score = 0;
let player2Score = 0;
btnHoldElmnt.addEventListener('click', function () {

  score0Elmnt.textContent = currenteScore;
  currentScore1Elmnt.textContent = 0;

  if (activePlayer === true) {
    // deactivating PLAYER 1
    activePlayer1Elmnt.classList.remove('player--active');
    activePlayer2Elmnt.classList.add('player--active');
    // PLAYER 1
    // Adding current score to PLAYER 1 score
    player1Score = currenteScore;
    score0Elmnt.textContent = player1Score;
    currentScore1Elmnt.textContent = 0;
    activePlayer = true;
  } else {
    // deactivating PLAYER 2
    activePlayer2Elmnt.classList.remove('player--active');
    activePlayer1Elmnt.classList.add('player--active');
    // PLAYER 2
    // Adding current score to PLAYER 2 score
    player2Score = currenteScore;
    score0Elmnt.textContent = player2Score;
    currentScore1Elmnt.textContent = 0;
    activePlayer = false;
  }
});

