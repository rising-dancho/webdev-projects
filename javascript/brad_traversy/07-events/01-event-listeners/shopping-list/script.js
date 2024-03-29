const clearBtn = document.getElementById('clear');

function onClear() {
  const ul = document.querySelector('ul');
  const li = document.querySelectorAll('li');

  //   // STYLE 1
  //   ul.innerHTML = '';

  //   // STYLE 2
  //   li.forEach((item) => {
  //     item.remove();
  //   });

  // STYLE 3a [most performant]
  //   while (ul.firstChild) {
  //     ul.removeChild(ul.firstChild);
  //   }

  // STYLE 3b [most performant]
  while (ul.firstChild) {
    ul.firstChild.remove();
  }
}

// OLD WAY - [one at a time]
// clearBtn.onclick = function () {
//   alert('clear button was clicked');
// };

// MODERN WAY - addEventListener [as many as you want]
// STYLE 1 : anonymous function
// clearBtn.addEventListener('click', function () {
//   alert('wipee!!');
// });

// // STYLE 2 : arrow function
// clearBtn.addEventListener('click', () => alert('Vitlog'));

// // STYLE 3 : pass in a callback
clearBtn.addEventListener('click', onClear);

// REMOVE EVENT LISTENER `setTimeout`
// setTimeout(() => clearBtn.removeEventListener('click', onClear), 2000);

// AUTO FIRE A CLICK EVENT `setTimeout`
// setTimeout(() => clearBtn.click(), 3000);
