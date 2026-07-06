# How Do You Manipulate Styles Using `Element.style` and `Element.classList`?

There will be times when you need to change the appearance of an HTML element using JavaScript. A common example is showing or hiding a navigation menu when a user clicks a button.

JavaScript provides two common ways to manipulate styles:

- `Element.style`
- `Element.classList`

---

# Using `Element.style`

The `Element.style` property represents the **inline styles** of an HTML element.

Although the `style` property itself is read-only, you can modify individual CSS properties through it.

## Syntax

```javascript
element.style.property = "value";
```

---

## Example HTML

```html
<p id="para">This is a paragraph</p>

<script src="index.js"></script>
```

---

## JavaScript

```javascript
const paraEl = document.getElementById("para");

paraEl.style.color = "red";
```

The paragraph text will now appear in **red**.

---

## Common CSS Properties You Can Change

Using `style`, you can modify many CSS properties, including:

- `color`
- `backgroundColor`
- `fontSize`
- `fontWeight`
- `display`
- `width`
- `height`
- `margin`
- `padding`

> **Note:** CSS properties written with hyphens become **camelCase** in JavaScript.

Examples:

| CSS | JavaScript |
|------|------------|
| `background-color` | `backgroundColor` |
| `font-size` | `fontSize` |
| `font-weight` | `fontWeight` |

Example:

```javascript
paraEl.style.backgroundColor = "yellow";
paraEl.style.fontSize = "20px";
paraEl.style.fontWeight = "bold";
```

---

#
