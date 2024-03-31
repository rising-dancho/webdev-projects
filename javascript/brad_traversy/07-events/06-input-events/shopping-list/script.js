const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

function onInput(e) {
  //   console.log(e.target.value);
  heading.textContent = e.target.value;
}

function onChecked(e) {
  //   console.log(e.target.checked);
  const isChecked = e.target.checked;
  heading.textContent = isChecked === true ? 'Checked' : 'Unchecked';
}

function onFocus() {
  console.log('input is focused');
  itemInput.style.border = '2px solid #8CCD58';
}

function onUnfocus() {
  console.log('input is not focused');
  itemInput.style.border = 'unset';
  itemInput.style.border = ''; // resets to default
}

itemInput.addEventListener('input', onInput);
priorityInput.addEventListener('change', onInput);
checkbox.addEventListener('input', onChecked);
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onUnfocus);
