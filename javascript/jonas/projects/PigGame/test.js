'use strict';

// Selecting elements
const score0Elmnt = document.querySelector('#score--0');
const score1Elmnt = document.querySelector('#score--1');
const diceElmnt = document.querySelector('.dice');
const btnNewElmnt = document.querySelector('.btn--new');
const btnRollElmnt = document.querySelector('.btn--roll');
const btnHoldElmnt = document.querySelector('.btn--hold');

// Starting Conditions
score0Elmnt.textContent = 0;
score1Elmnt.textContent = 0;
// console.log(diceElmnt);
diceElmnt.classList.add('hidden');

// Rolling dice functionality
btnRollElmnt.addEventListener('click', function () {
    // Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // Display dice
    diceElmnt.classList.remove('hidden');
    diceElmnt.src = `./img/dice-${dice}.png`
    // Check for rolled 1: if true, to next player
    if (dice !== 1){

    }else {
        
    }
});