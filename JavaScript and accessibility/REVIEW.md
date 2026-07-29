# JavaScript Accessibility Repository

# Part 1: Common ARIA Accessibility Attributes

---

## What Are ARIA Attributes?

**ARIA** stands for **Accessible Rich Internet Applications**.

ARIA attributes provide additional information to assistive technologies, such as screen readers, so users with disabilities can better understand and interact with web applications.

ARIA is especially useful when creating **custom interactive components** like:

- Dropdown menus
- Tabs
- Modals
- Accordions
- Custom checkboxes
- Custom radio buttons
- Navigation menus

> **Important:** Always use native HTML elements whenever possible. ARIA should only be added when HTML alone cannot provide the necessary accessibility.

---

# `aria-expanded`

## What is `aria-expanded`?

The `aria-expanded` attribute indicates whether a collapsible element is currently **expanded** or **collapsed**.

It is commonly used on:

- Dropdown menus
- Accordions
- Navigation menus
- Disclosure widgets

Screen readers announce whether the element is currently open or closed.

---

## Values

| Value | Meaning |
|--------|----------|
| `"true"` | The controlled element is expanded. |
| `"false"` | The controlled element is collapsed. |

---

## Example

```html
<button id="menuBtn" aria-expanded="false">
  Menu
</button>

<script>
const btn = document.getElementById("menuBtn");

btn.addEventListener("click", () => {
  const expanded =
    btn.getAttribute("aria-expanded") === "true";

  btn.setAttribute(
    "aria-expanded",
    String(!expanded)
  );
});
</script>
```

---

## How It Works

Initially:

```html
aria-expanded="false"
```

The button tells screen readers that the menu is currently closed.

When clicked:

```javascript
const expanded =
btn.getAttribute("aria-expanded") === "true";
```

The code checks whether the menu is already open.

If it is closed:

```javascript
btn.setAttribute(
"aria-expanded",
"true"
);
```

If it is open:

```javascript
btn.setAttribute(
"aria-expanded",
"false"
);
```

The value updates every click.

---

## Key Points

- Used for expandable content.
- Updated dynamically with JavaScript.
- Helps screen readers announce the current state.

---

# `aria-haspopup`

## What is `aria-haspopup`?

The `aria-haspopup` attribute tells assistive technologies that interacting with an element will display a popup.

The popup can be one of several types.

---

## Allowed Values

- `menu`
- `listbox`
- `tree`
- `grid`
- `dialog`
- `true` (same as `menu`)

---

## Example

```html
<button
  id="menubutton"
  aria-haspopup="menu"
  aria-controls="filemenu"
  aria-expanded="false">

  File

</button>

<ul
  id="filemenu"
  role="menu"
  aria-labelledby="menubutton"
  hidden>

  <li role="menuitem" tabindex="-1">
    Open
  </li>

  <li role="menuitem" tabindex="-1">
    New
  </li>

  <li role="menuitem" tabindex="-1">
    Save
  </li>

  <li role="menuitem" tabindex="-1">
    Delete
  </li>

</ul>

<script>

const button =
document.getElementById("menubutton");

const menu =
document.getElementById("filemenu");

button.addEventListener("click", () => {

const expanded =
button.getAttribute("aria-expanded") === "true";

button.setAttribute(
"aria-expanded",
String(!expanded)
);

menu.hidden = expanded;

});

</script>
```

---

## How It Works

The button tells assistive technologies:

> "Opening me will display a menu."

The menu starts hidden.

```html
hidden
```

Clicking the button:

- Updates `aria-expanded`
- Shows or hides the menu

---

## Key Points

- Describes popup behavior.
- Usually paired with `aria-controls`.
- Often used with `aria-expanded`.

---

# `aria-checked`

## What is `aria-checked`?

The `aria-checked` attribute tells assistive technologies whether a custom control is checked.

It is commonly used for:

- Custom checkboxes
- Radio buttons
- Switches
- Listboxes

