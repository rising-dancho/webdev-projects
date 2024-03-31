const form = document.getElementById('item-form');
const input = document.getElementById('item-input');
const submit = document.querySelector('.btn');
const h1 = document.querySelector('h1');

// function onSubmit(e) {
//   e.preventDefault();
//   //   console.log('submit');

//   const item = document.getElementById('item-input').value;
//   const priority = document.getElementById('priority-input').value;

//   if (item === '' || priority === '0') {
//     alert('Please fill in all the fields');
//     h1.textContent = 'Shopping List';
//     return; // moves out of the function: codes below wont run
//   }

//   console.log(item, priority);
//   h1.textContent = `${item}, ${priority}`;
// }

function onSubmit2(e) {
  e.preventDefault();

  const formData = new FormData(form);
  console.log(formData);

  //   const item = formData.get('item'); // coming from the form, name="item"
  //   const priority = formData.get('priority'); // coming from the form, name="priority"
  const entries = formData.entries();

  //   console.log(item, priority);
  //   console.log(entries);

  for (let entry of entries) {
    console.log(entry[0]);
  }
}

// form.addEventListener('submit', onSubmit);
form.addEventListener('submit', onSubmit2);

// function onAdd(e) {
//   e.preventDefault();
//   console.log(input.value);
//   h1.textContent = input.value;
// }
// submit.addEventListener('click', onAdd);
