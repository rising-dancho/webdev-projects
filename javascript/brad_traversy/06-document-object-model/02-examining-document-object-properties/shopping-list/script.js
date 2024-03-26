let output;

output = document.all;
// output = document.all[0];
// output = document.all.length;

output = document.documentElement;

output = document.head;
output = document.body;
output = document.domain;
output = document.doctype;
output = document.URL;
output = document.characterSet;
output = document.contentType;

// output = document.head.children;
// output = document.body.children;
// console.log(output, typeof output);

// output = document.forms;
// output = document.forms[0];
// output = document.forms[0].method;
// output = document.forms[0].action;
// output = document.forms[0].id;

// document.forms[0].id = 'new-id';

// output = document.links;
// output = document.links[0];
// output = document.links[0].href;
// output = document.links[0].id = 'google-link';
// output = document.links[0].className = 'google-class';
// output = document.links[0].classList;

// output = document.images;
// output = document.images[0];
// output = document.images[0].src;

// HTMLCollection - is array like.. but it is not an array..
// to use it like an array it must
// first be converted using `Array.from()` method
const forms = Array.from(document.forms);
forms.forEach((form) => console.log(form));

console.log(output);
