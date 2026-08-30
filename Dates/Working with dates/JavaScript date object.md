# How Does the JavaScript Date Object Work?

## What Is the `Date` Object?

* Dates and times in JavaScript have not always been easy to work with.
* In a professional codebase, you will probably use a library that has already solved many of the common date and time problems.
* However, there will be times when you need to work with JavaScript's built-in `Date` object.

* The `Date` object is a built-in JavaScript object that allows you to work with:
  * Dates
  * Times
  * Years
  * Months
  * Days
  * Hours
  * Minutes
  * Seconds
  * Milliseconds

---

# Creating a `Date` Object

* The basic syntax for creating a new `Date` object is:

    const now = new Date();

* The `new` keyword is used to create a new instance of the `Date` object.
* The newly created `Date` object is then assigned to the variable `now`.

### Example

    const now = new Date();

* If you log `now` to the console, you will see the current date and time based on the system clock of the computer running the code.

### Example

    const now = new Date();

    console.log(now);

* The output will contain information about:
  * The current date
  * The current time
  * The timezone offset
  * The timezone name

* JavaScript commonly displays the time using the 24-hour format.

* For example:

    14:30

* `14:30` means:

    2:30 PM

* `GMT-0700` represents the timezone offset.
* `Pacific Daylight Time` represents the timezone name.

---

# Creating a `Date` from a String

* You can create a `Date` object by passing a date string to `Date`.

### Example

    const dateFromString = new Date("July 4, 1776 12:00:00");

    console.log(dateFromString);

* JavaScript will attempt to interpret the provided string as a date and time.

---

# Creating a `Date` Using Arguments

* You can also create a specific date and time by passing individual values to `Date`.

### Syntax

    new Date(year, month, day, hour, minute, second, millisecond);

### Example

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

* The arguments represent:

  * `1776` → Year
  * `6` → Month
  * `4` → Day
  * `12` → Hour
  * `0` → Minute
  * `0` → Second
  * `0` → Millisecond

* This is useful when you need to work with a specific date and time rather than the current date and time.

### Important

* JavaScript months are **zero-based** when using the numeric `Date` constructor.

* This means:

  * `0` → January
  * `1` → February
  * `2` → March
  * `3` → April
  * `4` → May
  * `5` → June
  * `6` → July
  * `7` → August
  * `8` → September
  * `9` → October
  * `10` → November
  * `11` → December

* Therefore:

    new Date(1776, 6, 4)

* represents:

    July 4, 1776

---

# `Date.now()`

* The `Date.now()` method returns the number of milliseconds that have passed since:

    January 1, 1970, 00:00:00 UTC

* This starting point is known as the **Unix epoch**.

### Example

    const timestamp = Date.now();

    console.log(timestamp);

* The result will be a large integer representing the current time in milliseconds since the Unix epoch.

---

# Unix Epoch Time

* Unix epoch time is a common way to represent dates and times in computer systems.
* It represents time as a number of milliseconds since:

    January 1, 1970, 00:00:00 UTC

* Using a number makes dates and times easier for computers to:
  * Store
  * Compare
  * Calculate
  * Manipulate

### Example

    const timestamp = Date.now();

    console.log(timestamp);

---

# UTC

* `UTC` stands for **Coordinated Universal Time**.
* It is the primary time standard used around the world to regulate clocks and time.

* When working with JavaScript dates, you will often encounter:
  * Local time
  * UTC time
  * Timezone offsets

---

# `getDate()`

* The `getDate()` method returns the **day of the month** for a `Date` object.

### Example

    const now = new Date();

    const date = now.getDate();

    console.log(date);

* In this example:

  * `new Date()` creates a new `Date` object.
  * The object is stored in the variable `now`.
  * `getDate()` gets the day of the month.
  * The result is stored in `date`.
  * `console.log()` displays the result.

### Return Value

* `getDate()` returns an integer between:

    1 and 31

* The exact number depends on the day of the month.

### Example

* If today is the 15th day of the month:

    now.getDate();

* The result will be:

    15

* If the date is invalid, `getDate()` returns:

    NaN

* `NaN` means **Not a Number**.

---

# `getMonth()`

* The `getMonth()` method returns the month of a `Date` object.
* JavaScript months are **zero-based**.

### Example

    const now = new Date();

    const month = now.getMonth();

    console.log(month);

### Month Values

* `0` → January
* `1` → February
* `2` → March
* `3` → April
* `4` → May
* `5` → June
* `6` → July
* `7` → August
* `8` → September
* `9` → October
* `10` → November
* `11` → December

### Important

* January is `0`, not `1`.
* December is `11`, not `12`.

* If the date is invalid, `getMonth()` returns:

    NaN

---

# `getFullYear()`

* The `getFullYear()` method returns the full year from a `Date` object.

### Example

    const now = new Date();

    const year = now.getFullYear();

    console.log(year);

* If the current year is 2026, the result will be:

    2026

* If the year is invalid, `getFullYear()` returns:

    NaN

---

# Other Common `Date` Methods

* The `Date` object contains many other useful methods.

### Time Methods

* `getHours()` → Gets the hour.
* `getMinutes()` → Gets the minutes.
* `getSeconds()` → Gets the seconds.
* `getMilliseconds()` → Gets the milliseconds.

### Date Methods

* `getDate()` → Gets the day of the month.
* `getDay()` → Gets the day of the week.
* `getMonth()` → Gets the month.
* `getFullYear()` → Gets the full year.

---

# Quick Review

| Method | Purpose |
|---|---|
| `new Date()` | Creates a new `Date` object |
| `Date.now()` | Gets the current timestamp in milliseconds |
| `getDate()` | Gets the day of the month |
| `getDay()` | Gets the day of the week |
| `getMonth()` | Gets the month |
| `getFullYear()` | Gets the full year |
| `getHours()` | Gets the hour |
| `getMinutes()` | Gets the minutes |
| `getSeconds()` | Gets the seconds |
| `getMilliseconds()` | Gets the milliseconds |

---

# Key Things to Remember

* `Date` is a built-in JavaScript object for working with dates and times.
* `new Date()` creates a new date object representing the current date and time.
* `Date.now()` returns the current time as milliseconds since the Unix epoch.
* The Unix epoch starts at `January 1, 1970, 00:00:00 UTC`.
* `getDate()` returns the day of the month from `1` to `31`.
* `getMonth()` returns a zero-based month from `0` to `11`.
* January is `0`.
* December is `11`.
* `getFullYear()` returns the full year.
* Invalid dates can cause methods such as `getDate()`, `getMonth()`, and `getFullYear()` to return `NaN`.
* JavaScript has many additional `Date` methods for working with hours, minutes, seconds, and other date-related values.
* In professional projects, date libraries may be used to make complex date and time operations easier.
