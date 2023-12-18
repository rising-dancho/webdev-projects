// console.log("Hello world!");

const myName = "Jose Alejo Perez Jr";
const h1 = document.querySelector(".heading-primary");
console.log(myName);
console.log(h1);

// h1.addEventListener("click", function () {
//   h1.textContent = myName;
//   h1.style.backgroundColor = "red";
//   h1.style.fontSize = "var(--spacing-32px)";
//   h1.style.padding = "2rem";
// })

// const changeYear = document.querySelector(".year");
// const currentYear = new Date().getFullYear();
// changeYear.textContent = currentYear;


///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// // Make mobile navigation work
const headerEl = document.querySelector(".section-header");
const btnNavEl = document.querySelector(".btn-mobile-nav");

btnNavEl.addEventListener("click", function() {
  headerEl.classList.toggle("nav-open");
});


///////////////////////////////////////////////////////////
// Smooth scrolling animation
const links = document.querySelectorAll("a:link");
// console.log(links);

links.forEach(function(link){
  link.addEventListener("click", function(e){
    // e.preventDefault();
    const href = link.getAttribute("href");

    // scrollback to top
    if (href === "#") window.scrollTo({
      top:-10,
      behavior:"smooth",
    })

    // scroll to clicked link
    // if (href !== "#" && href.startsWith("#")) {
    //   const sectionEl = document.querySelector(href);
    //   sectionEl.scrollIntoView({
    //     behavior:"smooth"
    //   })
    // }

    // close mobile navigation
    if(link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }

  });
});


///////////////////////////////////////////////////////////
// Sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");

const observer = new IntersectionObserver(function(entries) {
  const ent =  entries[0];
  console.log(ent);

  if(ent.isIntersecting === false) {
    document.body.classList.add("sticky-nav");
  } else {
    document.body.classList.remove("sticky-nav");
  }
},
{
  // root: null means it is observing inside of the viewport
  root:null,
  // fire as soon as zero percent of the viewport (root:null); null means viewport
  threshold:0,
  rootMargin:"-80px"
});
observer.observe(sectionHeroEl);

