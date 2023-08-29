/*
CHALLENGE #4
Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:

    Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

    Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

    Example: The bill was 275, the tip was 41.25, and the total value 316.25.

Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

TEST DATA: Test with different bill values: 275, 40, and 430

*/
// ternary operator syntax : condition ? action : else (this part is mandatory).

let choice = prompt(`
Choose your Bill Amount: 
a.) $275 
b.) $40 
c.) $430 
`);

let bill;
 
switch (choice) {
    case 'a':
        bill = 275;
        break;
    
    case 'b':
        bill = 40;
        break;
    
    case 'c':
        bill = 430;
        break;
    default:
        console.log(`pls write a, b, or c. no other choices are allowed.`)
}

let tipPercentage;
const tip = bill >= 50 && bill <= 300 ? bill *.15 : bill*.20;

// determine tip percentage
if (bill >= 50 && bill <= 300 ){
    tipPercentage = `15%`
}else{
    tipPercentage = `20%`
}


console.log(`-  you spent ${bill} dollars. so the tip should be ${tip} dollars. which is ${tipPercentage} percent of your spending.`);
console.log(`receipt : The bill was ${bill} dollars, the tip was ${tip}, and the total value ${bill + tip}.`);
alert(`
RECEIPT: 
- The bill was ${bill} dollars, the tip was ${tip}, and the total value ${bill + tip}.

SUMMARY: 
- you spent ${bill} dollars. so the tip should be ${tip} dollars. which is ${tipPercentage} percent of your spending.
`);
