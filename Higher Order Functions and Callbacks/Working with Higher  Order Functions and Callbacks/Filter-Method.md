# What Is the `filter()` Method, and How Does It Work?

The `filter()` method is used to create a **new array** containing only the elements that pass a specified test.

It is useful for selectively extracting items from an array based on a condition.

Unlike some array methods, `filter()` **does not modify the original array**. Instead, it returns a new array with only the elements that satisfy the callback function.

---

## Basic Example

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers); // [2, 4, 6, 8, 10]
```

### How It Works

The `filter()` method executes a callback function once for every element in the array.

The callback checks whether each number is even by using the remainder operator (`%`).

- If the callback returns `true`, the element is included in the new array.
- If the callback returns `false`, the element is excluded.

In this example, only the even numbers are returned.

---

## Callback Parameters

Like `map()`, the callback function for `filter()` can receive **up to three arguments**.

```javascript
array.filter((element, index, array) => {
  // code
});
```

| Parameter | Description |
|-----------|-------------|
| `element` | The current element being processed |
| `index` | The index of the current element |
| `array` | The original array being filtered |

---

## When No Elements Match

If no elements pass the test, `filter()` returns an **empty array**.

```javascript
const numbers = [2, 4, 6, 8].filter((num) => num > 10);

console.log(numbers); // []
```

Since none of the numbers are greater than `10`, the callback always returns `false`, resulting in an empty array.

---

## Filtering Objects

The `filter()` method is also commonly used with arrays of objects.

### Example

```javascript
const developers = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 25 }
];

const youngPeople = developers.filter((person) => person.age < 30);

console.log(youngPeople);
```

### Output

```javascript
[
  { name: "Alice", age: 25 },
  { name: "David", age: 25 }
]
```

### How It Works

The callback checks the `age` property of each object.

- If `person.age < 30`, the callback returns `true`, and the object is included.
- Otherwise, it returns `false`, and the object is excluded.

---

## Common Uses of `filter()`

The `filter()` method is incredibly versatile and can be used to:

- Remove `null` or `undefined` values from an array.
- Filter objects based on their properties.
- Create search functionality.
- Extract data that meets specific conditions.

---

## Why Use `filter()`?

Using `filter()` helps you:

- Create a new array without modifying the original.
- Write cleaner and more readable code.
- Avoid manually building a filtered array with a `for` loop.
- Express filtering logic in a simple and declarative way.

---

## Key Takeaways

- `filter()` creates a **new array** containing only the elements that pass a test.
- The original array remains unchanged.
- The callback returns:
  - `true` to keep an element.
  - `false` to exclude an element.
- The callback can receive:
  - The current element.
  - The current index.
  - The original array.
- If no elements satisfy the condition, `filter()` returns an empty array.

---

## Summary

The `filter()` method is one of JavaScript's most useful array methods. It provides a clean and efficient way to select only the elements that meet a specific condition while leaving the original array unchanged. Along with `map()`, `filter()` is a fundamental tool for working with arrays and writing cleaner, more maintainable JavaScript code.
