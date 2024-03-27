// CLEAN AND PERFORMANT
function createNewItem(item) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  const button = createButton('remove-item btn-link text-red');
  const i = createIcon('fa-solid fa-xmark');

  button.appendChild(i);
  li.appendChild(button);

  console.log(li.innerHTML);
  document.querySelector('#item-list').appendChild(li);
}

function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;
  return button;
}

function createIcon(classes) {
  const i = document.createElement('i');
  i.className = classes;
  return i;
}

createNewItem('Utot');
