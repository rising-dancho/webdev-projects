function calculator(num1, num2, operator) {
  let result;
  if (operator === '+') {
    result = num1 + num2;
  } else if (operator === '-') {
    result = num1 - num2;
  } else if (operator === '*') {
    result = num1 * num2;
  } else if (operator === '/') {
    result = num1 / num2;
  } else {
    // console.log('Invalid operator/input');
    throw new Error('Invalid Operator');
  }
  return result;
}

module.exports = calculator;
