# How Do You Add and Remove Nodes from the DOM with `appendChild()` and `removeChild()`?

Working with the DOM often involves **adding** new elements or **removing** existing ones. JavaScript provides two important methods for this:

- `appendChild()` – Adds a new child node to a parent element.
- `removeChild()` – Removes a child node from a parent element.

These methods are commonly used when building interactive web applications like shopping carts, to-do lists, chat applications, and social media feeds.

---

# The `appendChild()` Method

The `appendChild()` method adds a node to the **end** of the list of child elements inside a parent node.

## Syntax

```javascript
parentNode.appendChild(newNode);
```

### Parameters

| Parameter | Description |
|-----------|-------------|
| `parentNode` | The element that will receive the new child. |
| `newNode` | The node you want to append. |

---

# Example 1: HTML Structure

Suppose you have the following unordered list:

```html
<ul id="desserts">
  <li>Cake</li>
  <li>Pie</li>
</ul>
```

Current output:

- Cake
- Pie

---

# Step 1: Select the Parent Element

Use `getElementById()` to access the `<ul>`.

```javascript
const dessertsList = document.getElementById("desserts");
```

Now `dessertsList` references:

```html
<ul id="desserts">
  ...
</ul>
```

---

# Step 2: Create a New Element

Create a new `<li>` using `createElement()`.

```javascript
const dessertsList = document.getElementById("desserts");
const listItem = document.createElement("li");
```

At this point:

- The element exists in memory.
- It **is not yet visible** on the webpage.

---

# Step 3: Append the New Node

Use `appendChild()` to place the new `<li>` inside the list.

```javascript
const dessertsList = document.getElementById("desserts");
const listItem = document.createElement("li");

dessertsList.appendChild(listItem);
```

The new `<li>` is added as the last child.

Result:

```html
<ul id="desserts">
  <li>Cake</li>
  <li>Pie</li>
  <li></li>
</ul>
```

Notice that the new list item is empty.

---

# Step 4: Add Text to the New Element

Use the `textContent` property before appending the element.

```javascript
const dessertsList = document.getElementById("desserts");
const listItem = document.createElement("li");

listItem.textContent = "Cookies";
dessertsList.appendChild(listItem);
```

Now the HTML becomes:

```html
<ul id="desserts">
  <li>Cake</li>
  <li>Pie</li>
  <li>Cookies</li>
</ul>
```

Output:

- Cake
- Pie
- Cookies

---

# The `removeChild()` Method

The `removeChild()` method removes a child node from its parent.

## Syntax

```javascript
parentNode.removeChild(childNode);
```

### Parameters

| Parameter | Description |
|-----------|-------------|
| `parentNode` | The parent containing the child node. |
| `childNode` | The child element you want to remove. |

---

# Example: Removing a Paragraph

Suppose you have this HTML:

```html
<section id="example-section">
  <h2>Example sub heading</h2>
  <p>first paragraph</p>
  <p>second paragraph</p>
</section>
```

Goal:

Remove the **last paragraph**.

---

# Step 1: Select the Parent

```javascript
const sectionEl = document.getElementById("example-section");
```

---

# Step 2: Select the Child

Use `querySelector()` with the `:last-of-type` pseudo-class.

```javascript
const sectionEl = document.getElementById("example-section");
const lastParagraph =
  document.querySelector("#example-section p:last-of-type");
```

The selector:

```css
#example-section p:last-of-type
```

means:

- Find the element with the ID `example-section`.
- Select the last `<p>` inside it.

---

# Step 3: Remove the Child

```javascript
const sectionEl = document.getElementById("example-section");
const lastParagraph =
  document.querySelector("#example-section p:last-of-type");

sectionEl.removeChild(lastParagraph);
```

Result:

```html
<section id="example-section">
  <h2>Example sub heading</h2>
  <p>first paragraph</p>
</section>
```

The second paragraph has been removed from the DOM.

---

# Complete `appendChild()` Example

```html
<ul id="desserts">
  <li>Cake</li>
  <li>Pie</li>
</ul>

<script src="index.js"></script>
```

```javascript
const dessertsList = document.getElementById("desserts");
const listItem = document.createElement("li");

listItem.textContent = "Cookies";

dessertsList.appendChild(listItem);
```

Final Output:

```text
Cake
Pie
Cookies
```

---

# Complete `removeChild()` Example

```html
<section id="example-section">
  <h2>Example sub heading</h2>
  <p>first paragraph</p>
  <p>second paragraph</p>
</section>

<script src="index.js"></script>
```

```javascript
const sectionEl = document.getElementById("example-section");

const lastParagraph =
  document.querySelector("#example-section p:last-of-type");

sectionEl.removeChild(lastParagraph);
```

Final Output:

```text
Example sub heading

first paragraph
```

---

# Real-World Uses

Adding and removing DOM nodes is essential for creating dynamic web applications.

Common examples include:

- Shopping carts
  - Add or remove products.
- To-do list apps
  - Add new tasks.
  - Delete completed tasks.
- Social media feeds
  - Load new posts.
  - Remove deleted posts.
- Chat applications
  - Display incoming messages.
  - Remove old messages.
- Notifications
  - Show or dismiss alerts.
- Comment sections
  - Add or delete comments.

---

# Key Takeaways

## `appendChild()`

- Adds a node to the **end** of a parent's children.
- Requires a parent node and a child node.
- Often used after creating elements with `createElement()`.
- Commonly paired with `textContent` to add visible text.

```javascript
parent.appendChild(child);
```

---

## `removeChild()`

- Removes a child node from its parent.
- Requires both the parent and the child element.
- The child must already belong to that parent.

```javascript
parent.removeChild(child);
```

---

# Summary

The `appendChild()` and `removeChild()` methods are fundamental DOM manipulation tools.

Use:

- `appendChild()` to insert new elements into the page.
- `removeChild()` to delete existing elements.

Together, these methods allow JavaScript to dynamically update web pages without requiring a page refresh, making modern websites interactive and responsive.
