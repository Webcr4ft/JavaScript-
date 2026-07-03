# JavaScript Fundamentals Review

---

# String Constructor and `toString()` Method

## String Constructor

A **String object** is used to represent a sequence of characters.

It is created using the `String` constructor, which wraps a string primitive inside a JavaScript object.

### Example

```javascript
const greetingObject = new String("Hello, world!");

console.log(typeof greetingObject); // "object"
```

### Note

Most of the time, you'll work with **string primitives** instead of `String` objects.

```javascript
const greeting = "Hello, world!";

console.log(typeof greeting); // "string"
```

---

## The `toString()` Method

The `toString()` method converts a value into its string representation.

It can be used with many data types, including:

- Numbers
- Booleans
- Arrays
- Objects

### Numbers

```javascript
const num = 10;

console.log(num.toString()); // "10"
```

### Arrays

```javascript
const arr = [1, 2, 3];

console.log(arr.toString()); // "1,2,3"
```

---

## Using the Optional Radix

The `toString()` method accepts an optional **radix** argument.

A radix is the number base used when converting numbers into strings.

The radix can be any value from **2 to 36**.

Some common bases are:

| Radix | Number System |
|-------:|---------------|
| 2 | Binary |
| 8 | Octal |
| 10 | Decimal (default) |
| 16 | Hexadecimal |

### Example

```javascript
const num = 10;

console.log(num.toString(2)); // "1010"
```

Here, the decimal number `10` is converted into its binary representation.

---

# Number Constructor

The `Number` constructor creates a Number object.

More commonly, it is used to convert other data types into numbers.

The Number object also provides useful methods and properties such as:

- `isNaN()`
- `toFixed()`

---

## Creating a Number Object

```javascript
const myNum = new Number("34");

console.log(typeof myNum); // "object"
```

---

## Converting to a Number

```javascript
const num = Number("100");

console.log(num); // 100
console.log(typeof num); // "number"
```

This is the most common use of the `Number()` constructor.

---

# Best Practices for Naming Variables and Functions

Choosing meaningful names makes your code easier to read and maintain.

---

## Camel Case

JavaScript developers commonly use **camelCase** for variables and functions.

With camelCase:

- The first word starts with a lowercase letter.
- Every following word starts with an uppercase letter.

### Example

```javascript
let isLoading;
let userName;
let totalPrice;
```

---

## Naming Boolean Variables

Boolean variables are often prefixed with:

- `is`
- `has`
- `can`

### Example

```javascript
let isLoading = true;
let hasPermission = false;
let canEdit = true;
```

These names immediately tell readers that the variable contains either `true` or `false`.

---

## Naming Functions

Function names should clearly describe what the function does.

### Getting Data

Functions that retrieve information commonly begin with `get`.

```javascript
function getUserData() {
  // ...
}

function getProductDetails(productId) {
  // ...
}
```

---

### Returning Booleans

Functions that return `true` or `false` often begin with:

- `is`
- `has`
- `can`

```javascript
function isValidEmail(email) {
  // ...
}
```

---

### Setting Data

Functions that update information commonly begin with `set`.

```javascript
function setUserPreferences(preferences) {
  // ...
}
```

---

### Event Handlers

Event handler functions often begin with `handle` or end with `Handler`.

```javascript
function handleClick() {
  // ...
}
```

---

## Naming Loop Variables

When writing loops, short iterator names such as `i`, `j`, and `k` are widely used.

```javascript
for (let i = 0; i < array.length; i++) {
  // ...
}
```

---

# Key Takeaways

- The `String` constructor creates String objects.
- `toString()` converts values into strings.
- `toString()` accepts an optional radix between 2 and 36.
- The `Number()` constructor is commonly used to convert values into numbers.
- JavaScript uses camelCase for naming variables and functions.
- Boolean variables commonly begin with `is`, `has`, or `can`.
- Functions should have descriptive names that clearly explain their purpose.
- Loop iterators commonly use short names like `i`, `j`, or `k`.

---

## Summary


These JavaScript fundamentals provide a strong foundation for writing clean and maintainable code. Understanding constructors, type conversion, and naming conventions will make your programs easier to read while helping you follow common JavaScript best practices used by developers.

# JavaScript Fundamentals Review

---

# Working with Sparse Arrays

## What Is a Sparse Array?

A **sparse array** is an array that contains one or more **empty slots**.

An empty slot is different from a slot whose value is `undefined`.

For example:

```javascript
const sparseArray = [1, , , 4];

console.log(sparseArray.length); // 4
```

