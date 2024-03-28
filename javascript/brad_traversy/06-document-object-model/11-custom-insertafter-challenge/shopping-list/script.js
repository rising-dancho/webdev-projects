// insertBefore Example
// function insertBefore() {
//   const ul = document.querySelector('ul');

//   const item = document.createElement('li');
//   item.appendChild(document.createTextNode('Cheese'));

//   const thirdItem = document.querySelector('li:nth-child(3)');
//   ul.insertBefore(item, thirdItem);
// }

// insertBefore();

// SOLUTION
function insertAfter(newEl, existingEl) {
  existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
}

const li = document.createElement('li');
li.textContent = 'Insert Me After!';

// Existing element to insert after
const firstItem = document.querySelector('li:first-child');

// Our custom function
insertAfter(li, firstItem);
