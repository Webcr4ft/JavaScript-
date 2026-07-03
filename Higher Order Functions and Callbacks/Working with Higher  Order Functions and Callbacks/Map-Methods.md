# What Is the `map()` Method, and How Does It Work?

The `map()` method is a powerful and widely used array method in JavaScript.

It creates a **new array** by applying a given function to every element of the original array.

Unlike some array methods, `map()` **does not modify the original array**. Instead, it returns a brand-new array containing the transformed values.

---

## Basic Example

```javascript
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((num) => num * 2);

console.log(numbers); // [1, 2, 3, 4, 5]
console.log(doubled); // [2, 4, 6, 8, 10]
```

### How It Works

To create a new array where every number is doubled, we use the `map()` method.

`map()` accepts a callback function, which is executed once for every element in the array.

In this example:

- Each number is passed to the callback.
- The callback multiplies the number by `2`.
- The returned values are collected into a new array.

The result is:

```javascript
[2, 4, 6, 8, 10]
```

The original array remains unchanged.

---

## Callback Parameters

The callback function passed to `map()` can receive **up to three arguments**.

### 1. Current Element

The first argument is the current element being processed.

```javascript
const numbers = [3, 4, 5, 6, 7].map((element) => {
  console.log("Element:", element);
  return element * 2;
});
```

### Output

```text
Element: 3
Element: 4
Element: 5
Element: 6
Element: 7
```

---

### 2. Current Index

The second argument is the index of the current element.

```javascript
const numbers = [3, 4, 5, 6, 7].map((element, index) => {
  console.log("Element:", element);
  console.log("Index:", index);

  return element * 2;
});
```

### Output

```text
Element: 3
Index: 0

Element: 4
Index: 1

Element: 5
Index: 2

Element: 6
Index: 3

Element: 7
Index: 4
```

---

### 3. Original Array

The third argument is the original array on which `map()` was called.

```javascript
const numbers = [3, 4, 5, 6, 7].map((element, index, array) => {
  console.log("Element:", element);
  console.log("Index:", index);
  console.log("Array:", array);

  return element * 2;
});
```

### Output

```text
Element: 3
Index: 0
Array: [3, 4, 5, 6, 7]

Element: 4
Index: 1
Array: [3, 4, 5, 6, 7]

Element: 5
Index: 2
Array: [3, 4, 5, 6, 7]

Element: 6
Index: 3
Array: [3, 4, 5, 6, 7]

Element: 7
Index: 4
Array: [3, 4, 5, 6, 7]
```

---

## Why Use `map()`?

The `map()` method is useful because it:

- Creates a new array without changing the original.
- Makes code cleaner and easier to read.
- Eliminates the need for manually creating a new array with a `for` loop.
- Allows you to transform every element in an array with a single method call.

---

## Key Takeaways

- `map()` creates a **new array** from an existing array.
- It executes a callback function once for every element.
- The original array is **not modified**.
- The callback can receive:
  - The current element.
  - The current index.
  - The original array.
- Whatever the callback returns becomes an element in the new array.

---

## Summary

The `map()` method is one of the most commonly used array methods in JavaScript. It provides a simple and efficient way to transform every element in an array while leaving the original array unchanged. As you continue learning JavaScript, you'll frequently use `map()` to create cleaner, more readable, and more maintainable code.
