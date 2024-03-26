let output;

const div = document.createElement('div');

output = div.className = 'test';
output = div.id = 'tite';
output = div.setAttribute('title', 'titing galet');
// output = div.innerText = "hello from betlog";

// creating a text to put inside a div
text = document.createTextNode('titi');
output = div.appendChild(text);

// appending the div (with the "text" node) to the body
// document.body.appendChild(div);

const li = document.createElement('li');
const input = 'Titeng galet';

li.innerHTML = `
${input}
<button class="remove-item btn-link text-red">
  <i class="fa-solid fa-xmark"></i>
</button>
`;

document.querySelector('.items').appendChild(li);

console.log(output);
