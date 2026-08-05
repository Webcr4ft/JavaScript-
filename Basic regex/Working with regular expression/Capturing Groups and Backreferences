# What Are Capturing Groups and Backreferences, and How Do They Work?

A **capturing group** allows you to **capture part of a matched string** so that you can use it later.

The captured text can be reused in:

* The result returned by `match()`.
* A `replace()` operation.
* Another part of the same regular expression.

Capturing groups are one of the most powerful features of regular expressions because they let you **save and reuse matched text** instead of writing it multiple times.

---

# Creating a Capturing Group

A capturing group is created by placing the pattern you want to capture inside **parentheses**.

Unlike lookaheads and lookbehinds, there are **no special characters** before the parentheses.

Example:

```javascript
const regex = /free(code)camp/i;
```

Here:

```text
(code)
```

is the capturing group.

The regular expression still matches:

```text
freecodecamp
```

but it also **captures** the word:

```text
code
```

for later use.

---

# Testing the Capturing Group

```javascript
const regex = /free(code)camp/i;

console.log(regex.test("freecodecamp")); // true
```

The `test()` method simply tells us whether the pattern matches.

Output:

```javascript
true
```

However, this doesn't actually show us what was captured.

To see the captured text, we should use `match()`.

---

# Viewing Captured Groups with `match()`

```javascript
const regex = /free(code)camp/i;

console.log("freecodecamp".match(regex));
```

Output:

```javascript
[
  "freecodecamp",
  "code",
  index: 0,
  input: "freecodecamp",
  groups: undefined
]
```

---

# Understanding the Match Array

Notice something new.

The returned array now contains:

```javascript
[
  "freecodecamp",
  "code"
]
```

The first element:

```javascript
"freecodecamp"
```

is the **entire match**.

The second element:

```javascript
"code"
```

is the **captured group**.

Every capturing group adds another element to the match array.

---

# Capturing Groups vs Character Classes

Notice that the capturing group matches:

```text
code
```

as an entire pattern.

This is different from a character class.

For example:

```javascript
[code]
```

does **not** match the word:

```text
code
```

Instead, it matches **one character** that is either:

* `c`
* `o`
* `d`
* `e`

Capturing groups match complete patterns.

Character classes match individual characters.

---

# Using Capturing Groups with `replace()`

Capturing groups are commonly used when replacing parts of a string.

Suppose we want to change:

```text
freecodecamp
```

into:

```text
paidcodeworld
```

We can write:

```javascript
const regex = /free(code)camp/i;

console.log(
  "freecodecamp".replace(regex, "paidcodeworld")
);
```

This works perfectly.

---

# The Problem

Suppose we don't know exactly how many:

```text
o
```

characters appear inside:

```text
code
```

Maybe the string contains:

```text
coooooooode
```

We can modify our regular expression to allow one or more `o` characters.

```javascript
const regex = /free(co+de)camp/i;

console.log(
  "freecoooooooodecamp".replace(regex, "paidcodeworld")
);
```

The output becomes:

```text
paidcodeworld
```

Unfortunately, all of those extra:

```text
o
```

characters disappear.

We want to preserve them.

---

# Backreferences

This is where **backreferences** become useful.

Instead of writing:

```text
code
```

manually inside the replacement string, we can reuse the text captured by our regular expression.

In a `replace()` call, a backreference is written using:

```text
$
```

followed by the capture group's number.

Since:

```text
(co+de)
```

is our **first** capturing group, we reference it with:

```text
$1
```

Example:

```javascript
const regex = /free(co+de)camp/i;

console.log(
  "freecoooooooodecamp".replace(
    regex,
    "paid$1world"
  )
);

// paidcoooooooodeworld
```

---

# Understanding `$1`

The replacement string:

```text
paid$1world
```

means:

* Write:

```text
paid
```

* Insert whatever the **first capture group matched**.
* Then write:

```text
world
```

If the capture group matched:

```text
coooooooode
```

the final result becomes:

```text
paidcoooooooodeworld
```

The number of `o` characters is preserved automatically.

---

# Backreferences Inside Regular Expressions

Backreferences are not limited to `replace()`.

You can also use them **inside another regular expression**.

This allows you to require the **same captured text** to appear later in the pattern.

