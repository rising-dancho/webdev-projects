let output;

// GET CHILD ELEMENTS FROM A PARENT

const parent = document.querySelector('.parent');

// const childrenToArray = parent.children;
// output = Array.from(childrenToArray);

// output.forEach((child, index) => {
//   child.style.color = 'red';

//   if (index === 2) {
//     child.style.color = 'green';
//   }
// });

output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].tagName;
output = parent.children[1].nodeName;

output = parent.children[1].style.color = 'blue';
output = parent.children[1].innerText = 'Vitlog';

output = parent.firstElementChild.innerText = 'Child one';
output = parent.lastElementChild.innerText = `Sweet child o' mine`;

// GET PARENT ELEMENT FROM A CHILD
const child = document.querySelector('.child');

output = child.parentElement.className;
output = child.parentElement.style.border = '2px solid #282828';
output = child.parentElement.style.padding = '10px';
output = child.parentElement.style.borderRadius = '10px';

// GET SIBLING ELEMENTS
const secondItem = document.querySelector('.child:nth-child(2)');

output = secondItem.innerText;
output = secondItem.nextElementSibling.innerText;
output = secondItem.previousElementSibling.innerText;

console.log(output);
