'use strict';

// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

// Your tasks:

// 1.) Create an arrow function calcAverage to calculate the average of 3 scores. 
// This function should have three parameters and return a single number (the average score).

// 2.) Create two new variables — scoreDolphins and scoreKoalas, 
// and assign the value returned from the calcAverage 
// function to them (you will need to call this function, and pass scores as arguments).

// 3.) Create a function checkWinner that takes the average score of each team 
// as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, 
// together with the victory points, according to the rule above. 
// Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

// TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.

let scoreDolphins;
let scoreKoalas;

const calcAverage = (score1, score2, score3) => {
    const average = score1 + score2 + score3 / 3;
    return average;
}
// DATA 1:
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
// DATA 2:
// avgDolphins = calcAverage(85, 54, 41);
// avgKoalas = calcAverage(23, 34, 27);

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins > avgKoalas) {
        console.log(`Dolphins won`);
    } else {
        console.log(`Koalas won`);
    }
}

// console.log(scoreDolphins);
// console.log(scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas)