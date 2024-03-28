// REMOVE CLEAR
function removeClearButton() {
  document.querySelector('#clear').remove();
}

removeClearButton();

// REMOVE FIRST ITEM
function removeFirstItem() {
  const ul = document.querySelector('ul');
  const li = document.querySelector('li:first-child');

  ul.removeChild(li);
}

removeFirstItem();

// REMOVE USING NUMBER
function removeItem(itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelector(`li:nth-child(${itemNumber})`);

  ul.removeChild(li);
}

removeItem(3);

// REMOVE USING NUMBER `querySelectorAll`
function removeItem2(itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelectorAll(`li`)[itemNumber - 1];

  ul.removeChild(li);
}

removeItem2(1);

// REMOVE USING NUMBER `querySelectorAll` : direct
function removeItem3(itemNumber) {
  const li = document.querySelectorAll(`li`);
  li[itemNumber - 1].remove();
}

removeItem3(1);

// REMOVE USING NUMBER `querySelectorAll` : direct (shorter)
const removeItem4 = (itemNumber) =>
  document.querySelectorAll('li')[itemNumber - 1].remove();

removeItem4(1);
