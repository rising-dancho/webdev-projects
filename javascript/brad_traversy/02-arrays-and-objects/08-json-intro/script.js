const post = {
  id: 1,
  title: 'Post One',
  body: 'This is the body',
};

// Convert to JSON string
const str = JSON.stringify(post);

// Parse JSON
const obj = JSON.parse(str);

console.log(obj.id);

const posts = [
  {
    id: 1,
    title: 'Post One',
    body: 'This is the body',
  },
  {
    id: 2,
    title: 'Post Two',
    body: 'This is the body',
  },
];

// Need the JSON to be parsed first before you can work with   
const str2 = JSON.stringify(posts);
console.log(str2[0].id);

// JSON files can be worked with after parsed
const obj2 = JSON.parse(str2);
console.log(obj2[0].id);
