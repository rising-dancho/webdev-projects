console.log(100);
console.log('Henlo World');
console.log(20, "hello", true);


const x = 100;
console.log(x);

console.error('Welp! dat\'s an error');
console.warn('Zap dawg!!');
console.table({name: 'Jose', email: 'jose@gmail.com'});


console.group('Grouped Content:');
console.error('Welp! dat\'s an error');
console.warn('Zap dawg!!');
console.groupEnd();

const styles = 'padding: 10px; background-color: white; color: green';

console.log('%cHello World', styles);
