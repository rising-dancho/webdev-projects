'use strict';

// Selecting elements
const score0Elmnt = document.querySelector('#score--0');
const score1Elmnt = document.querySelector('#score--1');
const diceElmnt = document.querySelector('.dice');

// Starting Conditions
score0Elmnt.textContent = 0; 
score1Elmnt.textContent = 0;
diceElmnt.classList.add('hidden');