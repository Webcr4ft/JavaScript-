# JavaScript Repository

---

# What Are Some Examples of Common JavaScript Errors?

As you write JavaScript code, you will eventually encounter error messages. Learning what these errors mean will help you debug your code more efficiently and become a better JavaScript developer.

The four most common JavaScript error types are:

* `SyntaxError`
* `ReferenceError`
* `TypeError`
* `RangeError`

---

# 1. `SyntaxError`

A `SyntaxError` occurs when your code does not follow JavaScript's syntax rules.

## Example

```javascript
const arr = ["Beau", "Quincy" "Tom"];
```

### Why It Happens

* Each array element must be separated by a comma.
* The comma between `"Quincy"` and `"Tom"` is missing.

### Correct Code

```javascript
const arr = ["Beau", "Quincy", "Tom"];
```

---

# 2. `ReferenceError`

A `ReferenceError` occurs when JavaScript cannot find the variable or identifier you are trying to use.

## Example 1: Variable Not Defined

```javascript
console.log(price);
```

### Why It Happens

* The variable `price` has never been declared.
* JavaScript cannot find it, so it throws a `ReferenceError`.

### Correct Code

```javascript
const price = 100;

console.log(price);
```

---

## Example 2: Accessing a Variable Before Initialization

```javascript
console.log(b);

const b = 50;
```

### Why It Happens

* Variables declared with `let` and `const` cannot be accessed before they are initialized.

Error:

```text
Cannot access 'b' before initialization
```

### Correct Code

```javascript
const b = 50;

console.log(b);
```

---

# 3. `TypeError`

A `TypeError` occurs when you perform an operation on the wrong data type.

## Example

```javascript
const developerObj = {
  name: "Jessica",
  country: "USA",
  isEmployed: true
};

developerObj.map();
```

### Why It Happens

* `map()` only works on arrays.
* `developerObj` is an object.

Error:

```text
developerObj.map is not a function
```

### Correct Code

```javascript
const developers = [
  {
    name: "Jessica",
    country: "USA"
  }
];

developers.map((developer) => developer.name);
```

---

# 4. `RangeError`

A `RangeError` occurs when a value is outside JavaScript's allowed range.

## Example

```javascript
const arr = [];

arr.length = -1;
```

### Why It Happens

* An array's `length` must always be a non-negative integer.
* Setting it to `-1` causes a `RangeError`.

### Correct Code

```javascript
const arr = [];

arr.length = 5;
```

---

# Summary

| Error Type | Cause | Example |
|------------|-------|---------|
| `SyntaxError` | Invalid JavaScript syntax | Missing comma, bracket, or parenthesis |
| `ReferenceError` | Variable cannot be found | Using an undeclared variable |
| `TypeError` | Wrong operation on a data type | Calling `map()` on an object |
| `RangeError` | Value outside the allowed range | Setting an array length to `-1` |

---

# Key Takeaways

* `SyntaxError` → Invalid syntax.
* `ReferenceError` → Variable not found.
* `TypeError` → Wrong operation for a data type.
* `RangeError` → Value outside JavaScript's accepted range.
* Always read error messages carefully—they tell you what went wrong and often where it happened.
