# What Are Some Common Regular Expression Modifiers Used for Searching?

Regular expression **modifiers**, often referred to as **flags**, modify the behavior of a regular expression.

Let's recall our example from an earlier lesson:

```javascript
const regex = /freeCodeCamp/;

console.log(regex.test("freeCodeCamp")); // true
console.log(regex.test("freeCodeCamp is great")); // true
console.log(regex.test("I love freeCodeCamp")); // true
console.log(regex.test("freecodecamp")); // false
console.log(regex.test("FREECODECAMP")); // false
console.log(regex.test("free")); // false
console.log(regex.test("code")); // false
console.log(regex.test("camp")); // false
```

---

# Understanding the Results

If you remember, the **all-lowercase** (`freecodecamp`) and **all-uppercase** (`FREECODECAMP`) strings failed to match the pattern.

This is because, **by default, regular expressions are case-sensitive**.

That means:

* `freeCodeCamp` ✅ matches.
* `freecodecamp` ❌ does **not** match.
* `FREECODECAMP` ❌ does **not** match.

This happens because JavaScript treats uppercase and lowercase letters as different characters unless you tell it otherwise.

---

# The `i` Flag (Case-Insensitive Modifier)

But what if we could tell the regular expression to **ignore letter casing**?

There is a modifier for exactly that.

The **`i` flag** makes a regular expression **case-insensitive**.

Flags are written **after the closing forward slash** of a regular expression.

Example:

```javascript
const regex = /freeCodeCamp/i;
```

Notice the change:

Before:

```javascript
const regex = /freeCodeCamp/;
```

After:

```javascript
const regex = /freeCodeCamp/i;
```

The only difference is the `i` placed after the final `/`.

---

# Testing Again with the `i` Flag

Now let's see how adding the `i` flag changes the results.

```javascript
const regex = /freeCodeCamp/i;

console.log(regex.test("freeCodeCamp")); // true
console.log(regex.test("freeCodeCamp is great")); // true
console.log(regex.test("I love freeCodeCamp")); // true
console.log(regex.test("freecodecamp")); // true
console.log(regex.test("FREECODECAMP")); // true
console.log(regex.test("free")); // false
console.log(regex.test("code")); // false
console.log(regex.test("camp")); // false
```

---

# What Changed?

Because our regular expression is now **case-insensitive**, the strings:

```text
freecodecamp
```

and

```text
FREECODECAMP
```

now successfully match the pattern.

The `i` flag tells JavaScript:

> "Ignore whether the letters are uppercase or lowercase."

So all of these now match:

* `freeCodeCamp`
* `freecodecamp`
* `FREECODECAMP`
* `FrEeCoDeCaMp`
* Any other mixture of uppercase and lowercase letters.

---

# Mixed Uppercase and Lowercase Letters

The `i` flag doesn't only work for completely lowercase or uppercase words.

It also works when the capitalization is completely random.

Example:

```javascript
const regex = /freeCodeCamp/i;

console.log(regex.test("dO yOu LoVe fReEcOdEcAmP?")); // true
```

Even though the capitalization is random, the result is still:

```javascript
true
```

because the `i` flag tells the regular expression to ignore letter casing.

---

# Using Multiple Flags

There are many other flags that can modify how a regular expression behaves.

One of the most common is the **`g` flag**, also called the **global modifier**.

The `g` flag allows a regular expression to match a pattern **more than once**.

You can even combine multiple flags together.

For example, here we use both:

* `g` → Global modifier
* `i` → Case-insensitive modifier

```javascript
const regex = /freeCodeCamp/gi;
```

Notice both letters appear after the final `/`.

The order doesn't matter here.

---

# Unexpected Behavior with the `g` Flag

Now let's test our regular expression again.

```javascript
const regex = /freeCodeCamp/gi;

console.log(regex.test("freeCodeCamp")); // true
console.log(regex.test("freeCodeCamp is great")); // false
console.log(regex.test("I love freeCodeCamp")); // true
console.log(regex.test("freecodecamp")); // false
console.log(regex.test("FREECODECAMP")); // true
console.log(regex.test("free")); // false
console.log(regex.test("code")); // false
console.log(regex.test("camp")); // false
```

