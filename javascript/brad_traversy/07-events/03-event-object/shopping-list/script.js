const logo = document.querySelector('img');

function onClick(e) {
  // console.log(e.target);
  // console.log(e.currentTarget);
  // console.log(e.type);
  // console.log(e.timeStamp);
  // console.log(e.clientX); // coordinates from window
  // console.log(e.clientY);
  // console.log(e.offsetX); // coordinate from within the element
  // console.log(e.offsetY);
  // console.log(e.pageX); // coordinate from within the page (viewport)
  // console.log(e.pageY);
  console.log(e.screenX); // coordinate from within the monitor size
  console.log(e.screenY);

  // you can use e.target as if it was just an element you brought in using document.querySelector
  if (e.target.style.backgroundColor !== 'black') {
    e.target.style.backgroundColor = 'black';
  } else {
    e.target.style.backgroundColor = 'white';
  }
}

// // STYLE 1
logo.addEventListener('click', onClick);

// // // STYLE 2
// logo.addEventListener('click', function (e) {
//   console.log(e);
// });

document.body.addEventListener('click', function (e) {
  // console.log(e.target); // the actual thing or element that was clicked
  // console.log(e.currentTarget); // where the eventlistener is attached to
  // console.log(e.clientX);
  // console.log(e.clientY);
});

// PREVENT DEFAULT BEHAVIOR
document.querySelector('a').addEventListener('click', function (e) {
  e.preventDefault();

  console.log('link was clicked');
});

function onDrag(e) {
  document.querySelector('h1').textContent = `X ${e.clientX} Y ${e.clientY}`;
}

logo.addEventListener('drag', onDrag);

/*
- `target` - The element that triggered the event
- `currentTarget` - The element that the event listener is attached to (These are the same in this case
- `type` - The type of event that was triggered
- `timeStamp` - The time that the event was triggered
- `clientX` - The x position of the mouse click relative to the window
- `clientY` - The y position of the mouse click relative to the window
- `offsetX` - The x position of the mouse click relative to the element
- `offsetY` - The y position of the mouse click relative to the element
- `pageX` - The x position of the mouse click relative to the page
- `pageY` - The y position of the mouse click relative to the page
- `screenX` - The x position of the mouse click relative to the screen
- `screenY` - The y position of the mouse click relative to the screen
*/
