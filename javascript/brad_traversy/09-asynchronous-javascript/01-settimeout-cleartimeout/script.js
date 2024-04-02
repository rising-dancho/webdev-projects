// setTimeout(function () {
//     console.log("hello from set time out");
// }, 0);

// console.log("Hello from global");

function changeText() {
  document.querySelector('h1').textContent = 'Hello from callback';
}

const timerId = setTimeout(changeText, 3000);

document.querySelector('button').addEventListener('click', () => {
  console.log(timerId);
  clearTimeout(timerId);
  console.log('timer cancelled');
});
