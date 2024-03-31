const itemInput = document.getElementById('item-input');

// const onKeyPress = (e) => {
//   console.log('keypress');
// };

// const onKeyUp = (e) => {
//   console.log('keyup');
// };

const onKeydown = (e) => {
  // KEY [expects string]
  //   console.log(e.key);
  //   document.querySelector('h1').innerText = e.key;

  //   if (e.key === 'Enter') {
  //     alert('bitlog pressed');
  //   }

  // KEYCODE (keyCode) [expects numbers]
  if (e.keyCode === 13) {
    alert('bitlogan');
  }

  // CODE [expects string]
  if (e.code === 'Digit1') {
    console.log('You press 1');
  }

  // REPEAT [checks if you are holding down a key]
  if (e.repeat) {
    console.log(`you are holding down ${e.key}`);
  }

  console.log(`Shift:  ${e.shiftKey}`);
  console.log(`Ctrl: ${e.ctrlKey}`);
  console.log(`Alt:  ${e.altKey}`);

  if (e.shiftKey && e.key   === 'K') {
    console.log('You hit Shift + K');
  }

  if (e.ctrlKey && e.key === 'q') {
    console.log('You hit Ctrl + Q');
  }

  if (e.altKey && e.key === 'r') {
    console.log('You hit Alt + R');
  }
};

// itemInput.addEventListener('keypress', onKeyPress);
itemInput.addEventListener('keydown', onKeydown);
