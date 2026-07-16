# How Do Event Bubbling and Event Delegation Work?

Event bubbling (also called **event propagation**) describes how an event travels through the DOM after it is triggered.

Instead of stopping at the element you clicked, the event moves upward through its parent elements until it reaches the `document`.

---

## Understanding Event Bubbling

Consider the following HTML:

```html
<p>
  <span>Click me~!</span>
</p>
```

The relationship is:

```text
p
└── span
```

- The `p` element is the **parent**.
- The `span` element is the **child**.

When you click the `span`, it becomes the **target** of the `click` event.

However, the event doesn't stop there.

It **bubbles upward** to its parent (`p`), then to the `body`, `html`, and finally the `document`.

---

## Example: Listening on the Parent

```javascript
const p = document.querySelector("p");

p.addEventListener("click", (event) => {
  console.log(event.target);
});
```

### What happens?

If you click the `span`:

```text
Click me~!
```

is logged to the console.

Even though the listener is attached to the `p` element, the event still knows that the original clicked element was the `span`.

That's because:

- `event.target` = the element that originally triggered the event.
- `event.currentTarget` = the element whose listener is currently running.

---

# Bubbling Step by Step

Let's attach listeners to both elements.

```javascript
const p = document.querySelector("p");
const span = document.querySelector("span");

p.addEventListener("click", (event) => {
  console.log("P listener:");
  console.log(event.target);
});

span.addEventListener("click", (event) => {
  console.log("Span listener:");
  console.log(event.target);
});
```

### Clicking the span outputs:

```text
Span listener:
<span>Click me~!</span>

P listener:
<span>Click me~!</span>
```

### Why?

The sequence is:

1. Click occurs on the `span`.
2. The `span` listener runs first.
3. The event bubbles upward.
4. The `p` listener runs afterward.

Even inside the parent's listener:

```javascript
event.target
```

still points to the `span` because that's where the click started.

---

# Stopping Event Bubbling

Sometimes you don't want an event to continue bubbling.

JavaScript provides:

```javascript
event.stopPropagation();
```

Example:

```javascript
const p = document.querySelector("p");
const span = document.querySelector("span");

p.addEventListener("click", (event) => {
  console.log("P listener:");
  console.log(event.target);
});

span.addEventListener("click", (event) => {
  console.log("Span listener:");
  console.log(event.target);

  event.stopPropagation();
});
```

### Now click the span.

Console:

```text
Span listener:
<span>Click me~!</span>
```

Notice that the `p` listener never runs.

This is because:

```javascript
event.stopPropagation();
```

tells JavaScript:

> "Do not send this event to any parent elements."

The event ends at the `span`.

---

# What Is Event Delegation?

Event delegation is a technique where **one parent element handles events for its child elements**.

Instead of attaching an event listener to every child, you attach **one listener** to the parent and use `event.target` to determine which child was clicked.

---

## Without Event Delegation

Suppose you want every `span` to turn red when clicked.

```javascript
const p = document.querySelector("p");
const span = document.querySelector("span");

span.addEventListener("click", (event) => {
  event.target.style.color = "red";
});
```

This works...

But imagine you have:

- 20 spans
- 100 spans
- New spans being created dynamically

You would need an event listener for every single one.

That quickly becomes inefficient.

---

# With Event Delegation

Instead, attach **one listener** to the parent.

```javascript
const p = document.querySelector("p");

p.addEventListener("click", (event) => {
  event.target.style.color = "red";
});
```

Notice that the `span` no longer has its own listener.

The parent handles everything.

---

## HTML

```html
<p>
  <span>Click me~!</span>
  <span>Click me~!</span>
  <span>Click me~!</span>
  <span>Click me~!</span>
</p>
```

Now:

- Click the first span → turns red.
- Click the second span → turns red.
- Click the third span → turns red.

All of them work using **one** event listener.

---

# Why Does Event Delegation Work?

It works because of **event bubbling**.

The process looks like this:

```text
Click span
     │
     ▼
span receives click
     │
     ▼
Event bubbles to p
     │
     ▼
Parent listener executes
     │
     ▼
event.target tells us which span was clicked
```

Since `event.target` always references the original clicked element, the parent can determine exactly which child should be handled.

---

# Benefits of Event Delegation

- Fewer event listeners.
- Better performance.
- Less memory usage.
- Easier to maintain.
- Automatically works for dynamically created elements.

---

# Summary

## Event Bubbling

- Starts from the clicked element.
- Moves upward through parent elements.
- Parent listeners can react to child events.
- Can be stopped with `event.stopPropagation()`.

---

## Event Delegation

- Uses one parent listener instead of many child listeners.
- Relies on event bubbling.
- Uses `event.target` to identify the clicked child.
- Ideal for large or dynamically generated lists of elements.

---

# Key Takeaways

- `event.target` → The element that originally triggered the event.
- `event.currentTarget` → The element whose event listener is currently executing.
- `event.stopPropagation()` → Stops the event from bubbling to parent elements.
- Event delegation allows a parent element to efficiently manage events from all of its child elements.
