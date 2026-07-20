# Understanding the `aria-expanded` Attribute

## What Is `aria-expanded`?

The `aria-expanded` attribute is an **ARIA (Accessible Rich Internet Applications)** attribute used to tell assistive technologies, such as screen readers, whether a collapsible piece of content is currently **expanded (open)** or **collapsed (closed)**.

It does **not** open or close an element by itself.

Instead, it simply communicates the current state of an interactive control to users who rely on assistive technologies.

---

# Why Is `aria-expanded` Important?

Imagine a dropdown menu.

A sighted user can immediately see whether the menu is open or closed.

However, someone using a screen reader cannot rely on visual information.

Without `aria-expanded`, the screen reader may only announce:

> "Menu button."

The user would have no idea whether the menu is open.

When `aria-expanded` is added, the screen reader can instead announce:

> "Menu button, collapsed."

or

> "Menu button, expanded."

This gives users the same information that sighted users receive visually.

---

# Where Is `aria-expanded` Used?

The `aria-expanded` attribute is commonly used on controls that show or hide content, including:

- Dropdown menus
- Navigation menus
- Accordions
- Sidebar menus
- Tree views
- Disclosure widgets
- Expandable cards
- FAQ sections

Basically, whenever clicking an element reveals or hides additional content, `aria-expanded` is usually involved.

---

# Where Should `aria-expanded` Be Placed?

It belongs on the **interactive element** that controls the expandable content.

Most commonly this is a:

- `<button>`
- `<summary>`
- Custom interactive element

Example:

```html
<button aria-expanded="false">
  Menu
</button>
```

Notice that the attribute is placed on the button—not the menu.

The button is the element controlling the menu.

---

# The Two Possible Values

`aria-expanded` only accepts two values.

## Expanded

```html
aria-expanded="true"
```

Meaning:

> The controlled content is currently visible.

---

## Collapsed

```html
aria-expanded="false"
```

Meaning:

> The controlled content is currently hidden.

---

# Example: Expanded Menu

```html
<button aria-expanded="true">
  Menu
</button>
```

The screen reader understands:

> The menu is currently open.

---

# Example: Collapsed Menu

```html
<button aria-expanded="false">
  Menu
</button>
```

The screen reader understands:

> The menu is currently closed.

---

# Should the Attribute Ever Be Missing?

No.

If a control expands and collapses content, `aria-expanded` should always be present.

It should always be either:

```html
aria-expanded="true"
```

or

```html
aria-expanded="false"
```

Never leave it undefined.

---

# Choosing the Initial Value

The default value depends on whether the content starts open or closed.

If the menu starts closed:

```html
<button aria-expanded="false">
```

If the menu starts open:

```html
<button aria-expanded="true">
```

The accessibility information should always match what users actually see.

---

# Updating `aria-expanded`

The value should change whenever the user opens or closes the content.

JavaScript is responsible for updating it.

For example:

```javascript
button.setAttribute(
  "aria-expanded",
  String(!expanded)
);
```

This keeps screen readers synchronized with what is displayed on the page.

---

# Connecting the Button to Its Content

Knowing whether something is expanded is useful.

Knowing **what** is being expanded is even better.

That is why ARIA provides:

- `aria-controls`
- `aria-owns`

---

# Understanding `aria-controls`

`aria-controls` creates a relationship between the control and the element it controls.

Example:

```html
<button
  aria-expanded="false"
  aria-controls="menu1">
  Menu
</button>

<ul id="menu1" hidden>
  <li>...</li>
  <li>...</li>
</ul>
```

Notice:

```html
aria-controls="menu1"
```

matches

```html
id="menu1"
```

This tells assistive technologies:

> "This button controls the element whose ID is menu1."

---

# JavaScript for `aria-controls`

```javascript
const button =
document.querySelector("button");

const menu =
document.getElementById(
button.getAttribute("aria-controls")
);

button.addEventListener("click", () => {

  const expanded =
  button.getAttribute("aria-expanded")
  === "true";

  button.setAttribute(
    "aria-expanded",
    String(!expanded)
  );

  menu.hidden = expanded;

});
```

---

# Breaking Down the JavaScript

## Selecting the Button

```javascript
const button =
document.querySelector("button");
```

Finds the first button on the page.

---

## Reading `aria-controls`

```javascript
button.getAttribute("aria-controls")
```

Returns:

```text
menu1
```

---

## Finding the Menu

```javascript
document.getElementById(
button.getAttribute("aria-controls")
)
```

This is equivalent to writing:

```javascript
document.getElementById("menu1");
```

except JavaScript retrieves the ID automatically.

This makes the code reusable.

---

## Listening for Clicks

```javascript
button.addEventListener("click", () => {
```

Runs whenever the button is clicked.

---

## Reading the Current State

```javascript
const expanded =
button.getAttribute("aria-expanded")
=== "true";
```

