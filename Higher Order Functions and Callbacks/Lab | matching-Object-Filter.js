function whatIsInAName(collection, source) {
  const keys = Object.keys(source);

  return collection.filter(obj =>
    keys.every(key => obj[key] === source[key])
  );
}

// Example
console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" }
    ],
    { last: "Capulet" }
  )
);

// Output:
// [{ first: "Tybalt", last: "Capulet" }]