In this array:

- The first element is `1`.
- The second and third positions are **empty slots**.
- The fourth element is `4`.

Even though there are only two actual values, the array's length is still `4` because the empty slots count as positions in the array.

### Empty Slot vs `undefined`

These are **not** the same:

```javascript
const sparse = [1, , 3];

const notSparse = [1, undefined, 3];
```

- In `sparse`, the second position is completely empty.
- In `notSparse`, the second position contains the value `undefined`.

Although they may appear similar, JavaScript treats them differently in some array methods.

---

# Linters and Formatters

When writing JavaScript, developers commonly use tools that improve code quality and consistency.

---

## Linters

A **linter** is a static code analysis tool.

It checks your code for:

- Programming errors
- Potential bugs
- Stylistic issues
- Suspicious or unnecessary code

One of the most popular JavaScript linters is:

- **ESLint**

Linters help you catch mistakes before your code runs.

---

## Formatters

A **formatter** automatically formats your code according to a consistent style guide.

Instead of manually fixing indentation or spacing, the formatter does it for you.

A popular JavaScript formatter is:

- **Prettier**

Formatters help make code easier to read and keep projects consistent across teams.

---

# Memory Management

## What Is Memory Management?

Memory management is the process of:

- Allocating memory when it is needed.
- Releasing memory when it is no longer needed.

Unlike some programming languages, JavaScript handles memory management automatically.

This means you don't have to manually free memory after you're finished using it.

---

## Garbage Collection

JavaScript's automatic memory management is known as **garbage collection**.

The JavaScript engine automatically detects data that is no longer being used and removes it from memory.

As a result, developers rarely need to worry about manually managing memory.

---

# Closures

## What Is a Closure?

A **closure** is a function that remembers and can access variables from its outer (enclosing) lexical scope, even after the outer function has finished executing.

This is one of JavaScript's most powerful features.

---

## Example

```javascript
function outerFunction(x) {
  let y = 10;

  function innerFunction() {
    console.log(x + y);
  }

  return innerFunction;
}

let closure = outerFunction(5);

closure(); // 15
```

---

## How It Works

### Step 1

`outerFunction()` is called with:

```javascript
x = 5
```

Inside the function:

```javascript
let y = 10;
```

So the variables are:

```text
x = 5
y = 10
```

---

### Step 2

The `innerFunction()` is created.

```javascript
function innerFunction() {
  console.log(x + y);
}
```

Even though `innerFunction()` doesn't declare `x` or `y`, it can still access them because they belong to its outer scope.

---

### Step 3

The function is returned.

```javascript
return innerFunction;
```

Notice that we're returning the **function itself**, not calling it.

---

### Step 4

We store the returned function.

```javascript
let closure = outerFunction(5);
```

Although `outerFunction()` has finished executing, `innerFunction()` still remembers:

```text
x = 5
y = 10
```

---

### Step 5

Now we call the returned function.

```javascript
closure();
```

Inside the function:

```javascript
console.log(x + y);
```

becomes:

```javascript
console.log(5 + 10);
```

Output:

```text
15
```

This is possible because the function **closed over** the variables from its outer scope, which is why it is called a **closure**.

---

# Why Are Closures Useful?

Closures allow functions to:

- Remember values after another function has finished executing.
- Preserve private data.
- Create reusable functions.
- Build function factories and modules.

Closures are used extensively throughout modern JavaScript.

---

# Key Takeaways

- Sparse arrays contain one or more empty slots.
- Empty slots are different from `undefined` values.
- Linters detect errors, bugs, and style issues in your code.
- Formatters automatically organize your code according to a style guide.
- JavaScript manages memory automatically through garbage collection.
- A closure is a function that remembers variables from its outer scope, even after that outer function has returned.

---

## Summary

Sparse arrays, code quality tools, memory management, and closures are all important JavaScript fundamentals. Understanding these concepts helps you write cleaner code, avoid common mistakes, and appreciate some of the powerful features that make JavaScript flexible and efficient.

# JavaScript Fundamentals Review

---

# The `var` Keyword and Hoisting

Before **ES6 (ECMAScript 2015)**, `var` was the primary way to declare variables in JavaScript.

Today, developers generally prefer `let` and `const` because they provide safer and more predictable behavior.

---

# Redeclaring Variables with `var`

Variables declared with `let` or `const` **cannot** be redeclared in the same scope.

### Example

```javascript
let num = 19;
let num = 18; // SyntaxError
```

Output:

