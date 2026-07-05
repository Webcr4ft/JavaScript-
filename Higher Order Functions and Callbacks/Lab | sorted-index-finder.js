function getIndexToIns(arr, num) {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  // Find the first index where num should be inserted
  const index = arr.findIndex(value => value >= num);

  // If no suitable index is found, insert at the end
  return index === -1 ? arr.length : index;
}

// Examples
console.log(getIndexToIns([1, 2, 3, 4], 1.5)); // 1
console.log(getIndexToIns([20, 3, 5], 19));    // 2
console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); // 3
console.log(getIndexToIns([], 5)); // 0
