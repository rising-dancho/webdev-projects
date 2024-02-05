"use strict";

// Selecting elements
const player0ActiveElmnt = document.querySelector(".player--0");
const player1ActiveElmnt = document.querySelector(".player--1");
const score0Elmnt = document.querySelector("#score--0");
const score1Elmnt = document.querySelector("#score--1");
const diceElmnt = document.querySelector(".dice");
const currentScore0Elmnt = document.getElementById("current--0");
const currentScore1Elmnt = document.querySelector("current--1");
const btnNewElmnt = document.querySelector(".btn--new");
const btnRollElmnt = document.querySelector(".btn--roll");
const btnHoldElmnt = document.querySelector(".btn--hold");

// Starting Conditions
score0Elmnt.textContent = 0;
score1Elmnt.textContent = 0;
// console.log(diceElmnt);
diceElmnt.classList.add("hidden");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;


function switchPlayer(){
  // if true, switch to next player
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  activePlayer !== 0
    ? (document.getElementById("current--0").textContent = currentScore)
    : (document.getElementById("current--1").textContent = currentScore);
  // activate a player alternately
  player0ActiveElmnt.classList.toggle("player--active");
  player1ActiveElmnt.classList.toggle("player--active");
}

// Rolling dice functionality
btnRollElmnt.addEventListener("click", function () {
  // Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // Display dice
  diceElmnt.classList.remove("hidden");
  diceElmnt.src = `./img/dice-${dice}.png`;
  // Check for rolled 1:
  if (dice !== 1) {
    // add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
});

// Hold score functionality
btnHoldElmnt.addEventListener("click", function () {
  // 1. Add Current score to active player's score
  scores[activePlayer] += currentScore; // position of active player
  document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]; // display the score of the active player
  // 2. Check if player's score is >= 100
  if (scores[activePlayer] >= 100){
    // Finish the game
    document.querySelector(".player").classList.toggle("player--winner");
  }
  // Switch to the next player
  switchPlayer();
});
