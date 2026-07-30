# JavaScript Repository

---

# How Does `try...catch...finally` Work?

In the previous lesson, you learned how to throw exceptions using the `throw` statement.

In this lesson, you'll learn how to **gracefully handle** those exceptions using a `try...catch...finally` block.

The three parts are:

* `try`
* `catch`
* `finally`

---

# The `try` Block

The `try` block contains code that **might throw an error**.

It acts as a safe place where JavaScript attempts to execute code.

## Syntax

```javascript
try {
  // Code that might throw an error
}
```

### Key Points

* Wrap risky code inside a `try` block.
* If no error occurs, JavaScript finishes executing the `try` block normally.
* If an error occurs, execution immediately stops inside the `try` block and moves to the `catch` block.

---

# The `catch` Block

The `catch` block handles errors that occur inside the `try` block.

It receives an `Error` object that contains information about the error.

## Syntax

```javascript
catch (error) {
  // Handle the error
}
```

### The `error` Object

The object passed into `catch` contains useful information such as:

* `error.message` – A human-readable description of the error.
* `error.name` – The type of error (for example, `TypeError`).
* `error.stack` – The stack trace showing where the error occurred.

---

# Example: Using `try...catch`

```javascript
function processInput(input) {
  if (typeof input !== "string") {
    throw new TypeError("Input must be a string.");
  }

  return input.toUpperCase();
}

try {
  console.log("Starting to process input...");

  const result = processInput(9);

  console.log("Processed result:", result);
} catch (error) {
  console.error("Error occurred:", error.message);
}
```

---

# Step-by-Step Explanation

### Step 1: Create the Function

```javascript
function processInput(input) {
```

The function accepts one parameter named `input`.

---

### Step 2: Check the Data Type

```javascript
if (typeof input !== "string") {
```

The function checks whether the input is **not** a string.

---

### Step 3: Throw an Error

```javascript
throw new TypeError("Input must be a string.");
```

If the input is not a string, JavaScript throws a `TypeError`.

The function stops executing immediately.

---

### Step 4: Return the Result

```javascript
return input.toUpperCase();
```

If the input is valid, it is converted to uppercase.

---

### Step 5: Execute the Function

```javascript
try {
```

The function call is placed inside a `try` block because it may throw an error.

---

### Step 6: Call the Function

```javascript
const result = processInput(9);
```

The value `9` is a number, not a string.

This causes the function to throw a `TypeError`.

---

### Step 7: Handle the Error

```javascript
catch (error) {
  console.error("Error occurred:", error.message);
}
```

Instead of crashing the program, the error is caught.

The message displayed is:

```text
Error occurred: Input must be a string.
```

---

# Why Use `console.error()`?

Instead of using:

```javascript
console.log()
```

JavaScript provides:

```javascript
console.error()
```

### Benefits

* Designed specifically for logging errors.
* Many browsers display error messages in **red**.
* Makes debugging easier because errors stand out.

---

# The `finally` Block

The `finally` block always executes.

It runs whether:

* An error occurs.
* No error occurs.
* The error is caught.
* The error is not caught.

## Syntax

```javascript
try {
  // Code that might throw an error
} catch (error) {
  // Handle the error
} finally {
  // Always runs
}
```

---

# When Does `finally` Run?

| Situation | Does `finally` Run? |
|-----------|---------------------|
| No error occurs | Yes |
| Error occurs | Yes |
| Error is caught | Yes |
| Error is not caught | Yes (before the error continues to propagate) |

---

# Practical Use Case

A common use for `finally` is **resource cleanup**.

For example:

* Opening a file.
* Connecting to a database.
* Opening a network connection.

Even if an error occurs, you should always close the resource.

Example workflow:

```javascript
try {
  // Open a file

  // Read or write data
} catch (error) {
  // Handle any errors
} finally {
  // Close the file
}
```

This ensures that the file is always closed, preventing resource leaks.

---

# Summary

| Block | Purpose |
|-------|---------|
| `try` | Contains code that may throw an error. |
| `catch` | Handles errors thrown in the `try` block. |
| `finally` | Always runs after `try` and `catch`, whether an error occurs or not. |

---

# Key Takeaways

* Use `try` to wrap code that might fail.
* Use `catch` to handle errors gracefully.
* The `catch` block receives an `Error` object.
* Use `error.message` to display a readable error message.
* Use `console.error()` when logging errors.
* The `finally` block always executes.
* `finally` is commonly used for cleanup tasks such as closing files, database connections, or other resources.
* Using `try...catch...finally` makes your programs more reliable and prevents unexpected crashes.
