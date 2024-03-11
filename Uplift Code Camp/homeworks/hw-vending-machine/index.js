class VendingMachine {
  constructor(snacks) {
    this.snacks = snacks;
  }

  vend(snackPosition, customerBill) {
    if (snackPosition >= 0 && snackPosition < this.snacks.length) {
      const selectedSnack = this.snacks[snackPosition];

      if (customerBill >= selectedSnack.price) {
        const change = customerBill - selectedSnack.price;
        return { name: selectedSnack.name, change: change };
      } else {
        return 'Your money is not enough, sorry';
      }
    } else {
      return 'Snack not found';
    }
  }
}

// Test cases
const snacks = [
  { name: 'Cheese Ring', price: 15 },
  { name: 'Nova', price: 12 },
  { name: 'Moby', price: 5 },
];

const vendingMachine = new VendingMachine(snacks);

const testCase1 = vendingMachine.vend(1, 20);
console.log(testCase1);

const testCase2 = vendingMachine.vend(0, 20);
console.log(testCase2);

const testCase3 = vendingMachine.vend(5, 20);
console.log(testCase3);

const testCase4 = vendingMachine.vend(2, 2);
console.log(testCase4);