If

```html
aria-expanded="true"
```

then

```javascript
expanded = true;
```

Otherwise

```javascript
expanded = false;
```

---

## Updating the Attribute

```javascript
button.setAttribute(
"aria-expanded",
String(!expanded)
);
```

If it was:

```html
false
```

it becomes:

```html
true
```

If it was:

```html
true
```

it becomes:

```html
false
```

---

## Showing or Hiding the Menu

```javascript
menu.hidden = expanded;
```

If the menu was closed:

```javascript
expanded = false;
```

then

```javascript
menu.hidden = false;
```

The menu becomes visible.

If the menu was open:

```javascript
expanded = true;
```

then

```javascript
menu.hidden = true;
```

The menu disappears.

---

# Why Should the Menu Follow the Button?

The recommended structure is:

```html
<button>Menu</button>

<ul>
...
</ul>
```

Instead of placing the menu somewhere else on the page.

Why?

Because screen readers read the page from top to bottom.

If the menu comes immediately after the button, users can quickly access it.

Keyboard users also reach the menu naturally by pressing the Tab key.

---

# What Is `aria-owns`?

Sometimes the menu cannot be placed directly after the button.

Maybe the page layout requires the menu elsewhere.

In those situations, `aria-owns` can be used.

Example:

```html
<button
aria-expanded="true"
aria-owns="menu1">

Menu

</button>

<main>

Entire page content...

</main>

<ul id="menu1">

...

</ul>
```

Notice that the menu is much farther down the page.

---

# What Does `aria-owns` Do?

It tells assistive technologies:

> "Pretend this menu comes immediately after the button."

Even though the actual HTML places it elsewhere.

This changes the accessibility tree without changing the actual DOM.

---

# JavaScript with `aria-owns`

```javascript
const button =
document.querySelector("button");

const menu =
document.getElementById(
button.getAttribute("aria-owns")
);

button.addEventListener("click", () => {

  const expanded =
  button.getAttribute("aria-expanded")
  === "true";

  button.setAttribute(
    "aria-expanded",
    String(!expanded)
  );

  menu.hidden = expanded;

});
```

The logic is almost identical.

The only difference is that JavaScript reads:

```javascript
aria-owns
```

instead of

```javascript
aria-controls
```

---

# Closing the Menu When Clicking Outside

The example also includes:

```javascript
document.addEventListener("click", (e) => {

if (
!button.contains(e.target) &&
!menu.contains(e.target)
) {

button.setAttribute(
"aria-expanded",
"false"
);

menu.hidden = true;

}

});
```

This listens for clicks anywhere on the page.

If the click happens outside both the button and the menu, the menu automatically closes.

This creates a better user experience.

---

# Understanding `.contains()`

```javascript
button.contains(e.target)
```

asks:

> "Did the user click inside the button?"

Likewise,

```javascript
menu.contains(e.target)
```

asks:

> "Did the user click inside the menu?"

If both answers are false, the menu closes.

---

# Why Isn't `aria-owns` Recommended?

Although useful, it has drawbacks.

Some screen readers immediately read the entire expanded content.

This can become very verbose.

It also does not change keyboard tab order.

Keyboard users may still need to tab through the whole page before reaching the menu.

Because of these limitations, `aria-owns` should only be used when placing the menu after the button is impossible.

---

# Best Practice

Whenever possible:

- Place expandable content immediately after its control.
- Use `aria-controls`.
- Keep `aria-expanded` updated with JavaScript.
- Only use `aria-owns` as a last resort.
- Test with multiple screen readers and browsers.

---

# Key Attributes Learned

| Attribute | Purpose |
|-----------|---------|
| `aria-expanded` | Indicates whether content is expanded or collapsed. |
| `aria-controls` | Identifies the element controlled by the interactive element. |
| `aria-owns` | Creates an accessibility relationship when the controlled element cannot be placed directly after its controller. |

---

# JavaScript Methods Learned

| Method | Purpose |
|---------|---------|
| `querySelector()` | Selects the first matching element. |
| `getElementById()` | Finds an element by its ID. |
| `getAttribute()` | Reads an HTML attribute. |
| `setAttribute()` | Changes an HTML attribute. |
| `addEventListener()` | Responds to user events. |
| `contains()` | Checks whether one element contains another. |
| `.hidden` | Shows or hides an element. |

---

# Quick Summary

- `aria-expanded` tells assistive technologies whether content is open or closed.
- It belongs on the interactive control, not the expandable content.
- It should always be either `"true"` or `"false"`.
- JavaScript should update `aria-expanded` whenever the content changes state.
- `aria-controls` links the control to the element it manages.
- `aria-owns` provides an accessibility relationship when the controlled element cannot appear immediately after the control.
- Placing expandable content directly after its controller is the recommended approach because it provides the best experience for screen reader and keyboard users.