Wait a second...

Some strings that **should** return `true` are now returning `false`.

For example:

```javascript
console.log(regex.test("freeCodeCamp is great")); // false
```

Even though the string clearly contains:

```text
freeCodeCamp
```

Why is this happening?

---

# Why Does the `g` Flag Cause This?

The **global modifier** makes a regular expression **stateful**.

That means it **remembers where it found the previous match**.

For example:

```javascript
console.log(regex.test("freeCodeCamp")); // true
```

The regular expression finds a match beginning at:

```text
index 0
```

Instead of forgetting that match, the regex remembers it.

Then we immediately test another string:

```javascript
console.log(regex.test("freeCodeCamp is great"));
```

The regular expression remembers that the previous match ended after the word:

```text
freeCodeCamp
```

So instead of starting its search from the beginning of this new string, it starts searching from its stored position.

This is the special behavior introduced by the `g` flag.

---

# Understanding Where the Search Starts

The text:

```text
freeCodeCamp
```

contains **12 characters**.

If the match starts at index:

```text
0
```

then it ends at index:

```text
11
```

Therefore, the next search begins at:

```text
12
```

Instead of searching from the beginning of the string, JavaScript begins searching from index **12**.

At that point, the remaining text is:

```text
 is great
```

This obviously does **not** match:

```text
freeCodeCamp
```

so the result becomes:

```javascript
false
```

---

# What Happens After a Failed Match?

When the regular expression **fails** to find another match, it **loses its stored position**.

The next search starts over from:

```text
index 0
```

again.

This explains why some later tests return `true` again even though earlier ones unexpectedly returned `false`.

---

# A Better Example

If we rearrange our test cases so the second string has its match **after index 11**, everything works as expected.

```javascript
const regex = /freeCodeCamp/gi;

console.log(regex.test("freeCodeCamp")); // true

console.log(regex.test("I loooooooove freeCodeCamp")); // true
```

Because the second occurrence appears much later in the string, the search beginning after index `11` can still find another match.

This behavior is one of the most important things to understand when using the **global (`g`) flag**.



# The `lastIndex` Property

When a regular expression uses the **global (`g`) flag**, it gains a new property called **`lastIndex`**.

The `lastIndex` property keeps track of where the **next search** should begin.

Let's use our previous example to see how this property changes after each call to `test()`.

```javascript
const regex = /freeCodeCamp/gi;

console.log(regex.lastIndex); // 0

console.log(regex.test("freeCodeCamp")); // true
console.log(regex.lastIndex); // 12

console.log(regex.test("freeCodeCamp is great")); // false
console.log(regex.lastIndex); // 0

console.log(regex.test("I love freeCodeCamp")); // true
console.log(regex.lastIndex); // 19

console.log(regex.test("freecodecamp")); // false
console.log(regex.lastIndex); // 0

console.log(regex.test("FREECODECAMP")); // true
console.log(regex.lastIndex); // 12

console.log(regex.test("free")); // false
console.log(regex.lastIndex); // 0

console.log(regex.test("code")); // false
console.log(regex.lastIndex); // 0

console.log(regex.test("camp")); // false
```

---

# Understanding `lastIndex`

Looking at this example, you can see how the state of the regular expression changes with each call to `test()`.

The `lastIndex` property keeps track of where the previous match ended.

For example:

Before any search:

```javascript
console.log(regex.lastIndex); // 0
```

The search starts at the beginning of the string.

---

After this:

```javascript
console.log(regex.test("freeCodeCamp")); // true
```

`lastIndex` becomes:

```javascript
12
```

because the word:

```text
freeCodeCamp
```

contains **12 characters**.

The next search will begin at index `12`.

---

If the next search **fails**, JavaScript resets `lastIndex` back to:

```javascript
0
```

That's why after this line:

```javascript
console.log(regex.test("freeCodeCamp is great")); // false
```

we immediately see:

```javascript
console.log(regex.lastIndex); // 0
```

The regular expression has forgotten its previous position and starts fresh again.

---

# When Should You Use the `g` Flag?