---

## Values

| Value | Meaning |
|--------|----------|
| `"true"` | Checked |
| `"false"` | Unchecked |
| `"mixed"` | Partially checked |

---

## Example

```html
<div
id="checkbox"
role="checkbox"
aria-checked="true"
tabindex="0"
style="
display:inline-flex;
align-items:center;
gap:6px;
cursor:pointer;">

<span
id="box"
aria-hidden="true"
style="
width:16px;
height:16px;
border:2px solid blue;
background:blue;
display:inline-block;">
</span>

Checkbox

</div>

<script>

const checkbox =
document.getElementById("checkbox");

const box =
document.getElementById("box");

const toggle = () => {

const checked =
checkbox.getAttribute("aria-checked") === "true";

checkbox.setAttribute(
"aria-checked",
String(!checked)
);

box.style.background =
checked ? "white" : "black";

};

checkbox.addEventListener(
"click",
toggle
);

checkbox.addEventListener(
"keydown",
(e) => {

if (
e.key === " " ||
e.key === "Enter"
){

e.preventDefault();

toggle();

}

});

</script>
```

---

## How It Works

When clicked:

- Reads the current checked state.
- Reverses it.
- Updates the visual checkbox.
- Announces the new state to screen readers.

---

## Key Points

- Used on custom checkboxes.
- Should update whenever the state changes.
- Supports keyboard interaction.

---

# `aria-disabled`

## What is `aria-disabled`?

The `aria-disabled` attribute tells assistive technologies that an element is disabled.

Unlike the HTML `disabled` attribute, it **does not** automatically prevent interaction. You must handle that behavior with JavaScript.

---

## Values

| Value | Meaning |
|--------|----------|
| `"true"` | Disabled |
| `"false"` | Enabled |

---

## Example

```html
<div
id="editBtn"
role="button"
tabindex="-1"
aria-disabled="true"
style="
opacity:.5;
cursor:not-allowed;">

Edit

</div>

<button id="toggle">

Toggle Disabled

</button>

<script>

const editBtn =
document.getElementById("editBtn");

const toggleBtn =
document.getElementById("toggle");

toggleBtn.addEventListener("click",()=>{

const disabled =
editBtn.getAttribute("aria-disabled")
=== "true";

editBtn.setAttribute(
"aria-disabled",
String(!disabled)
);

editBtn.tabIndex =
disabled ? 0 : -1;

editBtn.style.opacity =
disabled ? "1" : ".5";

editBtn.style.cursor =
disabled
? "pointer"
: "not-allowed";

});

</script>
```

---

## Key Points

- Announces disabled status.
- Does not disable functionality by itself.
- JavaScript should enforce the disabled behavior.

---

# `aria-selected`

## What is `aria-selected`?

The `aria-selected` attribute tells assistive technologies which item is currently selected.

It is commonly used with:

- Tabs
- Listboxes
- Grids

---

## Example

```html
<div role="tablist">

<button
role="tab"
aria-selected="true">
Tab 1
</button>

<button
role="tab"
aria-selected="false">
Tab 2
</button>

<button
role="tab"
aria-selected="false">
Tab 3
</button>

</div>

<script>

const tabs =
document.querySelectorAll(
'[role="tab"]'
);

tabs.forEach((tab)=>{

tab.addEventListener("click",()=>{

tabs.forEach((t)=>{

t.setAttribute(
"aria-selected",
"false"
);

});

tab.setAttribute(
"aria-selected",
"true"
);

});

});

</script>
```

---

## Key Points

- Indicates the selected item.
- Commonly used in tab interfaces.
- Only one tab is usually selected at a time.

---

# `aria-controls`

## What is `aria-controls`?

The `aria-controls` attribute creates a relationship between an interactive element and the element it controls.

This helps assistive technologies understand how different elements on a page are connected.

---

## Example

