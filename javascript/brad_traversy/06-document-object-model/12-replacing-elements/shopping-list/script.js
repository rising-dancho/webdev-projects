function replaceFirstItem() {
  const firstItem = document.querySelector('li:first-child');

  const li = document.createElement('li');
  li.textContent = 'Replace First';

  firstItem.replaceWith(li);
}

replaceFirstItem();

function replaceSecondItem() {
  const secondItem = document.querySelector('li:nth-child(2)');

  // replaces even the outer tags
  secondItem.outerHTML = '<li> Replace Second</li>';
}

replaceSecondItem();

function replaceAllItems() {
  const lis = document.querySelectorAll('li');

  //   lis.forEach((item, index) => {
  //     if (index === 1) {
  //       item.innerHTML = 'First';
  //     } else {
  //       item.outerHTML = `<li>Replaced</li>`;
  //     }
  //   });

  lis.forEach(
    (item, index) => (item.innerHTML = index === 1 ? 'First' : 'Replaced')
  );
}

replaceAllItems();

function replaceChildHeading() {
  const header = document.querySelector('header');
  const h1 = document.querySelector('header h1');

  const h2 = document.createElement('h2');
  h2.id = 'app-title';
  h2.textContent = 'utut';
  header.replaceChild(h2, h1);
}

replaceChildHeading();
