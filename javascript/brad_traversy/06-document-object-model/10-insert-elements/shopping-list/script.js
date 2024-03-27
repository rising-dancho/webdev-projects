// insertAdjacentElement Example
function insertElement() {
  const filter = document.querySelector('.filter');
  const h2 = document.createElement('h2');
  // h2.textContent = "insertAdjacentElement";
  h2.appendChild(document.createTextNode('Vitlog'));

  filter.insertAdjacentElement('beforebegin', h2);
  filter.insertAdjacentElement('afterbegin', h2);
  filter.insertAdjacentElement('beforeend', h2);
  filter.insertAdjacentElement('afterend', h2);
}
// insertAdjacentText Example
function inserText() {
  const li = document.querySelector('li:first-child');

  li.insertAdjacentText('beforebegin', 'lol');
  li.insertAdjacentText('afterbegin', 'lol');
  li.insertAdjacentText('beforeend', 'lol');
  li.insertAdjacentText('afterend', 'lol');
}

// insertAdjacentHTML example
function insertHTML() {
  const clrBtn = document.querySelector('#clear');

  clrBtn.insertAdjacentHTML('afterbegin', '<h2>tite</h2>');
  clrBtn.insertAdjacentHTML('beforebegin', '<h2>tite</h2>');
  clrBtn.insertAdjacentHTML('beforeend', '<h2>tite</h2>');
  clrBtn.insertAdjacentHTML('afterend', '<h2>tite</h2>');
}

// insertBefore Example

/*
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
*/

insertElement();
inserText();
insertHTML();
