// const intervalID = setInterval(myCallBack, 1000, 'Date Interval: ');

// function myCallBack(description) {
//   console.log(description, Date.now());
// }

let intervalID;

function startChange() {
  if (!intervalID) {
    intervalID = setInterval(
      changeRandomColor,
      1000,
      'Change Color per second: '
    );
  }
}

function stopChange() {
  clearInterval(intervalID);
}

// function changeColor() {
//   if (document.body.style.color !== 'white') {
//     // document.body.style.backgroundColor = 'black';
//     document.body.style.color = 'white';
//   } else {
//     // document.body.style.backgroundColor = 'white';
//     document.body.style.color = 'black';
//   }
// }

function changeRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  //   console.log(randomColor);
  document.body.style.color = `#${randomColor}`;
}

const stopBtn = document.getElementById('stop');
stopBtn.addEventListener('click', stopChange);

const startBtn = document.getElementById('start');
startBtn.addEventListener('click', startChange);
