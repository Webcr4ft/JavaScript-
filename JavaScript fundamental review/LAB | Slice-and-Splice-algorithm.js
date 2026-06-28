function frankenSplice(arr1, arr2, n) {
  let newArr = arr2.slice();

  for (let i = 0; i < arr1.length; i++) {
    newArr.splice(n + i, 0, arr1[i]);
  }

  return newArr;
}
