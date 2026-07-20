# JavaScript Repository: Making Dynamic and Interactive Content Accessible

## Why Is This Important?

When you first learned about **HTML accessibility**, you used:

- **Semantic HTML** (`<button>`, `<nav>`, `<main>`, etc.)
- **ARIA attributes** (`aria-label`, `aria-hidden`, `aria-expanded`, etc.)

These work perfectly for **static pages**.

But most modern websites use **JavaScript** to change content after the page has already loaded.

For example:

- Opening and closing menus
- Showing popups
- Expanding accordions
- Displaying notifications
- Switching tabs

If JavaScript changes what users see **without updating accessibility information**, screen readers may still think nothing has changed.

This can confuse users who rely on assistive technologies.

---

# The Problem

Imagine clicking a button that opens a menu.

A sighted user sees:

Menu ▼

- Home
- About
- Contact

But if JavaScript only makes the menu visible and doesn't update the ARIA attributes, a screen reader might still announce:

> "Menu collapsed."

Even though the menu is clearly open.

This creates a mismatch between:

- What users see
- What assistive technologies understand

That is why JavaScript should update **both**:

- The visual appearance
- The accessibility information

---

# Example HTML

```html
<button
  id="menuButton"
  aria-expanded="false"
  aria-controls="menuList">
  Menu
</button>

<ul id="menuList" hidden>
  <li>List item 1</li>
  <li>List item 2</li>
</ul>

<script src="index.js"></script>
```

---

# Breaking Down the HTML

## The Button

```html
<button id="menuButton">
```

The button has an ID.

```html
id="menuButton"
```

This lets JavaScript find it later.

Example:

```javascript
document.getElementById("menuButton")
```

---

## `aria-expanded`

```html
aria-expanded="false"
```

This tells screen readers whether something is currently expanded.

Possible values are:

```text
true
```

Meaning:

> The menu is open.

or

```text
false
```

Meaning:

> The menu is closed.

Initially it is:

```html
aria-expanded="false"
```

because the menu starts closed.

---

## `aria-controls`

```html
aria-controls="menuList"
```

This tells assistive technologies:

> "This button controls the element whose ID is `menuList`."

It creates a relationship between:

Button

↓

Menu

---

## The Menu

```html
<ul id="menuList" hidden>
```

This is simply an unordered list.

It has

```html
id="menuList"
```

so the button can reference it.

---

## `hidden`

Notice:

```html
hidden
```

This means:

> Don't display this element.

The menu starts invisible.

---

# JavaScript

```javascript
const button = document.getElementById("menuButton");
const menu = document.getElementById("menuList");

button.addEventListener("click", () => {
  const expanded =
    button.getAttribute("aria-expanded") === "true";

  button.setAttribute(
    "aria-expanded",
    String(!expanded)
  );

  menu.hidden = expanded;
});
```

---

# Line-by-Line Explanation

## Finding the Button

```javascript
const button =
document.getElementById("menuButton");
```

JavaScript searches the HTML for:

```html
id="menuButton"
```

and stores it inside

```javascript
button
```

---

## Finding the Menu

```javascript
const menu =
document.getElementById("menuList");
```

Now JavaScript finds:

```html
<ul id="menuList">
```

and stores it inside

```javascript
menu
```

---

# Listening for Clicks

```javascript
button.addEventListener("click", () => {
```

This means:

> "Whenever the button is clicked, run this code."

Nothing happens until the user clicks.

---

# Reading `aria-expanded`

```javascript
const expanded =
button.getAttribute("aria-expanded") === "true";
```

This reads:

```html
aria-expanded="false"
```

or

```html
aria-expanded="true"
```

using

```javascript
getAttribute()
```

Example:

Current HTML

```html
aria-expanded="false"
```

returns

```javascript
"false"
```

Notice it's a **string**, not a Boolean.

So JavaScript compares it:

```javascript
=== "true"
```

If it equals `"true"`:

