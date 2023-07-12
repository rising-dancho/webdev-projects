'use strict';

// element toggle function
const elemToggleFunc = function(elem){ elem.classList.toggle("active");}

// navbar variable
const navbar = document.querySelector("[data-navbar]");
const navbarOpenBtn = document.querySelector("[data-navbar-open-btn]");
const navbarCloseBtn = document.querySelector("[data-navbar-close-btn]");


navbarOpenBtn.addEventListener("click", function(){
    elemToggleFunc(navbar);
});

navbarCloseBtn.addEventListener("click", function(){
    elemToggleFunc(navbar)
});


// Change Text Highlight Color
const colors = ["#4F247B"];


window.addEventListener("mousedown", (e) => {
    const color = colors.shift();
    document.documentElement.style.setProperty("--highlight-color", color);
    colors.push(color);
});
// ************************** //