// window.onload = function () {
//   document.querySelector('h1').textContent = 'Hello World';
// };

// WAITS FOR EVERYTHING TO BE LOADED
window.addEventListener('load', () => {
  //   document.querySelector('h1').textContent = 'Hello World';
  console.log('Page loaded');
});

// LOADS WHEN THE CONTENT IS PARSE
window.addEventListener('DOMContentLoaded', () => {
  //   document.querySelector('h1').textContent = 'Hello World';
  console.log('DOM loaded');
});

console.log('Run me');

// GETTING SCREEN SIZE
window.addEventListener('resize', () => {
  document.querySelector(
    'h1'
  ).innerText = `Resized to ${window.innerWidth} x ${window.innerHeight}`;
});

// MAKING DYNAMIC CHANGES ON SCROLL
window.addEventListener('scroll', () => {
  console.log(`Scrolled: ${window.scrollX} x  ${window.scrollY}`);

  if (window.scrollY >= 70) {
    document.body.style.backgroundColor = '#282828';
    document.body.style.color = '#eee';
  } else {
    document.body.style.backgroundColor = '#eee';
    document.body.style.color = '#282828';
  }
});

window.addEventListener('focus', () => {
  document.querySelectorAll('p').forEach((p) => {
    p.style.color = '#8CCD58';
  });
});

window.addEventListener('blur', () => {
  document.querySelectorAll('p').forEach((p) => {
    p.style.color = '#eee';
  });
});
