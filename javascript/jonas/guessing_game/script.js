'use strict';

const number = Math.floor((Math.random() * 20)) + 1;
// console.log(number);

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    document.querySelector('.number').textContent = guess;
    console.log(guess, typeof guess);

    if (!guess) {
        document.querySelector('.message').textContent = '✋ No number!';
    }
});