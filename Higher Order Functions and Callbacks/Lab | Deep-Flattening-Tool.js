function steamrollArray(arr) {
  const flattened = [];

  function flatten(array) {
    for (const item of array) {
      if (Array.isArray(item)) {
        flatten(item);
      } else {
        flattened.push(item);
      }
    }
  }

  flatten(arr);

  return flattened;
}

// Examples
console.log(steamrollArray([[["a"]], [["b"]]]));
// ["a", "b"]

console.log(steamrollArray([1, [2], [3, [[4]]]]));
// [1, 2, 3, 4]

console.log(steamrollArray([1, {}, [3, [[4]]]]));
// [1, {}, 3, 4]
