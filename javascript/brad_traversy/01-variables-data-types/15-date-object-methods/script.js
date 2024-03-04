let x;
let d = new Date();

x = d.toString();

// these 2 both gives the timestamps of the date
x = d.getTime(); 
x = d.valueOf();

x = d.getFullYear();
x = d.getMonth() + 1; // zero based so need to add 1
x = d.getDate(); // get the day of the month
x = d.getDay(); // sunday
x = d.getHours(); // hour of the day
x = d.getMinutes(); // minutes of the day
x = d.getSeconds(); // seconds of the day
x = d.getMilliseconds(); // milliseconds
x = d.getTime(); // time in milliseconds

x = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;

// locally abiding time format
x = Intl.DateTimeFormat('en-US').format(d);
x = Intl.DateTimeFormat('default', {month : "long"}).format(d);
// locale code: https://saimana.com/list-of-country-locale-code/

x = d.toLocaleDateString('default', {weekday: "long"})
x = d.toLocaleDateString('default', {month: "long"})

let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
console.log(timeZone);

x = d.toLocaleDateString('default', {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour:"numeric",
    minute: "numeric",
    second:"numeric",
    timeZone: timeZone,
})

console.log(x);