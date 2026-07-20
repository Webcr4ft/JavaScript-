# JavaScript Repository: Understanding the `aria-live` Attribute

## What Is `aria-live`?

The `aria-live` attribute is an **ARIA (Accessible Rich Internet Applications)** attribute that creates a **live region** on a web page.

A live region is an area whose content can change **after the page has already loaded**.

Normally, when JavaScript changes text on a page, sighted users immediately see the update.

However, screen readers do **not** automatically announce those changes.

The `aria-live` attribute tells assistive technologies:

> "Watch this area. If its content changes, announce it to the user."

This allows users relying on screen readers to stay informed about important updates happening on the page.

---

# Why Is `aria-live` Needed?

Imagine filling out a form.

You click the **Submit** button.

A message appears saying:

```text
Your form has been submitted successfully.
```

A sighted user immediately sees the message.

But if a screen reader user's cursor is somewhere else on the page, they may never know that the message appeared.

Without `aria-live`, the update is silent.

With `aria-live`, the screen reader automatically announces the new message.

This keeps everyone informed.

---

# What Is a Live Region?

A live region is simply an HTML element whose content is expected to change while the page is open.

Examples include:

- Success messages
- Error messages
- Countdown timers
- Loading progress
- Chat messages
- Stock tickers
- Sports score updates
- Upload progress
- Shopping cart notifications
- Status updates

These are all examples of dynamic content.

---

# How Does `aria-live` Work?

Suppose you have:

```html
<div aria-live="polite"></div>
```

Initially, the div is empty.

Later, JavaScript changes it to:

```html
<div aria-live="polite">
File uploaded successfully.
</div>
```

Because the element is a live region, the screen reader notices the change and announces it automatically.

Without `aria-live`, nothing would be announced.

---

# The Three Values of `aria-live`

The attribute has three possible values.

- `assertive`
- `polite`
- `off`

Each value controls **how urgently** screen readers announce updates.

---

# `aria-live="assertive"`

This is the highest priority.

Example:

```html
<div aria-live="assertive">
Your session will expire in 30 seconds.
</div>
```

The screen reader immediately interrupts whatever it is currently reading.

It then announces:

> "Your session will expire in 30 seconds."

This happens even if the user is listening to something else.

---

# When Should `assertive` Be Used?

Only for urgent situations.

Examples include:

- Session expiration warnings
- Payment failures
- Critical system errors
- Security warnings
- Emergency alerts
- Important validation errors

These messages cannot wait.

---

# Why Shouldn't `assertive` Be Overused?

Imagine reading an article.

Every few seconds the screen reader suddenly interrupts with unrelated announcements.

This would become extremely frustrating.

Frequent interruptions can:

- Break concentration
- Confuse users
- Reduce accessibility

Therefore:

Use `assertive` only when immediate attention is required.

---

# Example HTML

```html
<div class="session-warning"
aria-live="assertive">

<p>Your session will expire in 30 seconds.</p>

</div>
```

This creates an important live region.

---

# JavaScript Example

```javascript
document.addEventListener(
"DOMContentLoaded",
() => {

const warning =
document.querySelector(
".session-warning"
);

setTimeout(() => {

warning.classList.add("visible");

},100);

setTimeout(() => {

warning.classList.add("fade-out");

},8000);

warning.addEventListener(
"transitionend",
() => {

if(
warning.classList.contains(
"fade-out"
)
){

warning.remove();

}

});

});
```

---

# Breaking Down the JavaScript

## Waiting Until the Page Loads

```javascript
document.addEventListener(
"DOMContentLoaded",
() => {
```

This waits until the HTML has finished loading.

Only then does JavaScript begin working.

---

## Selecting the Warning

```javascript
const warning =
document.querySelector(
".session-warning"
);
```

This finds the warning message.

---

## Showing the Warning

```javascript
setTimeout(() => {

warning.classList.add(
"visible"
);

},100);
```

After 100 milliseconds,

JavaScript adds:

```javascript
visible
```

which activates CSS animations.

---

## Hiding the Warning

```javascript
setTimeout(() => {

warning.classList.add(
"fade-out"
);

},8000);
```

Eight seconds later,

the warning begins disappearing.

---

## Removing It