Suppose we want to match:

```text
freecooooodecamp ... freecooooodecamp
```

with the **same number of `o` characters**.

First, we might write:

```javascript
const regex =
/free(co+de)camp.*free(co+de)camp/i;
```

The wildcard:

```text
.*
```

allows any number of characters to appear between the two words.

However, this pattern does **not** guarantee that both words contain the same number of `o` characters.

---

# Backreferences in Regular Expressions

To require the second occurrence to match the **first captured group**, replace the second capture group with a backreference.

Inside a regular expression, a backreference is written using:

```text
\
```

followed by the capture group's number.

Example:

```javascript
const regex =
/free(co+de)camp.*free\1camp/i;
```

---

# Testing the Backreference

```javascript
const regex =
/free(co+de)camp.*free\1camp/i;

console.log(
regex.test(
"freecooooodecamp is great I love freecooooodecamp"
)
); // true

console.log(
regex.test(
"freecooooodecamp is great I love freecodecamp"
)
); // false
```

---

# Understanding the Results

The first string passes because both words contain the **same captured pattern**.

The second string fails because:

* The first word contains several `o` characters.
* The second word contains fewer.

The backreference requires them to be identical.

---

# Named Capturing Groups

Using numbers like:

```text
\1
\2
\3
```

works well for small regular expressions.

However, larger expressions can become difficult to read.

Thankfully, JavaScript lets you give capture groups **names**.

To create a named capturing group:

* Start with `?`.
* Write the name inside `< >`.

Example:

```javascript
const regex =
/free(?<code>co+de)camp.*free\1camp/i;
```

Here, the capture group is named:

```text
code
```

---

# Named Backreferences

Once a group has a name, you can reference it by name instead of number.

In JavaScript, a named backreference is written as:

```text
\k<name>
```

Example:

```javascript
const regex =
/free(?<code>co+de)camp.*free\k<code>camp/i;
```

---

# Testing the Named Backreference

```javascript
const regex =
/free(?<code>co+de)camp.*free\k<code>camp/i;

console.log(
regex.test(
"freecooooodecamp is freecooooodecamp"
)
); // true
```

The named backreference behaves exactly like `\1`.

It simply makes the regular expression easier to read.

---

# Named Backreferences in `replace()`

Named capture groups can also be used with `replace()`.

Instead of:

```text
$1
```

you write:

```text
$<name>
```

Example:

```javascript
const regex =
/free(?<code>co+de)camp/i;

console.log(
"freecooooodecamp".replace(
regex,
"paid$<code>camp"
)
);

// paidcooooodecamp
```

---

# Non-Capturing Groups

Sometimes you need to group patterns together **without saving the matched text**.

Suppose you want to match either:

```text
freecodecamp
```

or:

```text
freecandycamp
```

One solution is:

```javascript
const regex =
/freecodecamp|freecandycamp/i;
```

Although this works, it can become difficult to read as more alternatives are added.

---

# Using a Non-Capturing Group

Instead, create a **non-capturing group**.

A non-capturing group begins with:

```text
?:
```

Example:

```javascript
const regex =
/free(?:code|candy)camp/i;
```

---

# Understanding Non-Capturing Groups

The group:

```text
(?:code|candy)
```

matches either:

* `code`
* `candy`

However, unlike a normal capturing group, it **does not store the matched value** in memory.

This makes non-capturing groups useful when you only need grouping for:

* Alternatives (`|`)
* Quantifiers
* Organization

without creating unnecessary capture groups.

---

# Summary

Capturing groups and backreferences allow you to save matched text and reuse it later.

Here are the most important concepts:

| Syntax | Meaning |
|--------|---------|
| `(pattern)` | Creates a capturing group. |
| `$1`, `$2`, ... | References captured groups inside `replace()`. |
| `\1`, `\2`, ... | References captured groups inside another regular expression. |
| `(?<name>...)` | Creates a named capturing group. |
| `\k<name>` | References a named capturing group inside a regular expression. |
| `$<name>` | References a named capturing group inside `replace()`. |
| `(?:...)` | Creates a non-capturing group. |

Capturing groups and backreferences make regular expressions far more powerful by allowing you to **capture**, **reuse**, and **compare** matched text while keeping your patterns clean and efficient.
