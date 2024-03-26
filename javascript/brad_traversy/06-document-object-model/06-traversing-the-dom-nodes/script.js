let output;

const parent = document.querySelector('.parent');

output = parent.childNodes;
// output = parent.childNodes[0].nextSibling.nodeValue;
// output = parent.childNodes[3].nodeName;
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].outerHTML;
output = parent.childNodes[3].style.backgroundColor = '#333';
output = parent.childNodes[3].style.color = '#eee';

output = parent.firstChild.textContent = 'Titeng Galet';
output = parent.lastChild.textContent = 'Mabahong Utot';
output = parent.lastChild;

// GETTING THE PARENT NODE FROM THE CHILD NODE
const child = document.querySelector('.child');

output = child.parentNode;
output = child.parentNode.style.backgroundColor = '#A13414';
output = child.parentNode.style.color = '#eee';
output = child.parentNode.style.padding = '10px';

// GETTING THE SIBLING NODE FROM THE CHILD NODE
const secondItem = document.querySelector('.child:nth-child(2)');

output = secondItem.textContent;
output = secondItem.previousSibling;
output = secondItem.nextSibling;


console.log(output);
