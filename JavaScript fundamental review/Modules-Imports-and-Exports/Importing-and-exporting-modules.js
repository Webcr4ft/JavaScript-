# What Is a Module in JavaScript?

A **module** in JavaScript is a self-contained file that contains related functions, classes, variables, or constants.

Think of a module as a **building block** of your application. Just like a chapter in a book focuses on one topic, a module focuses on a specific piece of functionality.

Using modules makes your code:

- ✅ More organized
- ✅ Easier to maintain
- ✅ Reusable
- ✅ Less likely to have naming conflicts

---

# ES6 Modules

The modern JavaScript module system is called **ES6 Modules** (introduced in **ECMAScript 2015**).

It provides two keywords:

- `export` — Makes code available to other files.
- `import` — Brings exported code into another file.

---

# Exporting from a Module

Create a separate JavaScript file.

**`math.js`**

```javascript
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

const PI = 3.14159;

export { PI };
```

Here we're exporting:

- `add()`
- `subtract()`
- `PI`

A module can export **multiple values**.

---

# Importing Named Exports

To use the exported items in another file:

**`app.js`**

```javascript
import { add, subtract, PI } from "./math.js";

console.log(add(5, 3));        // 8
console.log(subtract(10, 4));  // 6
console.log(PI);               // 3.14159
```

The path:

```javascript
"./math.js"
```

tells JavaScript where to find the module.

Named imports **must** use curly braces (`{}`).

---

# Importing Everything

If you want every export from a module, use the `*` syntax.

```javascript
import * as Math from "./math.js";

console.log(Math.add(5, 3));        // 8
console.log(Math.subtract(10, 4));  // 6
console.log(Math.PI);               // 3.14159
```

Here:

- `*` means **everything**.
- `as Math` creates an object named `Math`.
- Every exported value becomes a property of that object.

---

# Default Exports

Sometimes a module mainly exports **one thing**.

In that case, use a **default export**.

**`math.js`**

```javascript
export default function multiply(a, b) {
  return a * b;
}
```

**`app.js`**

```javascript
import multiply from "./math.js";

console.log(multiply(4, 5)); // 20
```

Unlike named exports:

- No curly braces are needed.
- You can choose **any name** for the import.

For example:

```javascript
import myFunction from "./math.js";
```

---

# Named Export vs Default Export

| Named Export | Default Export |
|--------------|----------------|
| Uses `export` | Uses `export default` |
| Multiple per file | Only one per file |
| Imported with `{}` | Imported without `{}` |
| Name must match | Name can be anything |

Example:

```javascript
// Named export
export const name = "Eli";

// Default export
export default function greet() {}
```

Importing them:

```javascript
import greet, { name } from "./file.js";
```

---

# Using Modules in the Browser

When loading JavaScript modules in HTML, your `<script>` tag must have:

```html
<script type="module" src="app.js"></script>
```

Without `type="module"`, the browser will not recognize the `import` and `export` keywords.

---

# Why Use Modules?

Modules help you:

- Organize your code into smaller files.
- Reuse code across projects.
- Keep related functionality together.
- Avoid global variable conflicts.
- Make large applications easier to maintain.
- Improve code readability.

---

# Summary

- A **module** is a separate JavaScript file that contains related code.
- Use `export` to make functions, variables, classes, or constants available to other files.
- Use `import` to use exported code.
- Use `import * as name` to import everything.
- Use `export default` when a module mainly exports one value.
- Use `<script type="module">` when working with modules in the browser.

As your JavaScript applications grow, modules become one of the most important tools for writing clean, scalable, and maintainable code.
