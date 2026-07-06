# How Do You Add Attributes with `setAttribute()`?

When working with HTML and CSS, you've probably used attributes like `id`, `class`, `src`, `href`, and `alt`.

But did you know that you can also **add**, **update**, or **change** these attributes using JavaScript?

In this lesson, you'll learn how to use the `setAttribute()` method to dynamically modify HTML elements.

This is a common technique in modern web development because it allows web pages to respond to user interactions without requiring the page to reload.

---

# What Is the `setAttribute()` Method?

The `setAttribute()` method is used to **add a new attribute** to an HTML element or **update the value of an existing attribute**.

If the attribute does not already exist, JavaScript creates it.

If the attribute already exists, JavaScript replaces its current value with the new one.

---

# Syntax

```javascript
element.setAttribute(attribute, value);
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `attribute` | The name of the attribute you want to add or modify. |
| `value` | The value you want to assign to that attribute. |

---

# How It Works

The `setAttribute()` method always operates on an HTML element.

The general process is:

1. Select an element from the DOM.
2. Call `setAttribute()`.
3. Specify the attribute name.
4. Provide the new value.

For example:

```javascript
element.setAttribute("class", "my-class");
```

This assigns the class `my-class` to the selected element.

---

# Example 1: Adding a Class Attribute

Suppose you have the following HTML:

```html
<p id="para">I am a paragraph</p>
```

Currently, the paragraph only has an `id` attribute.

---

## Step 1: Select the Element

Use `getElementById()` to access the paragraph.

```javascript
const para = document.getElementById("para");
```

Now `para` references:

```html
<p id="para">I am a paragraph</p>
```

---

## Step 2: Add a Class Attribute

Call `setAttribute()`.

```javascript
const para = document.getElementById("para");

para.setAttribute("class", "my-class");
```

The paragraph now becomes:

```html
<p id="para" class="my-class">
  I am a paragraph
</p>
```

Notice that the original `id` remains unchanged while a new `class` attribute has been added.

---

# Viewing the Updated HTML

The example uses the `outerHTML` property.

```javascript
console.log(`${para.outerHTML}`);
```

Unlike `innerHTML`, which returns only the content inside an element, `outerHTML` returns the **entire HTML element**, including all of its attributes.

Output:

```html
<p id="para" class="my-class">
  I am a paragraph
</p>
```

This makes `outerHTML` useful when you want to verify that attributes were successfully added or updated.

---

# Complete Example

### HTML

```html
<p id="para">I am a paragraph</p>

<script src="index.js"></script>
```

### JavaScript

```javascript
const para = document.getElementById("para");

para.setAttribute("class", "my-class");

console.log(`${para.outerHTML}`);
```

Result:

```html
<p id="para" class="my-class">
  I am a paragraph
</p>
```

---

# Updating an Existing Attribute

The `setAttribute()` method doesn't only create attributes.

It can also **replace the value of an attribute that already exists**.

---

# Example 2: Changing a Class Name

Suppose you have this HTML:

```html
<div class="my-class"></div>
```

The `<div>` already has a class named `my-class`.

---

## Step 1: Select the Element

Use `querySelector()`.

```javascript
const divEl = document.querySelector(".my-class");
```

---

## Step 2: Update the Attribute

Use `setAttribute()` again.

```javascript
divEl.setAttribute("class", "example");
```

The HTML changes from:

```html
<div class="my-class"></div>
```

to:

```html
<div class="example"></div>
```

The previous class value has been replaced.

---

# Viewing the Updated HTML

Again, `outerHTML` lets us inspect the result.

```javascript
console.log(`${divEl.outerHTML}`);
```

Output:

```html
<div class="example"></div>
```

---

# Complete Example

### HTML

```html
<div class="my-class"></div>

<script src="index.js"></script>
```

### JavaScript

```javascript
const divEl = document.querySelector(".my-class");

divEl.setAttribute("class", "example");

console.log(`${divEl.outerHTML}`);
```

Result:

```html
<div class="example"></div>
```

---

# Common Attributes You Can Set

The `setAttribute()` method works with nearly every HTML attribute.

Some common examples include:

| Attribute | Purpose |
|-----------|---------|
| `class` | Assign CSS classes. |
| `id` | Give an element a unique identifier. |
| `src` | Specify the source of an image, video, or script. |
| `href` | Set the destination of a link. |
| `alt` | Provide alternative text for images. |
| `title` | Display additional information on hover. |
| `required` | Make form fields mandatory. |
| `minlength` | Specify the minimum number of characters allowed in an input field. |
| `maxlength` | Specify the maximum number of characters allowed. |
| `disabled` | Disable an input or button. |
| `placeholder` | Display placeholder text inside form fields. |

---

# Real-World Uses of `setAttribute()`

The `setAttribute()` method is extremely useful when building dynamic websites.

## Dynamic Image Galleries

When a user clicks a thumbnail, you can update the main image.

```javascript
image.setAttribute("src", "images/photo2.jpg");
```

---

## Form Validation

Add validation attributes dynamically.

```javascript
input.setAttribute("required", "");
```

```javascript
input.setAttribute("minlength", "8");
```

This can be useful when validation rules change based on user input.

---

## Updating Links

Change where a link points.

```javascript
link.setAttribute("href", "https://example.com");
```

---

## Accessibility Improvements

Provide descriptive alternative text.

```javascript
image.setAttribute("alt", "A beautiful mountain landscape");
```

---

## Disabling Buttons

Prevent users from clicking a button until certain conditions are met.

```javascript
button.setAttribute("disabled", "");
```

---

## Applying CSS Classes

Switch between different styles dynamically.

```javascript
element.setAttribute("class", "dark-theme");
```

---

# Things to Remember

- If the attribute **does not exist**, `setAttribute()` creates it.
- If the attribute **already exists**, `setAttribute()` replaces its current value.
- The method can be used with almost any valid HTML attribute.
- You must first select an element before calling `setAttribute()`.

---

# Key Takeaways

## `setAttribute()`

- Adds a new attribute.
- Updates an existing attribute.
- Takes two arguments:
  - Attribute name
  - Attribute value

Syntax:

```javascript
element.setAttribute(attribute, value);
```

Example:

```javascript
element.setAttribute("class", "active");
```

Result:

```html
<div class="active"></div>
```

---

# Summary

The `setAttribute()` method is one of the most useful DOM methods for modifying HTML elements.

It allows JavaScript to dynamically add or update attributes such as `class`, `id`, `src`, `href`, `required`, and many others.

By combining `setAttribute()` with DOM selection methods like `getElementById()` and `querySelector()`, you can create web pages that respond to user actions, update content dynamically, validate forms, change images, modify links, and apply different styles—all without reloading the page.
