# How Do You Manipulate Styles Using `Element.style` and `Element.classList`?

There are times when you need to change the appearance of an HTML element using JavaScript. For example, you might want to:
- Hide or show a navigation menu.
- Change the color of a paragraph.
- Highlight an important section.
- Switch between light mode and dark mode.

JavaScript provides two common ways to manipulate styles:
1. `Element.style`
2. `Element.classList`

---

# 1. `Element.style`

The `style` property lets you directly change an element's **inline CSS styles**.

## HTML

```html
<p id="para">This is a paragraph</p>

<script src="index.js"></script>
```

## JavaScript

```javascript
const paraEl = document.getElementById("para");

paraEl.style.color = "red";
```

### Result

The paragraph text changes to **red**.

---

# How It Works

```javascript
const paraEl = document.getElementById("para");
```

This stores the paragraph element in the variable `paraEl`.

Then:

```javascript
paraEl.style.color = "red";
```

changes the CSS `color` property directly on that element.

---

# Common Properties You Can Change

```javascript
element.style.color = "blue";
element.style.backgroundColor = "yellow";
element.style.fontSize = "24px";
element.style.fontWeight = "bold";
element.style.display = "none";
element.style.width = "300px";
element.style.height = "150px";
element.style.border = "2px solid black";
```

Notice that CSS properties with hyphens become **camelCase** in JavaScript.

| CSS | JavaScript |
|------|------------|
| `background-color` | `backgroundColor` |
| `font-size` | `fontSize` |
| `font-weight` | `fontWeight` |

---

# 2. `Element.classList`

Instead of changing styles one property at a time, you can add or remove CSS classes.

This is the preferred method because it keeps your CSS inside your stylesheet.

---

# Adding a Class

## HTML

```html
<link rel="stylesheet" href="styles.css">

<p id="para">This is a paragraph</p>

<script src="index.js"></script>
```

## CSS

```css
.highlight {
    background-color: yellow;
}
```

## JavaScript

```javascript
const paraEl = document.getElementById("para");

paraEl.classList.add("highlight");
```

### Result

The paragraph receives the `highlight` class, making its background yellow.

---

# Adding Multiple Classes

You can add several classes at once.

```javascript
element.classList.add("class1", "class2", "class3");
```

---

# Removing a Class

To remove a class:

```javascript
element.classList.remove("highlight");
```

The element will lose all the styles provided by that class.

---

# Toggling a Class

The `toggle()` method adds a class if it doesn't exist and removes it if it does.

This is commonly used for menus, dark mode, dropdowns, and popups.

---

# Example: Show and Hide a Menu

## HTML

```html
<link rel="stylesheet" href="styles.css">

<button id="toggle-btn">
    Toggle Menu
</button>

<nav id="menu" class="menu">
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Products</li>
    </ul>
</nav>

<script src="index.js"></script>
```

---

## CSS

```css
.menu {
    display: none;
    background-color: lightgray;
    width: 50%;
    padding: 10px;
}

.menu.show {
    display: block;
}
```

---

## JavaScript

```javascript
const menu = document.getElementById("menu");
const toggleBtn = document.getElementById("toggle-btn");

toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("show");
});
```

---

# How It Works

When the button is clicked:

- If the menu **does not** have the `show` class, `toggle()` adds it.
- The CSS changes `display` from `none` to `block`, making the menu visible.
- If the button is clicked again, `toggle()` removes the `show` class.
- The menu becomes hidden again.

---

# `Element.style` vs `Element.classList`

| `Element.style` | `Element.classList` |
|-----------------|---------------------|
| Changes inline CSS directly. | Adds or removes CSS classes. |
| Best for changing one or two styles quickly. | Best for applying multiple styles at once. |
| Can make JavaScript longer if many styles are changed. | Keeps styling organized inside the CSS file. |
| Example: `element.style.color = "red";` | Example: `element.classList.add("active");` |

---

# Summary

- Use **`element.style`** to directly change an element's inline CSS.
- Use **`classList.add()`** to add a class.
- Use **`classList.remove()`** to remove a class.
- Use **`classList.toggle()`** to switch a class on and off.
- `classList` is generally the better approach for larger projects because it keeps styling in CSS and makes your JavaScript cleaner and easier to maintain.
