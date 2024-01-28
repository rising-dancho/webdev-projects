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


// 'use strict';

// // Selecting elements
// const player0El = document.querySelector('.player--0');
// const player1El = document.querySelector('.player--1');
// const score0El = document.querySelector('#score--0');
// const score1El = document.getElementById('score--1');
// const current0El = document.getElementById('current--0');
// const current1El = document.getElementById('current--1');

// const diceEl = document.querySelector('.dice');
// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');

// let scores, currentScore, activePlayer, playing;

// // Starting conditions
// const init = function () {
//   scores = [0, 0];
//   currentScore = 0;
//   activePlayer = 0;
//   playing = true;

//   score0El.textContent = 0;
//   score1El.textContent = 0;
//   current0El.textContent = 0;
//   current1El.textContent = 0;

//   diceEl.classList.add('hidden');
//   player0El.classList.remove('player--winner');
//   player1El.classList.remove('player--winner');
//   player0El.classList.add('player--active');
//   player1El.classList.remove('player--active');
// };
// init();

// const switchPlayer = function () {
//   document.getElementById(`current--${activePlayer}`).textContent = 0;
//   currentScore = 0;
//   activePlayer = activePlayer === 0 ? 1 : 0;
//   player0El.classList.toggle('player--active');
//   player1El.classList.toggle('player--active');
// };

// // Rolling dice functionality
// btnRoll.addEventListener('click', function () {
//   if (playing) {
//     // 1. Generating a random dice roll
//     const dice = Math.trunc(Math.random() * 6) + 1;

//     // 2. Display dice
//     diceEl.classList.remove('hidden');
//     diceEl.src = `dice-${dice}.png`;

//     // 3. Check for rolled 1
//     if (dice !== 1) {
//       // Add dice to current score
//       currentScore += dice;
//       document.getElementById(
//         `current--${activePlayer}`
//       ).textContent = currentScore;
//     } else {
//       // Switch to next player
//       switchPlayer();
//     }
//   }
// });

// btnHold.addEventListener('click', function () {
//   if (playing) {
//     // 1. Add current score to active player's score
//     scores[activePlayer] += currentScore;
//     // scores[1] = scores[1] + currentScore

//     document.getElementById(`score--${activePlayer}`).textContent =
//       scores[activePlayer];

//     // 2. Check if player's score is >= 100
//     if (scores[activePlayer] >= 100) {
//       // Finish the game
//       playing = false;
//       diceEl.classList.add('hidden');

//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.add('player--winner');
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.remove('player--active');
//     } else {
//       // Switch to the next player
//       switchPlayer();
//     }
//   }
// });

// btnNew.addEventListener('click', init);
