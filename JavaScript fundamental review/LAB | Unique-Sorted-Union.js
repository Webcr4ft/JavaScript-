function uniteUnique(...arrays) {
  const result = [];

  for (const array of arrays) {
    for (const value of array) {
      if (!result.includes(value)) {
        result.push(value);
      }
    }
  }

  return result;
}
