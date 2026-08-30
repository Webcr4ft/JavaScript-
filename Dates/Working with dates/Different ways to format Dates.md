# What Are the Different Ways to Format Dates?

## Introduction

* In the previous lesson, we learned how to work with the JavaScript `Date` object.
* JavaScript provides several ways to format dates.
* In this lesson, we will look at three useful methods:
  * `toISOString()`
  * `toString()`
  * `toLocaleDateString()`

---

# Reviewing the `Date` Object

* Before looking at the formatting methods, let's review what a `Date` object looks like.

### Example

    const date = new Date();

    console.log(date);

* When you log a `Date` object to the console, you will see the current date and time based on the user's system settings.

### Example Output

    Sun Sep 29 2024 19:45:37 GMT-0700 (Pacific Daylight Time)

* The output contains:
  * The day of the week → `Sun`
  * The month → `Sep`
  * The day → `29`
  * The year → `2024`
  * The time → `19:45:37`
  * The timezone offset → `GMT-0700`
  * The timezone name → `Pacific Daylight Time`

---

# `toString()`

* The `toString()` method converts a `Date` object into a string.
* When called without additional formatting options, it produces a human-readable representation of the date and time.

### Example

    const date = new Date();

    console.log(date.toString());

### Example Output

    Sun Sep 29 2024 19:45:37 GMT-0700 (Pacific Daylight Time)

* Calling `toString()` on a `Date` object gives a similar output to directly logging the `Date` object.

---

# `toISOString()`

* The `toISOString()` method formats a date using the extended **ISO 8601** format.
* ISO 8601 is an international standard for representing dates and times.
* The resulting date is represented in UTC.

### Example

    const date = new Date();

    console.log(date.toISOString());

### ISO 8601 Format

    YYYY-MM-DDTHH:mm:ss.sssZ

### Example Output

    2024-09-30T02:47:20.292Z

### Understanding the Format

* `YYYY` → Four-digit year.
* `MM` → Two-digit month.
* `DD` → Two-digit day.
* `T` → Separates the date from the time.
* `HH` → Hours.
* `mm` → Minutes.
* `ss` → Seconds.
* `sss` → Milliseconds.
* `Z` → Indicates UTC time.

### Example

    2024-09-30T02:47:20.292Z

* `2024` → Year
* `09` → Month
* `30` → Day
* `T` → Separates date and time
* `02` → Hour
* `47` → Minutes
* `20` → Seconds
* `292` → Milliseconds
* `Z` → UTC

---

# `toLocaleDateString()`

* The `toLocaleDateString()` method formats a date according to a user's locale.
* This is useful when you want dates to appear in a format familiar to users from different countries or regions.

### Basic Syntax

    const date = new Date();

    console.log(date.toLocaleDateString());

### Example Output

    9/29/2024

* The exact output can vary depending on the user's locale and system settings.

---

# `toLocaleDateString()` Parameters

* The `toLocaleDateString()` method accepts two optional parameters:

    toLocaleDateString(locales, options)

* The parameters are:
  * `locales`
  * `options`

---

# `locales` Parameter

* The `locales` parameter specifies which language and regional formatting rules should be used.
* It is usually represented as a locale string.

### Examples

* `en-US` → English (United States)
* `en-GB` → English (Great Britain)
* `fr-FR` → French (France)

### Example

    const date = new Date();

    console.log(
      date.toLocaleDateString("fr-FR")
    );

* The date will be formatted according to French (France) conventions.

### Without a Locale

    const date = new Date();

    console.log(
      date.toLocaleDateString()
    );

* If you do not provide a `locales` parameter, JavaScript uses the default locale.

---

# `options` Parameter

* The second optional parameter is the `options` parameter.
* It is an object that allows you to control how different parts of the date are displayed.

### Example

    const date = new Date();

    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    console.log(
      date.toLocaleDateString("en-GB", options)
    );

* In this example, the options specify that the date should include:
  * The full weekday.
  * The full year.
  * The full month.
  * The day of the month.

### Example Output

    Sunday, September 29, 2024

---

# Common `options` Values

## `weekday`

* Controls how the weekday is displayed.

### Example

    weekday: "long"

* Output:

    Sunday

### Another Option

    weekday: "short"

* Output:

    Sun

---

## `year`

* Controls how the year is displayed.

### Example

    year: "numeric"

* Output:

    2024

---

## `month`

* Controls how the month is displayed.

### Examples

    month: "long"

* Output:

    September

    month: "short"

* Output:

    Sep

    month: "numeric"

* Output:

    9

---

## `day`

* Controls how the day of the month is displayed.

### Example

    day: "numeric"

* Output:

    29

---

# Complete Formatting Example

    const date = new Date();

    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    console.log(
      date.toLocaleDateString("en-GB", options)
    );

### Possible Output

    Sunday, September 29, 2024

* This gives you more control over how the date is displayed compared with using `toLocaleDateString()` without any options.

---

# Comparing the Methods

| Method | Purpose | Example |
|---|---|---|
| `toString()` | Converts a date to a readable string | `Sun Sep 29 2024 19:45:37 GMT-0700` |
| `toISOString()` | Formats a date using ISO 8601 | `2024-09-30T02:47:20.292Z` |
| `toLocaleDateString()` | Formats a date according to a locale | `9/29/2024` |

---

# When to Use Each Method

## Use `toString()`

* Use `toString()` when you want a simple, human-readable representation of a date and time.

    date.toString();

---

## Use `toISOString()`

* Use `toISOString()` when you need a standardized date format.
* It is especially useful when working with:
  * APIs
  * Databases
  * Data exchange
  * Timestamps

    date.toISOString();

* The format is:

    YYYY-MM-DDTHH:mm:ss.sssZ

---

## Use `toLocaleDateString()`

* Use `toLocaleDateString()` when you want the date to be displayed according to a specific language or region.

    date.toLocaleDateString("en-GB");

* You can also provide formatting options:

    date.toLocaleDateString("en-GB", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

---

# Key Things to Remember

* `Date` objects represent dates and times in JavaScript.
* `toString()` converts a `Date` object into a readable date and time string.
* `toISOString()` formats a date using the ISO 8601 standard.
* `toISOString()` returns the date and time in UTC.
* The ISO format is:

    YYYY-MM-DDTHH:mm:ss.sssZ

* `toLocaleDateString()` formats a date according to a locale.
* `toLocaleDateString()` accepts two optional parameters:
  * `locales`
  * `options`
* `locales` controls the language and regional formatting.
* `options` controls which parts of the date are displayed and how they are displayed.
* `en-US` represents English (United States).
* `en-GB` represents English (Great Britain).
* `fr-FR` represents French (France).
* Date formatting is important when displaying dates to users or exchanging dates between systems.

---

# Quick Review

* `new Date()` → Creates a new `Date` object.
* `date.toString()` → Converts the date to a readable string.
* `date.toISOString()` → Converts the date to ISO 8601 format.
* `date.toLocaleDateString()` → Formats the date according to a locale.
* `toLocaleDateString("en-GB")` → Formats the date using British English conventions.
* `toLocaleDateString("fr-FR")` → Formats the date using French conventions.
* `options` → Allows you to customize the date's appearance.
