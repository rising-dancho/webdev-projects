const numbers = [8, 3, 5, 4, 9, 1, 2];

function bubbleSort(array) {
  for (let index = 0; index < array.length - 1; index++) {
    for (let innerIndex = 0; innerIndex < array.length - 1; innerIndex++) {
      let temp = 0;
      if (array[innerIndex] > array[innerIndex + 1]) {
        temp = array[innerIndex + 1]; // 3
        array[innerIndex + 1] = array[innerIndex];
        array[innerIndex] = temp;
      }
    }
  }
  return array;
}


let result = bubbleSort(numbers);
console.log(result);