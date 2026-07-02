function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }

  return arr;
}

// Examples
console.log(dropElements([1, 2, 3, 4], n => n >= 3));
// [3, 4]

console.log(dropElements([0, 1, 0, 1], n => n === 1));
// [1, 0, 1]

console.log(dropElements([1, 2, 3], n => n > 0));
// [1, 2, 3]

console.log(dropElements([1, 2, 3, 4], n => n > 5));
// []

console.log(dropElements([1, 2, 3, 7, 4], n => n > 3));
// [7, 4]
