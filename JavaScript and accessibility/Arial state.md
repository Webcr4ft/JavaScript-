# Common ARIA States Used on Custom Control Elements (Part 1)

# Introduction

In previous lessons, you learned about several ARIA attributes such as:

- `aria-expanded`
- `aria-controls`
- `aria-live`
- `aria-owns`

These attributes help make websites more accessible to people who use assistive technologies like screen readers.

However, there is another group of ARIA attributes called **ARIA States**.

Unlike some ARIA properties that usually describe relationships between elements, ARIA states describe the **current condition** of an element.

Examples include:

- Is this tab selected?
- Is this checkbox checked?
- Is this button disabled?
- Is this popup menu available?
- Is this field required?

These states help assistive technologies accurately communicate what is happening on the page.

---

# Why Native HTML Elements Already Work

HTML already provides many built-in controls.

Examples include:

```html
<input>

<button>

<select>

<textarea>

<fieldset>
```

These elements automatically communicate their state to screen readers.

For example:

```html
<button disabled>
Save
</button>
```

The browser already knows:

- The button is disabled.
- Users cannot click it.
- Keyboard users cannot focus it.
- Screen readers announce that it is disabled.

No extra ARIA is needed.

---

# Native Checkbox Example

```html
<input
type="checkbox"
checked>
```

The browser automatically tells assistive technologies:

> Checkbox checked.

No JavaScript is required.

---

# Native Required Field

```html
<input required>
```

The browser automatically knows:

- This field is required.
- Validation should occur.
- Screen readers announce that the field is required.

Again,

everything is built in.

---

# What Happens with Custom Controls?

Sometimes developers build their own controls.

For example,

instead of using

```html
<button>
```

they create

```html
<div>

Click Me

</div>
```

Visually,

it may look exactly like a button.

But to assistive technologies,

it is still just a `<div>`.

Screen readers might announce:

> "Group"

instead of

> "Button"

This creates accessibility problems.

---

# Why ARIA Is Needed

ARIA allows developers to give custom elements accessibility information.

For example:

```html
<div role="button">

Save

</div>
```

Now screen readers understand:

> This behaves like a button.

But that's only the beginning.

If the button becomes disabled,

ARIA also needs to describe that.

If the button opens a popup,

ARIA needs to describe that.

If it becomes selected,

ARIA needs to describe that too.

---

# Common ARIA States

This lesson introduces five common ARIA states.

They are:

- `aria-selected`
- `aria-disabled`
- `aria-haspopup`
- `aria-required`
- `aria-checked`

Each one communicates a different state.

---

# Understanding `aria-selected`

The first state is:

```html
aria-selected
```

This tells assistive technologies whether an item is currently selected.

Possible values are:

```html
aria-selected="true"
```

or

```html
aria-selected="false"
```

---

# Where Is `aria-selected` Used?

This attribute is commonly used on:

- Tabs
- Listboxes
- Grids
- Tree views
- Custom option lists

Basically,

any interface where users choose one item from multiple choices.

---

# Example: Browser Tabs

Imagine your web browser.

You may have:

```
Home | News | Mail
```

Only one tab is currently active.

That active tab would have:

```html
aria-selected="true"
```

The others would have:

```html
aria-selected="false"
```

---

# HTML Example

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
```

---

# Breaking Down the HTML

## The Tab List

```html
<div role="tablist">
```

Normally,

a `<div>` has no meaning.

Adding

```html
role="tablist"
```

tells assistive technologies:

> This container holds tabs.

---

# The Individual Tabs

```html
<button role="tab">
```

Each button is no longer just a button.

It is now treated as a tab.

---

# Selected Tab

```html
aria-selected="true"
```

Means:

This tab is currently active.

---

# Unselected Tabs

```html
aria-selected="false"
```

Means:

These tabs exist,

but they are not currently selected.

---

# Why Only One Is True

Only one tab should normally have

```html
aria-selected="true"
```

Otherwise,

screen readers would think multiple tabs are active.

---

# CSS Overview

The CSS styles make the tabs look like real application tabs.

Without CSS,

they would simply appear as ordinary buttons.

---

# Styling the Tab Container

```css
[role="tablist"]{
display:flex;
}
```

Notice:

```css
[role="tablist"]
```

This is called an **attribute selector**.

Instead of selecting:

```css
.tablist
```

or

```css
#tablist
```

it selects elements based on attributes.

Meaning:

Select every element whose role equals

```text
tablist
```

---

# display:flex

```css
display:flex;
```

Places the buttons beside each other.

Instead of

```
Tab 1

Tab 2

