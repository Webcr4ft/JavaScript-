# What Are Regex Quantifiers, and How Do They Work?

Let's learn about **quantifiers** in regular expressions.

Quantifiers control **how many times** the preceding character, character class, or group is allowed to appear in a match.

Instead of repeating the same pattern multiple times, you can use quantifiers to write shorter, cleaner, and more readable regular expressions.

---

# Matching Exactly Four Digits

Imagine you want to match a **four-digit identification code**.

You already know that:

```javascript
\d
```

matches a single digit.

One way to match four digits is to write `\d` four times and use anchors to ensure nothing else appears before or after the digits.

```javascript
const regex = /^\d\d\d\d$/;
```

This regular expression works because:

* `^` matches the beginning of the string.
* `\d` matches one digit.
* Four `\d` patterns match four digits.
* `$` matches the end of the string.

However, writing the same character class repeatedly is unnecessary.

This is where **quantifiers** become useful.

---

# Using Quantifiers

Quantifiers are written using **curly braces (`{}`)** containing one or two numbers.

Let's rewrite the previous regular expression using a quantifier.

```javascript
const regex = /^\d{4}$/;
```

---

# Understanding `{4}`

The quantifier:

```javascript
{4}
```

means:

> Match the previous character or character class **exactly four times**.

Since it follows `\d`, it means:

* Match exactly **four digits**.

---

# Testing the Pattern

```javascript
const regex = /^\d{4}$/;

console.log(regex.test("123"));     // false
console.log(regex.test("1234"));    // true
console.log(regex.test("12345"));   // false
console.log(regex.test("123456"));  // false
console.log(regex.test("1234567")); // false
```

---

# Understanding the Results

Only:

```text
1234
```

returns:

```javascript
true
```

because:

* The anchors require the **entire string** to match.
* `{4}` allows **exactly four digits**.

Every other example fails because it contains either too few or too many digits.

---

# Matching Four or More Digits

Suppose the identification code only needs a **minimum of four digits**, with no upper limit.

To do this, place a comma after the minimum value.

```javascript
const regex = /^\d{4,}$/;
```

---

# Understanding `{4,}`

The quantifier:

```javascript
{4,}
```

means:

> Match the previous character **four or more times**.

There is:

* A minimum of **4**.
* No maximum limit.

---

# Testing the Pattern

```javascript
const regex = /^\d{4,}$/;

console.log(regex.test("123"));     // false
console.log(regex.test("1234"));    // true
console.log(regex.test("12345"));   // true
console.log(regex.test("123456"));  // true
console.log(regex.test("1234567")); // true
```

---

# Understanding the Results

Now every string containing **four or more digits** passes.

Only:

```text
123
```

fails because it contains fewer than four digits.

---

# Matching Between Four and Six Digits

Suppose the requirements change.

Now an identifier must contain:

* At least **4** digits.
* At most **6** digits.

To set both a minimum and a maximum, include a second number after the comma.

```javascript
const regex = /^\d{4,6}$/;
```

---

# Understanding `{4,6}`

The quantifier:

```javascript
{4,6}
```

means:

> Match the previous character **at least 4 times but no more than 6 times**.

---

# Testing the Pattern

```javascript
const regex = /^\d{4,6}$/;

console.log(regex.test("123"));     // false
console.log(regex.test("1234"));    // true
console.log(regex.test("12345"));   // true
console.log(regex.test("123456"));  // true
console.log(regex.test("1234567")); // false
```

---

# Understanding the Results

The regular expression now accepts:

* 4 digits
* 5 digits
* 6 digits

It rejects:

* Fewer than 4 digits.
* More than 6 digits.

Notice that:

```text
1234567
```

fails because it exceeds the maximum limit.

---

# Can You Specify Only a Maximum?

No.

You **cannot** write a quantifier that specifies **only a maximum value**.

A minimum value is always required.

For example, this is **not valid**:

```javascript
{,6}
```

However, if you want a maximum of six, you can achieve nearly the same effect by setting the minimum to **1**.

---

# Making a Letter Optional

Suppose the requirements change again.

