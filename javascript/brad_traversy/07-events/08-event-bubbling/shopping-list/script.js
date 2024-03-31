const button = document.querySelector('button');
const div = document.querySelector('.form-control:nth-of-type(2)');
const form = document.getElementById('item-form');
const body = document.querySelector('body');

button.addEventListener('click', (e) => {
  alert('Button was clicked');
  e.stopPropagation();
});

div.addEventListener('click', () => {
  alert('Div was clicked');
});

form.addEventListener('click', () => {
  alert('Form was clicked');
});

body.addEventListener('click', () => {
  alert('Body was clicked');
});
