# Debugging JavaScript Review

## Common Types of Error Messages

### *SyntaxError*

* **Definition:** A 'SyntaxError' occurs when JavaScript cannot understand your code because it breaks the language's syntax rules. It is similar to making a grammar mistake in a sentence.

* **Example**

```javascript
const arr = ["Beau", "Quincy" "Tom"];
```

* **Why it happens:** A comma is missing between `"Quincy"` and `"Tom"`.

* **Correct Code**

```javascript
const arr = ["Beau", "Quincy", "Tom"];
```

* **Common Causes**
  * Missing parentheses `()`
  * Missing brackets `[]`
  * Missing braces `{}`
  * Missing commas
  * Missing quotation marks

---

### *ReferenceError*

* **Definition:** A 'ReferenceError' occurs when JavaScript tries to access a variable or function that does not exist or cannot be accessed yet.

* **Example**

```javascript
console.log(num);

const num = 50;
```

* **Why it happens:** `num` is accessed before it has been initialized.

* **Correct Code**

```javascript
const num = 50;

console.log(num);
```

* **Common Causes**
  * Using an undefined variable.
  * Accessing a `let` or `const` variable before its declaration.
  * Misspelling a variable name.

---

### *TypeError*

* **Definition:** A 'TypeError' occurs when you perform an operation on a value that does not support it.

* **Example**

```javascript
const developerObj = {
  name: "Jessica",
  country: "USA",
  isEmployed: true
};

developerObj.map();
```

* **Why it happens:** `.map()` only works on arrays, not objects.

* **Correct Code**

```javascript
const developers = ["Jessica", "Tom"];

developers.map(name => name.toUpperCase());
```

* **Common Causes**
  * Calling array methods on objects.
  * Calling a value that is not a function.
  * Accessing properties of `null` or `undefined`.

---

### *RangeError*

* **Definition:** A 'RangeError' occurs when a value is outside the range that JavaScript allows.

* **Example**

```javascript
const arr = [];

arr.length = -1;
```

* **Why it happens:** Array length cannot be negative.

* **Correct Code**

```javascript
const arr = [];

arr.length = 5;
```

* **Common Causes**
  * Setting an invalid array length.
  * Passing an invalid value to built-in JavaScript methods.

---

## The `throw` Statement

### *Definition*

* The `throw` statement allows you to create and throw your own custom exceptions.
* An exception is an unexpected event that interrupts the normal flow of a program.
* You can throw built-in error types such as `TypeError`, `RangeError`, or create your own error.

### *Syntax*

```javascript
throw expression;
```

### *Example*

```javascript
function validateNumber(input) {
  if (typeof input !== "number") {
    throw new TypeError(
      "Expected a number, but received " + typeof input
    );
  }

  return input * 2;
}

console.log(validateNumber("Naomi"));
```

### *Output*

```text
TypeError: Expected a number, but received string
```

### *When to Use*

* Validate function inputs.
* Stop execution when invalid data is detected.
* Create meaningful error messages.

---

## `try...catch...finally`

### *Definition*

* `try` contains code that may produce an error.
* `catch` handles the error if one occurs.
* `finally` always runs whether an error occurs or not.

### *Syntax*

```javascript
try {
  // code
} catch (error) {
  // handle error
} finally {
  // always runs
}
```

### *Example*

```javascript
function processInput(input) {
  if (typeof input !== "string") {
    throw new TypeError("Input must be a string.");
  }

  return input.toUpperCase();
}

try {
  console.log("Starting to process input...");

  const result1 = processInput("hello");
  console.log("Processed result:", result1);

  const result2 = processInput(9);
  console.log("Processed result:", result2);

} catch (error) {
  console.error("Error occurred:", error.message);
} finally {
  console.log("Program finished.");
}
```

### *Why Use It?*

* Prevents your application from crashing.
* Allows graceful error handling.
* Executes cleanup code inside `finally`.

---

## Debugging Techniques

### *The `debugger` Statement*

* The `debugger` statement pauses program execution at a specific line when Developer Tools are open.

* **Example**

```javascript
let firstNumber = 5;
let secondNumber = 10;

debugger;

let sum = firstNumber + secondNumber;

console.log(sum);
```

* **Use Cases**
  * Inspect variables.
  * Execute code line by line.
  * Find logic errors.

---

### *Breakpoints*

* Breakpoints pause code execution at selected lines.
* They allow you to inspect variables, examine the call stack, and evaluate expressions.

---

### *Watch Expressions*

* Watch expressions monitor variables or expressions while your program runs.
* They automatically update whenever values change.

---

### *Profiling*

* Profiling helps identify performance bottlenecks.
* It records:
  * CPU usage
  * Function calls
  * Execution time
  * Memory usage

---

### *`console.dir()`*

* Displays an interactive list of an object's properties.

* **Example**

```javascript
console.dir(document);
```

* **Use Cases**
  * Inspect DOM elements.
  * Explore object properties.
  * View nested objects.

---

### *`console.table()`*

* Displays arrays or objects as a table inside the console.

* **Example**

```javascript
const users = [
  { name: "Jessica", age: 25 },
  { name: "Tom", age: 30 }
];

console.table(users);
```

* **Output**

```
┌─────────┬───────────┬─────┐
│ (index) │   name    │ age │
├─────────┼───────────┼─────┤
│    0    │ Jessica   │ 25  │
│    1    │ Tom       │ 30  │
└─────────┴───────────┴─────┘
```

* **Benefits**
  * Easier to read than `console.log()`.
  * Useful for arrays of objects.
  * Helps compare data quickly.

---

# Summary

* JavaScript has several common error types:
  * SyntaxError
  * ReferenceError
  * TypeError
  * RangeError

* Use the `throw` statement to create custom exceptions.

* Use `try...catch...finally` to safely handle errors.

* Debugging tools include:
  * `debugger`
  * Breakpoints
  * Watch Expressions
  * Profiling
  * `console.dir()`
  * `console.table()`

* Learning these debugging techniques will make it much easier to find bugs, understand your code, and build reliable JavaScript applications.
