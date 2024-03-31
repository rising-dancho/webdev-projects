// const listItems = document.querySelectorAll('li');
const list = document.getElementById('item-list');

// listItems.forEach((item) => {
//   item.addEventListener('click', (e) => {
//     e.target.remove();
//   });
// });

list.addEventListener('click', (e) => {
  // console.dir(e.target);
  if (e.target.tagName === 'LI') {
    e.target.remove();
  }
});

list.addEventListener('mouseover', (e) => {
  // console.dir(e.target);
  if (e.target.tagName === 'LI') {
    e.target.style.color = 'red';
  }
});
