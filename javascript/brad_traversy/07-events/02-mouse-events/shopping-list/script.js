const logo = document.querySelector('img');
const body = document.querySelector('body');

const click = () => {
  if (body.classList.contains('dark-theme')) {
    body.classList.add('light-theme');
    body.classList.remove('dark-theme');
  } else {
    body.classList.add('dark-theme');
    body.classList.remove('light-theme');
  }
};

const doubleClick = () => alert('mmm.. my dingdingdong');

const onRightClick = () => alert('you right click: touched my tralala');

const onMouseDown = () => console.log('mouse down event');

const onMouseUp = () => console.log('mouse up event');

const onMouseWheel = () => console.log('mouse wheel event');

const onMouseOver = () => console.log('mouse over event');

const onMouseOut = () => console.log('mouse out event');

const onDragStart = () => console.log('mouse drag START event');

const onDrag = () => console.log('mouse drag event');

const onDragEnd = () => console.log('mouse drag END event');

// Event Listeners
logo.addEventListener('click', click);
logo.addEventListener('dblclick', doubleClick);
logo.addEventListener('contextmenu', onRightClick);
logo.addEventListener('mousedown', onMouseDown);
logo.addEventListener('mouseup', onMouseUp);
logo.addEventListener('wheel', onMouseWheel);
logo.addEventListener('mouseover', onMouseOver);
logo.addEventListener('mouseout', onMouseOut);
logo.addEventListener('dragstart', onDragStart);
logo.addEventListener('drag', onDrag);
logo.addEventListener('dragend', onDragEnd);
