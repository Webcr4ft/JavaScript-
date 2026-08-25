# How Does the JavaScript Date Object Work, and What Are Some Common Methods?

Dates and times in JavaScript have not always been easy to work with.

In a professional codebase, you will probably be using a library that has solved a lot of those issues for you.

But there will be times where you will need to work with JavaScript's built-in `Date` object.

In this lesson, we will go over the basics of the `Date` object and some of the most common methods that you will use when working with dates and times in JavaScript.

---

# 1. What Is the `Date` Object?

The `Date` object is a built-in object in JavaScript that allows you to work with dates and times.

Here is the basic syntax for creating a new `Date` object:

```javascript
const now = new Date();
```

The `new` keyword is used to create a new instance of the `Date` object.

The `Date` object is then assigned to the variable `now`.

If you were to log the value of `now` to the console, you would see the current date and time based on the system clock of the computer running the code.

For example:

```javascript
const now = new Date();

console.log(now);
```

The exact output will depend on the current date, time, and timezone of the computer running the code.

---

# 2. Understanding the Time and Timezone

When you log a `Date` object to the console, the output contains information about the date, time, and timezone.

For example, you might see something similar to:

```text
Fri Aug 25 2026 14:30:00 GMT-0700 (Pacific Daylight Time)
```

The time is using the 24-hour format.

For example:

```text
14:30
```

means:

```text
2:30 PM
```

The `GMT-0700` part represents the timezone offset.

The timezone name, such as:

```text
Pacific Daylight Time
```

represents the timezone being used for the displayed date and time.

The exact output will depend on the computer's system settings and timezone.

---

# 3. Creating a Date From a String

You can create a new `Date` object by providing a date string.

For example:

```javascript
const dateFromString = new Date("July 4, 1776 12:00:00");

console.log(dateFromString);
```

In this example, JavaScript creates a `Date` object representing:

```text
July 4, 1776
12:00:00
```

This is useful when you need to work with a specific date and time.

---

# 4. Creating a Date Using Arguments

You can also pass a specific date and time to the `Date` object by providing values as arguments.

The arguments can represent:

* Year
* Month
* Day
* Hour
* Minute
* Second
* Millisecond

For example:

```javascript
const dateFromArguments = new Date(
  1776,
  6,
  4,
  12,
  0,
  0,
  0
);

console.log(dateFromArguments);
```

This creates a date representing July 4, 1776 at 12:00:00.

## Important

The month value is **zero-based** when using the numeric `Date` constructor.

That means:

```text
0 = January
1 = February
2 = March
3 = April
4 = May
5 = June
6 = July
7 = August
8 = September
9 = October
10 = November
11 = December
```

So:

```javascript
new Date(1776, 6, 4);
```

represents:

```text
July 4, 1776
```

not June 4.

---

# 5. Why Create a Specific Date?

Creating a date using specific arguments is useful when you need to work with a particular date and time rather than the current date and time.

For example:

```javascript
const birthday = new Date(2000, 4, 15);

console.log(birthday);
```

Because months are zero-based:

```text
4 = May
```

So this represents:

```text
May 15, 2000
```

---

# 6. The `Date.now()` Method

To get the current date and time, you can use the `Date.now()` method.

```javascript
const currentTime = Date.now();

console.log(currentTime);
```

The `Date.now()` method returns the number of milliseconds since:

```text
January 1, 1970, 00:00:00 UTC
```

This is known as the **Unix epoch time**.

---

# 7. What Is Unix Epoch Time?

Unix epoch time is a common way to represent dates and times in computer systems.

Instead of storing a date as:

```text
August 25, 2026
```

a computer can represent it as a number of milliseconds since a specific starting point.

That starting point is:

```text
January 1, 1970, 00:00:00 UTC
```

For example:

```javascript
const timestamp = Date.now();

console.log(timestamp);
```

The result will be a large integer representing the number of milliseconds that have passed since the Unix epoch.

This representation is useful because numbers can be easily stored, compared, and manipulated by computer programs.

---

# 8. What Does UTC Mean?

UTC stands for:

**Coordinated Universal Time**

UTC is the primary time standard by which the world regulates clocks and time.

When working with dates and times, you will often encounter UTC because it provides a consistent reference point regardless of the user's local timezone.

---

# 9. The `getDate()` Method

If you need to get the day of the month based on a date, you can use the `getDate()` method.

For example:

```javascript
const now = new Date();

const date = now.getDate();

console.log(date);
```

In this example:

```javascript
const now = new Date();
```

creates a new date instance.

Then:

```javascript
now.getDate();
```

gets the day of the month.

The result is assigned to:

```javascript
const date
```

Finally:

```javascript
console.log(date);
```

prints the day of the month to the console.

---

# 10. What Does `getDate()` Return?

The `getDate()` method returns an integer between:

```text
1 and 31
```

depending on the day of the month.

For example, if today is the 25th day of the month:

```javascript
const now = new Date();

const date = now.getDate();

console.log(date);
```

The output would be:

```text
25
```

If the date is invalid, `getDate()` will return:

```javascript
NaN
```

`NaN` stands for:

**Not a Number**

---

# 11. The `getMonth()` Method

To get the month, you can use the `getMonth()` method.

For example:

```javascript
const now = new Date();

const month = now.getMonth();

console.log(month);
```

The `getMonth()` method returns the month as a zero-based integer.

This means:

```text
January  = 0
February = 1
March    = 2
April    = 3
May      = 4
June     = 5
July     = 6
August   = 7
September = 8
October  = 9
November = 10
December = 11
```

For example, if the current month is August:

```javascript
const now = new Date();

const month = now.getMonth();

console.log(month);
```

The result would be:

```text
7
```

because August is represented by the number `7`.

If the month is invalid, it will return:

```javascript
NaN
```

---

# 12. The `getFullYear()` Method

If you need to get the full year, you can use the `getFullYear()` method.

For example:

```javascript
const now = new Date();

const year = now.getFullYear();

console.log(year);
```

If the current year is 2026, the output would be:

```text
2026
```

The `getFullYear()` method returns the full four-digit year.

If the date is invalid, it will return:

```javascript
NaN
```

---

# 13. Other Common `Date` Methods

There are many more methods available on the `Date` object.

Some common examples include:

```javascript
getHours()
getMinutes()
getSeconds()
```

These methods allow you to retrieve different parts of a date and time.

For example:

```javascript
const now = new Date();

const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

console.log(hours);
console.log(minutes);
console.log(seconds);
```

These methods return the current:

* Hour
* Minute
* Second

based on the `Date` object.

---

# 14. Common `Date` Methods Summary

| Method | Purpose |
|---|---|
| `new Date()` | Creates a new `Date` object representing the current date and time |
| `Date.now()` | Returns milliseconds since January 1, 1970, 00:00:00 UTC |
| `getDate()` | Gets the day of the month |
| `getMonth()` | Gets the month as a zero-based number |
| `getFullYear()` | Gets the full year |
| `getHours()` | Gets the hour |
| `getMinutes()` | Gets the minutes |
| `getSeconds()` | Gets the seconds |

---

# 15. Example Using Several Methods Together

You can use several `Date` methods together to retrieve different parts of the current date.

```javascript
const now = new Date();

const day = now.getDate();
const month = now.getMonth();
const year = now.getFullYear();

const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

console.log("Day:", day);
console.log("Month:", month);
console.log("Year:", year);
console.log("Hours:", hours);
console.log("Minutes:", minutes);
console.log("Seconds:", seconds);
```

Remember that the month is zero-based.

So if:

```javascript
month === 7
```

that means:

```text
August
```

---

# Key Takeaways

* The `Date` object is a built-in JavaScript object for working with dates and times.
* You can create a new date using `new Date()`.
* `new Date()` creates a date based on the current date and time.
* You can create a date from a date string.
* You can create a date using year, month, day, hour, minute, second, and millisecond arguments.
* Numeric months are zero-based.
* January is `0`.
* February is `1`.
* December is `11`.
* `Date.now()` returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.
* This starting point is known as the Unix epoch.
* UTC stands for Coordinated Universal Time.
* `getDate()` returns the day of the month between `1` and `31`.
* `getMonth()` returns a zero-based month between `0` and `11`.
* `getFullYear()` returns the full year.
* `getHours()` returns the hour.
* `getMinutes()` returns the minutes.
* `getSeconds()` returns the seconds.
* Invalid dates can cause date methods to return `NaN`.
* There are many more methods available on the `Date` object.

---

# Practice

Try creating your own `Date` object and retrieving different parts of it.

```javascript
const now = new Date();

console.log("Current date:", now);
console.log("Day:", now.getDate());
console.log("Month:", now.getMonth());
console.log("Year:", now.getFullYear());
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());
```

I encourage you to explore more `Date` methods through Mozilla's documentation and other JavaScript resources.
