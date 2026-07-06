# How to Create New DOM Nodes with `innerHTML` and `createElement()`

One of the most powerful features of JavaScript is the ability to create HTML elements dynamically. Instead of writing every element directly in your HTML file, you can generate them with JavaScript whenever they're needed.

There are two common ways to create new DOM nodes:

1. `innerHTML`
2. `createElement()`

---

# Creating Elements with `innerHTML`

The `innerHTML` property belongs to DOM elements and allows you to set or replace the HTML inside an existing element.

Instead of creating each element one by one, you write the HTML as a string, and the browser converts it into real DOM nodes.

## HTML

```html
<div id="container">
  <!-- New elements will be added here -->
</div>
```

## JavaScript

First, select the element.

```javascript
const container = document.getElementById("container");
```

Then assign HTML to its `innerHTML` property.

```javascript
container.innerHTML = "<ul><li>Cheese</li><li>Tomato</li></ul>";
```

You can also write the HTML string across multiple lines to improve readability.

```javascript
container.innerHTML = `
  <ul>
    <li>Cheese</li>
    <li>Tomato</li>
  </ul>
`;
```

---

# Resulting HTML

After JavaScript runs, the browser creates the following DOM structure automatically.

```html
<div id="container">
  <ul>
    <li>Cheese</li>
    <li>Tomato</li>
  </ul>
</div>
```

The HTML string is parsed and converted into actual DOM elements.

---

# Advantages of `innerHTML`

- Quick and simple
- Great for inserting multiple elements at once
- Easy to write complex HTML structures
- Reduces the amount of JavaScript needed

---

# Security Warning

Although `innerHTML` is convenient, it should be used carefully.

If the HTML string comes from user input, someone could inject malicious code into your webpage.

**Unsafe Example**

```javascript
container.innerHTML = userInput;
```

If `userInput` contains harmful HTML or JavaScript, it could become a security vulnerability.

Whenever you're inserting plain text, use `textContent` instead.

```javascript
element.textContent = userInput;
```

`textContent` treats everything as plain text rather than HTML, making it much safer.

---

# Creating Elements with `createElement()`

Another way to create DOM nodes is with the `createElement()` method.

Instead of writing HTML as a string, you create each element individually.

## Syntax

```javascript
document.createElement("tagName");
```

For example, to create an image element:

```javascript
document.createElement("img");
```

Most developers store the newly created element in a variable.

```javascript
const img = document.createElement("img");
```

---

# What Does `createElement()` Return?

- Returns an `HTMLElement` object when working with HTML documents.
- Otherwise, it returns a generic `Element` object.

---

# Example: Creating and Adding an Image

## HTML

```html
<div id="container"></div>
```

## JavaScript

```javascript
const container = document.getElementById("container");

const img = document.createElement("img");

img.src =
  "https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg";

img.alt = "A slice of lasagna on a plate.";

container.appendChild(img);
```

---

# Result

After the code runs, the browser creates this HTML.

```html
<div id="container">
  <img
    src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg"
    alt="A slice of lasagna on a plate."
  />
</div>
```

The image wasn't written directly into the HTML file—it was created entirely with JavaScript.

---

# The `appendChild()` Method

Creating an element doesn't automatically display it on the webpage.

You must insert it into the DOM.

One common way is with `appendChild()`.

```javascript
parentElement.appendChild(childElement);
```

Example:

```javascript
container.appendChild(img);
```

This places the image as the last child inside the container.

---

# `innerHTML` vs `createElement()`

| `innerHTML` | `createElement()` |
|-------------|-------------------|
| Creates elements from an HTML string | Creates one element at a time |
| Faster for inserting large blocks of HTML | Better when building elements dynamically |
| Easier for static markup | Easier to modify individual elements |
| Can introduce security risks if used with user input | Safer because properties are assigned directly |
| Best for predefined HTML | Best for interactive applications |

---

# Best Practices

- Use `innerHTML` when inserting trusted, predefined HTML.
- Avoid using `innerHTML` with user-generated content.
- Use `textContent` when displaying plain text.
- Use `createElement()` when creating interactive or dynamic elements.
- Use `appendChild()` (or similar methods) to insert newly created elements into the DOM.

---

# Key Takeaways

- `innerHTML` creates DOM nodes by parsing an HTML string.
- `createElement()` creates individual DOM elements programmatically.
- `appendChild()` inserts new elements into the document.
- `textContent` is safer than `innerHTML` when handling user input.
- Both techniques are essential for building dynamic and interactive web applications.