Tab 3
```

they become

```
Tab1  Tab2  Tab3
```

---

# gap

```css
gap:.25rem;
```

Creates spacing between each tab.

---

# Styling Individual Tabs

```css
[role="tab"]
```

Targets every element whose role is

```text
tab
```

---

# cursor:pointer

```css
cursor:pointer;
```

Shows the hand cursor,

telling users the tab is clickable.

---

# Hover State

```css
[role="tab"]:hover
```

Runs whenever the mouse moves over a tab.

---

# Selected Tab Styling

```css
[role="tab"]
[aria-selected="true"]
```

This selector means:

Select tabs whose

```html
aria-selected
```

equals

```text
true
```

Only the active tab receives these styles.

---

# Focus State

```css
:focus
```

Runs whenever keyboard users select the tab.

This creates a visible outline,

helping keyboard users know where they are.

---

# JavaScript

```javascript
document.addEventListener(
"click",
(event)=>{

const clickedTab=
event.target.closest(
'[role="tab"]'
);

if(!clickedTab) return;

const tablist=
clickedTab.closest(
'[role="tablist"]'
);

const tabs=
tablist.querySelectorAll(
'[role="tab"]'
);

tabs.forEach((tab)=>{

const isSelected=
tab===clickedTab;

tab.setAttribute(
"aria-selected",
isSelected
);

tab.tabIndex=
isSelected?0:-1;

});

});
```

---

# Breaking Down the JavaScript

## Listening for Clicks

```javascript
document.addEventListener(
"click",
(event)=>{
```

This listens for every click anywhere on the page.

---

# event.target

```javascript
event.target
```

This refers to the element that was actually clicked.

Example:

If the user clicks

```
Tab 2
```

then

```javascript
event.target
```

is

```
Tab 2
```

---

# closest()

```javascript
event.target.closest(
'[role="tab"]'
)
```

The

```javascript
closest()
```

method searches upward through parent elements until it finds a matching selector.

If you click text inside a button,

it still finds the surrounding tab button.

---

# Why Use closest()?

Without it,

clicking nested elements inside the button might fail.

Using

```javascript
closest()
```

makes the code much more reliable.

---

# Checking If a Tab Was Clicked

```javascript
if(!clickedTab)
return;
```

If the click wasn't on a tab,

JavaScript stops immediately.

This prevents unnecessary work.

---

# Finding the Parent Tab List

```javascript
clickedTab.closest(
'[role="tablist"]'
)
```

Finds the container holding all the tabs.

---

# querySelectorAll()

```javascript
tablist.querySelectorAll(
'[role="tab"]'
)
```

Returns every tab inside the tab list.

Unlike

```javascript
querySelector()
```

which finds only one element,

```javascript
querySelectorAll()
```

finds every matching element.

---

# NodeList

The result is a

```text
NodeList
```

which behaves similarly to an array.

---

# forEach()

```javascript
tabs.forEach((tab)=>{
```

Loops through every tab one at a time.

Imagine:

```
Tab1

↓

Tab2

↓

Tab3
```

Each tab is processed individually.

---

# Comparing Tabs

```javascript
tab===clickedTab
```

Checks whether the current loop item is the one the user clicked.

If yes,

```javascript
isSelected=true;
```

Otherwise,

```javascript
isSelected=false;
```

---

# Updating aria-selected

```javascript
tab.setAttribute(
"aria-selected",
isSelected
);
```

If the clicked tab is selected,

its HTML becomes:

```html
aria-selected="true"
```

Every other tab becomes:

```html
aria-selected="false"
```

This keeps screen readers informed.

---

# Understanding `tabIndex`

```javascript
tab.tabIndex=
isSelected?0:-1;
```

Only the selected tab receives:

```javascript
0
```

meaning it can receive keyboard focus.

The others receive:

```javascript
-1
```

meaning they cannot be reached using the Tab key,

but JavaScript can still focus them.

This is the recommended accessibility pattern for tab interfaces.

---

# Why Is This Important?

Without updating

```javascript
tabIndex
```

keyboard users would have to press Tab through every single tab.

Instead,

only the active tab participates in normal keyboard navigation.

---

# Best Practices

* Use native HTML controls whenever possible.
* Only create custom controls when necessary.
* Keep ARIA states synchronized with the visual interface.
* Ensure only one tab has `aria-selected="true"` at a time.
* Support both mouse and keyboard interactions.
* Always test custom controls using screen readers and keyboard navigation.

---

# Quick Summary

* Native HTML elements already provide built-in accessibility states.
* Custom controls require ARIA states so assistive technologies understand them.
* `aria-selected` tells screen readers which item is currently selected.
* `role="tablist"` identifies a container of tabs.
* `role="tab"` identifies each individual tab.
* `closest()` searches upward for the nearest matching ancestor.
* `querySelectorAll()` returns all matching elements.
* `forEach()` loops through every tab.
* `tabIndex` controls keyboard focus order.
* Updating `aria-selected` and `tabIndex` together creates an accessible tab interface for both screen reader users and keyboard users.

* 
# Understanding `aria-disabled`

The second ARIA state is:

```html
aria-disabled
```

This attribute tells assistive technologies that an element is **disabled**.

Unlike the native HTML `disabled` attribute, `aria-disabled` only communicates information.

It **does not** actually prevent the user from interacting with the element.

It is the developer's responsibility to make the element behave like a disabled control.

---

# Native `disabled` vs `aria-disabled`

Native HTML:

```html
<button disabled>
Save
</button>
```

The browser automatically:

- Prevents mouse clicks.
- Prevents keyboard focus.
- Applies disabled styling (browser default).
- Announces the button as disabled to screen readers.

Everything happens automatically.

---

# Using `aria-disabled`

```html
<div
role="button"
tabindex="-1"
aria-disabled="true">

Edit

</div>
```

Here, the element is not a real button.

It is simply a `<div>`.

The `role="button"` tells assistive technologies to treat it like a button.

The `aria-disabled="true"` tells screen readers:

> "This button is currently disabled."

However, JavaScript must still stop the button from working.

---

# Why Doesn't `aria-disabled` Disable the Element?

ARIA never changes an element's behavior.

ARIA only provides accessibility information.

For example,

```html
<div aria-disabled="true">
```

still behaves like a normal `<div>` unless JavaScript changes its behavior.

This separation allows developers to create custom controls while still keeping them accessible.

---

# CSS Explanation

The CSS includes:

```css
[role="button"]{
cursor:pointer;
}
```

This gives the cursor a hand icon, indicating that the element is clickable.

---

When the element is disabled:

```css
[role="button"][aria-disabled="true"]
```

only elements with:

```html
aria-disabled="true"
```

receive these styles.

---

# opacity

```css
opacity:.5;
```

Makes the button appear faded.

Users immediately recognize that it is unavailable.

---

# pointer-events

```css
pointer-events:none;
```

This prevents mouse interaction.

The mouse cannot click the element.

---

# cursor

```css
cursor:not-allowed;
```

Instead of a pointing hand,

the cursor becomes a "not allowed" icon.

This visually tells users that interaction is not possible.

---

# Best Practice

Whenever using:

```html
aria-disabled="true"
```

you should also:

- Prevent JavaScript click events.
- Prevent keyboard interaction.
- Apply disabled styling.

---

# Understanding `aria-haspopup`

The next ARIA state is:

```html
aria-haspopup
```

This attribute tells assistive technologies:

> "Activating this element will open a popup."

It does **not** open the popup.

It only informs assistive technologies that one exists.

---

# Supported Popup Types

The value can be:

```text
menu
```

```text
listbox
```

```text
tree
```

```text
grid
```

```text
dialog
```

or

```text
true
```

which defaults to:

```text
menu
```

---

# HTML Example

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
hidden>

<li role="menuitem">Open</li>

<li role="menuitem">New</li>

<li role="menuitem">Save</li>

<li role="menuitem">Delete</li>

</ul>
```

---

# Breaking Down the HTML

## aria-haspopup

```html
aria-haspopup="menu"
```

This tells screen readers:

> This button opens a menu.

Users receive extra context before activating it.

---

## aria-controls

```html
aria-controls="filemenu"
```

Connects the button with:

```html
id="filemenu"
```

---

## aria-expanded

Initially:

```html
aria-expanded="false"
```

Meaning:

The menu is currently closed.

After opening,

JavaScript changes it to:

```html
aria-expanded="true"
```

---

# The Menu

```html
role="menu"
```

The list is no longer just a normal list.

Assistive technologies understand it as an application menu.

---

# Menu Items

Each option has:

```html
role="menuitem"
```

This tells screen readers each item is an actionable menu option.

---

# Hidden Attribute

Initially:

```html
hidden
```

The menu is invisible.

JavaScript removes the hidden state when users activate the button.

---

# Why JavaScript Is Needed

`aria-haspopup` does not display anything.

JavaScript must:

- Show the menu.
- Hide the menu.
- Update `aria-expanded`.
- Support keyboard navigation.
- Move focus between menu items.

ARIA only communicates information.

JavaScript controls behavior.

---

# Understanding `aria-required`

The next ARIA state is:

```html
aria-required
```

This tells assistive technologies:

> This field must be completed before submitting the form.

---

# Native Required Fields

Normally we use:

```html
<input required>
```

The browser automatically:

- Prevents submission.
- Announces that the field is required.
- Performs validation.

---

# Custom Form Controls

Sometimes developers build custom textboxes.

Example:

```html
<div

role="textbox"

contenteditable

aria-required="true">

</div>
```

Since this is not a real `<input>`,

the browser provides no built-in validation.

ARIA communicates that the field is required,

but JavaScript must perform validation.

---

# contenteditable

```html
contenteditable
```

Allows users to type inside an ordinary HTML element.

Without it,

users cannot enter text.

---

# aria-labelledby

```html
aria-labelledby="name-label"
```

Associates the textbox with its visible label.

Instead of reading:

> Textbox

the screen reader announces:

> Full Name.

---

# Should You Always Use aria-required?

No.

If the label already contains:

```text
Required
```

or

```text
*
```

and the screen reader already announces it,

adding:

```html
aria-required="true"
```

may cause duplicate announcements.

Always test with assistive technologies.

---

# Native vs Custom

Whenever possible,

use:

```html
<input>

<textarea>

<select>
```

They already include accessibility support.

Use `aria-required` mainly for custom controls.

---

# Understanding `aria-checked`

The final ARIA state in this lesson is:

```html
aria-checked
```

It tells assistive technologies whether a control is checked.

Possible values:

```html
aria-checked="true"
```

or

```html
aria-checked="false"
```

---

# Where Is aria-checked Used?

Common examples include:

- Custom checkboxes
- Radio buttons
- Toggle switches
- Listboxes

---

# HTML Example

```html
<div

role="checkbox"

aria-checked="true"

tabindex="0">

Checkbox

</div>
```

---

# Breaking Down the HTML

## role="checkbox"

This tells assistive technologies:

Treat this element like a checkbox.

---

## aria-checked

```html
aria-checked="true"
```

Means:

The checkbox is checked.

If changed to:

```html
aria-checked="false"
```

the checkbox is unchecked.

---

## tabindex

```html
tabindex="0"
```

Allows keyboard users to focus the checkbox.

Without it,

users cannot reach the custom checkbox using the Tab key.

---

# CSS Explanation

The CSS uses:

```css
::before
```

to create the checkbox square.

Instead of using an actual checkbox,

CSS draws one before the text.

---

# Checked Styling

When:

```html
aria-checked="true"
```

CSS changes:

- Background color.
- Border color.
- Displays a checkmark icon.

This visually represents a checked checkbox.

---

# Disabled Checkbox

The example also supports:

```html
aria-disabled="true"
```

This makes the checkbox appear disabled.

Again,

JavaScript must prevent interaction.

---

# JavaScript Responsibility

When users click a custom checkbox,

JavaScript should:

- Toggle `aria-checked`.
- Update the visual appearance.
- Notify assistive technologies.
- Support keyboard activation using the Space key.

Without JavaScript,

the checkbox never changes state.

---

# Why Native Controls Are Better

Native HTML controls already include:

- Keyboard support.
- Mouse support.
- Screen reader support.
- Validation.
- Focus management.
- Accessibility APIs.

Custom controls require developers to build all of these manually.

---

# Best Practices

* Use native HTML elements whenever possible.
* Only build custom controls when absolutely necessary.
* Always synchronize ARIA states with visual changes.
* Update ARIA attributes immediately when state changes.
* Support both keyboard and mouse interactions.
* Test custom controls using screen readers.
* Test keyboard navigation without using a mouse.
* Ensure focus management follows accessibility guidelines.

---

# Quick Summary

* `aria-disabled` tells assistive technologies that an element is disabled but does not disable it automatically.
* Developers must use JavaScript and CSS to make custom disabled controls behave correctly.
* `aria-haspopup` tells users that activating an element will open a popup such as a menu, dialog, grid, tree, or listbox.
* `aria-expanded` should be updated whenever popup visibility changes.
* `aria-required` indicates that a custom form field must be completed before submission.
* `contenteditable` allows ordinary HTML elements to accept user input.
* `aria-labelledby` connects controls with visible labels.
* `aria-checked` communicates whether custom checkboxes, switches, and radio buttons are checked.
* Native HTML controls remain the preferred choice because they provide built-in accessibility, validation, and keyboard support.
* When custom controls are necessary, ARIA attributes combined with JavaScript and CSS ensure that assistive technologies accurately understand each control's current state.
