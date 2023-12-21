console.log(100);

console.log('hello, world');
console.log(20, 'hello', false);
const x = 100;
console.log(x);

console.table({
    name: 'adfinem', email: 'josealejoperezjr@gmail.com'
});

console.group('simple');
console.log(x + 2);
console.error('Alert');
console.warn('Warning');
console.groupEnd();

const styles = 'margin: 20px; padding:20px; background-color: skyblue; color: black; border-radius: 4px; font-weight: bold;';

console.log('%cadfinem', styles);
