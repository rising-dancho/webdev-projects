// QUICK AND DIRTY (browser: reparse, recreate all the dom nodes inside the ul)
function createListItem(entry) {
  let li = document.createElement('li');
  li.innerHTML = ` ${entry}
  <button class="remove-item btn-link text-red">
    <i class="fa-solid fa-xmark"></i>
  </button>`;

  const list = document.querySelector('#item-list');
  list.appendChild(li);
}

// CLEAN AND PERFORMANT
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
  document.querySelector('#item-list').appendChild(listItem);
}

createListItem('Eggs');
createNewItem('Utot');
