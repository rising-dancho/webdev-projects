const p = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = itemList.querySelectorAll('li');

function run() {
  // className
  // p.className = "card dark";
  // console.log(p.className);

  // classList
  // console.log(itemList.classList);  // array of classes of `itemList`

  // p.classList.add("dark");
  // p.classList.remove("card");

  // TOGGLE A CLASS: (element to toggle)
  //   p.classList.toggle('dark');
  //   console.log(p.classList);

  // REPLACE A CLASS: (element to replace, replacement)
  p.classList.replace('card', 'dark');
  console.log(p.classList);

  items.forEach((item, index) => {
    item.style.color = 'red';

    if (index === 1) {
      item.style.color = 'blue';
    }
  });
}

// assign a callback function to the button
document.querySelector('button').onclick = run;
