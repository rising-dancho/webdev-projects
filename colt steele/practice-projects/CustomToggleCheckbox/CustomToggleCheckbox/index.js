// const box = document.querySelector("#enabled");
// const box2 = document.querySelector("#dogs");

// box.addEventListener("click", function() {
//   alert(box.checked);
// });

// box2.addEventListener("click", function() {
//   alert(box2.checked);
// });

function addToggleListener(selector) {
    const box = document.querySelector(selector);
  
    if (box) {
      box.addEventListener("click", function() {
        alert(`Toggle with id ${selector} is checked: ${box.checked}`);
      });
    }
  }
  
  addToggleListener("#music");
  addToggleListener("#cats");
  