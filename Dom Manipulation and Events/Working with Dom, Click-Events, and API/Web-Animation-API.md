# What Is the Web Animations API (WAAPI), and How Does It Relate to CSS Animation Properties?

The **Web Animations API (WAAPI)** is a JavaScript API that lets you create and control animations directly in your code. Unlike CSS animations, which are declared in stylesheets, WAAPI gives you programmatic control over animations, allowing you to start, stop, pause, reverse, or modify them whenever you need.

This makes WAAPI especially useful for animations that respond to user interactions, such as button clicks, scrolling, or other events.

---

# What Is WAAPI?

The **Web Animations API** provides a simple way to create animations without writing CSS `@keyframes`.

At the heart of WAAPI is the `animate()` method, which creates an animation by defining:

- **Keyframes** (what changes during the animation)
- **Options** (how the animation behaves)

---

# Syntax

```javascript
element.animate(keyframes, options);
```

### Parameters

## `keyframes`

An array describing the animation states.

Example:

```javascript
[
  { transform: "translateX(0px)" },
  { transform: "translateX(100px)" }
]
```

This tells the browser to move the element from **0px** to **100px** on the X-axis.

---

## `options`

An object that controls how the animation behaves.

Common options include:

- `duration`
- `iterations`
- `direction`
- `easing`
- `delay`
- `fill`

Example:

```javascript
{
  duration: 2000,
  iterations: Infinity,
  direction: "alternate",
  easing: "ease-in-out"
}
```

---

# Basic Example

## HTML

```html
<link rel="stylesheet" href="styles.css" />

<div class="square" id="square"></div>

<script src="index.js"></script>
```

---

## CSS

```css
body {
  background: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.square {
  background: #1b1b32;
  width: 10rem;
  aspect-ratio: 1 / 1;
}
```

---

## JavaScript

```javascript
const square = document.querySelector("#square");

const animation = square.animate(
  [
    { transform: "translateX(0px)" },
    { transform: "translateX(100px)" }
  ],
  {
    duration: 2000,
    iterations: Infinity,
    direction: "alternate",
    easing: "ease-in-out"
  }
);
```

---

# How This Example Works

The animation moves the square:

- Starts at `translateX(0px)`
- Ends at `translateX(100px)`
- Takes **2 seconds**
- Repeats forever
- Moves back and forth
- Uses smooth acceleration and deceleration

The result is a blue square that continuously slides left and right.

---

# Animation Instance Methods

Calling `animate()` returns an **Animation** object.

This object provides several useful methods for controlling the animation.

## `play()`

Starts or resumes the animation.

```javascript
animation.play();
```

---

## `pause()`

Temporarily pauses the animation.

```javascript
animation.pause();
```

---

## `reverse()`

Reverses the animation's playback direction.

```javascript
animation.reverse();
```

---

## `finish()`

Immediately jumps to the final frame.

```javascript
animation.finish();
```

---

## `cancel()`

Stops the animation completely and resets it.

```javascript
animation.cancel();
```

---

# Animation Instance Properties

The Animation object also includes several useful properties.

```javascript
animation.playbackRate
animation.currentTime
animation.startTime
animation.effect
animation.timeline
animation.playState
animation.finished
animation.onfinish
animation.oncancel
```

These properties let you inspect or modify the animation while it is running.

---

# Interactive Example

Let's improve the previous example by allowing users to play and pause the animation.

---

## HTML

```html
<link rel="stylesheet" href="styles.css" />

<div class="square" id="square"></div>

<button id="playBtn">Play</button>
<button id="pauseBtn">Pause</button>

<script src="index.js"></script>
```

---

## CSS

```css
body {
  background: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.square {
  background: #1b1b32;
  width: 10rem;
  aspect-ratio: 1 / 1;
  margin-bottom: 20px;
}

button {
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
}
```

---

## JavaScript

```javascript
const square = document.querySelector("#square");
const playBtn = document.querySelector("#playBtn");
const pauseBtn = document.querySelector("#pauseBtn");

const animation = square.animate(
  [
    { transform: "translateX(0px)" },
    { transform: "translateX(200px)" }
  ],
  {
    duration: 5000,
    // iterations: Infinity,
    direction: "alternate",
    easing: "ease-in-out"
  }
);

// Runs when the animation finishes
animation.onfinish = () => {
  console.log("Animation finished!");
};

// Play the animation
playBtn.addEventListener("click", () => {
  animation.play();
  console.log("You start the animation");
});

// Pause the animation
pauseBtn.addEventListener("click", () => {
  animation.pause();
  console.log("You pause the animation");
});
```

---

# How This Example Works

### Step 1

The square animation is created using `animate()`.

---

### Step 2

The animation lasts **5 seconds**.

```javascript
duration: 5000
```

---

### Step 3

The animation moves from:

```javascript
translateX(0px)
```

to

```javascript
translateX(200px)
```

---

### Step 4

When the animation finishes, the `onfinish` event runs.

```javascript
animation.onfinish = () => {
  console.log("Animation finished!");
};
```

This prints:

```
Animation finished!
```

to the browser console.

---

### Step 5

Clicking the **Play** button starts or resumes the animation.

```javascript
animation.play();
```

---

### Step 6

Clicking the **Pause** button temporarily stops the animation.

```javascript
animation.pause();
```

---

# WAAPI vs CSS Animations

Both WAAPI and CSS animations can create smooth animations, but they are designed for different use cases.

| CSS Animations | Web Animations API |
|---------------|--------------------|
| Defined in CSS | Created in JavaScript |
| Declarative | Programmatic |
| Great for simple effects | Great for interactive effects |
| Limited runtime control | Full runtime control |
| Best for automatic animations | Best for user-controlled animations |

---

# CSS Animation

With CSS animations, you define animations using properties like:

```css
animation-name
animation-duration
animation-timing-function
animation-delay
animation-iteration-count
animation-direction
```

Example:

```css
.square {
  animation: move 2s ease-in-out infinite alternate;
}
```

CSS animations are ideal for:

- Hover effects
- Loading spinners
- Page transitions
- Decorative animations
- Animations that run automatically

---

# WAAPI

WAAPI creates animations using JavaScript instead.

Example:

```javascript
element.animate(keyframes, options);
```

WAAPI is better when animations need to:

- Respond to button clicks
- Pause and resume
- Reverse direction
- Change speed
- Restart
- React to scrolling
- Synchronize with other JavaScript logic

---

# Combining CSS and WAAPI

You don't have to choose one or the other.

Many modern web applications combine both approaches:

- Use **CSS animations** for simple, automatic effects.
- Use **WAAPI** when you need to control animations dynamically with JavaScript.

This gives you the simplicity of CSS while still allowing full control whenever it's needed.

---

# Key Points

- The **Web Animations API (WAAPI)** lets you create animations directly in JavaScript.
- The `animate()` method creates an animation using keyframes and options.
- Calling `animate()` returns an **Animation** object.
- The Animation object provides methods like `play()`, `pause()`, `reverse()`, `finish()`, and `cancel()`.
- It also includes properties such as `currentTime`, `playState`, `playbackRate`, and `onfinish`.
- WAAPI offers much greater runtime control than CSS animations.
- CSS animations are excellent for simple, automatic effects, while WAAPI is ideal for interactive, user-controlled animations.

---

# Summary

The **Web Animations API (WAAPI)** is a powerful JavaScript API for creating and controlling animations. While CSS animations are simple and declarative, WAAPI gives you complete runtime control, allowing animations to respond to user interactions and application logic. By understanding both approaches, you can choose the right tool—or combine them—to build smooth, engaging web experiences.