The **global (`g`) flag** is very useful when you need to find **multiple matches inside a single string**.

However, if you're repeatedly testing **different strings** with the same regular expression, it's usually better **not** to use the `g` flag.

This is because the regular expression remembers its previous search position through the `lastIndex` property, which can lead to unexpected results.

---

# Creating a Regular Expression with Flags Using `RegExp`

Just like with a plain pattern, you can also create a regular expression with flags using the **`RegExp` constructor**.

The constructor accepts the flags as an **optional second argument**.

Example:

```javascript
const pattern = "freeCodeCamp";

const regex = new RegExp(pattern, "gi");
```

### Explanation

* The first argument is the pattern.
* The second argument is a string containing one or more flags.

In this example:

* `g` = Global modifier
* `i` = Case-insensitive modifier

---

# Equivalent Regular Expression Literal

Using the constructor above is exactly the same as writing:

```javascript
const regex = /freeCodeCamp/gi;
```

Both create the exact same regular expression.

---

# Confirming They Behave the Same Way

Let's verify that the constructor version behaves exactly like the literal version.

```javascript
const regex = new RegExp("freeCodeCamp", "gi");

console.log(regex.test("freeCodeCamp")); // true
console.log(regex.test("FREECODECAMP")); // false
```

This confirms that the constructor accepts flags in the same way as regex literals.

---

# Introducing Anchors

Before learning about the next flag, you first need to understand **anchors**.

Anchors do **not** match characters.

Instead, they match **positions** within a string.

The two most common anchors are:

* `^` (caret)
* `$` (dollar sign)

---

# The Caret (`^`) Anchor

The caret (`^`) placed at the **beginning** of a regular expression means:

> **"Match the start of the string."**

Example:

```javascript
const start = /^freecodecamp/i;
```

Here:

* `^` means the match must begin at the very start.
* `i` makes the search case-insensitive.

---

# The Dollar Sign (`$`) Anchor

The dollar sign (`$`) placed at the **end** of a regular expression means:

> **"Match the end of the string."**

Example:

```javascript
const end = /freecodecamp$/i;
```

Here:

* `$` requires the match to appear at the end of the string.
* `i` again makes the search case-insensitive.

---

# Comparing Both Anchors

Take a moment to compare the outputs below.

```javascript
const start = /^freecodecamp/i;
const end = /freecodecamp$/i;

console.log(start.test("freecodecamp")); // true
console.log(end.test("freecodecamp")); // true

console.log(start.test("freecodecamp is great")); // true
console.log(end.test("freecodecamp is great")); // false

console.log(start.test("i love freecodecamp")); // false
console.log(end.test("i love freecodecamp")); // true

console.log(start.test("have met freecodecamp's founder")); // false
console.log(end.test("have met freecodecamp's founder")); // false
```

---

# Understanding the Results

Notice what happens in each example.

### Example 1

```text
freecodecamp
```

Both anchors match.

* The string starts with `freecodecamp`.
* The string also ends with `freecodecamp`.

Therefore:

```javascript
true
true
```

---

### Example 2

```text
freecodecamp is great
```

The string starts with:

```text
freecodecamp
```

so the **start anchor** matches.

However, the string ends with:

```text
is great
```

so the **end anchor** does not match.

Result:

```javascript
true
false
```

---

### Example 3

```text
i love freecodecamp
```

The string begins with:

```text
i love
```

so the start anchor fails.

However, the string ends with:

```text
freecodecamp
```

so the end anchor succeeds.

Result:

```javascript
false
true
```

---

### Example 4

```text
have met freecodecamp's founder
```

The string neither starts nor ends with:

```text
freecodecamp
```

Therefore both expressions return:

```javascript
false
false
```

---

# Summary

From these examples, you can clearly see that:

* The **`^` anchor** only matches at the **beginning** of a string.
* The **`$` anchor** only matches at the **end** of a string.

These anchors become even more useful when combined with modifiers such as the **multi-line (`m`) flag**, which you'll learn about next.


# Matching Across Multiple Lines

So far, we've seen how the:

* `^` (caret) anchor matches the **start** of a string.
* `$` (dollar sign) anchor matches the **end** of a string.

