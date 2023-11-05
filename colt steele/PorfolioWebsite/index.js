// const btn = document.querySelector("body")
// // const btn = document.querySelector("#btn")

// btn.addEventListener("click", () => {
//     // alert("you touch my tralala!!")
//     btn.classList.toggle("purple")
// });

const menu = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobileNav");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");

menu.addEventListener("click", () => {
    if (window.innerWidth <= 530) {
        bar1.classList.toggle("animateBar1-mobile");
        bar2.classList.toggle("animateBar2-mobile");
        bar3.classList.toggle("animateBar3-mobile");
        mobileNav.classList.toggle("displayNav");
    } else {
        bar1.classList.toggle("animateBar1");
        bar2.classList.toggle("animateBar2");
        bar3.classList.toggle("animateBar3");
        mobileNav.classList.toggle("displayNav");
    }

})