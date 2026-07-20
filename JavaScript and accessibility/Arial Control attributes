# Understanding the `aria-controls` Attribute (Part 1)

# Introduction

As web applications become more interactive, it becomes increasingly important to ensure that assistive technologies can understand the relationships between different elements on a page.

Imagine clicking a button that opens a menu.

A sighted user can easily see that the menu appears.

But how does a screen reader know that the button is responsible for opening that menu?

This is where the **`aria-controls`** attribute becomes useful.

The `aria-controls` attribute creates a relationship between an element that controls another element and the element being controlled.

It does **not** make anything happen by itself.

Instead, it provides additional accessibility information so screen readers understand which element is being controlled.

JavaScript is still responsible for showing, hiding, or updating the controlled element.

---

# What Is `aria-controls`?

The `aria-controls` attribute identifies another element whose behavior or visibility is controlled by the current element.

Think of it as saying:

> "This button controls that section."

It creates a programmatic connection that assistive technologies can understand.

---

# Syntax

```html
aria-controls="elementID"
```

The value must always match the **id** of another element.

Example:

```html
<button aria-controls="menu">
Menu
</button>

<ul id="menu">
...
</ul>
```

Here,

```html
aria-controls="menu"
```

points to

```html
id="menu"
```

This creates the relationship.

...

(continue with the rest of Part 1 exactly as before)



# Understanding the `aria-controls` Attribute (Part 2)

# JavaScript Overview

Now that the HTML has established the relationship between each tab and its corresponding content panel using `aria-controls`, JavaScript is responsible for making the interface interactive.

Without JavaScript:

- Clicking the tabs would do nothing.
- The visible content would never change.
- The `aria-selected` values would never update.
- The `hidden` attribute would never change.
- Keyboard navigation would not work.

JavaScript connects all of these pieces together.

---

# The Complete JavaScript

```javascript
const tabs = document.querySelectorAll('[role="tab"]');
const tabList = document.querySelector('[role="tablist"]');

tabs.forEach(tab => {

  tab.addEventListener("click", () => {
    activateTab(tab);
  });

  tab.addEventListener("keydown", (e) => {

    const key = e.key;

    const currentIndex =
      Array.from(tabs).indexOf(tab);

    let newIndex = null;

    if (key === "ArrowRight") {
      newIndex = (currentIndex + 1) % tabs.length;
    }

    else if (key === "ArrowLeft") {
      newIndex =
      (currentIndex - 1 + tabs.length)
      % tabs.length;
    }

    else if (key === "Home") {
      newIndex = 0;
    }

    else if (key === "End") {
      newIndex = tabs.length - 1;
    }

    if (newIndex !== null) {

      tabs[newIndex].focus();

      activateTab(tabs[newIndex]);

    }

  });

});

function activateTab(tab){

const tabPanels =
document.querySelectorAll(
'[role="tabpanel"]'
);

tabs.forEach(t=>{

t.setAttribute(
"aria-selected",
"false"
);

t.setAttribute(
"tabindex",
"-1"
);

});

tabPanels.forEach(panel=>{

panel.hidden=true;

});

tab.setAttribute(
"aria-selected",
"true"
);

tab.removeAttribute(
"tabindex"
);

const panelId=
tab.getAttribute(
"aria-controls"
);

const panel=
document.getElementById(
panelId
);

panel.hidden=false;

tab.focus();

}
```

---

# Selecting Every Tab

```javascript
const tabs =
document.querySelectorAll(
'[role="tab"]'
);
```

`querySelectorAll()` searches the page and returns **every element** matching the selector.

Here it returns:

```
Tab 1

Tab 2

Tab 3
```

The result is stored inside the variable:

```javascript
tabs
```

---

# What Is a NodeList?

`querySelectorAll()` returns a **NodeList**.

A NodeList behaves similarly to an array.

Example:

```
tabs

↓

Tab1

↓

Tab2

↓

Tab3
```

Since it contains multiple elements, JavaScript can loop through them.

---

# Selecting the Tab Container

```javascript
const tabList =
document.querySelector(
'[role="tablist"]'
);
```

Unlike `querySelectorAll()`,

`querySelector()` returns **only the first matching element**.

There is only one tab list, so one element is enough.

---

# Looping Through Every Tab

```javascript
tabs.forEach(tab=>{
```

`forEach()` repeats the same instructions for every tab.

Think of it like this:

```
Tab1

↓

Run Code

↓

Tab2

↓

Run Code

↓

Tab3

↓

Run Code
```

Each tab receives identical functionality.

---

# Adding a Click Event

```javascript
tab.addEventListener(
"click",
()=>{
```

Whenever the user clicks a tab,

this event listener runs.

---

# activateTab()

```javascript
activateTab(tab);
```

Instead of writing the same code multiple times,

all the work is placed inside a function called:

```javascript
activateTab()
```

Whenever a tab is clicked,

that function updates the interface.

---

# Keyboard Navigation

Accessibility requires more than mouse support.

Keyboard users should also be able to switch tabs.

For this reason:

```javascript
tab.addEventListener(
"keydown",
(e)=>{
```

listens for keyboard input.

---

# event.key

```javascript
const key=e.key;
```

This tells JavaScript which key was pressed.

Possible values include:

```
ArrowLeft

ArrowRight

Home

End
```

---

