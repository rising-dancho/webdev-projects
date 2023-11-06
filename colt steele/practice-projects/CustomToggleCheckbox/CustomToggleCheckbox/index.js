const box = document.querySelector("#enabled");
const box2 = document.querySelector("#dogs");

box.addEventListener("click", function() {
  alert(box.checked);
});

box2.addEventListener("click", function() {
  alert(box2.checked);
});