```javascript
warning.addEventListener(
"transitionend",
() => {

if(
warning.classList.contains(
"fade-out"
)
){

warning.remove();

}

});
```

Once the fade animation finishes,

JavaScript completely removes the element from the page.

---

# `aria-live="polite"`

This is the most commonly used value.

Example:

```html
<div aria-live="polite">

File successfully uploaded.

</div>
```

Unlike `assertive`,

the screen reader waits until it finishes its current announcement.

Then it politely announces the update.

No interruption occurs.

---

# When Should `polite` Be Used?

Most live regions should use `polite`.

Examples include:

- Upload completed
- Download completed
- Settings saved
- New chat message
- Shopping cart updated
- Profile updated
- Item added to wishlist
- Search completed

These updates are useful,

but they are not emergencies.

---

# HTML Example

```html
<div class="upload-success"
aria-live="polite">

<p>File successfully uploaded.</p>

</div>
```

---

# JavaScript Example

```javascript
document.addEventListener(
"DOMContentLoaded",
() => {

const success =
document.querySelector(
".upload-success"
);

setTimeout(() => {

success.classList.add(
"visible"
);

},100);

setTimeout(() => {

success.classList.add(
"fade-out"
);

},8000);

success.addEventListener(
"transitionend",
() => {

if(
success.classList.contains(
"fade-out"
)
){

success.remove();

}

});

});
```

Notice that this code is almost identical to the previous example.

The only difference is the element being selected.

---

# `aria-live="off"`

This is the lowest priority.

Example:

```html
<div aria-live="off">

Current score

</div>
```

With this value,

screen readers generally do **not** announce updates.

The new content is only announced if the user is already focused on that element.

---

# Should You Use `off`?

Usually, no.

Its use cases are extremely limited.

Support also varies between screen readers.

Most developers simply choose:

- `polite`
- `assertive`

---

# Which Value Should You Choose?

Ask yourself:

**Does the user need this information immediately?**

If yes:

```html
aria-live="assertive"
```

If not:

```html
aria-live="polite"
```

In most applications,

`polite` is the correct choice.

---

# Built-in ARIA Roles

Some ARIA roles already include live region behavior.

These include:

- `alert`
- `status`
- `log`
- `marquee`
- `timer`

For example:

```html
<div role="alert">

Payment failed.

</div>
```

This automatically behaves like:

```html
aria-live="assertive"
```

You do not have to add `aria-live`.

---

# Can You Override the Default?

Yes.

Example:

```html
<div
role="status"
aria-live="assertive">

Processing...

</div>
```

The explicit `aria-live` value overrides the role's default behavior.

---

# JavaScript Methods Used

| Method | Purpose |
|---------|---------|
| `querySelector()` | Finds the first matching element. |
| `addEventListener()` | Runs code when an event occurs. |
| `setTimeout()` | Delays execution of code. |
| `classList.add()` | Adds a CSS class to an element. |
| `classList.contains()` | Checks whether an element contains a class. |
| `remove()` | Removes an element from the DOM. |

---

# Events Used

## `DOMContentLoaded`

Runs when the HTML document has finished loading.

---

## `transitionend`

Runs after a CSS transition finishes.

This lets JavaScript know when an animation has completed.

---

# Best Practices

- Use `polite` for most updates.
- Reserve `assertive` only for urgent messages.
- Avoid using `off` unless absolutely necessary.
- Never interrupt users unless the information is truly important.
- Keep announcements short and meaningful.
- Test with multiple screen readers.

---

# Quick Summary

- `aria-live` creates a live region that automatically announces dynamic content updates.
- Without a live region, screen reader users may never know that page content has changed.
- `assertive` immediately interrupts current announcements and should only be used for critical information.
- `polite` waits until the screen reader finishes speaking before announcing updates and is the recommended value for most situations.
- `off` rarely announces updates and has very limited practical use.
- Some ARIA roles such as `alert`, `status`, `log`, `marquee`, and `timer` already include default live region behavior.
- JavaScript commonly works with `aria-live` by updating content dynamically while CSS animations provide visual feedback.
- Choosing the correct `aria-live` value ensures that users receive updates based on the importance of the information without creating unnecessary interruptions.
