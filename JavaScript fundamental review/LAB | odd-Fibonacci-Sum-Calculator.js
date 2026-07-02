function sumFibs(num) {
  let prev = 0;
  let curr = 1;
  let sum = 0;

  while (curr <= num) {
    if (curr % 2 !== 0) {
      sum += curr;
    }

    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  return sum;
}

// Examples
console.log(sumFibs(1));        // 1
console.log(sumFibs(4));        // 5
console.log(sumFibs(1000));     // 1785
console.log(sumFibs(75024));    // 60696
console.log(sumFibs(75025));    // 135721
console.log(sumFibs(4000000));  // 4613732
