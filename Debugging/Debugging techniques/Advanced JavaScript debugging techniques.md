# JavaScript Repository

---

# What Are Some Examples of Using Advanced JavaScript Debugging Techniques?

As your JavaScript programs become larger and more complex, using only `console.log()` is often not enough to find bugs.

Modern browsers provide powerful debugging tools that allow you to:

* Pause code execution.
* Inspect variables.
* Monitor expressions.
* Analyze performance.
* Debug network requests.
* Display data in better formats.

Learning these tools will help you find and fix bugs much faster.

---

# 1. Breakpoints

A **breakpoint** is a marker that tells JavaScript to **pause execution** at a specific line of code.

Once execution pauses, you can:

* Inspect variables.
* Evaluate expressions.
* Check the call stack.
* Step through your code line by line.

---

## Why Use Breakpoints?

Instead of adding many `console.log()` statements, you can stop your program exactly where you want and inspect everything at that moment.

---

## How to Add a Breakpoint in Chrome

1. Open **Developer Tools** (`F12` or `Ctrl + Shift + I`).
2. Click the **Sources** tab.
3. Open the JavaScript file you want to debug.
4. Click the **line number** where you want execution to pause.

A blue marker appears, indicating that a breakpoint has been added.

---

## What Happens?

When JavaScript reaches that line:

* Execution pauses.
* The current variables become visible.
* You can inspect the state of your application.
* You can continue execution whenever you're ready.

---

## Stepping Through Code

After the program pauses, Chrome provides buttons that allow you to:

* **Resume** execution.
* **Step Over** the current line.
* **Step Into** a function.
* **Step Out** of the current function.

These controls help you understand exactly how JavaScript executes your code.

---

# Conditional Breakpoints

Sometimes you only want execution to pause when a certain condition is true.

Instead of stopping every time the line executes, you can create a **conditional breakpoint**.

## How to Create One

1. Right-click a line number.
2. Select:

```
Add conditional breakpoint...
```

3. Enter a condition.

Example:

```javascript
count === 10
```

Now JavaScript pauses **only when** `count` equals `10`.

---

# 2. Watch Expressions

A **Watch Expression** lets you continuously monitor the value of a variable or expression while your code runs.

This is useful because you don't need to repeatedly search for a variable.

---

## How to Add a Watch Expression

1. Open **Developer Tools**.
2. Go to the **Sources** tab.
3. Locate the **Watch** panel.
4. Click the **+** button.
5. Enter a variable or expression.

Example:

```javascript
totalPrice
```

or

```javascript
price * quantity
```

As execution pauses, Chrome automatically updates the value.

---

## Benefits

* Monitor variables in real time.
* Watch expressions change as code executes.
* Track values without adding `console.log()` statements.

---

# 3. Profiling

Sometimes your program works correctly but feels **slow**.

Profiling helps identify **performance bottlenecks**.

A bottleneck is the part of your code that uses the most time or resources.

---

## What Profiling Can Show

* CPU usage
* Function execution time
* Memory usage
* Rendering performance
* Call frequency

---

## How to Profile Code

1. Open **Developer Tools**.
2. Go to the **Performance** tab.
3. Click **Record**.
4. Perform the action you want to test.
5. Click **Stop**.

Chrome generates a report showing how your application performed.

---

## Example Use Case

Suppose your webpage freezes whenever you click a button.

The Performance tab can help identify:

* Which function is taking too long.
* Which function is consuming excessive CPU time.
* Where performance improvements are needed.

---

# 4. Inspecting Network Requests

Many websites communicate with servers using APIs.

If an API request fails, your application may stop working correctly.

The **Network** tab helps you inspect those requests.

---

## You Can Check

* Request URL
* Request headers
* Response headers
* Request payload
* Response data
* Status codes

---

## Common Problems You Can Find

* Incorrect API URL
* Missing parameters
* Authentication errors
* Server errors
* Slow responses

---

## How to Use the Network Tab

1. Open **Developer Tools**.
2. Select the **Network** tab.
3. Reload the page or perform the action.
4. Click any request to inspect its details.

---

# 5. `console.table()`

`console.table()` displays arrays and objects in a **table format**.

This makes data much easier to read.

---

## Syntax

```javascript
console.table(data);
```

---

## Example

```javascript
const users = [
  {
    name: "Alice",
    age: 25
  },
  {
    name: "Bob",
    age: 30
  }
];

console.table(users);
```

Instead of a long object list, Chrome displays a neat table with rows and columns.

---

## Benefits

* Easier to compare data.
* Better than `console.log()` for arrays.
* Useful when working with objects.

---

# 6. `console.dir()`

`console.dir()` displays a JavaScript object as an **interactive tree**.

You can expand and collapse properties to inspect nested objects.

---

## Syntax

```javascript
console.dir(object);
```

---

## Example

```javascript
const person = {
  name: "John",
  address: {
    city: "New York",
    country: "USA"
  }
};

console.dir(person);
```

Chrome displays every property in an expandable list.

---

## Benefits

* Explore object properties.
* View nested objects.
* Better for inspecting complex objects than `console.log()`.

---

# `console.log()` vs `console.table()` vs `console.dir()`

| Method | Best Used For |
|---------|---------------|
| `console.log()` | General debugging and printing values |
| `console.table()` | Displaying arrays and objects as tables |
| `console.dir()` | Inspecting object properties in a hierarchical view |

---

# Summary

| Debugging Tool | Purpose |
|----------------|---------|
| Breakpoints | Pause execution at a chosen line |
| Conditional Breakpoints | Pause only when a condition is true |
| Watch Expressions | Monitor variables while debugging |
| Profiling | Find performance bottlenecks |
| Network Tab | Inspect API requests and responses |
| `console.table()` | Display data in table format |
| `console.dir()` | Display an expandable object tree |

---

# Key Takeaways

* `console.log()` is useful, but advanced debugging tools are much more powerful.
* Breakpoints allow you to pause execution exactly where you want.
* Watch Expressions automatically track variable values.
* Profiling helps locate slow or resource-heavy code.
* The Network tab is essential when debugging APIs.
* `console.table()` makes arrays and objects easier to read.
* `console.dir()` provides a detailed view of JavaScript objects.
* Mastering these debugging techniques will help you write cleaner, faster, and more reliable JavaScript code.
