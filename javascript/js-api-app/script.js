const inputBox = document.getElementById('input-box');
const filter = document.getElementById('filter');
const ul = document.getElementById('list-container');
const btnAdd = document.querySelector('.btn-add');
const btnClear = document.getElementById('clear');

function addTask() {
  // console.log(inputBox.value);

  if (inputBox.value === '') {
    alert(`Please type in your item first.`);
  } else {
    const userInput = inputBox.value;
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(userInput));

    const removeBtn = document.createElement('span');
    // cross unicode: https://www.htmlsymbols.xyz/search?q=cross
    removeBtn.innerHTML = '\u00d7';

    li.appendChild(removeBtn);
    ul.appendChild(li);
  }
  inputBox.value = '';
  saveData();
}

function clearItems() {
  // console.log('its working');
  //   itemList.innerHTML = '';
  let text = 'Are you sure you want to delete everything?';
  if (confirm(text) == true) {
    while (ul.firstChild) {
      // remove all items
      ul.firstChild.remove();
    }
    // save changes to localStorage
    saveData();
  } else {
    return;
  }
}

function filterItems(e) {
  // Texts from the filter textbox.
  const text = e.target.value.toLowerCase();
  console.log(text);

  // get all ul children: https://stackoverflow.com/questions/4019894/get-all-li-elements-in-array
  console.dir(ul);
  console.dir(ul.getElementsByTagName('li'));
  const li = ul.getElementsByTagName('li');

  // convert HTMLCollection into a normal array
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
  const toArray = Array.from(li);
  console.log(toArray);

  toArray.forEach((item) => {
    console.dir(item.textContent.slice(0, -1).toLowerCase()); // removing the x icon

    // Texts that came from the  grocery list
    const listItem = item.textContent.slice(0, -1).toLowerCase();

    // Hide or Show if there is a match
    if (listItem.includes(text)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

function clickListener(e) {
  //   console.dir(e.target);
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
    saveData();
  } else if (e.target.tagName === 'SPAN') {
    // console.log(e.target.parentElement);
    let text = 'This item will be deleted from the list, are you sure?';
    if (confirm(text) == true) {
      e.target.parentElement.remove();
      saveData();
    } else {
      return;
    }
  }
}

// https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
function addOnEnterKey(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    btnAdd.click();
  }
}

// SAVE and LOAD to/from localStorage
function saveData() {
  localStorage.setItem('data', ul.innerHTML);
}

function showTask() {
  ul.innerHTML = localStorage.getItem('data');
}

// EVENT LISTENERS
window.addEventListener('DOMContentLoaded', showTask);
ul.addEventListener('click', clickListener);
btnAdd.addEventListener('click', addTask);
btnClear.addEventListener('click', clearItems);
filter.addEventListener('input', filterItems);
inputBox.addEventListener('keypress', addOnEnterKey);
