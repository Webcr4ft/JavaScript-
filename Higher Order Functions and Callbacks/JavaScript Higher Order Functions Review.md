# JavaScript Higher-Order Functions Review

This document reviews some of the most commonly used **higher-order functions** and array methods in JavaScript. These methods help you write cleaner, more readable, and more efficient code by reducing the need for traditional loops.

---

# Table of Contents

1. Callback Functions
2. `forEach()` Method
3. Higher-Order Functions
4. `map()` Method
5. `filter()` Method
6. `reduce()` Method
7. Method Chaining
8. `sort()` Method
9. `every()` Method
10. `some()` Method

---

# Callback Functions

## Definition

A **callback function** is a function that is passed as an argument to another function and is executed after or during the execution of that function.

Callbacks make JavaScript more flexible because functions can receive other functions as input.

### Example

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}

function processUser(callback) {
  callback("John");
}

processUser(greet);
```

**Output**

```text
Hello, John!
```

---

# `forEach()` Method

## Definition

The `forEach()` method executes a callback function once for every element in an array.

Unlike `map()`, it **does not return a new array**.

### Syntax

```javascript
array.forEach((element, index, array) => {
  // code
});
```

### Callback Parameters

| Parameter | Description |
|-----------|-------------|
| `element` | Current element being processed |
| `index` | Index of the current element |
| `array` | The array being iterated |

### Example

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
  console.log(number * 2);
});
```

**Output**

```text
2
4
6
8
10
```

### Key Points

- Iterates over every element.
- Returns `undefined`.
- Does not modify the original array unless you explicitly do so.

---

# Higher-Order Functions

## Definition

A **higher-order function** is a function that:

- Accepts one or more functions as arguments.
- Returns another function or value.

Many JavaScript array methods are higher-order functions.

### Example

```javascript
function operateOnArray(arr, operation) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(operation(arr[i]));
  }

  return result;
}

function double(x) {
  return x * 2;
}

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = operateOnArray(numbers, double);

console.log(doubledNumbers);
```

**Output**

```javascript
[2, 4, 6, 8, 10]
```

### Why They're Useful

- Promote code reuse.
- Make programs more modular.
- Improve readability.
- Reduce repetitive code.

---

# `map()` Method

## Definition

The `map()` method creates a **new array** by applying a callback function to every element.

The original array remains unchanged.

### Syntax

```javascript
array.map((element, index, array) => {
    return newValue;
});
```

### Example

```javascript
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((num) => num * 2);

console.log(numbers);
console.log(doubled);
```

**Output**

```javascript
[1, 2, 3, 4, 5]

[2, 4, 6, 8, 10]
```

### When to Use

Use `map()` whenever you want to transform every element into something new.

---

# `filter()` Method

## Definition

The `filter()` method creates a **new array** containing only the elements that satisfy a condition.

### Syntax

```javascript
array.filter((element, index, array) => {
    return condition;
});
```

### Example

```javascript
const numbers = [1,2,3,4,5,6,7,8,9,10];

const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers);
```

**Output**

```javascript
[2, 4, 6, 8, 10]
```

### Common Uses

- Remove unwanted elements.
- Search data.
- Apply conditions.

---

# `reduce()` Method

## Definition

The `reduce()` method processes an array and reduces it into **one single value**.

That value can be:

- Number
- String
- Boolean
- Object
- Array

### Syntax

```javascript
array.reduce((accumulator, currentValue) => {
    return updatedAccumulator;
}, initialValue);
```

### Parameters

| Parameter | Description |
|-----------|-------------|
| `accumulator` | Stores the running result |
| `currentValue` | Current array element |

### Example

```javascript
const numbers = [1,2,3,4,5];

const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
);

console.log(sum);
```

**Output**

```text
15
```

### Common Uses

- Sum values
- Find averages
- Build objects
- Count occurrences
- Flatten arrays

---

# Method Chaining

## Definition

Method chaining is calling multiple methods one after another on the same object.

This improves readability and keeps code concise.

### Example

```javascript
const result = "  Hello, World!  "
    .trim()
    .toLowerCase()
    .replace("world", "JavaScript");

console.log(result);
```

**Output**

```text
hello, JavaScript!
```

### Benefits

- Cleaner code
- Less repetition
- Easy to read

---

# `sort()` Method

## Definition

The `sort()` method sorts an array **in place**, meaning it modifies the original array.

### Sorting Strings

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.sort();

console.log(fruits);
```

**Output**

```javascript
["Apple", "Banana", "Mango", "Orange"]
```

---

## Sorting Numbers

JavaScript sorts numbers as **strings** by default.

Example:

```javascript
[414, 200, 5, 10, 3]
```

Without a compare function:

```javascript
[10, 200, 3, 414, 5]
```

This happens because JavaScript compares UTF-16 character values instead of numeric values.

Use a compare function instead.

```javascript
const numbers = [414, 200, 5, 10, 3];

numbers.sort((a, b) => a - b);

console.log(numbers);
```

**Output**

```javascript
[3, 5, 10, 200, 414]
```

### Understanding the Compare Function

```javascript
(a, b) => a - b
```

| Return Value | Meaning |
|--------------|---------|
| Negative | `a` comes before `b` |
| Positive | `a` comes after `b` |
| Zero | Keep current order |

Examples:

```javascript
3 - 5 = -2
```

Negative

→ 3 comes first

```javascript
8 - 2 = 6
```

Positive

→ 2 comes first

```javascript
7 - 7 = 0
```

Equal values

---

# `every()` Method

## Definition

The `every()` method checks whether **every element** satisfies a condition.

It immediately stops when it encounters the first failure.

### Syntax

```javascript
array.every((element) => condition);
```

### Example

```javascript
const numbers = [2,4,6,8,10];

const hasAllEvenNumbers =
numbers.every(num => num % 2 === 0);

console.log(hasAllEvenNumbers);
```

**Output**

```text
true
```

### Returns

- `true` if every element passes.
- `false` if one fails.

---

# `some()` Method

## Definition

The `some()` method checks whether **at least one** element satisfies a condition.

It immediately stops once it finds a matching element.

### Syntax

```javascript
array.some((element) => condition);
```

### Example

```javascript
const numbers = [1,3,5,7,8,9];

const hasSomeEvenNumbers =
numbers.some(num => num % 2 === 0);

console.log(hasSomeEvenNumbers);
```

**Output**

```text
true
```

### Returns

- `true` if at least one element passes.
- `false` if none pass.

---

# Summary

| Method | Returns | Purpose |
|---------|----------|----------|
| `forEach()` | `undefined` | Perform an action for every element |
| `map()` | New Array | Transform every element |
| `filter()` | New Array | Keep elements matching a condition |
| `reduce()` | Single Value | Condense an array into one value |
| `sort()` | Sorted Original Array | Sort array elements |
| `every()` | Boolean | Check if every element passes |
| `some()` | Boolean | Check if at least one element passes |

---

# Key Takeaways

- **Callbacks** are functions passed into other functions.
- **Higher-order functions** either accept functions, return functions, or both.
- **forEach()** performs actions but does not return a new array.
- **map()** transforms every element into a new array.
- **filter()** selects elements that satisfy a condition.
- **reduce()** combines an entire array into one value.
- **Method chaining** makes code concise by linking multiple methods together.
- **sort()** modifies the original array and requires a compare function for numeric sorting.
- **every()** returns `true` only if every element passes a test.
- **some()** returns `true` as soon as one element passes a test.