```html
<div role="tablist">

<button
role="tab"
id="tab1"
aria-controls="section1"
aria-selected="true">

Tab 1

</button>

<button
role="tab"
id="tab2"
aria-controls="section2"
aria-selected="false">

Tab 2

</button>

<button
role="tab"
id="tab3"
aria-controls="section3"
aria-selected="false">

Tab 3

</button>

</div>
```

---

## Key Points

- Links one element to another.
- Commonly used with tabs, accordions, and menus.
- Improves navigation for screen reader users.

---

# `hidden`

## What is the `hidden` Attribute?

The `hidden` attribute removes an element from both the visual page and the accessibility tree.

Users cannot see it, and screen readers ignore it until it is shown again.

---

## Example

```html
<ul id="menu" hidden>

<li>Home</li>
<li>About</li>
<li>Contact</li>

</ul>
```

JavaScript can reveal it:

```javascript
menu.hidden = false;
```

or

```javascript
menu.removeAttribute("hidden");
```

To hide it again:

```javascript
menu.hidden = true;
```

or

```javascript
menu.setAttribute("hidden", "");
```

---

## Key Points

- Completely hides an element.
- Removes it from assistive technologies.
- Often used with dropdown menus, modals, and accordions.

---

# Summary

In this section, you learned about the most common ARIA accessibility attributes:

- `aria-expanded`
- `aria-haspopup`
- `aria-checked`
- `aria-disabled`
- `aria-selected`
- `aria-controls`
- `hidden`

These attributes improve accessibility by helping assistive technologies understand the current state and relationships of interactive elements. When used correctly with JavaScript, they create web applications that are more usable for everyone

# JavaScript Accessibility Repository

# Part 2: Working with Live Regions and Dynamic Content

---

# What Are Live Regions?

Normally, when content on a webpage changes dynamically using JavaScript, screen readers may not automatically announce those updates.

**Live regions** solve this problem by informing assistive technologies that certain parts of the page may change after the page has loaded.

When the content inside a live region changes, screen readers announce the update to users.

Live regions are especially useful for:

- Status messages
- Notifications
- Form validation
- Shopping cart updates
- Chat applications
- Upload progress
- Search results
- Dynamic content

---

# `aria-live`

## What is `aria-live`?

The `aria-live` attribute turns an element into a **live region**.

Whenever JavaScript updates the contents of that element, screen readers can automatically announce the changes.

This ensures users who rely on assistive technologies are informed about important updates without needing to move keyboard focus.

---

## Syntax

```html
<div aria-live="polite"></div>
```

---

## Allowed Values

| Value | Meaning |
|--------|----------|
| `off` | Updates are not announced automatically. |
| `polite` | Wait until the user is idle before announcing changes. |
| `assertive` | Interrupt the current speech and immediately announce the update. |

---

# `polite`

## What is the `polite` Value?

The `polite` value tells assistive technologies:

> "This update is important, but it is not urgent. Wait until the user finishes what they are currently doing before announcing it."

This is the most commonly used value because it avoids interrupting the user.

---

## Example

```html
<div
aria-live="polite"
id="status">
</div>

<button id="updateStatus">
Update Status
</button>

<script>

const statusEl =
document.getElementById("status");

const btn =
document.getElementById("updateStatus");

btn.addEventListener("click", () => {

statusEl.textContent =
"Your file has been successfully uploaded.";

});

</script>
```

---

## How It Works

Initially:

```html
<div aria-live="polite" id="status"></div>
```

The live region is empty.

When the button is clicked:

```javascript
statusEl.textContent =
"Your file has been successfully uploaded.";
```

JavaScript changes the text inside the live region.

Because the element has:

```html
aria-live="polite"
```

A screen reader waits until the user is idle before announcing:

> "Your file has been successfully uploaded."

---

## Why Use `polite`?

Use it for updates that are helpful but not urgent.

Examples include:

- File uploaded successfully
- Settings saved
- Theme changed
- Item added to cart
- Search completed

