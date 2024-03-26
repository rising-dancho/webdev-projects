// NORMAL (MODERN WAY):
// const list = document.querySelectorAll('#item-list > li');
// console.log(list[2].innerText);

// // set changes to individual item in the list
// list[2].style.color = 'red';

// list.forEach((item, index) => {
//   item.style.color = 'green';

//   if (index === 1) {
//     // item.style.color = 'orange';
//     item.remove();
//   }
//   if (index === 2) {
//     // item.style.color = 'orange';
//     item.innerHTML = `Vitlog
//     <button class="remove-item btn-link text-red">
//     <i class="fa-solid fa-xmark"></i>
//   </button>`;
//   }
// });

// OLD WAY `getElementsByClassName`: returns HTMLCollection that needs to be converted into an array
const list2 = document.getElementsByClassName('item');
console.log(list2);

list2[1].innerHTML = `  Teti
<button class="remove-item btn-link text-red">
  <i class="fa-solid fa-xmark"></i>
</button>`;

const listArray = Array.from(list2);

listArray.forEach((item) => {
  item.style.color = 'green';
});

// OLD WAY `getElementsByTagName`: returns HTMLCollection that needs to be converted into an array
const list3 = document.getElementsByTagName('li');
console.log(list3); // also returns HTMLCollection

const listArray2 = Array.from(list3);

listArray2.forEach((item) => {
  item.style.color = 'pink';
});
