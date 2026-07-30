# JavaScript Repository

---

# How Does the `throw` Statement Work?

The `throw` statement in JavaScript is used to throw a **user-defined exception**.

An **exception** is an unexpected event that interrupts the normal execution of a program.

As a JavaScript developer, it is important to handle exceptions properly so that your programs do not crash unexpectedly when an error occurs.

---

# Basic Syntax

```javascript
throw expression;
```

## Explanation

* `throw` is the keyword used to raise an exception.
* `expression` is the value or object representing the exception.
* The expression can be:
  * An `Error`
  * A `TypeError`
  * A `RangeError`
  * Any other value or custom object

---

# Example 1: Throwing a `TypeError`

```javascript
function validateNumber(input) {
  if (typeof input !== "number") {
    throw new TypeError("Expected a number, but received " + typeof input);
  }

  return input * 2;
}
```

## How It Works

* The function receives a parameter named `input`.
* It checks whether `input` is **not** a number.

```javascript
typeof input !== "number"
```

* If the condition is `true`, the function throws a `TypeError`.

```javascript
throw new TypeError("Expected a number, but received " + typeof input);
```

* The error message includes the actual type that was received.
* If the input is a number, the function returns the result of multiplying it by `2`.

```javascript
return input * 2;
```

---

# Example 2: Throwing a Generic `Error`

Sometimes you don't need a specific error type like `TypeError`.

You can throw a general error using the `Error` constructor.

```javascript
function divide(numerator, denominator) {
  if (denominator === 0) {
    throw new Error("Cannot divide by zero");
  }

  return numerator / denominator;
}
```

## How It Works

* The function accepts two parameters:
  * `numerator`
  * `denominator`

* Before performing the division, it checks if the denominator is `0`.

```javascript
if (denominator === 0)
```

* If it is `0`, JavaScript throws a new error.

```javascript
throw new Error("Cannot divide by zero");
```

* If the denominator is not `0`, the division proceeds normally.

```javascript
return numerator / denominator;
```

---

# Why Use the `throw` Statement?

The `throw` statement allows you to:

* Stop a function when invalid data is detected.
* Create your own custom error messages.
* Prevent incorrect program behavior.
* Make debugging easier.
* Inform other developers exactly what went wrong.

---

# Common Error Types Used with `throw`

| Error Type | Purpose |
|------------|---------|
| `Error` | General-purpose error |
| `TypeError` | Wrong data type |
| `ReferenceError` | Variable not found |
| `RangeError` | Value outside the allowed range |
| `SyntaxError` | Invalid JavaScript syntax |

---

# Key Takeaways

* Use the `throw` statement to create your own exceptions.
* The syntax is:

```javascript
throw expression;
```

* The expression is usually an `Error` object.
* `TypeError` is useful when a value has the wrong data type.
* `Error` is useful for general-purpose custom errors.
* Throwing errors helps prevent invalid program behavior.
* In the next step, `throw` is commonly used together with `try...catch` to handle exceptions gracefully.