---

## Key Points

- Announces updates automatically.
- Waits until the current announcement finishes.
- Does not interrupt the user.
- Most commonly used live region value.

---

# `assertive`

## What is `assertive`?

The `assertive` value tells screen readers to immediately interrupt the current announcement and read the new update.

---

## Example

```html
<div aria-live="assertive">

Payment failed!

</div>
```

A screen reader immediately announces:

> "Payment failed!"

---

## When Should You Use It?

Only for urgent information such as:

- Error messages
- Security alerts
- Payment failures
- Connection lost
- Session expired

Avoid overusing `assertive`, as frequent interruptions can frustrate users.

---

# `contenteditable`

## What is `contenteditable`?

The `contenteditable` attribute turns an HTML element into an editable area.

Instead of displaying static text, users can click inside the element and edit its contents directly.

It behaves similarly to a text input or textarea.

---

## Syntax

```html
<div contenteditable="true">

Editable text

</div>
```

---

## Values

| Value | Meaning |
|--------|----------|
| `true` | The element is editable. |
| `false` | The element is not editable. |

---

## Why Use `aria-label` with `contenteditable`?

Unlike form elements such as `<input>` or `<textarea>`, a `contenteditable` element may not have a visible label.

Adding an accessible name using `aria-label` helps screen readers describe the purpose of the editable region.

---

## Example

```html
<div
contenteditable="true"
aria-label="Note editor"
id="editor"
style="
border:1px solid #ccc;
padding:8px;">

Editable content goes here

</div>

<p
id="status"
aria-live="polite">
</p>

<script>

const editor =
document.getElementById("editor");

const status =
document.getElementById("status");

editor.addEventListener("input", () => {

status.textContent =
"Content updated";

});

</script>
```

---

## How It Works

The editable area starts with:

```html
contenteditable="true"
```

This allows users to:

- Click inside
- Type text
- Delete text
- Paste text

Whenever the content changes:

```javascript
editor.addEventListener("input", () => {

status.textContent =
"Content updated";

});
```

The `input` event fires.

JavaScript updates the live region:

```javascript
status.textContent =
"Content updated";
```

Since the paragraph has:

```html
aria-live="polite"
```

Screen readers announce:

> "Content updated."

---

## Why Listen for the `input` Event?

The `input` event fires whenever the content changes.

Examples include:

- Typing
- Deleting
- Cutting
- Pasting
- Dragging text

This makes it ideal for tracking changes in editable content.

---

## Common Uses of `contenteditable`

- Note-taking apps
- Rich text editors
- CMS editors
- Collaborative editing tools
- Comment systems

---

## Accessibility Tips

Always provide:

- `aria-label`
- Keyboard accessibility
- Visible focus styles
- Instructions if needed

Avoid using `contenteditable` when a normal `<input>` or `<textarea>` is sufficient.

---

# Dynamic Content

## What Is Dynamic Content?

Dynamic content refers to information that changes after the webpage has loaded.

JavaScript often updates content without refreshing the page.

Examples include:

- Notifications
- Search results
- Scores
- Messages
- Cart totals
- User status
- Live chat

Without live regions, screen readers may never announce these updates.

---

## Example

```javascript
status.textContent =
"Profile updated successfully.";
```

Although users can see the updated message, screen readers only announce it automatically if the element is a live region.

---

# Best Practices

- Use `aria-live="polite"` for non-urgent updates.
- Reserve `aria-live="assertive"` for urgent announcements.
- Provide an accessible name for editable regions using `aria-label`.
- Use the `input` event to detect changes in editable content.
- Prefer native form controls (`<input>` and `<textarea>`) unless a rich editing experience is required.
- Keep live region messages short and meaningful.
- Avoid repeatedly updating live regions, as excessive announcements can overwhelm users.

---

# Summary

In this section, you learned about:

- `aria-live`
- The `polite` value
- The `assertive` value
- `contenteditable`
- Dynamic content
- The `input` event
- Accessibility best practices for live regions and editable content