```text
Uncaught SyntaxError: Identifier 'num' has already been declared
```

However, `var` allows redeclaration.

### Example

```javascript
var myNum = 5;
var myNum = 10;

console.log(myNum); // 10
```

The second declaration replaces the first one without throwing an error.

---

# Scope of `var`

Variables declared with `var` are **function-scoped**, not block-scoped.

This means they ignore blocks such as:

- `if`
- `for`
- `while`

### Example

```javascript
if (true) {
  var num = 5;
}

console.log(num); // 5
```

Even though `num` was declared inside the `if` block, it is still accessible outside the block.

By comparison, `let` and `const` are **block-scoped**.

```javascript
if (true) {
  let num = 5;
}

console.log(num); // ReferenceError
```

---

# Hoisting

## What Is Hoisting?

**Hoisting** is JavaScript's behavior of moving declarations to the top of their scope during compilation before the code is executed.

Only the **declarations** are hoisted—not the initial values.

---

## Hoisting with `var`

Example:

```javascript
console.log(num);

var num = 5;

console.log(num);
```

JavaScript behaves as though it had written:

```javascript
var num;

console.log(num);

num = 5;

console.log(num);
```

Output:

```text
undefined
5
```

The declaration is hoisted, but the assignment stays in its original place.

---

# Function Hoisting

Function declarations are also hoisted.

Unlike variables, **both the function name and its body are hoisted**.

This means you can call a function before it appears in your code.

### Example

```javascript
sayHello();

function sayHello() {
  console.log("Hello, World!");
}
```

Output:

```text
Hello, World!
```

---

# Hoisting with `let` and `const`

Variables declared with `let` and `const` are also hoisted.

However, they are **not initialized immediately**.

Trying to access them before their declaration results in a **ReferenceError**.

This behavior is known as the **Temporal Dead Zone (TDZ)**.

### Example

```javascript
console.log(num);

let num = 10;
```

Output:

```text
ReferenceError
```

The variable exists, but JavaScript doesn't allow you to use it until execution reaches its declaration.

---

# Working with Imports, Exports, and Modules

As JavaScript applications grow, keeping everything in one file becomes difficult.

Modules solve this problem by allowing code to be split across multiple files.

---

# What Is a Module?

A **module** is a self-contained JavaScript file that contains related variables, functions, classes, or objects.

Modules help organize code and improve maintainability.

---

# Exports

To make code available outside a module, use the `export` keyword.

There are two types of exports.

## Named Export

```javascript
export function add(num1, num2) {
  return num1 + num2;
}
```

Named exports must be imported using the same name.

---

## Default Export

```javascript
export default function subtract(num1, num2) {
  return num1 - num2;
}
```

A module can have only **one default export**.

When importing it, you may choose any variable name.

---

# Imports

JavaScript provides several ways to import code.

---

## Named Import

```javascript
import { add } from "./math.js";
```

The imported name **must exactly match** the exported name.

---

## Default Import

```javascript
import subtractFunc from "./math.js";
```

Since it's a default export, the imported name can be anything.

---

## Namespace Import

```javascript
import * as Math from "./math.js";
```

This imports everything from the module into a single object.

---

# Complete Example

### `math.js`

```javascript
// Named export
export function add(num1, num2) {
  return num1 + num2;
}

// Default export
export default function subtract(num1, num2) {
  return num1 - num2;
}
```

### Another File

```javascript
import { add } from "./math.js";

import subtractFunc from "./math.js";

import * as Math from "./math.js";

console.log(add(5, 3)); // 8

console.log(subtractFunc(5, 3)); // 2

console.log(Math.add(5, 3)); // 8

console.log(Math.subtract(5, 3)); // 2
```

---

# Key Takeaways

- `var` allows variables to be redeclared.
- `var` is function-scoped, while `let` and `const` are block-scoped.
- Hoisting moves declarations to the top of their scope before execution.
- `var` variables are initialized as `undefined` during hoisting.
- Function declarations are fully hoisted.
- `let` and `const` exist in the **Temporal Dead Zone** until execution reaches their declaration.
- Modules organize JavaScript code into separate files.
- Use `export` to expose code and `import` to use it in another file.
- JavaScript supports named exports, default exports, and namespace imports.

---

## Summary

Understanding `var`, hoisting, and JavaScript modules is essential for writing modern JavaScript. While `var` and hoisting explain how JavaScript behaves during execution, modules provide a clean way to organize and share code across multiple files. Together, these concepts help developers build larger, more maintainable applications.
