const gameSelector = document.querySelector("#game-select");
const numberGeneratorButton = document.querySelector(
  "#number-generator-button"
);
const luckyPick = document.querySelector("#lucky-pick");

let range = 0;

function rangeSetter() {
  range = parseInt(gameSelector.value);
}

function numberPicker() {
  const outputLength = 6;

  const numbersArray = [];
  for (let i = 0; i < range; i++) {
    numbersArray.push(i + 1);
  }

  const luckyNumbers = [];
  for (let i = range; i > range - outputLength; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    luckyNumbers.push(numbersArray[randomIndex]);
    numbersArray.splice(randomIndex, 1);
  }

  return luckyNumbers;
}

function numberSetter(event) {
  event.preventDefault();
  if (gameSelector.value === "0") {
    console.log(gameSelector);
    debugger
    luckyPick.innerHTML = "[ Choose a game! ]";
    return;
  }

  const luckyNumbers = numberPicker().join(", ");
  luckyPick.innerHTML = `[${luckyNumbers}]`;
}

gameSelector.addEventListener("change", rangeSetter);
numberGeneratorButton.addEventListener("click", numberSetter);