These concepts ensure that users of assistive technologies are informed whenever important content changes dynamically, making web applications more accessible and user-friendly.



# JavaScript Accessibility Repository

# Part 3: `focus` and `blur` Events

---

# What Are Focus Events?

When interacting with a webpage, users move between elements such as:

- Buttons
- Links
- Input fields
- Textareas
- Checkboxes
- Select menus

The browser keeps track of which element the user is currently interacting with. This element is said to have **focus**.

JavaScript provides events that let you detect when an element gains or loses focus.

The two most common focus-related events are:

- `focus`
- `blur`

These events are especially important for:

- Form validation
- Accessibility
- Keyboard navigation
- User feedback
- Interactive applications

---

# What is Focus?

An element has **focus** when it is the active element that receives keyboard input.

Users can focus an element by:

- Clicking it with the mouse
- Pressing the **Tab** key
- Using JavaScript
- Using assistive technologies

For example:

```html
<input type="text">
```

When you click inside the input field, it receives focus.

---

# The `focus` Event

## What is the `focus` Event?

The `focus` event fires whenever an element receives focus.

This allows JavaScript to react immediately when a user begins interacting with an element.

---

## Syntax

```javascript
element.addEventListener("focus", callbackFunction);
```

---

## Example

```html
<input
id="emailInput"
type="email"
placeholder="Click or tab into this field"
aria-label="Email input">

<p
id="status"
aria-live="polite">
</p>

<script>

const input =
document.getElementById("emailInput");

const status =
document.getElementById("status");

input.addEventListener("focus", () => {

status.textContent =
"Input received focus";

});

</script>
```

---

## How It Works

Initially, the input is inactive.

When the user:

- Clicks inside the input
- Tabs into it

the browser fires the `focus` event.

JavaScript then executes:

```javascript
status.textContent =
"Input received focus";
```

Since the paragraph has:

```html
aria-live="polite"
```

A screen reader announces:

> "Input received focus."

---

## Common Uses

The `focus` event is commonly used to:

- Display instructions
- Highlight an input
- Show tooltips
- Display validation hints
- Announce status changes
- Improve accessibility

---

# The `blur` Event

## What is the `blur` Event?

The `blur` event fires whenever an element loses focus.

This happens when the user leaves the element by:

- Clicking somewhere else
- Pressing the **Tab** key
- Moving focus with JavaScript

---

## Syntax

```javascript
element.addEventListener("blur", callbackFunction);
```

---

## Example

```html
<input
id="nameInput"
type="text"
placeholder="Type here and click outside"
aria-label="Name input">

<p
id="status"
aria-live="polite">
</p>

<script>

const input =
document.getElementById("nameInput");

const status =
document.getElementById("status");

input.addEventListener("blur", () => {

status.textContent =
"Input lost focus";

});

</script>
```

---

## How It Works

The user clicks inside the input.

The input now has focus.

When the user clicks somewhere else:

The browser fires:

```javascript
blur
```

JavaScript updates the status message:

```javascript
status.textContent =
"Input lost focus";
```

The screen reader announces the update because of:

```html
aria-live="polite"
```

---

# Difference Between `focus` and `blur`

| Event | Fires When |
|--------|------------|
| `focus` | An element receives focus. |
| `blur` | An element loses focus. |

---

## Example Timeline

Imagine a user interacting with a form.

### Step 1

The page loads.

No input has focus.

---

### Step 2

The user clicks inside an email field.

The browser fires:

```javascript
focus
```

---

### Step 3

The user starts typing.

---

### Step 4

The user clicks somewhere else.

The browser fires:

```javascript
blur
```

---

# Practical Example

```html
<input
id="username"
placeholder="Username">

<script>

const username =
document.getElementById("username");

username.addEventListener("focus", () => {

console.log("User started typing.");

});

username.addEventListener("blur", () => {

console.log("User left the input.");

});

</script>
```