# Why Support Arrow Keys?

Most tab interfaces work like desktop applications.

Users expect:

→ Move to next tab

← Move to previous tab

Home Go to first tab

End Go to last tab

This creates a familiar experience.

---

# Array.from()

```javascript
Array.from(tabs)
```

Remember:

`tabs` is a NodeList.

`Array.from()` converts it into a true JavaScript array.

This allows array methods like:

```javascript
indexOf()
```

to be used.

---

# indexOf()

```javascript
.indexOf(tab)
```

This finds the position of the current tab.

Example:

```
Tab1

Index 0

Tab2

Index 1

Tab3

Index 2
```

If Tab2 is selected,

`indexOf()` returns:

```javascript
1
```

---

# ArrowRight

```javascript
(currentIndex+1)
%
tabs.length
```

Suppose:

```
Current Tab

↓

Tab2

Index=1
```

JavaScript adds one.

```
1+1=2
```

Tab3 becomes active.

---

# Why Use Modulo (%)?

Suppose the user is already on:

```
Tab3
```

There is no Tab4.

Using:

```javascript
%
```

wraps back around to:

```
Tab1
```

This creates endless navigation.

---

# ArrowLeft

```javascript
(currentIndex-1+tabs.length)
%
tabs.length
```

If currently on:

```
Tab1
```

moving left wraps around to:

```
Tab3
```

Again,

navigation becomes continuous.

---

# Home Key

```javascript
newIndex=0;
```

Regardless of the current position,

pressing Home always selects:

```
Tab1
```

---

# End Key

```javascript
newIndex=
tabs.length-1;
```

This jumps directly to the final tab.

---

# Checking for a Valid Index

```javascript
if(newIndex!==null)
```

Only if a supported key was pressed

does JavaScript continue.

Otherwise,

nothing happens.

---

# focus()

```javascript
tabs[newIndex].focus();
```

This moves keyboard focus to the selected tab.

Without this,

screen reader and keyboard users could become confused because the selected tab would change while focus stayed behind.

---

# activateTab()

Immediately afterward:

```javascript
activateTab(
tabs[newIndex]
);
```

updates the visible content.

Focus moves,

then the interface updates.

---

# Inside activateTab()

The first line is:

```javascript
const tabPanels=

document.querySelectorAll(
'[role="tabpanel"]'
);
```

This selects every content panel.

Example:

```
Section1

Section2

Section3
```

---

# Resetting Every Tab

```javascript
tabs.forEach(t=>{
```

Every tab is reset first.

This prevents multiple tabs from appearing active.

---

# Updating aria-selected

```javascript
t.setAttribute(
"aria-selected",
"false"
);
```

Every tab becomes inactive.

Later,

only one tab will be changed back to:

```javascript
true
```

---

# Updating tabindex

```javascript
t.setAttribute(
"tabindex",
"-1"
);
```

This removes every tab from the normal Tab order.

Only the active tab remains keyboard reachable.

---

# Hiding Every Panel

```javascript
panel.hidden=true;
```

Every content section becomes invisible.

This guarantees that only one panel will appear.

---

# Activating the Selected Tab

```javascript
tab.setAttribute(
"aria-selected",
"true"
);
```

The clicked tab becomes active.

Screen readers immediately know which tab is selected.

---

# removeAttribute()

```javascript
tab.removeAttribute(
"tabindex"
);
```

Removing `tabindex="-1"` restores the tab to normal keyboard navigation.

---

# getAttribute()

```javascript
const panelId=

tab.getAttribute(
"aria-controls"
);
```

This reads the value stored inside:

```html
aria-controls
```

For example:

```html
aria-controls="section2"
```

JavaScript now knows that this tab controls:

```
section2
```

---

# getElementById()

```javascript
document.getElementById(
panelId
);
```

This finds the matching content panel.

If

```javascript
panelId
```

equals

```
section2
```

JavaScript selects:

```html
id="section2"
```

---

# Showing the Panel

```javascript
panel.hidden=false;
```

The selected content panel becomes visible.

All other panels remain hidden.

---

# Returning Focus

```javascript
tab.focus();
```

Focus stays on the selected tab,

helping keyboard users know exactly where they are.

---

# Best Practices

* Always connect tabs and panels using `aria-controls` and matching `id` values.
* Use `aria-labelledby` so every panel has an accessible name.
* Keep only one tab selected at a time.
* Keep only one panel visible at a time.
* Update `aria-selected` whenever the active tab changes.
* Synchronize the `hidden` attribute with the selected tab.
* Support mouse, keyboard, and screen reader users equally.
* Test using the Tab key, Arrow keys, Home, and End keys.

---

# Quick Summary

* `querySelectorAll()` retrieves all tabs and panels.
* `forEach()` loops through each tab to add event listeners.
* `click` events activate tabs using the mouse.
* `keydown` events support keyboard navigation.
* `Array.from()` converts a NodeList into an array.
* `indexOf()` finds the current tab's position.
* Arrow keys move between tabs, while Home and End jump to the first and last tabs.
* `activateTab()` updates the entire interface by changing `aria-selected`, `tabindex`, and the `hidden` attribute.
* `getAttribute("aria-controls")` identifies which panel belongs to the selected tab.
* `getElementById()` retrieves the controlled panel, making it visible while hiding all others, resulting in a fully accessible tab interface.
