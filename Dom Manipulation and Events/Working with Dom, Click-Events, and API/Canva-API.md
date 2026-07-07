# What Is the Canvas API, and How Does It Work?

The **Canvas API** is a powerful JavaScript API that allows you to draw graphics directly inside a web page. With it, you can create everything from simple shapes and text to animations, charts, image editors, and even 2D games.

Unlike regular HTML elements, a `<canvas>` element is simply a blank drawing surface. Everything that appears on it must be drawn using JavaScript.

---

# What Is the Canvas API?

The **Canvas API** provides methods and properties that let you draw and manipulate graphics inside an HTML `<canvas>` element.

Using the Canvas API, you can create:

- Shapes
- Lines
- Text
- Images
- Animations
- Charts and graphs
- Visualizations
- Games

The API includes several interfaces, including:

- `HTMLCanvasElement`
- `CanvasRenderingContext2D`
- `CanvasGradient`
- `CanvasPattern`
- `TextMetrics`

These interfaces provide the methods and properties needed to create and manipulate graphics.

---

# Creating a Canvas

Everything begins with a `<canvas>` element in your HTML.

```html
<canvas id="my-canvas"></canvas>
```

The `<canvas>` acts as a blank drawing surface.

By itself, nothing appears on the screen because the canvas starts empty.

---

# Setting the Canvas Size

You can specify the canvas size directly in HTML.

```html
<canvas
  id="my-canvas"
  width="400"
  height="400">
</canvas>
```

You can also set the size using JavaScript.

```javascript
const canvas = document.getElementById("my-canvas");

canvas.width = 400;
canvas.height = 400;
```

Both approaches create a canvas that is **400 pixels wide** and **400 pixels tall**.

---

# Accessing the Canvas

The `<canvas>` element is represented in JavaScript by the **`HTMLCanvasElement`** interface.

Retrieve it like any other DOM element.

```javascript
const canvas = document.getElementById("my-canvas");
```

This gives you access to the canvas element itself.

---

# Getting the Drawing Context

Before you can draw anything, you must obtain the canvas's drawing context.

This is done using the `getContext()` method.

```javascript
const canvas = document.getElementById("my-canvas");

const ctx = canvas.getContext("2d");
```

The `"2d"` context enables two-dimensional drawing.

The returned object (`ctx`) is a **`CanvasRenderingContext2D`**, which contains all the methods and properties used for drawing.

---

# Exploring the Context

You can inspect the drawing context by logging it.

```javascript
console.log(ctx);
```

The console will display numerous methods and properties for drawing:

- Rectangles
- Circles
- Lines
- Curves
- Text
- Colors
- Images
- Shadows
- Gradients
- Patterns

These features make the Canvas API extremely flexible.

---

# Drawing Shapes

One of the most common drawing methods is `fillRect()`.

It draws a filled rectangle.

Before drawing, you usually choose a color using the `fillStyle` property.

---

## HTML

```html
<html>
  <head></head>

  <body>
    <canvas
      id="my-canvas"
      width="400"
      height="400">
    </canvas>

    <script src="index.js"></script>
  </body>
</html>
```

---

## JavaScript

```javascript
const canvas = document.getElementById("my-canvas");

const ctx = canvas.getContext("2d");

// Set the drawing color
ctx.fillStyle = "crimson";

// Draw a rectangle
ctx.fillRect(1, 1, 150, 100);
```

---

# Understanding `fillRect()`

The `fillRect()` method accepts four arguments.

```javascript
ctx.fillRect(x, y, width, height);
```

| Parameter | Description |
|-----------|-------------|
| `x` | Starting horizontal position |
| `y` | Starting vertical position |
| `width` | Rectangle width |
| `height` | Rectangle height |

Example:

```javascript
ctx.fillRect(1, 1, 150, 100);
```

This draws a crimson rectangle:

- 1 pixel from the left
- 1 pixel from the top
- 150 pixels wide
- 100 pixels tall

---

# Drawing Text

The Canvas API can also render text.

To do this, use the `fillText()` method.

---

## HTML

```html
<canvas
  id="my-text-canvas"
  width="300"
  height="70">
</canvas>
```

---

## JavaScript

```javascript
const textCanvas = document.getElementById("my-text-canvas");

const textCanvasCtx = textCanvas.getContext("2d");

// Set the font
textCanvasCtx.font = "30px Arial";

// Set the text color
textCanvasCtx.fillStyle = "crimson";

// Draw the text
textCanvasCtx.fillText(
  "Hello HTML Canvas!",
  1,
  50
);
```

---

# Understanding `fillText()`

The `fillText()` method draws text on the canvas.

```javascript
ctx.fillText(text, x, y);
```

### Parameters

| Parameter | Description |
|-----------|-------------|
| `text` | The text to display |
| `x` | Horizontal position |
| `y` | Vertical position |

Example:

```javascript
textCanvasCtx.fillText(
  "Hello HTML Canvas!",
  1,
  50
);
```

This draws the text:

```
Hello HTML Canvas!
```

in crimson using a **30px Arial** font.

---

# What Can You Build with the Canvas API?

The Canvas API is capable of much more than rectangles and text.

It can be used to create:

- Drawing applications
- Paint programs
- Charts and graphs
- Data visualizations
- Image manipulation tools
- Physics simulations
- Particle effects
- Games
- Interactive user interfaces

---

# Creating Animations

Canvas becomes even more powerful when combined with the `requestAnimationFrame()` API.

Example:

```javascript
function animate() {
  // Update graphics

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
```

This allows you to create:

- Smooth animations
- Character movement
- Physics engines
- Interactive games
- Real-time visual effects

---

# Key Points

- The **Canvas API** lets you draw graphics using JavaScript.
- Every canvas starts as a blank drawing surface.
- The `<canvas>` element is represented by the `HTMLCanvasElement` interface.
- Use `getContext("2d")` to access the drawing tools.
- The returned object is a `CanvasRenderingContext2D`.
- Use `fillStyle` to set drawing colors.
- Use `fillRect()` to draw filled rectangles.
- Use `fillText()` to render text.
- Canvas can be combined with `requestAnimationFrame()` to create smooth animations.
- The Canvas API is widely used for games, visualizations, graphics, and interactive applications.

---

# Summary

The **Canvas API** provides a powerful way to create graphics directly in the browser using JavaScript. After creating a `<canvas>` element and obtaining its 2D rendering context, you can draw shapes, text, images, and much more. Combined with APIs like `requestAnimationFrame()`, the Canvas API enables rich, interactive experiences such as animations, games, and real-time visualizations.