Console output:

```
User started typing.
User left the input.
```

---

# Common Uses

## `focus`

Use it when you want to:

- Highlight an input
- Display instructions
- Open suggestions
- Show a tooltip
- Announce helpful information

---

## `blur`

Use it when you want to:

- Validate a field
- Save changes
- Hide suggestions
- Remove highlights
- Display validation errors

---

# Accessibility Benefits

Using `focus` and `blur` correctly helps users who:

- Navigate with a keyboard
- Use screen readers
- Have motor impairments
- Require additional visual feedback

Providing helpful messages during focus changes improves the overall user experience.

---

# Best Practices

- Make sure interactive elements can receive keyboard focus.
- Do not remove the browser's default focus outline unless you provide a clear replacement.
- Use the `focus` event to provide helpful guidance.
- Use the `blur` event for validation or cleanup tasks.
- Pair dynamic status updates with `aria-live` when appropriate.
- Avoid triggering unnecessary popups or distractions when an element gains focus.

---

# Summary

In this section, you learned about:

- What focus is
- The `focus` event
- The `blur` event
- The differences between `focus` and `blur`
- Common use cases
- Accessibility benefits
- Best practices for handling focus changes

These events are essential for creating accessible, keyboard-friendly, and user-friendly web applications. They allow JavaScript to respond whenever users begin or finish interacting with elements on a webpage.


# JavaScript Accessibility Repository

# Part 4: Accessibility Best Practices

---

# What Are Accessibility Best Practices?

Accessibility best practices are guidelines that help developers create websites and web applications that everyone can use, including people with:

- Visual impairments
- Hearing impairments
- Motor disabilities
- Cognitive disabilities
- Temporary disabilities
- Users who rely on keyboards
- Users who rely on screen readers

Following these practices improves usability for all users, not just those with disabilities.

---

# Use Semantic HTML First

## What is Semantic HTML?

Semantic HTML uses elements that clearly describe their purpose.

Examples include:

- `<button>`
- `<nav>`
- `<main>`
- `<header>`
- `<footer>`
- `<section>`
- `<article>`
- `<form>`

These elements already include built-in accessibility features.

---

## Good Example

```html
<button>Submit</button>
```

A `<button>` is automatically:

- Focusable
- Keyboard accessible
- Recognized by screen readers

---

## Poor Example

```html
<div onclick="submitForm()">
  Submit
</div>
```

A `<div>` is:

- Not keyboard accessible
- Not announced as a button
- Requires additional JavaScript and ARIA attributes

Whenever possible, use semantic HTML instead of generic elements.

---

# Use ARIA Only When Necessary

ARIA is designed to improve accessibility when native HTML cannot provide the required behavior.

For example, instead of this:

```html
<div role="button">
  Submit
</div>
```

Use:

```html
<button>
  Submit
</button>
```

Native HTML is usually the better choice because browsers and assistive technologies already understand it.

---

# Keep ARIA States Updated

ARIA attributes should always reflect the current state of an interface.

For example:

```html
<button
aria-expanded="false">
Menu
</button>
```

When the menu opens:

```javascript
button.setAttribute(
"aria-expanded",
"true"
);
```

If JavaScript changes the interface, the ARIA attributes should also change.

---

# Ensure Keyboard Accessibility

Many users navigate websites without using a mouse.

Users may rely on:

- Tab
- Shift + Tab
- Enter
- Space
- Arrow keys

Every interactive element should be usable from the keyboard.

---

## Example

```javascript
checkbox.addEventListener("keydown", (event) => {

if (
event.key === " " ||
event.key === "Enter"
) {

event.preventDefault();

toggle();

}

});
```

This allows keyboard users to interact with a custom checkbox.

---

# Use Focus Indicators

When an element receives focus, users should easily see where they are on the page.

Browsers provide a default focus outline.

Example:

```css
button:focus {

outline: 2px solid blue;

}
```

