# What Is the `DOMContentLoaded` Event, and How Does It Work?

The `DOMContentLoaded` event is fired when the HTML document has been completely **loaded and parsed**.

Unlike the `load` event, it **does not wait** for external resources such as:

- Images
- Stylesheets
- Fonts
- Videos
- Other external files

It only waits for the HTML structure (the DOM) to be fully built.

This makes `DOMContentLoaded` a popular choice for running JavaScript as soon as the page is ready to interact with.

---

# `DOMContentLoaded` vs `load`

Although these events sound similar, they serve different purposes.

| `DOMContentLoaded` | `load` |
|--------------------|---------|
| Fires when the HTML has been loaded and parsed. | Fires when the entire page has finished loading. |
| Does **not** wait for images, stylesheets, or other external resources. | Waits for images, CSS, fonts, videos, and other external resources. |
| Usually fires much earlier. | Fires after everything on the page has loaded. |
| Ideal for DOM manipulation. | Useful when you need all resources to be available. |

---

# Basic Syntax

You can listen for the `DOMContentLoaded` event by adding an event listener to the `document`.

```javascript
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM is loaded.");
});
```

---

## How It Works

1. The browser loads the HTML.
2. The browser parses the HTML into the DOM.
3. The `DOMContentLoaded` event fires.
4. The callback function executes.

Output:

```text
DOM is loaded.
```

---

# Example: Changing an Image After the DOM Loads

Suppose you have an image in your HTML.

## HTML

```html
<h1>Image Change on DOM Loaded</h1>

<img
  id="example-img"
  src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
  alt="Cat relaxing"
/>

<script src="index.js"></script>
```

---

## JavaScript

Create a function that changes the image.

```javascript
function changeImg() {
  const img = document.getElementById("example-img");

  img.src =
    "https://cdn.freecodecamp.org/curriculum/responsive-web-design-principles/FCCStickers-CamperBot200x200.jpg";

  img.alt = "CamperBot sticker";

  console.log("Image was just changed");
}

changeImg();
```

This function:

- Selects the image.
- Changes its `src` attribute.
- Updates its `alt` text.
- Logs a message to the console.

---

# Checking `document.readyState`

Sometimes your JavaScript file may execute **before** the DOM is ready.

Other times, it may execute **after** the DOM has already loaded.

You can handle both situations by checking the document's current loading state.

```javascript
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", changeImg);
} else {
  console.log("DOMContentLoaded has already fired");
  changeImg();
}
```

---

## How This Works

### If the document is still loading

```javascript
document.readyState === "loading"
```

The browser hasn't finished building the DOM yet.

The code waits until the `DOMContentLoaded` event occurs before running `changeImg()`.

---

### If the DOM is already loaded

The `DOMContentLoaded` event has already fired.

Instead of waiting for an event that already happened, the function is called immediately.

```javascript
changeImg();
```

---

# What Happens When You Refresh the Page?

When you refresh the page:

1. The browser begins loading the HTML.
2. The DOM is created.
3. The `DOMContentLoaded` event fires.
4. The `changeImg()` function runs.
5. The image changes from the original cat image to the CamperBot image.

Because the original image is displayed briefly before being replaced, you may notice a small flicker.

---

# Why Use `DOMContentLoaded`?

Using `DOMContentLoaded` ensures that JavaScript only tries to access HTML elements **after they exist**.

Without it, code like this:

```javascript
const img = document.getElementById("example-img");
```

could return `null` if the browser hasn't created the element yet.

Waiting for `DOMContentLoaded` prevents these errors.

---

# Common Use Cases

The `DOMContentLoaded` event is commonly used to:

- Initialize JavaScript applications.
- Select and manipulate DOM elements.
- Add event listeners.
- Update page content.
- Create dynamic user interfaces.
- Run setup code before images and stylesheets finish loading.

---

# Best Practice

Use `DOMContentLoaded` when your code depends on HTML elements being available but **doesn't need images or other external resources to finish loading**.

If your JavaScript is placed just before the closing `</body>` tag, the DOM is usually already available, making `DOMContentLoaded` unnecessary for many simple pages.

---

# Summary

- `DOMContentLoaded` fires after the HTML has been completely loaded and parsed.
- It **does not** wait for images, stylesheets, fonts, or other external resources.
- The `load` event waits until the entire page has finished loading.
- Use `document.addEventListener("DOMContentLoaded", callback)` to execute code when the DOM is ready.
- `document.readyState` lets you determine whether the DOM is still loading or has already finished loading.
- `DOMContentLoaded` is ideal for safely manipulating HTML elements as soon as they become available.
