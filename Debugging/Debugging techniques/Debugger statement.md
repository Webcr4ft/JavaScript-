# JavaScript Repository

---

# How Does the `debugger` Statement Work?

The `debugger` statement is a built-in JavaScript tool that **pauses your program** at a specific line of code.

It is mainly used to **find and fix bugs (debugging)** by allowing you to inspect what your program is doing while it runs.

Think of it as pressing the **pause button** on a video so you can carefully examine what's happening before continuing.

---

# Why Use the `debugger` Statement?

The `debugger` statement helps you:

* Pause your code at a specific line.
* Inspect the values of variables.
* Check whether your functions are working correctly.
* Follow the flow of execution step by step.
* Find bugs more easily.

Without a debugger, you might have to add many `console.log()` statements to see what's happening.

---

# Basic Syntax

```javascript
debugger;
```

Simply place `debugger;` on the line where you want JavaScript to pause.

---

# How It Works

JavaScript executes code **from top to bottom**.

When it reaches a `debugger` statement:

1. JavaScript pauses execution.
2. You can inspect variables and functions.
3. You can step through your code one line at a time.
4. When you're done inspecting, click the **Play (Resume)** button in the browser's Developer Tools to continue execution.

---

# Important Note

The `debugger` statement **only works when your browser's Developer Tools are open**.

If the Developer Tools are **closed**:

* JavaScript ignores the `debugger` statement.
* The program continues running normally.

---

# Example 1: Simple Example

```javascript
let firstNumber = 5;
let secondNumber = 10;

debugger; // Execution pauses here

let sum = firstNumber + secondNumber;

console.log(sum);
```

---

# Step-by-Step Explanation

### Step 1

```javascript
let firstNumber = 5;
```

A variable named `firstNumber` is created and assigned the value `5`.

---

### Step 2

```javascript
let secondNumber = 10;
```

Another variable named `secondNumber` is created with the value `10`.

---

### Step 3

```javascript
debugger;
```

JavaScript reaches the `debugger` statement.

If Developer Tools are open:

* Execution pauses.
* You can inspect:
  * `firstNumber`
  * `secondNumber`

At this point:

```text
firstNumber = 5
secondNumber = 10
```

Notice that `sum` **does not exist yet**, because JavaScript hasn't executed the next line.

---

### Step 4

After clicking **Resume**, JavaScript executes:

```javascript
let sum = firstNumber + secondNumber;
```

The calculation becomes:

```javascript
5 + 10
```

Result:

```javascript
sum = 15
```

---

### Step 5

```javascript
console.log(sum);
```

The console displays:

```text
15
```

---

# What Happens If Developer Tools Are Closed?

If you run the same code without opening Developer Tools:

```javascript
let firstNumber = 5;
let secondNumber = 10;

debugger;

let sum = firstNumber + secondNumber;

console.log(sum);
```

JavaScript ignores:

```javascript
debugger;
```

The output is simply:

```text
15
```

The program never pauses.

---

# Example 2: Using `debugger` Inside a Function

```javascript
function calculateTotalPrice(price, discountPercentage) {
  debugger;

  let discountAmount = (price * discountPercentage) / 100;

  let totalPrice = price - discountAmount;

  console.log(`Original Price: ${price}`);
  console.log(`Discount Amount: ${discountAmount}`);
  console.log(`Total Price after Discount: ${totalPrice}`);

  return totalPrice;
}

let price = 100;
let discount = 15;

let finalPrice = calculateTotalPrice(price, discount);

console.log(`Final Price: ${finalPrice}`);
```

---

# Step-by-Step Explanation

## Step 1

The function is created.

```javascript
function calculateTotalPrice(price, discountPercentage) {
```

Nothing happens yet because the function hasn't been called.

---

## Step 2

```javascript
let price = 100;
let discount = 15;
```

Two variables are created.

Current values:

```text
price = 100
discount = 15
```

---

## Step 3

```javascript
calculateTotalPrice(price, discount);
```

The function is called.

Now:

```text
price = 100
discountPercentage = 15
```

---

## Step 4

The first line inside the function is:

```javascript
debugger;
```

Execution pauses here.

You can inspect:

```text
price = 100
discountPercentage = 15
```

Notice that:

```text
discountAmount
```

and

```text
totalPrice
```

do **not** exist yet because JavaScript hasn't reached those lines.

---

## Step 5

Click **Resume**.

JavaScript calculates:

```javascript
let discountAmount = (price * discountPercentage) / 100;
```

Calculation:

```text
100 × 15 = 1500

1500 ÷ 100 = 15
```

Result:

```text
discountAmount = 15
```

---

## Step 6

Next:

```javascript
let totalPrice = price - discountAmount;
```

Calculation:

```text
100 - 15 = 85
```

Result:

```text
totalPrice = 85
```

---

## Step 7

The console displays:

```text
Original Price: 100
Discount Amount: 15
Total Price after Discount: 85
```

---

## Step 8

The function returns:

```javascript
return totalPrice;
```

Returned value:

```text
85
```

---

## Step 9

The returned value is stored.

```javascript
let finalPrice = calculateTotalPrice(price, discount);
```

Now:

```text
finalPrice = 85
```

---

## Step 10

The final output is:

```javascript
console.log(`Final Price: ${finalPrice}`);
```

Console:

```text
Final Price: 85
```

---

# Does `debugger` Stop the Program?

No.

It only **pauses** the program.

After clicking **Resume (▶)** in Developer Tools, JavaScript continues executing the remaining code.

---

# `debugger` vs `console.log()`

| `debugger` | `console.log()` |
|------------|-----------------|
| Pauses execution | Does not pause execution |
| Lets you inspect all variables | Prints only what you specify |
| Helps step through code line by line | Shows output in the console |
| Best for debugging complex code | Best for quick checks |

---

# When Should You Use `debugger`?

Use it when you need to:

* Find where a bug occurs.
* Check whether variables contain the correct values.
* Understand how a function executes.
* Follow the order in which JavaScript runs your code.
* Debug complex logic without adding many `console.log()` statements.

---

# Key Takeaways

* `debugger` pauses JavaScript execution.
* It only works when the browser's **Developer Tools** are open.
* While paused, you can inspect variables, functions, and the program's execution.
* Click the **Resume (▶)** button to continue running the code.
* If Developer Tools are closed, JavaScript ignores the `debugger` statement.
* The `debugger` statement is one of the most useful tools for finding and fixing bugs in JavaScript.
