const btn = document.querySelector('button');

// function callBack(e) {
//   // console.dir(e.target.classList);
//   e.target.classList.toggle('danger');
// }

btn.addEventListener('click', createPost);

const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' },
];

function createPost(post, cb){
 setTimeout(() => {
  posts.push(post);
  cb();
 }, 2000);
}

function getPosts() {
  setTimeout(() => {
    posts.forEach((post) => {
      const div = document.createElement('div');
      div.innerHTML = `
      <strong>${post.title}</strong> - <span>${post.body}</span>
      `;
      document.getElementById('posts').appendChild(div);
    });
  }, 1000);
}


createPost({ title: 'Post Three', body: 'This is post three' }, getPosts)