function smallestCommons(arr) {
  const [min, max] = arr.sort((a, b) => a - b);

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  const lcm = (a, b) => (a * b) / gcd(a, b);

  let multiple = min;

  for (let i = min + 1; i <= max; i++) {
    multiple = lcm(multiple, i);
  }

  return multiple;
}

// Examples
console.log(smallestCommons([1, 5]));   // 60
console.log(smallestCommons([5, 1]));   // 60
console.log(smallestCommons([2, 10]));  // 2520
console.log(smallestCommons([23, 18])); // 6056820
