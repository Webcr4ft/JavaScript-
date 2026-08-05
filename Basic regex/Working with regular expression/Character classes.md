# What Are Character Classes, and What Are Some Common Examples?

Let's learn about **character classes** in regular expressions, including some common examples.

Character classes are a **special syntax** you can use to **match sets or subsets of characters**.

They allow you to match different types of characters without having to write every possible character individually.

---

# The Wildcard Character Class (`.`)

The first character class you should learn is the **wildcard class**.

The wildcard is represented by a **period (dot)**:

```text
.
```

It matches **any single character except line breaks**.

> **Note:** To allow the wildcard class to match line breaks, remember that you need to use the **`s` (single-line)** flag.

Example:

```javascript
const regex = /a./;
```

This regular expression matches:

* The letter `a`.
* Followed by **any one single character**.

For example, it would match:

```text
ab
a1
a!
a$
aZ
```

This can be helpful when you are looking for **specific patterns** in a string, but don't know exactly what character might appear between or after those patterns.

---

# The Digit Character Class (`\d`)

Suppose you wanted to match **any numerical character**.

One way would be to write every digit and separate them using the **OR operator (`|`)**.

Example:

```javascript
const regex = /0|1|2|3|4|5|6|7|8|9/;
```

Although this works, it's quite long.

Fortunately, regular expressions provide a **character class** that represents exactly the same pattern.

This character class is written using a backslash followed by the letter `d`.

```javascript
const regex = /\d/;
```

This regular expression matches **exactly the same pattern** as the previous one:

* Any **single numerical character** anywhere in the string.

---

# The Word Character Class (`\w`)

Now consider a regular expression that also needs to match **letters**.

You could write every letter separately using the OR operator, but that would be extremely long.

Instead, you can use another character class:

```javascript
const regex = /\w/;
```

The **`\w`** character class (backslash followed by `w`) represents **any word character**.

A **word character** is defined as:

* Any lowercase letter from `a` to `z`.
* Any uppercase letter from `A` to `Z`.
* Any number from `0` to `9`.
* The underscore (`_`) character.

---

# Why Does `\w` Include the Underscore?

The inclusion of the underscore (`_`) might seem strange at first.

However, think about JavaScript variable names.

Variables often include underscores.

For example:

```javascript
user_name

first_name

student_score
```

Since underscores are commonly used in identifiers, the `\w` character class is designed to match them as well.

---

# The Whitespace Character Class (`\s`)

There is one more special character class to consider:

```javascript
\s
```

This is called the **whitespace character class**.

It is represented by a backslash followed by the letter `s`.

The `\s` character class matches **any whitespace character**, including:

* Spaces.
* New lines.
* Tabs.
* Special Unicode whitespace characters.

---

# Negating Character Classes

These special character classes can also be **negated**.

To negate one of these classes:

* Replace the lowercase letter after the backslash with its **uppercase equivalent**.

Example:

```javascript
const regex = /\D/;
```

Instead of matching a numerical character, this regular expression matches:

* **Any single character that is NOT a numerical character.**

---

# Other Negated Character Classes

Just as `\D` is the opposite of `\d`, the other character classes also have uppercase versions.

### Negating `\w`

Negating the `\w` class matches **any character that is NOT**:

* A letter (`a`–`z` or `A`–`Z`).
* A number (`0`–`9`).
* An underscore (`_`).

---

### Negating `\s`

Negating the `\s` character class matches:

* **Any character that is NOT whitespace.**

That means it does **not** match:

* Spaces.
* Tabs.
* New lines.
* Other whitespace characters.

---

# Creating Your Own Character Classes

What if you wanted to match a **more specific subset** of characters?

For example, imagine you're a professor grading papers.

A valid grade can only be:

* `A`
* `B`
* `C`
* `D`
* `F`

You can create your own character class using **square brackets**.

Example:

```javascript
const regex = /[abcdf]/;
```

This regular expression matches **one single character** that is any of the following:

* `a`
* `b`
* `c`
* `d`
* `f`

---

# Matching Only Passing Grades

Suppose you only want to match **passing grades**.

Passing grades are:

* `A`
* `B`
* `C`
* `D`

Simply remove the `f` from the character class.

```javascript
const regex = /[abcd]/;
```

Now the regular expression no longer matches the letter `f`.

---

# Character Ranges

You may have noticed that:

```text
a
b
c
d
```

are consecutive letters in the alphabet.

Similarly:

```text
4
5
6
```

are consecutive numbers.

Whenever you have consecutive characters, you can create a **range** using a hyphen (`-`).

Instead of writing:

```javascript
[abcd]
```

you can shorten it to:

```javascript
const regex = /[a-d]/;
```

This regular expression matches **exactly the same pattern**, but uses a much shorter syntax.

---

# Character Classes Are Case-Sensitive

Remember that regular expressions are **case-sensitive by default**.

That means:

```javascript
const regex = /[a-d]/;
```

only matches:

* `a`
* `b`
* `c`
* `d`

It does **not** match:

* `A`
* `B`
* `C`
* `D`

You could use the `i` flag to ignore case.

Another option is to include both lowercase and uppercase letters directly inside the character class.

Example:

```javascript
const regex = /[a-zA-Z]/;
```

This regular expression matches:

* Every lowercase letter from `a` to `z`.
* Every uppercase letter from `A` to `Z`.

---

# Mixing Letters and Numbers

You can also combine **letters** and **numbers** inside the same character class.

For example, suppose you want the same behavior as `\w`, but **without the underscore**.

You can create your own character class.

```javascript
const regex = /[a-zA-Z0-9]/;
```

This matches:

* Lowercase letters.
* Uppercase letters.
* Numbers.

Unlike `\w`, it **does not** match the underscore.

---

# Matching a Literal Hyphen

If you want your character class to match a **literal hyphen (`-`)**, you must place the hyphen at either:

* The beginning of the class.
* The end of the class.

Example:

```javascript
const regex = /[-a-zA-Z0-9]/;
```

Placing the hyphen first tells JavaScript that it is an actual character to match rather than a range indicator.

---

# Using Special Character Classes Inside a Custom Character Class

You can also include **special character classes** inside your own custom character class.

For example, suppose you want to include a hyphen together with everything matched by `\w`.

You can write:

```javascript
const regex = /[-\w]/;
```

This regular expression matches:

* Every character matched by `\w`.
* The hyphen (`-`).

---

# Summary

Character classes are one of the most useful features of regular expressions because they allow you to match **sets or subsets of characters** using concise patterns.

Some common character classes include:

| Character Class | Matches |
|-----------------|---------|
| `.` | Any single character except line breaks (unless using the `s` flag). |
| `\d` | Any numerical digit (`0–9`). |
| `\w` | Any word character (`a–z`, `A–Z`, `0–9`, `_`). |
| `\s` | Any whitespace character. |
| `\D` | Any character that is **not** a digit. |
| `\W` | Any character that is **not** a word character. |
| `\S` | Any character that is **not** whitespace. |

You can also create your own character classes using square brackets (`[]`), define ranges using hyphens (`-`), combine letters and numbers, include literal hyphens, and even use special character classes inside your custom character classes.

Character classes are a **powerful tool** that gives you **incredible control over your pattern matching**.
