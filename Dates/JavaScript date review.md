# JavaScript Dates Review

## The `Date` Object and Common Methods

### What Is the `Date` Object?

* The `Date` object is used to create, manipulate, and format dates and times in JavaScript.
* The `new` keyword is used to create a new instance of the `Date` object.
* The `Date` object can then be assigned to a variable.

### Example

    const now = new Date();

    console.log(now);

* This prints the current date and time based on the system clock of the computer running the code.

---

# `Date.now()` Method

* `Date.now()` is used to get the current date and time as a timestamp.
* It returns the number of milliseconds that have passed since:

    January 1, 1970, 00:00:00 UTC

* This starting point is known as the **Unix epoch**.

### Example

    const timestamp = Date.now();

    console.log(timestamp);

### Unix Epoch Time

* Unix epoch time is a common way to represent dates and times in computer systems.
* It represents time as the number of milliseconds since January 1, 1970, 00:00:00 UTC.
* Using an integer makes the value easy for computers to:
  * Store
  * Compare
  * Calculate
  * Manipulate

### UTC

* `UTC` stands for **Coordinated Universal Time**.
* It is the primary time standard used to regulate clocks around the world.

---

# `getDate()` Method

* The `getDate()` method gets the **day of the month** from a `Date` object.
* It returns an integer between:

    1 and 31

* The returned value depends on the day of the month.
* If the date is invalid, it returns:

    NaN

* `NaN` means **Not a Number**.

### Example

    const now = new Date("2014-10-15");

    const date = now.getDate();

    console.log(date);

### Output

    15

* The date is October 15, 2014.
* Therefore, `getDate()` returns `15`.

---

# `getMonth()` Method

* The `getMonth()` method gets the month from a `Date` object.
* JavaScript months are **zero-based**.

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

### Example

    const now = new Date("2014-10-15");

    const month = now.getMonth();

    console.log(month);

### Output

    9

* The output is `9` because JavaScript starts counting months from `0`.
* Therefore:
  * January → `0`
  * October → `9`
  * December → `11`

* If the date is invalid, `getMonth()` returns:

    NaN

---

# `getFullYear()` Method

* The `getFullYear()` method gets the full year from a `Date` object.
* If the year is invalid, it returns `NaN`.

### Example

    const now = new Date("2014-10-15");

    const year = now.getFullYear();

    console.log(year);

### Output

    2014

---

# Different Ways to Format Dates

* JavaScript provides different methods for formatting `Date` objects.
* Two important methods are:
  * `toISOString()`
  * `toLocaleDateString()`

---

# `toISOString()` Method

* The `toISOString()` method formats a date using the extended **ISO 8601** format.
* ISO 8601 is an international standard for representing dates and times.
* The format is:

    YYYY-MM-DDTHH:mm:ss.sssZ

### Example

    const date = new Date("2014-10-15");

    console.log(date.toISOString());

### Output

    "2014-10-15T00:00:00.000Z"

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

    2014-10-15T00:00:00.000Z

* `2014` → Year
* `10` → Month
* `15` → Day
* `T` → Date/time separator
* `00` → Hour
* `00` → Minutes
* `00` → Seconds
* `000` → Milliseconds
* `Z` → UTC

---

# `toLocaleDateString()` Method

* The `toLocaleDateString()` method formats a date according to a specified locale.
* This is useful when displaying dates in a format familiar to users from different countries or regions.

### Example

    const date = new Date("2014-10-15");

    console.log(
      date.toLocaleDateString("en-US")
    );

### Output

    "10/15/2014"

---

# `toLocaleDateString()` Parameters

* The `toLocaleDateString()` method accepts two optional parameters:

    toLocaleDateString(locales, options)

* The parameters are:
  * `locales`
  * `options`

---

# `locales` Parameter

* The `locales` parameter specifies the language and regional formatting rules to use.
* It is represented by a locale string.

### Examples

* `"en-US"` → English (United States)
* `"en-GB"` → English (Great Britain)
* `"fr-FR"` → French (France)

### Example

    const date = new Date("2014-10-15");

    console.log(
      date.toLocaleDateString("en-US")
    );

### Output

    "10/15/2014"

* Different locales can display the same date in different formats.

---

# `options` Parameter

* The `options` parameter is an object that allows you to customize the format of the date string.

### Example

    const date = new Date("2014-10-15");

    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    console.log(
      date.toLocaleDateString("en-GB", options)
    );

### Output

    "Wednesday, 15 October 2014"

### What the Options Do

* `weekday: "long"` → Displays the full weekday name.
* `year: "numeric"` → Displays the full year.
* `month: "long"` → Displays the full month name.
* `day: "numeric"` → Displays the day of the month.

---

# Complete Example

    const date = new Date("2014-10-15");

    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    console.log(
      date.toLocaleDateString("en-GB", options)
    );

### Output

    Wednesday, 15 October 2014

---

# Quick Review

| Method | Purpose | Example |
|---|---|---|
| `new Date()` | Creates a `Date` object | `new Date()` |
| `Date.now()` | Gets the current timestamp in milliseconds | `Date.now()` |
| `getDate()` | Gets the day of the month | `15` |
| `getMonth()` | Gets the zero-based month | `9` |
| `getFullYear()` | Gets the full year | `2014` |
| `toISOString()` | Formats the date using ISO 8601 | `2014-10-15T00:00:00.000Z` |
| `toLocaleDateString()` | Formats a date according to a locale | `10/15/2014` |

---

# Key Things to Remember

* The `Date` object is used to work with dates and times in JavaScript.
* `new Date()` creates a new `Date` object.
* `Date.now()` returns milliseconds since the Unix epoch.
* The Unix epoch starts at January 1, 1970, 00:00:00 UTC.
* `getDate()` returns the day of the month from `1` to `31`.
* `getMonth()` returns a zero-based month from `0` to `11`.
* January is `0`.
* December is `11`.
* `getFullYear()` returns the full year.
* `toISOString()` formats dates using ISO 8601.
* The ISO 8601 format is:

    YYYY-MM-DDTHH:mm:ss.sssZ

* `toLocaleDateString()` formats dates according to a locale.
* `toLocaleDateString()` accepts:
  * `locales`
  * `options`
* The `locales` parameter controls the language and regional formatting.
* The `options` parameter controls how the date is displayed.
* `"en-US"` uses United States formatting.
* `"en-GB"` uses Great Britain formatting.
* `"fr-FR"` uses French (France) formatting.
