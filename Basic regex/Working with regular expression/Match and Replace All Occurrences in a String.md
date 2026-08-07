# How Can You Match and Replace All Occurrences in a String?

Let's learn how to **match** or **replace all occurrences** of a pattern in a string.

You have previously learned about the:

* `replace()` method.
* `match()` method.
* Global `g` modifier.

Now you can combine that knowledge to handle **all occurrences of a pattern** in a string.

---

# Reviewing `match()`

Let's recall our original `match()` example:

```javascript
const regex = /freeCodeCamp/;

const match = "freeCodeCamp".match(regex);

console.log(match);
```

The resulting **match object** is:

```javascript
[
  "freeCodeCamp",
  index: 0,
  input: "freeCodeCamp",
  groups: undefined
]
```

---

# What Happens If There Are Multiple Matches?

But what if our string contains **multiple occurrences** of `freecodecamp`?

Let's see how `match()` behaves in that situation.

We'll also include our previous `replace()` example so we can compare both methods.

```javascript
const regex = /freecodecamp/;

const str = "freecodecamp is the best we love freecodecamp";

const matched = str.match(regex);

const replaced = str.replace(regex, "freeCodeCamp");

console.log(matched);

console.log(replaced);
```

The result is:

```javascript
[
  "freecodecamp",
  index: 0,
  input: "freecodecamp is the best we love freecodecamp",
  groups: undefined
]

freeCodeCamp is the best we love freecodecamp
```

---

# Understanding the Result

Oh no!

Notice what happened:

### `match()`

`match()` returned **only the first occurrence** of `freecodecamp`.

It completely ignored the second one.

---

### `replace()`

`replace()` also changed **only the first occurrence**.

The second `freecodecamp` remained unchanged.

Result:

```text
freeCodeCamp is the best we love freecodecamp
```

---

# Why Did This Happen?

This is because, **by default**, both:

* `match()`
* `replace()`

only operate on the **first occurrence** of a matching pattern.

If your string contains multiple matches, these methods stop after finding the first one.

---

# Using the Global (`g`) Modifier

Thankfully, you can change this behavior by using the **global (`g`) modifier**.

Let's add the `g` flag to our regular expression.

```javascript
const regex = /freecodecamp/g;

const str = "freecodecamp is the best we love freecodecamp";

const matched = str.match(regex);

const replaced = str.replace(regex, "freeCodeCamp");

console.log(matched);

console.log(replaced);
```

---

# The Result

Now let's confirm the result.

```javascript
[
  "freecodecamp",
  "freecodecamp"
]

freeCodeCamp is the best we love freeCodeCamp
```

---

# What Changed?

That worked!

Our `replace()` call replaced **all** of the lowercase `freecodecamp` strings with the properly camel-cased version:

```text
freeCodeCamp
```

instead of replacing only the first one.

Likewise, our `match()` method matched **both occurrences** of:

```text
freecodecamp
```

instead of returning only the first match.

---

# One Important Difference

What's interesting here is that when you use the **global (`g`) modifier** with `match()`, you lose some of the extra information that was available in the original match array.

Previously, a call to `match()` returned information such as:

* The matched text.
* The match index.
* The original input string.
* Capture groups.

With the global modifier, `match()` instead returns an array containing **only the matched values**.

This trade-off is important to remember before choosing which matching method to use.

---

# A Better Solution

Thankfully, the **2019 ECMAScript update** introduced two new methods:

* `matchAll()`
* `replaceAll()`

These methods were designed to make working with **multiple matches** much easier.

Like their singular counterparts:

* `matchAll()` accepts a string or regular expression.
* `replaceAll()` accepts a string or regular expression, plus a second argument containing the replacement text.

These newer methods provide a more powerful and flexible way of handling multiple occurrences in a string.



# Using `matchAll()` and `replaceAll()`

Unlike the previous methods, **`matchAll()`** and **`replaceAll()`** will throw an error if you give them a regular expression **without the global (`g`) modifier**.

Let's update our previous code to use these newer methods.

```javascript
const pattern = "freecodecamp";

const str = "freecodecamp is the best we love freecodecamp";

const matched = str.matchAll(pattern);

const replaced = str.replaceAll(pattern, "freeCodeCamp");

console.log(matched);

console.log(replaced);
```

---

# The Result

```javascript
{} 

freeCodeCamp is the best we love freeCodeCamp
```

---

# Understanding the Result

Good news!

Our `replaceAll()` call worked exactly as we wanted.

It replaced **every occurrence** of the lowercase:

```text
freecodecamp
```

with the properly camel-cased version:

```text
freeCodeCamp
```

---

# But What Is That Empty Object?

You might notice this output:

```javascript
{}
```

What is it?

Well, `matchAll()` returns a special type of object called an **Iterator**.

The freeCodeCamp console isn't prepared to display Iterator objects properly, which is why it simply shows an empty object.

---

# Looking Inside the Iterator

If we inspect the same object inside our browser's developer console, we can actually see what's inside.

The Iterator has a method called:

```javascript
next()
```

which allows us to retrieve the next value stored inside the Iterator.

It looks something like this:

```javascript
RegExpStringIterator { }

<prototype>: RegExp String Iterator {
    next: ƒ next(),
    Symbol(Symbol.toStringTag): "RegExp String Iterator"
    <prototype>: Object { ... }
}
```