But what happens when a string contains **multiple lines**?

Let's take a look at the following example:

```javascript
const start = /^freecodecamp/i;
const end = /freecodecamp$/i;

const string = `I really love
freecodecamp
it's my favorite`;

console.log(start.test(string)); // false
console.log(end.test(string)); // false
```

---

# Why Do Both Tests Return `false`?

Even though:

```text
freecodecamp
```

appears on its **own line**, both regular expressions return:

```javascript
false
```

This is because, **by default**, the `^` and `$` anchors look for:

* The beginning of the **entire string**.
* The end of the **entire string**.

They do **not** treat each line as a separate string.

In this example, the entire string starts with:

```text
I really love
```

and ends with:

```text
it's my favorite
```

Since `freecodecamp` is neither at the beginning nor the end of the **entire string**, neither anchor matches.

---

# The `m` Flag (Multi-line Modifier)

What if you want the anchors to work on **each line** instead of the entire string?

That's exactly what the **`m` flag**, also called the **multi-line modifier**, is for.

The `m` flag changes the behavior of:

* `^`
* `$`

Instead of matching only the beginning and end of the entire string, they now match the beginning and end of **every line**.

Let's add the `m` flag to our regular expressions.

```javascript
const start = /^freecodecamp/im;
const end = /freecodecamp$/im;

const string = `I really love
freecodecamp
it's my favorite`;

console.log(start.test(string)); // true
console.log(end.test(string)); // true
```

---

# What Changed?

Notice that both expressions now return:

```javascript
true
```

Why?

Because:

```text
freecodecamp
```

appears on its own line.

The `^` anchor now matches the **beginning of that line**.

The `$` anchor now matches the **end of that same line**.

Without the `m` flag:

* Anchors only examine the entire string.

With the `m` flag:

* Anchors examine every line separately.

---

# The `d` Flag (Indices Modifier)

Finally, you have the **`d` flag**, also called the **indices modifier**.

Remember that:

* `i` is already used for **case-insensitive matching**.

Because of that, the indices modifier needed a different letter, so JavaScript uses:

```text
d
```

The `d` flag expands the information returned inside a **match object**.

Let's add it to a regular expression.

```javascript
const regex = /freecodecamp/di;

const string = "we love freecodecamp isn't freecodecamp great?";

console.log(string.match(regex));
```

---

# Result

Running the code above produces:

```javascript
[
  "freecodecamp",
  index: 8,
  input: "we love freecodecamp isn't freecodecamp great?",
  groups: undefined,
  indices: [
    [8, 20],
    groups: undefined
  ]
]
```

---

# Understanding the `indices` Property

Notice something new inside the match object:

```javascript
indices
```

The `d` flag adds this property automatically.

Before using the `d` flag, a match object looked like this:

```javascript
[
  "freecodecamp",
  index: 8,
  input: "...",
  groups: undefined
]
```

After adding the `d` flag, it becomes:

```javascript
[
  "freecodecamp",
  index: 8,
  input: "...",
  groups: undefined,
  indices: [
    [8, 20],
    groups: undefined
  ]
]
```

The new `indices` property provides extra information about where the match occurs.

---

# What Does `indices` Mean?

The `indices` property is an array containing **two numbers**.

```javascript
indices: [
  [8, 20]
]
```

The first number:

```javascript
8
```

is the index where the match **starts**.

The second number:

```javascript
20
```

is the index **immediately after** the match ends.

In other words:

* `8` → Starting position.
* `20` → Position after the last matched character.

The `indices` array also contains an additional property:

```javascript
groups
```

This property is used for **named capture groups**, which you'll learn about in a future lesson.

---

# Other Less Common Flags

There are a few other regular expression flags that you should know exist.

Although they aren't used as often in everyday JavaScript, it's useful to be aware of them.

These include:

* `u` → Unicode modifier.
* `v` → Enhanced Unicode modifier.
* `y` → Sticky modifier.
* `s` → Single-line modifier.

Each one changes how a regular expression behaves in different situations.

The next section explains each of these modifiers.


# The `u` Flag (Unicode Modifier)

The first less common flag is the **Unicode modifier**, represented by the **`u`** flag.

The `u` flag expands the functionality of a regular expression, allowing it to properly match **special Unicode characters**.

You'll learn more about **character classes** in a future lesson, but one useful feature of the `u` flag is that it gives you access to special Unicode character classes such as:

```text
Extended_Pictographic
```

These special character classes can be used to match **most emoji**.

Example:

```javascript
const regex = /🍎/u;

