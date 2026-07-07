# What Is the `requestAnimationFrame()` API, and How Can It Be Used to Set Up an Animation Loop?

Creating smooth animations on a web page can be challenging, especially when trying to keep animations synchronized with the browser's rendering process. Fortunately, the **`requestAnimationFrame()`** API provides an efficient way to create fluid, high-performance animations.

Instead of relying on timers like `setInterval()` or `setTimeout()`, `requestAnimationFrame()` tells the browser that you want to perform an animation and requests that your animation function be called **before the next screen repaint**.

---

# What Is `requestAnimationFrame()`?

`requestAnimationFrame()` is a browser method that schedules a callback function to run before the browser redraws the page.

### Syntax

```javascript
requestAnimationFrame(callback);
```

- `callback` is the function that updates your animation.
- The browser automatically determines the best time to call it.
- Most modern displays refresh around **60 times per second (60 FPS)**, allowing animations to appear smooth.

---

# What Is a Screen Repaint?

A **screen repaint** is when the browser redraws everything visible on the webpage.

Whenever an element moves, changes color, grows, shrinks, rotates, or updates its appearance, the browser must repaint the page.

`requestAnimationFrame()` schedules your animation just before this repaint, making it far more efficient than repeatedly running timers at fixed intervals.

---

# Basic Usage

The simplest way to use `requestAnimationFrame()` is to pass it a callback function.

```javascript
requestAnimationFrame(callback);
```

However, animations usually need to repeat continuously.

To accomplish this, the callback function calls `requestAnimationFrame()` again, creating an animation loop.

---

# Creating an Animation Loop

Animations are commonly managed using two functions:

- `animate()` → controls the animation loop.
- `update()` → changes whatever should be animated.

```javascript
function animate() {
  // Update the animation
  update();

  // Request the next frame
  requestAnimationFrame(animate);
}
```

Every time the browser is ready to repaint:

1. `animate()` runs.
2. `update()` changes the animation.
3. Another animation frame is requested.
4. The process repeats.

This loop continues until you stop requesting new frames.

---

# Updating the Animation

The `update()` function contains the code that actually changes the page.

For example, moving an element horizontally:

```javascript
function update() {
  element.style.transform = `translateX(${position}px)`;
  position += 2;
}
```

Here:

- The element moves horizontally using CSS transforms.
- `position` increases by `2` pixels every frame.
- The animation appears smooth because updates happen before each repaint.

---

# Starting the Animation

The animation does **not** start automatically.

You begin the loop by calling:

```javascript
requestAnimationFrame(animate);
```

This first call executes `animate()`, which then continuously schedules itself for the next frame.

---

# Complete Animation Example

## HTML

```html
<link rel="stylesheet" href="styles.css" />

<div id="rect" class="rect">
  freeCodeCamp is Awesome
</div>

<script src="index.js"></script>
```

---

## CSS

```css
body {
  overflow-x: hidden;
}

.rect {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 250px;
  border-radius: 5px;
  background-color: #1b1b32;
  color: #f5f6f7;
  font-size: 2rem;
  position: absolute;
}
```

---

## JavaScript

```javascript
const rect = document.getElementById("rect");

let position = 0;

function update() {
  // Move the rectangle 2 pixels to the right
  rect.style.left = position + "px";
  position += 2;

  // Reset once the rectangle leaves the screen
  if (position > window.innerWidth) {
    position = -rect.offsetWidth;
  }
}

function animate() {
  update();

  // Request the next animation frame
  requestAnimationFrame(animate);
}

// Start the animation
requestAnimationFrame(animate);
```

---

# How This Example Works

### Step 1

The rectangle starts with:

```javascript
let position = 0;
```

This represents its horizontal position.

---

### Step 2

Every animation frame:

```javascript
rect.style.left = position + "px";
```

updates the rectangle's horizontal location.

---

### Step 3

The position increases:

```javascript
position += 2;
```

so the rectangle moves **2 pixels** every frame.

---

### Step 4

Once the rectangle moves beyond the right edge of the browser:

```javascript
if (position > window.innerWidth) {
  position = -rect.offsetWidth;
}
```

its position is reset just outside the left edge, allowing it to smoothly re-enter the screen.

---

### Step 5

Finally,

```javascript
requestAnimationFrame(animate);
```

requests another frame, keeping the animation running continuously.

---

# Why Use `requestAnimationFrame()` Instead of `setInterval()`?

Using `requestAnimationFrame()` provides several advantages:

- Synchronizes animations with the browser's refresh rate.
- Produces smoother animations.
- Reduces unnecessary CPU usage.
- Automatically pauses in inactive browser tabs, improving battery life and performance.
- Helps prevent screen tearing and stuttering.

Because of these benefits, it is the preferred API for creating browser animations.

---

# Key Points

- `requestAnimationFrame()` schedules animation updates before the next repaint.
- It creates smooth, efficient animations.
- Animation loops are created by calling `requestAnimationFrame()` inside the animation function.
- The `update()` function contains the code that changes the animated element.
- The animation starts with an initial call to `requestAnimationFrame(animate)`.
- The browser controls the timing, making animations smoother and more efficient than traditional timers.

---

# Summary

The **`requestAnimationFrame()`** API is the standard way to create smooth animations in JavaScript. By updating elements immediately before each browser repaint, it delivers fluid motion while using system resources efficiently. Whether you're moving elements, creating games, or building interactive interfaces, `requestAnimationFrame()` is the recommended approach for animation loops in modern web development.
