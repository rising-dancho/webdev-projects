// Quick and dirty
function createListItem(entry) {
  let li = document.createElement('li');
  li.innerHTML = ` ${entry}
  <button class="remove-item btn-link text-red">
    <i class="fa-solid fa-xmark"></i>
  </button>`;

  let list = document.querySelector('#item-list');
  list.appendChild(li);
}

// Clean and performant
function createNewItem(item) {
  const listItem = document.createElement('li');
  listItem.appendChild(document.createTextNode(item));

  const button = document.createElement('button');
  button.className = 'remove-item btn-link text-red';

  const i = document.createElement('i');
  i.className = 'fa-solid fa-xmark';

  button.appendChild(i);
  listItem.appendChild(button);

  console.log(listItem.innerHTML);
  list = document.querySelector('#item-list');
  list.appendChild(listItem);
}

createListItem('Eggs');
createNewItem('Utot');