---

# Calling `next()`

Let's go ahead and call:

```javascript
matched.next()
```

and log the result.

```javascript
{
  done: false,
  value: [
    "freecodecamp",
    index: 0,
    input: "freecodecamp is the best we love freecodecamp",
    groups: undefined
  ]
}
```

---

# Understanding the Result

There's our familiar **match array**!

Calling `next()` returns an object containing two properties:

* `done`
* `value`

---

## The `done` Property

```javascript
done: false
```

This tells us whether there are any more elements remaining inside the Iterator.

When:

```javascript
done === false
```

there are still more matches available.

---

## The `value` Property

```javascript
value
```

contains the value that was just returned by the Iterator.

In this example, `value` contains the familiar match array:

```javascript
[
  "freecodecamp",
  index: 0,
  input: "freecodecamp is the best we love freecodecamp",
  groups: undefined
]
```

---

# Calling `next()` Again

Let's call `next()` one more time.

We'll also update our code so everything is together.

```javascript
const regex = /freecodecamp/g;

const str = "freecodecamp is the best we love freecodecamp";

const matched = str.matchAll(regex);

const replaced = str.replaceAll(regex, "freeCodeCamp");

console.log(matched);

console.log(replaced);

console.log(matched.next());

console.log(matched.next());
```

The output is:

```javascript
{
  done: false,
  value: ["freecodecamp"]
}

{
  done: false,
  value: ["freecodecamp"]
}
```

---

# Wait... Why Is `done` Still `false`?

At first glance, this seems a little confusing.

There are only **two** occurrences of:

```text
freecodecamp
```

inside the string.

So why is `done` still:

```javascript
false
```

after retrieving the second match?

Let's call `next()` **one more time** and see what happens.


# Calling `next()` a Third Time

Let's call `next()` one more time and see what happens.

The result is:

```javascript
{
  done: false,
  value: ["freecodecamp"]
}

{
  done: false,
  value: ["freecodecamp"]
}

{
  done: true,
  value: undefined
}
```

---

# Why Is `done` Finally `true`?

Notice that the first two calls returned:

```javascript
done: false
```

but the third call returned:

```javascript
done: true
```

At the same time, the value became:

```javascript
undefined
```

Why did this happen?

---

# Understanding Why `value` Is `undefined`

As it turns out, the `matchAll()` **Iterator** is **lazy**.

This means it **does not** find every match immediately.

Instead, it waits until you ask for the next match by calling:

```javascript
next()
```

Each time you call `next()`:

* The Iterator searches for the next match.
* If it finds one, it returns:
  * `done: false`
  * The next match inside `value`.

As long as another match is found, the Iterator is **not finished**, so:

```javascript
done: false
```

---

# When Does `done` Become `true`?

Eventually, there are no more matches left.

When that happens:

* `matchAll()` fails to find another match.
* It returns:

```javascript
done: true
value: undefined
```

This tells JavaScript that the Iterator has reached the end of the sequence.

---

# Why Is `matchAll()` Lazy?

At first, this behavior might seem inconvenient.

You may wonder:

> "Why doesn't `matchAll()` just return every match immediately?"

The reason is performance.

Some regular expressions can be **computationally expensive**.

Instead of searching the entire string all at once, `matchAll()` searches **only when you ask for the next value**.

This saves work when you don't actually need every match.

---

# Getting All Matches at Once

If your regular expression is simple—like the one in this example—you can skip the lazy behavior.

Instead, you can convert the Iterator directly into an array.

This is done using:

```javascript
Array.from()
```

The `Array.from()` method accepts the Iterator as its argument and returns a normal array containing all of the matches.

Let's update our code.

Since we already know that `replaceAll()` works correctly, we'll remove those lines and focus only on `matchAll()`.

```javascript
const regex = /freecodecamp/g;

const str = "freecodecamp is the best we love freecodecamp";

const matched = str.matchAll(regex);

console.log(Array.from(matched));
```

---

# The Result

Now we finally get an array containing **all** of the matches.

```javascript
[
  [
    "freecodecamp",
    index: 0,
    input: "freecodecamp is the best we love freecodecamp",
    groups: undefined
  ],

  [
    "freecodecamp",
    index: 33,
    input: "freecodecamp is the best we love freecodecamp",
    groups: undefined
  ]
]
```

Notice that each match includes the same detailed information you saw with the original `match()` method:

* The matched text.
* The index where the match begins.
* The original input string.
* The `groups` property.

Unlike `match()` with the global (`g`) flag, `matchAll()` preserves this extra information for **every match**.

---

# Summary

The `matchAll()` and `replaceAll()` methods provide a powerful way to work with **every occurrence** of a pattern in a string.

Some important points to remember are:

* By default, `match()` and `replace()` only work with the **first occurrence** of a pattern.
* Adding the global (`g`) flag allows them to work with multiple matches.
* `match()` with the `g` flag returns **only the matched strings**, without the extra match information.
* `matchAll()` returns an **Iterator**, which lets you retrieve matches one at a time using `next()`.
* The Iterator is **lazy**, meaning it only finds matches when requested.
* You can convert the Iterator into a normal array by passing it to `Array.from()`.
* `replaceAll()` replaces **every occurrence** of the matching pattern.

These powerful methods can help you manipulate and extract data from strings **without having to sacrifice performance or readability**.
