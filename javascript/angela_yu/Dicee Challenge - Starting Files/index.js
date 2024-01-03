let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

// console.log(randomNumber1);

document.querySelector("img").getAttribute("src");

// document.querySelectorAll("img")[0].setAttribute("src",`./images/dice${randomNumber1}.png`);
// document.querySelectorAll("img")[1].setAttribute("src",`./images/dice${randomNumber2}.png`);

document.querySelector("img.img1").setAttribute("src", `./images/dice${randomNumber1}.png`);
document.querySelector("img.img2").setAttribute("src", `./images/dice${randomNumber2}.png`);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
} else {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}


