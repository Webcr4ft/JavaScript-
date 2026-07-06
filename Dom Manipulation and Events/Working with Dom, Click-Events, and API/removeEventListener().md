# How Does the `removeEventListener()` Method Work?

In the previous lesson, you learned how to listen for events using the `addEventListener()` method.

In this lesson, you'll learn how to stop listening for events using the **`removeEventListener()`** method.

This method is useful when an event listener is no longer needed, helping improve performance and preventing unwanted behavior.

---

# What Is `removeEventListener()`?

The `removeEventListener()` method removes an event listener that was previously added with `addEventListener()`.

Once the listener is removed, the associated function will no longer run when the event occurs.

---

# Syntax

```javascript
element.removeEventListener("event", listener);
```

### Parameters

| Parameter | Description |
|-----------|-------------|
| `event` | The name of the event to stop listening for (for example, `"click"` or `"mouseover"`). |
| `listener` | The same function that was originally passed to `addEventListener()`. |

---

# Optional Third Argument

Like `addEventListener()`, `removeEventListener()` accepts an optional third argument.

```javascript
element.removeEventListener("event", listener, options);
```

or

```javascript
element.removeEventListener("event", listener, useCapture);
```

### `options`

An object that specifies listener options, such as:

- `once`
- `passive`
- `capture`

### `useCapture`

A Boolean value indicating whether the event listener was registered during the **capture phase**.

> In most cases, you'll only need to provide the event type and the listener function.

---

# Important Note

To successfully remove an event listener:

- The **event type** must match.
- The **listener function** must be the exact same function reference that was added.
- If capture/options were used when adding the listener, they must also match when removing it.

---

# Example: Toggle the Background Color

Suppose you have the following HTML:

```html
<link rel="stylesheet" href="styles.css" />

<h1>Event Listener Examples</h1>

<button id="btn">
  Change background color
</button>

<script src="index.js"></script>
```

And the following CSS:

```css
button {
  background: linear-gradient(135deg, #4da3ff, #007bff);
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 4px 10px rgba(0, 123, 255, 0.2);
}

button:hover {
  background: linear-gradient(135deg, #66b3ff, #3399ff);
  box-shadow: 0 6px 14px rgba(0, 123, 255, 0.3);
  transform: translateY(-2px);
}
```

---

# Step 1: Select the Elements

First, select the `<body>` and the button.

```javascript
const bodyEl = document.querySelector("body");
const btn = document.getElementById("btn");
```

---

# Step 2: Create the Toggle Function

We'll use a Boolean variable to keep track of the current background color.

```javascript
let isBgColorGrey = true;

function toggleBgColor() {
  bodyEl.style.backgroundColor =
    isBgColorGrey ? "blue" : "grey";

  isBgColorGrey = !isBgColorGrey;
}
```

### How It Works

Initially:

```javascript
let isBgColorGrey = true;
```

When the button is clicked:

- If `true`, the background becomes `"blue"`.
- The Boolean flips to `false`.
- The next click changes the background back to `"grey"`.

This repeats every time the button is clicked.

---

# Step 3: Add the Event Listener

```javascript
btn.addEventListener("click", toggleBgColor);
```

Now, every click alternates the background color between grey and blue.

---

# Complete Example

### HTML

```html
<link rel="stylesheet" href="styles.css" />

<h1>Event Listener Examples</h1>

<button id="btn">
  Change background color
</button>

<script src="index.js"></script>
```

### CSS

```css
button {
  background: linear-gradient(135deg, #4da3ff, #007bff);
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 4px 10px rgba(0, 123, 255, 0.2);
}

button:hover {
  background: linear-gradient(135deg, #66b3ff, #3399ff);
  box-shadow: 0 6px 14px rgba(0, 123, 255, 0.3);
  transform: translateY(-2px);
}
```

### JavaScript

```javascript
const bodyEl = document.querySelector("body");
const btn = document.getElementById("btn");

let isBgColorGrey = true;

function toggleBgColor() {
  bodyEl.style.backgroundColor =
    isBgColorGrey ? "blue" : "grey";

  isBgColorGrey = !isBgColorGrey;
}

btn.addEventListener("click", toggleBgColor);
```

---

# Removing the Event Listener

Now suppose we want to disable the button after the user hovers over a paragraph.

Update the HTML:

```html
<link rel="stylesheet" href="styles.css" />

<h1>Event Listener Examples</h1>

<p id="para">
  Mouse over this text to remove the event listener
</p>

<button id="btn">
  Change background color
</button>

<script src="index.js"></script>
```

---

# Step 4: Select the Paragraph

```javascript
const para = document.getElementById("para");
```

---

# Step 5: Remove the Event Listener

Add another event listener to the paragraph.

```javascript
para.addEventListener("mouseover", () => {
  btn.removeEventListener(
    "click",
    toggleBgColor
  );
});
```

### What Happens?

When the user moves the mouse over the paragraph:

- The button's `"click"` event listener is removed.
- Clicking the button afterward no longer changes the background color.

---

# Complete Example

### HTML

```html
<link rel="stylesheet" href="styles.css" />

<h1>Event Listener Examples</h1>

<p id="para">
  Mouse over this text to remove the event listener
</p>

<button id="btn">
  Change background color
</button>

<script src="index.js"></script>
```

### JavaScript

```javascript
const bodyEl = document.querySelector("body");
const para = document.getElementById("para");
const btn = document.getElementById("btn");

let isBgColorGrey = true;

function toggleBgColor() {
  bodyEl.style.backgroundColor =
    isBgColorGrey ? "blue" : "grey";

  isBgColorGrey = !isBgColorGrey;
}

btn.addEventListener("click", toggleBgColor);

para.addEventListener("mouseover", () => {
  btn.removeEventListener(
    "click",
    toggleBgColor
  );
});
```

---

# Real-World Applications

The `removeEventListener()` method is commonly used in situations such as:

- Closing modal windows
- Removing temporary keyboard shortcuts
- Cleaning up event listeners when components are destroyed
- Disabling buttons after a task is completed
- Stopping animations
- Ending drag-and-drop interactions
- Removing listeners when a user logs out
- Preventing duplicate event handlers

Removing unused event listeners helps improve performance and keeps your application behaving as expected.

---

# Key Takeaways

## `removeEventListener()`

- Removes an event listener that was previously added.
- Requires the same event type and function reference used in `addEventListener()`.
- Can optionally accept the same capture/options settings.
- Prevents future executions of the listener.

Syntax:

```javascript
element.removeEventListener(
  "event",
  listener
);
```

---

# Summary

The `removeEventListener()` method allows JavaScript to stop listening for events when they are no longer needed.

It is especially useful for cleaning up event listeners, improving application performance, and preventing unnecessary or repeated event handling.

When combined with `addEventListener()`, it gives you complete control over when events should begin and stop responding, making it an essential tool for building efficient and interactive web applications.
