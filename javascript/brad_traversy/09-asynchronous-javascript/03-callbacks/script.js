const btn = document.querySelector('button');

function callBack(e) {
  // console.dir(e.target.classList);
  e.target.classList.toggle('danger');
}

btn.addEventListener('click', callBack);
