const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');
const formBtn = itemForm.querySelector('button');
let isEditMode = false;

function displayItems() {
  const itemsFromStorage = getItemsFromStorage();
  itemsFromStorage.forEach((item) => addItemToDOM(item));
  resetUI();
}

function onAddItemSubmit(e) {
  e.preventDefault();
  const newItem = itemInput.value;

  // Validate Input
  if (newItem === '') {
    alert('Please add an item first');
    return; //exit out of the function right away
  }

  // Check for edit mode
  if (isEditMode) {
    const itemToEdit = itemList.querySelector('.edit-mode');

    removeItemFromStorage(itemToEdit.textContent);
    itemToEdit.classList.remove('edit-mode');
    itemToEdit.remove();
    isEditMode = false;
  } else {
    if (checkIfItemExists(newItem)) {
      alert('This item is already in the list!');
      return;
    }
  }

  // Create item DOM element
  addItemToDOM(newItem);

  // Add item to local storage
  addItemToStorage(newItem);

  // Clear the text in the textfield
  itemInput.value = '';
  resetUI();
}

function addItemToDOM(item) {
  // Create List item
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  // Create remove button
  const button = createButton('remove-item btn-link text-red');
  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  li.appendChild(button);

  // Append the new item to the list
  itemList.appendChild(li);
}

function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;

  return button;
}

function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;

  return icon;
}

function addItemToStorage(item) {
  const itemsFromStorage = getItemsFromStorage();

  // Add new item to array
  itemsFromStorage.push(item);

  // Convert to JSON string and set to local storage
  localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function getItemsFromStorage() {
  let itemsFromStorage;

  if (localStorage.getItem('items') === null) {
    itemsFromStorage = [];
  } else {
    itemsFromStorage = JSON.parse(localStorage.getItem('items'));
  }

  return itemsFromStorage;
}

function onClickItem(e) {
  if (e.target.parentElement.classList.contains('remove-item')) {
    const li = e.target.parentElement.parentElement;
    removeItem(li);
  } else {
    setItemToEdit(e.target);
  }
}

function checkIfItemExists(item) {
  const itemsFromStorage = getItemsFromStorage();

  if (itemsFromStorage.includes(item)) {
    return true;
  } else {
    return false;
  }
}

function setItemToEdit(item) {
  isEditMode = true;

  itemList
    .querySelectorAll('li')
    .forEach((i) => i.classList.remove('edit-mode'));

  item.classList.add('edit-mode');
  formBtn.innerHTML = `<i class="fa-solid fa-pen"></i>&nbsp; Update Item`;
  formBtn.style.backgroundColor = '#228b22';
  itemInput.value = item.textContent;
}

function removeItem(item) {
  // console.log(item);
  // console.dir(e.target.parentElement.parentElement);
  // console.dir(e.target.parentElement.classList);
  const msg = 'Are you sure?';
  if (confirm(msg) === true) {
    // remove item from dom
    item.remove();

    // remove item from storage
    removeItemFromStorage(item.textContent);

    resetUI();
  } else {
    return; // exit function and do nothing
  }
}

function removeItemFromStorage(item) {
  let itemsFromStorage = getItemsFromStorage();
  // console.log(itemFromStorage);

  // Filter out item to be removed
  itemsFromStorage = itemsFromStorage.filter((i) => i != item);

  // re-set to local storage
  localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function clearItems() {
  //   console.log('its working');
  //   itemList.innerHTML = '';
  let text = 'Are you sure you want to delete everything?';
  if (confirm(text) == true) {
    while (itemList.firstChild) {
      // remove all items
      itemList.firstChild.remove();
      // remove all items from storage
    }

    // clear all items
    localStorage.removeItem('items');

    resetUI();
  } else {
    return; // do nothing
  }
}

function filterItems(e) {
  const items = itemList.querySelectorAll('li');
  const text = e.target.value.toLowerCase();

  items.forEach((item) => {
    const itemName = item.innerText.toLowerCase();

    // STYLE 1 : search string
    // console.log(item.innerText, typeof text);
    // if (itemName.indexOf(text) != -1) {
    //   item.style.display = 'flex';
    //   // console.log(true);
    // } else {
    //   item.style.display = 'none';
    //   // console.log(false);
    // }

    // STYLE 2 : search string
    if (itemName.includes(text)) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
}

function resetUI() {
  itemInput.value = '';

  //   console.log(items.length);
  const items = itemList.querySelectorAll('li');
  if (items.length === 0) {
    clearBtn.style.display = 'none';
    itemFilter.style.display = 'none';
  } else {
    clearBtn.style.display = 'initial';
    itemFilter.style.display = 'initial';
  }

  formBtn.innerHTML = ` <i class="fa-solid fa-plus"></i> Add Item`;
  formBtn.style.backgroundColor = '#333';

  isEditMode = false;
}

// Initialize app
function initialize() {
  // Event Listeners
  itemForm.addEventListener('submit', onAddItemSubmit);
  itemList.addEventListener('click', onClickItem);
  clearBtn.addEventListener('click', clearItems);
  itemFilter.addEventListener('input', filterItems);
  document.addEventListener('DOMContentLoaded', displayItems);

  resetUI();
}

initialize();
