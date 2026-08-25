# JavaScript Events

# What Is the Purpose of the `preventDefault()` Method?

Let's learn about the purpose of the `preventDefault()` method on events.

Every event that triggers in the DOM has some sort of default behavior.

For example:

* The `click` event on a checkbox toggles the state of that checkbox, by default.
* Pressing the space bar on a focused button activates the button.
* The `preventDefault()` method on these event objects stops that behavior from happening.

---

# 1. Creating an Input Element

Let's take a look at an example.

Let's define an `input` element for a user to type in:

## HTML

```html
<link rel="stylesheet" href="styles.css">

<label>
  Enter some characters:
  <input type="text">
</label>
```

## CSS

```css
label {
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
  font-size: 14px;
  color: #333;
  margin-bottom: 12px;
}

input[type="text"] {
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  margin-top: 4px;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.2s, box-shadow 0.2s;
}

input[type="text"]:focus {
  border-color: #0078d4;
  box-shadow: 0 0 3px rgba(0, 120, 212, 0.5);
  outline: none;
}
```

If we look at the result, we can type in the input field as expected.

But maybe we don't want that.

Maybe, instead, we'd like to show the character the user types in a separate element.

---

# 2. Creating an Output Element

First, let's define our element for displaying the character:

## HTML

```html
<link rel="stylesheet" href="styles.css">

<label>
  Enter some characters:
  <input type="text">
</label>

<p id="output"></p>
```

## CSS

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
}

label {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
}

input[type="text"] {
  padding: 0.5rem;
  font-size: 1rem;
  border: 2px solid #ccc;
  border-radius: 5px;
  margin-top: 0.5rem;
  outline: none;
}

input[type="text"]:focus {
  border-color: #007BFF;
}

#output {
  margin-top: 1rem;
  font-size: 1.1rem;
  color: #555;
}
```

---

# 3. Listening for the `keydown` Event

Next, we need to hook into the `keydown` event to listen for a character being typed on the keyboard.

Note that we do not want the `change` or `input` events here, because we need the keyboard information.

```javascript
const input = document.querySelector("input");

input.addEventListener("keydown", (e) => {

});
```

The `keydown` event fires when you press down on a keyboard key.

When this happens, let's display the character in our `p` element.

---

# 4. Displaying the Pressed Key

## HTML

```html
<link rel="stylesheet" href="styles.css">

<label>
  Enter some characters:
  <input type="text">
</label>

<p id="output"></p>

<script src="index.js"></script>
```

## CSS

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
}

label {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
}

input[type="text"] {
  padding: 0.5rem;
  font-size: 1rem;
  border: 2px solid #ccc;
  border-radius: 5px;
  margin-top: 0.5rem;
  outline: none;
}

input[type="text"]:focus {
  border-color: #007BFF;
}

#output {
  margin-top: 1rem;
  font-size: 1.1rem;
  color: #555;
}
```

## JavaScript

```javascript
const input = document.querySelector("input");
const output = document.getElementById("output");

input.addEventListener("keydown", (e) => {
  output.innerText = `You pressed the ${e.key} key`;
});
```

The `e.key` property gives you the value of the key pressed.

For example:

* Pressing the `a` key gives you `a`.
* Pressing the `Enter` key gives you `Enter`.
* Pressing the `Space` key gives you ` `.
* Pressing the `ArrowUp` key gives you `ArrowUp`.

With the above code, when you type in the input, the character you type will be displayed in the `p` element.

---

# 5. Understanding the Default Behavior

This is great, but we don't want to show the characters in the input as well.

This is where our `preventDefault()` method comes in.

The default behavior of a `keydown` event is to allow the character to be rendered in the input.

Let's avoid that by calling:

```javascript
e.preventDefault();
```

---

# 6. Using `preventDefault()`

## HTML

```html
<link rel="stylesheet" href="styles.css">

<label>
  Enter some characters:
  <input type="text">
</label>

<p id="output"></p>

<script src="index.js"></script>
```

## CSS

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
}

label {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
}

input[type="text"] {
  padding: 0.5rem;
  font-size: 1rem;
  border: 2px solid #ccc;
  border-radius: 5px;
  margin-top: 0.5rem;
  outline: none;
}

input[type="text"]:focus {
  border-color: #007BFF;
}

#output {
  margin-top: 1rem;
  font-size: 1.1rem;
  color: #555;
}
```

## JavaScript

```javascript
const input = document.querySelector("input");
const output = document.getElementById("output");

input.addEventListener("keydown", (e) => {
  e.preventDefault();

  output.innerText = `You pressed the ${e.key} key`;
});
```

And just like that, you have prevented the default behavior to allow yourself to implement your own custom event handling.

---

# 7. How `preventDefault()` Works

The `preventDefault()` method tells the browser:

> Do not perform the normal/default action associated with this event.

For example:

```javascript
e.preventDefault();
```

When used inside the `keydown` event, it prevents the browser from performing the normal action associated with the key press.

This gives you more control over what happens when the user interacts with the page.

---

# 8. Using `preventDefault()` With Forms

Another common example of when to use the `e.preventDefault()` method has to do with form submissions.

By default, submitting a form sends data to the server and reloads the page.

Using `e.preventDefault()` prevents this from happening.

## JavaScript

```javascript
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // rest of code goes here
});
```

In this example:

```javascript
e.preventDefault();
```

prevents the browser from performing the form's normal submission behavior.

This allows JavaScript to handle the form submission instead.

For example, you could use JavaScript to:

* Validate the form.
* Display a custom message.
* Send the data using `fetch()`.
* Update the page without reloading it.
* Perform another custom action.

---

# 9. Why `preventDefault()` Is Useful

Preventing the default behavior is great when you need more control over how a user interacts with the page.

For example:

```javascript
element.addEventListener("click", (e) => {
  e.preventDefault();

  // Custom behavior
});
```

You can stop the browser's default behavior and replace it with your own behavior.

However, it is important to keep things like accessibility in mind.

Your custom behavior should provide the same features as the default.

---

# Key Takeaways

* Every DOM event can have a default browser behavior.
* The `preventDefault()` method stops that default behavior.
* `keydown` events can be used to detect keyboard presses.
* The `e.key` property tells you which key was pressed.
* `e.preventDefault()` can prevent the browser from performing the normal action associated with an event.
* `preventDefault()` is commonly used when creating custom event behavior.
* It is also commonly used with form submissions.
* By default, submitting a form can send data to the server and reload the page.
* Calling `e.preventDefault()` prevents that default form submission behavior.
* Preventing default behavior gives you more control over how users interact with your page.
* Custom behavior should still maintain accessibility and provide equivalent functionality where appropriate.
