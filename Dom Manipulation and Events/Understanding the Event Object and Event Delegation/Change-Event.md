# What Is the `change` Event, and How Does It Work?

The **`change`** event is a JavaScript event that fires **after a user changes the value of certain form elements and confirms that change**.

Unlike the **`input`** event, the **`change`** event **does not trigger while the user is typing**. It only fires when the value has been finalized.

---

# When Does the `change` Event Fire?

The `change` event is triggered in the following situations:

* When a **checkbox** is checked or unchecked.
* When a **radio button** is selected.
* When a user selects a value from a **dropdown menu (`select`)**.
* When a user chooses a date using a **date picker**.
* When a user changes the value of an input and then **clicks outside the field** or **moves to another input**.
* When a user confirms the value by pressing **Enter** in some input fields.

---

# Important Note

The `change` event **does NOT fire while the user is typing**.

Instead, it waits until the user has:

* Left the input field (lost focus), or
* Confirmed the entered value.

If you need an event that runs **every time the user types**, use the **`input`** event instead.

---

# HTML Example

```html
<select id="select-menu">
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</select>

<script src="index.js"></script>
```

---

# JavaScript Example

```javascript
const selectMenu = document.getElementById("select-menu");

selectMenu.addEventListener("change", (event) => {
  console.log(`You selected: ${event.target.value}`);
});
```

---

# How the Code Works

## Step 1

```javascript
const selectMenu = document.getElementById("select-menu");
```

Gets the `<select>` element from the webpage.

---

## Step 2

```javascript
selectMenu.addEventListener("change", (event) => {
```

Listens for the **`change`** event.

Whenever the user chooses a different option, the callback function executes.

---

## Step 3

```javascript
console.log(`You selected: ${event.target.value}`);
```

Prints the value of the selected option.

### Example Outputs

If the user selects:

```text
Option 1
```

Console:

```text
You selected: option1
```

If the user selects:

```text
Option 3
```

Console:

```text
You selected: option3
```

---

# Understanding `event.target.value`

```javascript
event.target.value
```

### `event`

Represents the event object that is automatically passed into the event listener.

### `target`

Refers to the HTML element that triggered the event.

In this example:

```html
<select id="select-menu">
```

is the target.

### `value`

Returns the currently selected value.

For example:

```html
<option value="option2">Option 2</option>
```

returns:

```javascript
option2
```

---

# What Type of Event Object Does `change` Use?

The `change` event creates a standard **`Event`** object.

That means you only have access to the properties and methods provided by the base `Event` object.

Examples include:

```javascript
event.target
event.type
event.currentTarget
event.preventDefault()
event.stopPropagation()
```

It does **not** create a specialized event object.

---

# `change` vs `input`

| Feature | `change` Event | `input` Event |
|----------|---------------|---------------|
| Fires while typing | No | Yes |
| Fires after leaving the field | Yes | No |
| Fires immediately when value changes | Usually No | Yes |
| Event Object | `Event` | `InputEvent` |

---

# Example Using `input`

```html
<input type="text" id="username">
```

```javascript
const username = document.getElementById("username");

username.addEventListener("input", (event) => {
  console.log(event.target.value);
});
```

### User Types

```text
Hello
```

Console Output

```text
H
He
Hel
Hell
Hello
```

The event fires **every single time** the user types a character.

---

# Example Using `change`

```html
<input type="text" id="username">
```

```javascript
const username = document.getElementById("username");

username.addEventListener("change", (event) => {
  console.log(event.target.value);
});
```

### User Types

```text
Hello
```

Nothing happens while typing.

Only after the user clicks somewhere else or presses **Tab**, the console prints:

```text
Hello
```

---

# Real-Life Analogy

Imagine you're filling out a registration form.

## `input` Event

It's like someone looking over your shoulder and reading every letter you type.

Typing:

```text
John
```

Produces:

```text
J
Jo
Joh
John
```

---

## `change` Event

It's like someone waits until you've finished typing your name and moved on to the next field before checking it.

Typing:

```text
John
```

Produces:

```text
John
```

only after you leave the input.

---

# Key Points to Remember

* The `change` event fires **after** a value has been changed and confirmed.
* It works with form elements such as:
  * Checkboxes
  * Radio buttons
  * Dropdown menus
  * Date pickers
  * Text inputs (after losing focus)
* It **does not** trigger while typing.
* The `change` event uses the standard `Event` object.
* If you need real-time updates while the user types, use the **`input`** event instead.

---

# Summary

The **`change`** event is useful when you only want to respond **after the user has finished changing a value**. It helps avoid running code repeatedly while the user is still typing, making it ideal for forms, dropdown menus, date pickers, checkboxes, and other inputs where the final value is more important than every intermediate keystroke.
