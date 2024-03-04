let d = '';

d = new Date();

d = d.toString();

d = new Date(2024, 0, 1, 12, 30);
d = new Date('2024-01-02T12:30:00');
d = new Date('07/10/2024 12:30:00');
d = new Date('03-03-2024 12:30:00');

// console.log(d, typeof d);

d = Date.now();
d = new Date('03-03-2024');
d = d.getTime();

// console.log(d);

d = Date.now();
d = new Date(1609467557123); // timestampt in milliseconds of the exact day and time the snapshot is taken
d = Math.floor(Date.now() / 1000); // convert milliseconds timestamp to seconds
console.log(d);


// REFERENCES:
// https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off