Avoid removing focus outlines unless you replace them with another visible indicator.

---

# Provide Accessible Names

Interactive elements should have meaningful names.

For example:

```html
<input
aria-label="Search">
```

or

```html
<button
aria-label="Close dialog">

✕

</button>
```

Without an accessible name, screen readers may not know the purpose of an element.

---

# Use Labels for Form Controls

Every form control should have a label.

Good Example:

```html
<label for="email">

Email Address

</label>

<input
id="email"
type="email">
```

Avoid relying only on placeholders because they disappear when users begin typing.

---

# Use Live Regions for Dynamic Updates

If JavaScript updates content after the page loads, notify assistive technologies.

Example:

```html
<p
id="status"
aria-live="polite">
</p>
```

Later:

```javascript
status.textContent =
"Settings saved successfully.";
```

The screen reader announces the update automatically.

---

# Hide Decorative Content

Images or icons that provide no meaningful information should be hidden from screen readers.

Example:

```html
<span
aria-hidden="true">

★

</span>
```

This prevents unnecessary announcements.

---

# Use the `hidden` Attribute Correctly

The `hidden` attribute completely removes content from both:

- The visual page
- The accessibility tree

Example:

```html
<div hidden>

Hidden content

</div>
```

JavaScript can reveal it later:

```javascript
element.hidden = false;
```

---

# Maintain Logical Heading Structure

Use headings in order.

Correct:

```html
<h1>Main Title</h1>

<h2>Section</h2>

<h3>Subsection</h3>
```

Avoid skipping heading levels unless necessary.

This helps screen reader users navigate pages more efficiently.

---

# Write Meaningful Link Text

Instead of:

```html
<a href="#">
Click Here
</a>
```

Use:

```html
<a href="#">

Download the JavaScript Guide

</a>
```

Meaningful links help users understand where they are going.

---

# Test with a Keyboard

After building a webpage:

Try navigating using only:

- Tab
- Shift + Tab
- Enter
- Space
- Arrow keys

If you cannot use your website without a mouse, keyboard users probably cannot either.

---

# Test with Screen Readers

Popular screen readers include:

- NVDA (Windows)
- JAWS (Windows)
- VoiceOver (macOS and iOS)
- TalkBack (Android)

Testing with assistive technologies helps identify accessibility problems that may not be obvious.

---

# Avoid Color-Only Communication

Never rely only on color to communicate information.

Poor Example:

> Required fields are shown in red.

Better Example:

- Use red
- Add an asterisk (*)
- Include text such as "Required"

This helps users with color vision deficiencies.

---

# Make Error Messages Clear

Instead of:

```
Error
```

Provide specific feedback:

```
Email address is required.
```

Or:

```
Password must contain at least 8 characters.
```

Clear messages help users fix problems quickly.

---

# Best Practices Checklist

Before publishing your website, ask yourself:

- Did I use semantic HTML whenever possible?
- Did I use ARIA only when necessary?
- Are ARIA attributes updated correctly?
- Can every interactive element be accessed using the keyboard?
- Does every form control have a label?
- Do dynamic updates use `aria-live`?
- Are decorative images hidden from screen readers?
- Is the heading structure logical?
- Are focus indicators visible?
- Are links descriptive?
- Can users understand the page without relying only on color?
- Have I tested using both a keyboard and a screen reader?

---

# Summary

In this section, you learned about accessibility best practices that help create websites everyone can use.

These practices include:

- Using semantic HTML
- Using ARIA only when needed
- Keeping ARIA states synchronized with JavaScript
- Supporting keyboard navigation
- Providing visible focus indicators
- Using accessible labels
- Creating live regions for dynamic content
- Hiding decorative elements from assistive technologies
- Testing with keyboards and screen readers
- Writing clear links, headings, and error messages

Following these best practices results in websites that are more inclusive, easier to navigate, and compliant with modern web accessibility standards.
