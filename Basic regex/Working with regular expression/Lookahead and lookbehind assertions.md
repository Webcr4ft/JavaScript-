# What Are Lookahead and Lookbehind Assertions, and How Do They Work?

Lookahead and lookbehind assertions allow you to **match specific patterns based on the presence or absence of surrounding patterns**.

Unlike normal regular expressions, these assertions **check a condition** without making that condition part of the actual match.

There are **four types** of assertions:

* Positive Lookahead (`?=`)
* Negative Lookahead (`?!`)
* Positive Lookbehind (`?<=`)
* Negative Lookbehind (`?<!`)

---

# Positive Lookahead (`?=`)

The first type is the **positive lookahead assertion**.

A positive lookahead matches a pattern **only if it is immediately followed by another pattern**.

## Syntax

To create a positive lookahead:

1. Write the pattern you want to match.
2. Add parentheses.
3. Inside the parentheses, begin with `?=`.
4. Write the pattern that must immediately follow.

Example:

```javascript
const regex = /free(?=code)/i;
```

This regular expression matches the word:

```text
free
```

**only if it is immediately followed by:**

```text
code
```

Notice that **`code` is only checked—it is not included in the match.**

---

# Testing a Positive Lookahead

```javascript
const regex = /free(?=code)/i;

console.log(regex.test("freeCodeCamp")); // true

console.log(regex.test("free code camp")); // false

console.log(
  regex.test("I need someone for free to write code for me")
); // false
```

---

# Understanding the Results

### First Example

```text
freeCodeCamp
```

Result:

```javascript
true
```

Why?

Because:

```text
free
```

is immediately followed by:

```text
Code
```

The `i` flag ignores uppercase and lowercase differences.

---

### Second Example

```text
free code camp
```

Result:

```javascript
false
```

Although `free` is followed by `code`, there is a **space** between them.

The lookahead requires:

```text
freecode
```

with **no characters in between**.

---

### Third Example

```text
I need someone for free to write code for me
```

Result:

```javascript
false
```

Again, `free` is **not immediately followed** by `code`.

Several words appear between them, so the condition fails.

---

# Negative Lookahead (`?!`)

What if you want to match:

```text
free
```

**only when it is NOT followed by**

```text
code
```

Instead of using a positive lookahead, you use a **negative lookahead**.

To create one, simply replace:

```text
?=
```

with:

```text
?!
```

Example:

```javascript
const regex = /free(?!code)/i;
```

This regular expression matches:

```text
free
```

only when it is **not immediately followed** by:

```text
code
```

---

# Testing a Negative Lookahead

```javascript
const regex = /free(?!code)/i;

console.log(regex.test("freeCodeCamp")); // false

console.log(regex.test("free code camp")); // true

console.log(
  regex.test("I need someone for free to write code for me")
); // true
```

---

# Understanding the Results

The results are now the **opposite** of the positive lookahead.

Only the first string fails because:

```text
free
```

is immediately followed by:

```text
Code
```

The other two strings pass because `free` is **not immediately followed** by `code`.

---

# Lookbehind Assertions

Lookbehind assertions work very similarly to lookahead assertions.

The difference is:

* **Lookahead** checks what comes **after** the pattern.
* **Lookbehind** checks what comes **before** the pattern.

Instead of asking:

> "What follows this text?"

it asks:

> "What comes before this text?"

---

# Positive Lookbehind (`?<=`)

A positive lookbehind is written using:

```text
?<=
```

instead of:

```text
?=
```

Suppose you want to match:

```text
code
```

only when it is immediately preceded by:

```text
free
```

You can write:

```javascript
const regex = /(?<=free)code/i;
```

---

# Testing a Positive Lookbehind

```javascript
const regex = /(?<=free)code/i;

console.log(regex.test("freeCodeCamp")); // true

console.log(regex.test("free code camp")); // false

console.log(
  regex.test("I need someone for free to write code for me")
); // false
```

---

# Understanding the Results

Just like the positive lookahead:

Only the first string matches.

Why?

Because:

```text
code
```

is immediately preceded by:

```text
free
```

The other examples fail because `free` is separated from `code` by spaces or other words.

---

# Negative Lookbehind (`?<!`)

Suppose you want to match:

```text
code
```

only when it is **NOT immediately preceded** by:

```text
free
```

Replace:

```text
?<=
```

with:

```text
?<!
```

Example:

```javascript
const regex = /(?<!free)code/i;
```

---

# Testing a Negative Lookbehind

```javascript
const regex = /(?<!free)code/i;

console.log(regex.test("freeCodeCamp")); // false

console.log(regex.test("free code camp")); // true

console.log(
  regex.test("I need someone for free to write code for me")
); // true
```

---

# Understanding the Results

This regular expression matches every occurrence of:

```text
code
```

that is **not immediately preceded** by:

```text
free
```

Only the first example fails because:

```text
freecode
```

appears together.

---

# Using `match()` with Lookbehind

Remember that:

```javascript
RegExp.prototype.test()
```

only tells you **whether a match exists**.

It does **not** show what was matched.

Let's use:

```javascript
String.prototype.match()
```

instead.

```javascript
const regex = /(?<!free)code/i;

console.log("freeCodeCamp".match(regex));
// null

console.log("free code camp".match(regex));
// ['code', index: 5, input: 'free code camp', groups: undefined]

console.log(
  "I need someone for free to write code for me".match(regex)
);
// ['code', index: 33, input: 'I need someone for free to write code for me', groups: undefined]
```

---

# Why Doesn't the Match Include `free`?

Notice something important.

Even though the regular expression checks for:

```text
free
```

using a lookbehind...

...the returned match **does not include** the word:

```text
free
```

Instead, the only matched text is:

```text
code
```

This is one of the biggest advantages of lookahead and lookbehind assertions.

They **check conditions without becoming part of the match**.

---

# Summary

Lookahead and lookbehind assertions allow you to **match text based on surrounding patterns** without including those surrounding patterns in the final result.

There are four types:

| Assertion | Syntax | Meaning |
|-----------|--------|---------|
| Positive Lookahead | `(?=...)` | Match only if followed by a pattern. |
| Negative Lookahead | `(?!...)` | Match only if **not** followed by a pattern. |
| Positive Lookbehind | `(?<=...)` | Match only if preceded by a pattern. |
| Negative Lookbehind | `(?<!...)` | Match only if **not** preceded by a pattern. |

These assertions are incredibly useful when you need to **conditionally match text without affecting the value returned by the match**.
