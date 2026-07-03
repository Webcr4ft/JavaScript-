# What Are Higher-Order Functions?

Higher-order functions are a powerful concept in JavaScript that can significantly improve your coding skills by making your code more flexible and reusable.

In essence, a **higher-order function** is a function that:

- Takes one or more functions as arguments.
- Returns a function.
- Or does both.

---

## Functions Are First-Class Citizens

To understand higher-order functions, you first need to know that functions are **first-class citizens** in JavaScript.

This means functions can be treated like any other value. They can be:

- Assigned to variables.
- Passed as arguments to other functions.
- Returned from other functions.

This flexibility is what makes higher-order functions possible.

---

## Using Functions as Arguments

One common use of higher-order functions is to abstract away complex operations.

For example, instead of writing separate functions to perform different operations on an array, you can write one higher-order function that accepts the operation as an argument. This allows you to reuse the same function structure with different behaviors.

### Example

```javascript
function operateOnArray(arr, operation) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(operation(arr[i]));
  }

  return result;
}

function double(x) {
  return x * 2;
}

let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = operateOnArray(numbers, double);

console.log(doubledNumbers); // [2, 4, 6, 8, 10]
```

### How It Works

- `operateOnArray()` is the higher-order function.
- It accepts an array and another function (`operation`) as arguments.
- Inside the loop, it calls `operation()` on each array element.
- The `double()` function is passed as the operation, so every number is multiplied by `2`.

---

## Returning Functions

Higher-order functions can also **return functions**.

This is useful for creating specialized functions from a more general one. This pattern is often called a **function factory**.

### Example

```javascript
function multiplyBy(factor) {
  return function(number) {
    return number * factor;
  };
}

let double = multiplyBy(2);
let triple = multiplyBy(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

### How It Works

- `multiplyBy()` is the higher-order function.
- It returns a new function.
- That returned function remembers the value of `factor`.
- Calling `multiplyBy(2)` creates a function that doubles numbers.
- Calling `multiplyBy(3)` creates a function that triples numbers.

---

## Built-in Higher-Order Functions

Higher-order functions are widely used throughout JavaScript.

Many built-in array methods are higher-order functions because they accept another function as an argument.

Examples include:

- `map()`
- `filter()`
- `reduce()`

You will learn more about these methods in future lessons.

---

## Why Use Higher-Order Functions?

Higher-order functions help you write more **declarative** code.

Instead of describing **how** to perform every step (imperative programming), you describe **what** you want to accomplish (declarative programming).

This often results in code that is:

- Easier to read.
- Easier to reuse.
- Easier to maintain.

---

## Key Takeaways

- A **higher-order function** is a function that takes another function as an argument, returns a function, or both.
- Functions are **first-class citizens** in JavaScript, meaning they can be passed around like any other value.
- Higher-order functions allow you to reuse the same function with different behaviors.
- They can also generate specialized functions by returning new functions.
- Common JavaScript array methods like `map()`, `filter()`, and `reduce()` are all higher-order functions.

---

## Summary

Higher-order functions are a fundamental part of JavaScript and functional programming. They make your code more flexible, reusable, and expressive by allowing functions to be passed around just like any other value. As you continue learning JavaScript, you'll use higher-order functions frequently, making them an essential concept for writing clean, efficient, and maintainable code.
