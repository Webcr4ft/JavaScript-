# What Are Regular Expressions (Regex), and What Are Some Common Methods?

Regular expressions, commonly called **regex**, are a powerful feature supported by many programming languages, including JavaScript.

A regular expression is a special pattern used to:

* Check whether a string contains specific text.
* Search for matching text.
* Extract text from a string.
* Replace text with something else.
* Validate user input.

Think of a regular expression as a **search pattern** instead of ordinary text.

---

# Creating a Regular Expression

The most common way to create a regular expression is by writing the pattern between two forward slashes (`/`).

```javascript
const regex = /freeCodeCamp/;
```

## Explanation

* `const` declares a variable.
* `regex` is the variable name.
* `/freeCodeCamp/` is the regular expression.
* The forward slashes (`/`) tell JavaScript that this is a regex pattern.

> **Note:** Do **not** confuse a regular expression with a JavaScript comment.

A comment looks like this:

```javascript
// This is a comment
```

A regular expression looks like this:

```javascript
/freeCodeCamp/
```

Although both use forward slashes, they serve completely different purposes.

---

# What Does This Regular Expression Match?

```javascript
const regex = /freeCodeCamp/;
```

This regular expression matches the exact text:

`freeCodeCamp`

For a match to occur:

* Every letter must be present.
* The letters must be in the correct order.
* The capitalization must be exactly the same.

For example:

```text
freeCodeCamp
```

matches successfully.

But these do **not** match:

```text
freecodecamp
FREECODECAMP
FreeCodeCamp
```

because regular expressions are **case-sensitive** by default.

---

# Creating a Regular Expression with the `RegExp` Constructor

Sometimes your pattern isn't written directly inside the regex.

Instead, it may come from a variable.

Example:

```javascript
const pattern = "freeCodeCamp";
const regex = new RegExp(pattern);
```

### Explanation

* `"freeCodeCamp"` is stored inside the variable `pattern`.
* `new RegExp(pattern)` creates a regular expression using the value stored in that variable.

This is equivalent to writing:

```javascript
const regex = /freeCodeCamp/;
```

Both versions produce the exact same regular expression.

---

# The `test()` Method

After creating a regular expression, you'll usually want to check whether a string matches it.

The first method used for this is `test()`.

`test()` belongs to **RegExp** objects.

It accepts a string and returns either:

* `true`
* `false`

depending on whether the string matches the pattern.

Example:

```javascript
const regex = /freeCodeCamp/;

const test = regex.test("e");

console.log(test);
```

### Output

```javascript
false
```

---

# Why Did It Return `false`?

Many beginners expect this to return `true` because the word `freeCodeCamp` contains the letter `e`.

However, regex works the opposite way.

The regular expression asks:

> **"Does this string match my pattern?"**

It does **not** ask:

> **"Does my pattern contain this string?"**

Our pattern is:

```text
freeCodeCamp
```

The string being tested is:

```text
e
```

The string does **not** contain the complete pattern, so JavaScript returns:

```javascript
false
```

---

# More `test()` Examples

```javascript
const regex = /freeCodeCamp/;

console.log(regex.test("freeCodeCamp"));
console.log(regex.test("freeCodeCamp is great"));
console.log(regex.test("I love freeCodeCamp"));
console.log(regex.test("freecodecamp"));
console.log(regex.test("FREECODECAMP"));
console.log(regex.test("free"));
console.log(regex.test("code"));
console.log(regex.test("camp"));
```

### Output

```javascript
true
true
true
false
false
false
false
false
```

---

# Understanding Each Result

## Example 1

```javascript
regex.test("freeCodeCamp");
```

Returns:

```javascript
true
```

The string exactly matches the pattern.

---

## Example 2

```javascript
regex.test("freeCodeCamp is great");
```

Returns:

```javascript
true
```

The pattern appears at the beginning of the string.

---

## Example 3

```javascript
regex.test("I love freeCodeCamp");
```

Returns:

```javascript
true
```

The pattern appears later in the string.

Regex only checks whether the complete pattern exists somewhere inside the string.

---

## Example 4

```javascript
regex.test("freecodecamp");
```

Returns:

```javascript
false
```

The capitalization is different.

Remember:

* Regular expressions are **case-sensitive** by default.

---

## Example 5

```javascript
regex.test("FREECODECAMP");
```

Returns:

```javascript
false
```

Again, the capitalization does not match.

---

## Example 6

```javascript
regex.test("free");
```

Returns:

```javascript
false
```

Only part of the pattern exists.

The regex is looking for:

`freeCodeCamp`

—not—

`free`

---

## Example 7

```javascript
regex.test("code");
```

Returns:

```javascript
false
```

Again, only a portion of the pattern exists.

---

## Example 8