const str = "I have an apple 🍎";

console.log(regex.test(str)); // true
```

---

# Understanding the Example

In this example:

```javascript
const regex = /🍎/u;
```

* `🍎` is the pattern we want to search for.
* `u` tells JavaScript to treat the regular expression as a Unicode pattern.

The string is:

```javascript
const str = "I have an apple 🍎";
```

When we test it:

```javascript
console.log(regex.test(str)); // true
```

JavaScript returns:

```javascript
true
```

because the emoji exists inside the string.

---

# The `v` Flag

There is also a **`v` flag**.

The `v` flag **further expands the functionality of Unicode matching**.

It builds upon the Unicode features provided by the `u` flag and offers additional capabilities when working with Unicode characters.

---

# The `y` Flag (Sticky Modifier)

Another less common modifier is the **sticky modifier**, represented by the **`y`** flag.

The sticky modifier behaves **very similarly** to the **global (`g`) modifier**, but there are a few important differences.

The biggest difference is how the regular expression searches for the next match.

---

# Difference Between `g` and `y`

A **global (`g`) regular expression** starts searching from the current `lastIndex`.

If it doesn't immediately find a match, it continues searching through the **rest of the string** until it either:

* Finds another match.
* Reaches the end of the string.

A **sticky (`y`) regular expression** behaves differently.

It also starts searching from `lastIndex`.

However, if there is **not an immediate match exactly at that position**, it:

* Returns `null`.
* Resets `lastIndex` back to `0`.

Unlike the global modifier, it **does not continue searching** through the rest of the string.

---

# The `s` Flag (Single-line Modifier)

The last modifier introduced in this lesson is the **single-line modifier**, represented by the **`s`** flag.

Earlier, you learned that the **multi-line (`m`) modifier** changes how the anchors:

* `^`
* `$`

behave.

Instead of matching only the beginning and end of the entire string, they can match the beginning and end of **each line**.

The **single-line (`s`) modifier** serves a completely different purpose.

---

# What Does the `s` Flag Do?

The `s` flag changes the behavior of the **wildcard character**, represented by a period:

```text
.
```

Normally, the wildcard character matches **almost any character**, but it **does not match line breaks**.

When you add the **`s` flag**, the wildcard can also match **newline characters**.

This allows the regular expression to treat the entire string as **one continuous line of text**.

---

# Summary of the `s` Flag

Without the `s` flag:

* `.` matches almost every character.
* `.` does **not** match line breaks.

With the `s` flag:

* `.` matches almost every character.
* `.` **also matches line breaks**.

This effectively allows the wildcard to search across multiple lines.

---

# Final Summary

JavaScript provides several regular expression modifiers (flags) that change how a regular expression behaves.

The most common flags introduced in this lesson are:

| Flag | Name | Purpose |
|------|------|---------|
| `i` | Case-insensitive modifier | Ignores uppercase and lowercase differences. |
| `g` | Global modifier | Finds multiple matches and keeps track of the search position using `lastIndex`. |
| `m` | Multi-line modifier | Makes `^` and `$` match the beginning and end of each line instead of the entire string. |
| `d` | Indices modifier | Adds an `indices` property to the match object showing where matches begin and end. |
| `u` | Unicode modifier | Expands regex functionality to properly work with Unicode characters. |
| `v` | Enhanced Unicode modifier | Further expands Unicode matching capabilities. |
| `y` | Sticky modifier | Requires the next match to occur exactly at `lastIndex`. |
| `s` | Single-line modifier | Allows the wildcard (`.`) to match line breaks. |

---

# Most Important Flags to Remember

There are quite a few regular expression modifiers available in JavaScript.

However, the **`i`** and **`g`** flags are the ones you'll use **most frequently**, and they are the **most important to remember**.

