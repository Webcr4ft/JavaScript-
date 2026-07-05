# JavaScript `querySelectorAll()` Method

## Overview

The **`querySelectorAll()`** method is one of the most useful DOM methods in JavaScript. It allows you to **select all elements** in a webpage that match a specified **CSS selector**.

Unlike `querySelector()`, which returns only the **first matching element**, `querySelectorAll()` returns **every matching element**.

This makes it ideal when you need to work with multiple elements at once.

---

# Syntax

```javascript
document.querySelectorAll(selectors);
```

### Parameters

- **`selectors`** – A string containing one or more valid CSS selectors.

Example:

```javascript
document.querySelectorAll("div");
```

> **Note:** The selector must be a valid CSS selector. If it isn't, JavaScript throws a **`SyntaxError`**.

---

# Return Value

The `querySelectorAll()` method returns a **NodeList**.

A **NodeList** is a collection of all elements that match the specified CSS selector.

- If matching elements are found, they are stored in the collection.
- If no elements match, an **empty NodeList** is returned.
- The elements appear in the same order as they do in the HTML document.

---

# Selecting Elements

## Select All Elements of a Specific Type

```javascript
document.querySelectorAll("div");
```

This selects every `<div>` element on the page.

---

## Select Elements by Class

```javascript
document.querySelectorAll(".rounded");
```

This selects every element with the class **`rounded`**.

---

## Select an Element by ID

```javascript
document.querySelectorAll("#logo");
```

This selects the element with the ID **`logo`**.

Although IDs are unique, `querySelectorAll()` still returns a NodeList.

---

## Select Elements by Attribute

You can also select elements based on their attributes.

Example:

```javascript
document.querySelectorAll(
  "a[href='https://www.freecodecamp.org/']"
);
```

This selects every anchor (`<a>`) element whose `href` attribute matches the specified URL.

---

## Using Complex CSS Selectors

You can combine CSS selectors to target more specific elements.

Example:

```javascript
document.querySelectorAll("ul.ingredients li");
```

This selects every `<li>` element inside a `<ul>` with the class **`ingredients`**.

---

# Storing the Results

Since `querySelectorAll()` returns a NodeList, it's common to store the result in a variable.

```javascript
const matches = document.querySelectorAll(selectors);
```

Example:

```javascript
const matches = document.querySelectorAll("ul.ingredients li");
```

Now the variable `matches` contains every matching list item.

---

# Example HTML

```html
<ul class="ingredients">
  <li>Flour</li>
  <li>Cheese</li>
  <li>Water</li>
</ul>
```

JavaScript:

```javascript
const matches = document.querySelectorAll("ul.ingredients li");
```

The returned NodeList looks like this:

```javascript
NodeList(3) {
  0: <li>Flour</li>,
  1: <li>Cheese</li>,
  2: <li>Water</li>,
  length: 3
}
```

The NodeList contains three elements because three `<li>` elements match the selector.

---

# Displaying the NodeList

You can print the entire NodeList to the console.

```javascript
console.log(matches);
```

Output:

```javascript
NodeList(3) [...]
```

---

# Checking the Number of Elements

Use the **`length`** property to determine how many elements were selected.

```javascript
console.log(matches.length);
```

Output:

```javascript
3
```

---

# Accessing Individual Elements

Like an array, each element has an index.

```javascript
console.log(matches[0]);
console.log(matches[1]);
console.log(matches[2]);
```

Output:

```html
<li>Flour</li>

<li>Cheese</li>

<li>Water</li>
```

Remember:

| Index | Element |
|--------|---------|
| `0` | Flour |
| `1` | Cheese |
| `2` | Water |

JavaScript arrays and NodeLists always start counting from **0**.

---

# Looping Through a NodeList

You can iterate through every selected element using a `for` loop.

```javascript
for (let i = 0; i < matches.length; i++) {
  console.log(matches[i]);
}
```

Output:

```html
<li>Flour</li>

<li>Cheese</li>

<li>Water</li>
```

Looping is especially useful when you want to perform the same action on every matching element.

---

# `querySelector()` vs `querySelectorAll()`

| Method | Returns |
|---------|----------|
| `querySelector()` | The **first** matching element |
| `querySelectorAll()` | **All** matching elements as a NodeList |

Example:

```javascript
document.querySelector(".box");
```

Returns only the first `.box` element.

```javascript
document.querySelectorAll(".box");
```

Returns every `.box` element on the page.

---

# Common Uses

The `querySelectorAll()` method is commonly used to:

- Select multiple buttons
- Select all paragraphs
- Select all images
- Select elements with the same class
- Select elements using attributes
- Apply the same JavaScript logic to multiple elements

---

# Key Takeaways

- `querySelectorAll()` selects **all elements** matching a CSS selector.
- It is called on the **`document`** object.
- It accepts any valid CSS selector.
- It returns a **NodeList**.
- An empty NodeList is returned if nothing matches.
- Use the **`length`** property to count selected elements.
- Access individual elements using their index.
- Use loops to perform actions on every selected element.
- The elements are returned in the same order they appear in the HTML document.

---

# Conclusion

The **`querySelectorAll()`** method is one of the most powerful DOM selection methods in JavaScript. Whether you're selecting elements by tag, class, ID, attribute, or complex CSS selectors, it provides an efficient way to work with multiple elements at once. Mastering this method is an important step toward building dynamic and interactive web applications.
