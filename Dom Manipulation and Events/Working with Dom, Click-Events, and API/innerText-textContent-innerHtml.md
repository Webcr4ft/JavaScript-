# `innerText` vs `textContent` vs `innerHTML`

## Overview

When working with the DOM, you'll often need to read or update the content of HTML elements.

JavaScript provides three commonly used properties for this:

- `innerText`
- `textContent`
- `innerHTML`

Although they appear similar, each behaves differently and is designed for different use cases. Understanding these differences will help you write safer, faster, and more reliable code.

---

# `innerText`

## What is `innerText`?

`innerText` returns the **visible text** inside an element.

It only includes text that is currently rendered on the page, ignoring HTML tags and hidden content.

### Example HTML

```html
<div id="container">
  <p>Hello, World!</p>
  <p>I'm learning JavaScript</p>
</div>
```

---

## Accessing `innerText`

```javascript
const container = document.getElementById("container");

console.log(container.innerText);
```

### Output

```text
Hello, World!
I'm learning JavaScript
```

The property combines the visible text from the selected element and all of its child elements.

---

# Hidden Elements

Unlike other properties, `innerText` respects visibility.

If an element is hidden, its text is ignored.

### HTML

```html
<div id="container">
  <p>Hello, World!</p>
  <p hidden>I'm learning JavaScript</p>
</div>
```

### JavaScript

```javascript
const container = document.getElementById("container");

console.log(container.innerText);
```

### Output

```text
Hello, World!
```

The hidden paragraph is not included because it isn't visible on the webpage.

---

# Updating `innerText`

You can also replace an element's visible text.

```javascript
const container = document.getElementById("container");

container.innerText = "JavaScript is awesome!";
```

The previous content is replaced with the new text.

Line breaks in the string are converted into `<br>` elements when displayed.

---

# Performance Note

Reading `innerText` causes the browser to calculate what is currently visible on the page.

This process is known as **reflow**.

Because reflow requires extra work from the browser, repeatedly using `innerText` can reduce performance in large applications.

---

# `textContent`

## What is `textContent`?

`textContent` returns **all text** contained inside an element.

Unlike `innerText`, it ignores visibility and simply returns every text node.

### Example HTML

```html
<div id="container">
  <p>Hello, World!</p>
  <p>I'm learning JavaScript</p>
</div>
```

### JavaScript

```javascript
const container = document.getElementById("container");

console.log(container.textContent);
```

### Output

```text
Hello, World!
I'm learning JavaScript
```

The returned string contains the text from the element and all of its descendants.

---

# Hidden Content

Even hidden elements are included.

### HTML

```html
<div id="container">
  <p>Hello, World!</p>
  <p hidden>I'm learning JavaScript</p>
</div>
```

### JavaScript

```javascript
const container = document.getElementById("container");

console.log(container.textContent);
```

### Output

```text
Hello, World!
I'm learning JavaScript
```

Unlike `innerText`, the hidden paragraph is still part of the returned text.

---

# Includes Script and Style Content

`textContent` also returns text contained inside elements such as:

- `<script>`
- `<style>`

It simply retrieves text without considering how it is displayed.

---

# Updating `textContent`

Assigning a new value replaces everything inside the selected element.

```javascript
const container = document.getElementById("container");

container.textContent = "New content";
```

All child elements are removed and replaced with a single text node.

---

# `innerHTML`

## What is `innerHTML`?

`innerHTML` works differently from both `innerText` and `textContent`.

Instead of returning plain text, it returns the HTML markup inside an element.

It can also insert new HTML into the DOM.

### Example

```javascript
container.innerHTML =
  "<h2>Welcome</h2><p>Learning JavaScript</p>";
```

The browser parses the HTML string and creates the corresponding DOM elements.

---

# Security Warning

Only use `innerHTML` with trusted content.

Avoid inserting HTML provided by users.

Unsafe example:

```javascript
container.innerHTML = userInput;
```

If `userInput` contains malicious HTML or JavaScript, it can introduce serious security vulnerabilities.

When inserting plain text, use:

```javascript
container.textContent = userInput;
```

This displays the text exactly as written without interpreting it as HTML.

---

# Comparison Table

| Property | Returns | Includes Hidden Text | Supports HTML | Typical Use |
|----------|----------|----------------------|---------------|-------------|
| `innerText` | Visible text only | No | No | Reading or updating visible text |
| `textContent` | All text | Yes | No | Reading or inserting plain text safely |
| `innerHTML` | HTML markup | N/A | Yes | Reading or inserting HTML |

---

# When Should You Use Each?

### Use `innerText` when:

- Working with visible text.
- Ignoring hidden elements.
- Matching what users currently see.

---

### Use `textContent` when:

- Reading all text.
- Inserting plain text safely.
- Working with user-generated content.
- Improving performance by avoiding reflow.

---

### Use `innerHTML` when:

- Creating HTML dynamically.
- Inserting multiple elements at once.
- Replacing an element's HTML structure.

Only use it when the HTML is trusted.

---

# Key Differences

| `innerText` | `textContent` | `innerHTML` |
|--------------|---------------|-------------|
| Returns visible text | Returns all text | Returns HTML markup |
| Ignores hidden elements | Includes hidden elements | Includes HTML tags |
| Triggers browser reflow | Faster to access | Parses HTML strings |
| Safe for text | Safe for text | Can introduce security risks if used with untrusted input |

---

# Key Takeaways

- `innerText` returns only visible text.
- `textContent` returns every text node, including hidden content.
- `innerHTML` returns and inserts HTML markup.
- `textContent` is generally the safest choice for inserting plain text.
- `innerHTML` should only be used with trusted HTML to avoid security vulnerabilities.
- Choosing the correct property improves both performance and security when manipulating the DOM.