```javascript
expanded = true;
```

Otherwise:

```javascript
expanded = false;
```

---

# Why Compare With `"true"`?

Because

```javascript
getAttribute()
```

always returns text.

It does **not** return:

```javascript
true
```

Instead it returns:

```javascript
"true"
```

or

```javascript
"false"
```

which are strings.

---

# The `!` Operator

```javascript
!expanded
```

The `!` operator means:

> Reverse the Boolean value.

Examples:

```javascript
true
```

becomes

```javascript
false
```

and

```javascript
false
```

becomes

```javascript
true
```

---

# Updating `aria-expanded`

```javascript
button.setAttribute(
  "aria-expanded",
  String(!expanded)
);
```

This changes the HTML.

If it was

```html
aria-expanded="false"
```

it becomes

```html
aria-expanded="true"
```

If it was

```html
aria-expanded="true"
```

it becomes

```html
aria-expanded="false"
```

---

# Why Use `String()`?

Notice:

```javascript
!expanded
```

returns

```javascript
true
```

or

```javascript
false
```

These are Booleans.

But HTML attributes store text.

So JavaScript converts them into strings:

```javascript
true
```

↓

```text
"true"
```

and

```javascript
false
```

↓

```text
"false"
```

using

```javascript
String()
```

---

# Showing and Hiding the Menu

```javascript
menu.hidden = expanded;
```

Remember:

```text
expanded
```

contains the menu's **current** state before it is toggled.

If

```javascript
expanded = false;
```

then

```javascript
menu.hidden = false;
```

Hidden becomes false.

Meaning:

> Show the menu.

If

```javascript
expanded = true;
```

then

```javascript
menu.hidden = true;
```

Meaning:

> Hide the menu.

---

# Why Doesn't It Use `!expanded` Here?

Many beginners expect:

```javascript
menu.hidden = !expanded;
```

But the code intentionally uses:

```javascript
menu.hidden = expanded;
```

Here's why:

Suppose the menu is currently **closed**.

```text
aria-expanded = false
hidden = true
```

The user clicks.

JavaScript reads:

```javascript
expanded = false;
```

Then it changes:

```javascript
aria-expanded
```

to

```javascript
true
```

Finally:

```javascript
menu.hidden = expanded;
```

becomes

```javascript
menu.hidden = false;
```

which makes the menu visible.

Everything stays synchronized.

---

# Before Clicking

```text
Menu Closed

aria-expanded = false
hidden = true
```

Screen reader says:

> Menu collapsed.

---

# After Clicking

```text
Menu Open

aria-expanded = true
hidden = false
```

Screen reader says:

> Menu expanded.

---

# Why Accessibility Matters

Updating only what users see is **not enough**.

JavaScript should also update accessibility information so:

- Screen readers announce the correct state.
- Keyboard users understand what changed.
- Everyone receives the same information.

This makes your website usable for a wider range of people.

---

# Key Functions Used

| JavaScript | Purpose |
|------------|---------|
| `document.getElementById()` | Finds an element by its `id`. |
| `addEventListener()` | Runs code when an event (like a click) happens. |
| `getAttribute()` | Reads the value of an HTML attribute. |
| `setAttribute()` | Changes the value of an HTML attribute. |
| `String()` | Converts a value into text. |
| `!` | Reverses a Boolean (`true` ↔ `false`). |
| `.hidden` | Shows or hides an element. |

---

# Quick Summary

- JavaScript often changes page content dynamically.
- When the UI changes, update the corresponding **ARIA attributes** too.
- `aria-expanded` tells assistive technologies whether content is open or closed.
- `aria-controls` links a control (like a button) to the element it manages.
- `getAttribute()` reads an attribute's current value.
- `setAttribute()` updates an attribute's value.
- The `hidden` property controls whether an element is visible.
- Keeping the visual state and ARIA state synchronized ensures both sighted users and screen reader users experience the interface correctly.
