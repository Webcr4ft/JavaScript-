# What Are Rest Parameters and How Do They Differ from the `arguments` Object?

In the previous lesson, you learned about the **`arguments` object**, an array-like object that contains all the arguments passed to a function.

Example:

```javascript
function logArgs() {
  for (const arg of arguments) {
    console.log(arg);
  }
}

logArgs(1, 2, 3);

// Output:
// 1
// 2
// 3
```

While this is a valid way to work with a variable number of arguments, **modern JavaScript prefers rest parameters** because they are cleaner and more powerful.

---

# What Are Rest Parameters?

A **rest parameter** collects all remaining arguments into a **real array**.

It is written using three dots (`...`) before the parameter name.

Example:

```javascript
function logArgs(...args) {
  for (const arg of args) {
    console.log(arg);
  }
}

logArgs(1, 2, 3);

// Output:
// 1
// 2
// 3
```

Unlike the `arguments` object, `args` is a real JavaScript array.

---

# Naming Rest Parameters

You can name a rest parameter anything you like.

For example:

```javascript
function exampleFunction(a, b, ...restOfArgs) {
  console.log(restOfArgs);
}

function anotherFunction(x, y, ...theArgs) {
  console.log(theArgs);
}
```

The name doesn't matter—the `...` syntax is what makes it a rest parameter.

---

# Rules for Rest Parameters

There are a few important rules to remember.

## 1. It Must Be the Last Parameter

✅ Valid

```javascript
function example(a, b, ...args) {}
```

❌ Invalid

```javascript
function example(...args, lastArg) {}
```

The rest parameter must always appear **last**.

---

## 2. Only One Rest Parameter Is Allowed

✅ Valid

```javascript
function greet(name, ...messages) {}
```

❌ Invalid

```javascript
function badFunction(...args, ...moreArgs) {}
```

A function can only have **one** rest parameter.

---

## 3. No Trailing Comma

❌ Invalid

```javascript
function example(a, b, ...args,) {}
```

After the rest parameter, you cannot place a comma.

---

## 4. Rest Parameters Cannot Have Default Values

❌ Invalid

```javascript
function badFunction(...args = [1, 2]) {}
```

This will throw a **SyntaxError**.

---

# Why Use Rest Parameters?

Because rest parameters create a **real array**, you can immediately use all built-in array methods.

Example:

```javascript
function hasCat(...args) {
  return args.includes("cat");
}

console.log(hasCat("dog", "chicken", "cat"));   // true
console.log(hasCat("dog", "chicken", "horse")); // false
```

No conversion is needed.

---

# More Examples

## Using `map()`

```javascript
function doubleNumbers(...numbers) {
  return numbers.map(num => num * 2);
}

console.log(doubleNumbers(1, 2, 3));

// Output:
// [2, 4, 6]
```

---

## Using `filter()`

```javascript
function evenNumbers(...numbers) {
  return numbers.filter(num => num % 2 === 0);
}

console.log(evenNumbers(1, 2, 3, 4, 5, 6));

// Output:
// [2, 4, 6]
```

---

## Using `reduce()`

```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(5, 10, 15));

// Output:
// 30
```

---

## Using `sort()`

```javascript
function sortNumbers(...numbers) {
  return numbers.sort((a, b) => a - b);
}

console.log(sortNumbers(5, 1, 8, 3));

// Output:
// [1, 3, 5, 8]
```

---

## Using `push()`

```javascript
function addFruit(...fruits) {
  fruits.push("Orange");

  return fruits;
}

console.log(addFruit("Apple", "Banana"));

// Output:
// ["Apple", "Banana", "Orange"]
```

---

# `arguments` Object vs Rest Parameters

| `arguments` Object | Rest Parameters |
|--------------------|-----------------|
| Array-like object | Real array |
| Cannot use array methods directly | Supports all array methods |
| Available in regular functions | Must be declared with `...` |
| Exists automatically | Must be explicitly defined |
| Older approach | Modern JavaScript approach |

---

# When Should You Use Each?

Use **rest parameters** in modern JavaScript because they:

- Create a real array
- Support all array methods
- Have cleaner syntax
- Are easier to read and maintain

The `arguments` object is mainly useful when working with older JavaScript code.

---

# Summary

- Rest parameters use the `...` syntax.
- They collect all remaining arguments into a real array.
- A function can have only one rest parameter.
- The rest parameter must be the last parameter.
- Rest parameters cannot have default values.
- Unlike the `arguments` object, rest parameters support all built-in array methods.
- Rest parameters are the modern and recommended way to handle a variable number of arguments in JavaScript.
