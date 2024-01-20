'use strict';

const clickFunction = function() {
    const guess = Number(document.querySelector('.guess').value);
    document.querySelector('.number').textContent = guess;
    console.log(guess, typeof guess);

    if(!guess){
        document.querySelector('.message').textContent = '✋ No number!';
    }
}

document.querySelector('.check').addEventListener('click', clickFunction);