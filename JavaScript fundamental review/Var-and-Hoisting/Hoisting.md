# What Is Hoisting?

**Hoisting** is a JavaScript behavior that often confuses beginners, but understanding it can help you avoid subtle bugs in your code.

In simple terms, **hoisting** is JavaScript's default behavior of **moving declarations to the top of their respective scopes during the compilation phase**, before the code is executed.

---

# How JavaScript Executes Code

To understand hoisting, it's important to know that JavaScript runs in **two phases**:

## 1. Compilation Phase
During this phase, the JavaScript engine:

- Scans your code.
- Creates memory for variables and functions.
- Hoists declarations.

This is where **hoisting** occurs.

## 2. Execution Phase
During this phase, JavaScript:

- Executes your code line by line.
- Assigns values to variables.
- Runs functions.

---

# Variable Hoisting (`var`)

When you declare a variable using the `var` keyword, JavaScript **hoists the declaration**, **not the initialization**.

This means you can reference a variable before it is declared, but its value will be `undefined` until the assignment is executed.

## Example

```javascript
console.log(x); // undefined

var x = 5;

console.log(x); // 5
```

### Why?

JavaScript internally treats the code like this:

```javascript
var x;

console.log(x); // undefined

x = 5;

console.log(x); // 5
```

### Key Point

- ✅ Declaration is hoisted.
- ❌ Assignment is **not** hoisted.

That's why `x` exists but contains `undefined`.

---

# Function Hoisting

Function declarations work differently.

When you declare a function using the `function` keyword, **both the function name and its body are hoisted**.

This means you can call the function before its declaration.

## Example

```javascript
sayHello();

function sayHello() {
  console.log("Hello, World!");
}
```

### Output

```text
Hello, World!
```

Because JavaScript hoists the **entire function**, it behaves like this:

```javascript
function sayHello() {
  console.log("Hello, World!");
}

sayHello();
```

---

# Hoisting with `let` and `const`

`let` and `const` are also hoisted, but they behave differently from `var`.

Unlike `var`, they **are not initialized immediately**.

Attempting to access them before their declaration results in a **ReferenceError**.

## Example

```javascript
console.log(y);

let y = 10;
```

### Output

```text
ReferenceError: Cannot access 'y' before initialization
```

---

# Temporal Dead Zone (TDZ)

The period between entering a scope and reaching a `let` or `const` declaration is called the **Temporal Dead Zone (TDZ)**.

During this period:

- The variable exists.
- It cannot be accessed.
- Accessing it throws a `ReferenceError`.

Example:

```javascript
{
  console.log(score); // ReferenceError

  let score = 100;
}
```

---

# Hoisting Summary

| Declaration | Hoisted | Initialized Immediately | Can Be Used Before Declaration |
|-------------|----------|--------------------------|--------------------------------|
| `var` | ✅ Yes | ✅ `undefined` | ✅ Yes |
| `let` | ✅ Yes | ❌ No | ❌ No |
| `const` | ✅ Yes | ❌ No | ❌ No |
| `function` | ✅ Entire function | ✅ Yes | ✅ Yes |

---

# Best Practices

Instead of relying on hoisting:

- Declare variables **before using them**.
- Prefer `let` and `const` over `var`.
- Define functions before calling them whenever possible.
- Avoid writing code that depends on hoisting, as it can make your code harder to read and maintain.

---

# Key Takeaways

- **Hoisting** happens during the **compilation phase**.
- Only **declarations** are hoisted—not assignments.
- `var` variables are initialized with `undefined`.
- Function declarations are fully hoisted.
- `let` and `const` are hoisted but remain in the **Temporal Dead Zone (TDZ)** until their declaration is reached.
- Writing code that doesn't rely on hoisting makes your JavaScript cleaner, more readable, and easier to maintain.