Identifiers may now **optionally start with a letter**.

You already know how to match letters.

Let's add a character class before the digits.

```javascript
const regex = /^[a-zA-Z]\d{4,6}$/;
```

This regular expression matches:

* One letter.
* Followed by 4–6 digits.

---

# The Problem

There is one issue.

This pattern **requires** a letter.

It does **not** make the letter optional.

---

# Using `{0,1}`

One solution is to use a quantifier.

```javascript
const regex = /^[a-zA-Z]{0,1}\d{4,6}$/;
```

The quantifier:

```javascript
{0,1}
```

means:

* Match **zero or one** occurrence.

So the letter becomes optional.

---

# The `?` Quantifier

There is an even shorter way.

Instead of:

```javascript
{0,1}
```

you can use the **question mark (`?`)**.

```javascript
const regex = /^[a-zA-Z]?\d{4,6}$/;
```

The `?` quantifier means:

> Match the previous character **zero or one time**.

---

# Testing the Pattern

```javascript
const regex = /^[a-zA-Z]?\d{4,6}$/;

console.log(regex.test("123"));      // false
console.log(regex.test("a1234"));    // true
console.log(regex.test("12345"));    // true
console.log(regex.test("az12345"));  // false
console.log(regex.test("X123456"));  // true
console.log(regex.test("1234567"));  // false
```

---

# Understanding the Results

The pattern now allows:

* One optional letter.
* Followed by 4–6 digits.

It rejects:

* Two letters (`az12345`).
* More than six digits.
* Fewer than four digits.

---

# Matching Zero or More Letters

Unfortunately, the requirements change again.

Now identifiers should allow **any number of letters** before the digits.

One way is:

```javascript
const regex = /^[a-zA-Z]{0,}\d{4,6}$/;
```

The quantifier:

```javascript
{0,}
```

means:

> Match zero or more occurrences.

However, there is an easier shorthand.

---

# The `*` Quantifier

The asterisk (`*`) is shorthand for:

```text
{0,}
```

So the regular expression becomes:

```javascript
const regex = /^[a-zA-Z]*\d{4,6}$/;
```

---

# Testing the Pattern

```javascript
const regex = /^[a-zA-Z]*\d{4,6}$/;

console.log(regex.test("123"));      // false
console.log(regex.test("a1234"));    // true
console.log(regex.test("12345"));    // true
console.log(regex.test("az12345"));  // true
console.log(regex.test("X123456"));  // true
console.log(regex.test("1234567"));  // false
```

---

# Understanding the Results

The pattern now accepts:

* Zero letters.
* One letter.
* Multiple letters.

All followed by **4–6 digits**.

---

# Requiring At Least One Letter

Suppose the requirements change once again.

Now every identifier **must begin with at least one letter**.

You could write:

```javascript
{1,}
```

or use the shorthand:

```text
+
```

---

# The `+` Quantifier

The plus sign (`+`) means:

> Match the previous character **one or more times**.

Example:

```javascript
const regex = /^[a-zA-Z]+\d{4,6}$/;
```

---

# Testing the Pattern

```javascript
const regex = /^[a-zA-Z]+\d{4,6}$/;

console.log(regex.test("123"));      // false
console.log(regex.test("a1234"));    // true
console.log(regex.test("12345"));    // false
console.log(regex.test("az12345"));  // true
console.log(regex.test("X123456"));  // true
console.log(regex.test("1234567"));  // false
```

---

# Understanding the Results

Now every identifier **must start with at least one letter**.

Identifiers that begin with only numbers fail, regardless of how many digits they contain.

---

# Summary

Regex quantifiers allow you to control **how many times** a character, character class, or group can appear.

Here are the most common quantifiers:

| Quantifier | Meaning |
|------------|---------|
| `{4}` | Exactly 4 times. |
| `{4,}` | 4 or more times. |
| `{4,6}` | Between 4 and 6 times (inclusive). |
| `?` | Zero or one time (optional). |
| `*` | Zero or more times. |
| `+` | One or more times. |

Using quantifiers makes your regular expressions **shorter**, **clearer**, and **much easier to read and maintain**.