```javascript
regex.test("camp");
```

Returns:

```javascript
false
```

The complete pattern is missing.

---

# Summary of `test()`

The `test()` method answers only one question:

> **"Does this string contain a match?"**

It returns:

* `true` if a match exists.
* `false` if no match exists.

Nothing more.

---

# The `match()` Method

Sometimes `true` or `false` isn't enough.

You may want detailed information about the match.

Strings provide the `match()` method.

Unlike `test()`, `match()` belongs to **String** objects.

It accepts a regular expression as its argument.

Example:

```javascript
const regex = /freeCodeCamp/;

const match = "freeCodeCamp".match(regex);

console.log(match);
```

### Output

```javascript
[
  "freeCodeCamp",
  index: 0,
  input: "freeCodeCamp",
  groups: undefined
]
```

Instead of returning a boolean, `match()` returns a **match array**.

---

# Understanding the Match Array

```javascript
[
  "freeCodeCamp",
  index: 0,
  input: "freeCodeCamp",
  groups: undefined
]
```

### `"freeCodeCamp"`

The actual text that matched.

### `index`

```javascript
index: 0
```

Shows where the match starts.

### `input`

```javascript
input: "freeCodeCamp"
```

Shows the original string.

### `groups`

```javascript
groups: undefined
```

Stores captured groups.

You'll learn about capturing groups in a future lesson.

---

# More `match()` Examples

```javascript
const regex = /freeCodeCamp/;

console.log("freeCodeCamp".match(regex));

console.log("freeCodeCamp is great".match(regex));

console.log("I love freeCodeCamp".match(regex));

console.log("freecodecamp".match(regex));

console.log("FREECODECAMP".match(regex));

console.log("free".match(regex));
```

### Output

```javascript
["freeCodeCamp", index: 0, input: "freeCodeCamp", groups: undefined]

["freeCodeCamp", index: 0, input: "freeCodeCamp is great", groups: undefined]

["freeCodeCamp", index: 7, input: "I love freeCodeCamp", groups: undefined]

null

null

null
```

---

# Why Did the `index` Change?

Consider these two strings:

```text
freeCodeCamp is great
```

and

```text
I love freeCodeCamp
```

In the first string, the match starts immediately.

Therefore:

```javascript
index: 0
```

In the second string:

`I love `

comes first.

The match begins after seven characters.

Therefore:

```javascript
index: 7
```

---

# When Does `match()` Return `null`?

If no match exists, `match()` returns:

```javascript
null
```

Examples:

```javascript
"freecodecamp".match(regex);

"FREECODECAMP".match(regex);

"free".match(regex);
```

All return:

```javascript
null
```

because none of them exactly match the pattern.

---

# The `replace()` Method

Sometimes you don't want to simply find text.

Instead, you want to replace it.

JavaScript provides the `replace()` method.

Suppose someone typed:

```text
freecodecamp is rly kewl
```

First, create a regex that matches the lowercase version.

```javascript
const regex = /freecodecamp/;

const str = "freecodecamp is rly kewl";
```

Now replace it.

```javascript
const replaced = str.replace(regex, "freeCodeCamp");

console.log(replaced);
```

### Output

```text
freeCodeCamp is rly kewl
```

---

# How `replace()` Works

The syntax is:

```javascript
replace(pattern, replacement);
```

It accepts **two arguments**.

* The regular expression (or string) to search for.
* The replacement text (or a function).

Example:

```javascript
str.replace(regex, "freeCodeCamp");
```

Here:

* `regex` tells JavaScript what to find.
* `"freeCodeCamp"` tells JavaScript what to replace it with.

---

# What Does `replace()` Return?

`replace()` does **not** modify the original string.

Instead, it returns a **new string** containing the replacement.

Example:

```javascript
const regex = /freecodecamp/;

const str = "freecodecamp is rly kewl";

const replaced = str.replace(regex, "freeCodeCamp");

console.log(replaced);
```

Output:

```text
freeCodeCamp is rly kewl
```

The original string stored in `str` remains unchanged unless you assign the returned value back to it.

---

# Summary

Regular expressions are powerful tools used to:

* Search text.
* Match text.
* Validate input.
* Extract information.
* Replace text.

The three methods introduced in this lesson are:

| Method | Belongs To | Returns | Purpose |
|---------|------------|---------|---------|
| `test()` | `RegExp` | `true` or `false` | Checks whether a string matches a pattern. |
| `match()` | `String` | Match array or `null` | Returns detailed information about the match. |
| `replace()` | `String` | A new string | Replaces matching text with new text. |

Although regular expressions may seem confusing at first, they become much easier with practice. Future lessons will introduce concepts such as character classes, quantifiers, flags, anchors, groups, and many other advanced regex features.
