const socials = ['facebook', 'twitter', 'instagram', 'youtube'];
// let x ="";
// let y = 0;

// console.log(socials.__proto__);
// console.log(x.__proto__);
// console.log(y.__proto__);

// style 1
// socials.forEach((social) => console.log(social));

// style 2
// socials.forEach(function (social, index, arr) {
//     console.log(`${index} : ${social}`);
//     // console.log(arr);
// });

// style 3
function printSocials(social, index) {
  console.log(index, social);
}

// socials.forEach(printSocials);

// style 4
const socialObj = [
  { name: 'facebook', url: 'www.facebook.com' },
  { name: 'friendster', url: 'www.friendster.com' },
  { name: 'myspace', url: 'www.myspace.com' },
];

socialObj.forEach((social) => console.log(social.name, social.url));
