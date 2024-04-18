// Bubble Sort
function bubbleSortNames(names) {
  let len = names.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
      if (names[j] > names[j + 1]) {
        let temp = names[j];
        names[j] = names[j + 1];
        names[j + 1] = temp;
      }
    }
  }
  return names;
}

// Merge Sort
function mergeSortNames(names) {
  if (names.length <= 1) {
    return names;
  }

  const middle = Math.floor(names.length / 2);
  const left = names.slice(0, middle);
  const right = names.slice(middle);

  return merge(mergeSortNames(left), mergeSortNames(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Quick Sort
function quickSortNames(names) {
  if (names.length <= 1) {
    return names;
  }

  const pivot = names[0];
  const left = [];
  const right = [];

  for (let i = 1; i < names.length; i++) {
    if (names[i] < pivot) {
      left.push(names[i]);
    } else {
      right.push(names[i]);
    }
  }

  return quickSortNames(left).concat(pivot, quickSortNames(right));
}

const pinoySuperHeroes = [
  'Zsazsa Zaturnnah',
  'Bagwis',
  'darna',
  'Mithi',
  'Super Inggo',
  'Pedro Penduko',
  'Alexandra Trese',
  'pepeng agimat',
  'Luzviminda',
  'Kalayaan',
];

console.log(bubbleSortNames(pinoySuperHeroes));
console.log(mergeSortNames(pinoySuperHeroes));
console.log(quickSortNames(pinoySuperHeroes));
