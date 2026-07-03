# What Is Method Chaining, and How Does It Work?

**Method chaining** is a technique where you call multiple methods one after another.

You can use method chaining on many types of values in JavaScript, including:

- Strings
- Arrays
- Objects

Even though strings are primitive values, JavaScript temporarily wraps them in a `String` object whenever you call a string method. This allows methods like `trim()`, `toLowerCase()`, and `replace()` to work.

---

## Method Chaining with Strings

Consider the following example:

```javascript
const result = "  Hello, World!  "
  .trim()
  .toLowerCase()
  .replace("world", "JavaScript");

console.log(result); // "hello, JavaScript!"
```

### How It Works

We begin with the string:

```text
"  Hello, World!  "
```

Each method returns a **new string**, which becomes the input for the next method.

The operations occur in this order:

1. `trim()` removes the extra spaces.

```text
"Hello, World!"
```

2. `toLowerCase()` converts every character to lowercase.

```text
"hello, world!"
```

3. `replace()` replaces `"world"` with `"JavaScript"`.

```text
"hello, JavaScript!"
```

The final result is:

```text
hello, JavaScript!
```

---

## Method Chaining with Arrays

Method chaining is especially useful when working with array methods.

Consider this example:

```javascript
const transactions = [
  { amount: 100, type: "credit" },
  { amount: 20, type: "cash" },
  { amount: 150, type: "credit" },
  { amount: 50, type: "cash" },
  { amount: 75, type: "credit" }
];

const totalCreditWithBonus = transactions
  .filter((transaction) => transaction.type === "credit")
  .map((transaction) => transaction.amount * 1.1)
  .reduce((sum, amount) => sum + amount, 0);

console.log(totalCreditWithBonus); // 357.5
```

### How It Works

The methods are executed one after another.

### Step 1: `filter()`

Keep only the credit transactions.

```javascript
[
  { amount: 100, type: "credit" },
  { amount: 150, type: "credit" },
  { amount: 75, type: "credit" }
]
```

### Step 2: `map()`

Multiply each amount by `1.1` to apply a **10% bonus**.

```javascript
[110, 165, 82.5]
```

### Step 3: `reduce()`

Add all the values together.

```text
110 + 165 + 82.5 = 357.5
```

The final result is:

```javascript
357.5
```

---

## Method Chaining with Objects

Method chaining also works with objects.

For this to work, each method must return `this`, which refers to the current object.

### Example

```javascript
const calculator = {
  total: 0,

  add(n) {
    this.total += n;
    return this;
  },

  multiply(n) {
    this.total *= n;
    return this;
  },

  subtract(n) {
    this.total -= n;
    return this;
  },

  getResult() {
    return this.total;
  }
};

const result = calculator
  .add(5)
  .multiply(2)
  .subtract(3)
  .getResult();

console.log(result); // 7
```

### How It Works

1. `add(5)` sets the total to `5`.
2. `multiply(2)` changes the total to `10`.
3. `subtract(3)` changes the total to `7`.
4. `getResult()` returns the final value.

Because each method returns `this`, the next method can continue using the same object.

---

## Why Use Method Chaining?

Method chaining can make your code:

- Shorter
- Cleaner
- Easier to read
- More expressive

Instead of storing intermediate results in multiple variables, you can perform related operations in a single chain.

---

## When to Avoid Long Chains

Although method chaining is useful, extremely long chains can become difficult to debug.

If something goes wrong, it may be harder to identify which method caused the issue.

For better readability and debugging, consider breaking very long chains into multiple steps.

---

## Key Takeaways

- Method chaining means calling multiple methods one after another.
- Each method returns a value that becomes the input for the next method.
- Strings, arrays, and objects all support method chaining.
- Array methods like `filter()`, `map()`, and `reduce()` are commonly chained together.
- Objects can support method chaining by returning `this` from each method.
- Keep method chains reasonably short to improve readability and debugging.

---

## Summary

Method chaining is a powerful JavaScript technique that allows multiple operations to be performed in a single, readable expression. Whether you're transforming strings, processing arrays, or designing chainable objects, method chaining helps you write cleaner and more expressive code. When used appropriately, it improves readability while reducing unnecessary intermediate variables.
