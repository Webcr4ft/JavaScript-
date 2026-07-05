function destroyer(arr, ...valuesToRemove) {
  return arr.filter(item => !valuesToRemove.includes(item));
}

// Examples
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
// Output: [1, 1]

console.log(destroyer(["tree", "hamburger", 53], "tree", 53));
// Output: ["hamburger"]
