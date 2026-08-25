# What Are the Different Ways to Format Dates?

In the previous lesson, you learned how to work with the `Date` object in JavaScript.

But there are a few different ways to format dates in JavaScript.

In this lesson, we'll take a look at how to work with the following methods to format dates in JavaScript:

* `toISOString()`
* `toString()`
* `toLocaleDateString()`

---

# 1. Reviewing the `Date` Object

Before we look at the different methods, let's first review what the `Date` object looks like.

```javascript
const date = new Date();

console.log(date);
```

When you log the `date` object to the console, you will see the current date and time based on the user's system settings.

Here is an example of the output you might see:

```text
Sun Sep 29 2024 19:45:37 GMT-0700 (Pacific Daylight Time)
```

The exact output will depend on the current date, time, and timezone of the computer running the code.

---

# 2. The `toString()` Method

If you use the `toString()` method on the `date` object, you will get a string representation of the date.

```javascript
const date = new Date();

console.log(date.toString());
```

You would see output similar to:

```text
Sun Sep 29 2024 19:45:37 GMT-0700 (Pacific Daylight Time)
```

The `toString()` method converts the `Date` object into a string.

For example:

```javascript
const date = new Date();

const formattedDate = date.toString();

console.log(formattedDate);
```

The result will be a human-readable representation of the date and time.

---

# 3. The `toISOString()` Method

To format the date in an extended ISO format, you can use the `toISOString()` method.

```javascript
const date = new Date();

console.log(date.toISOString());
```

The `toISOString()` method returns the date in the ISO 8601 format.

---

# 4. What Is ISO 8601?

ISO 8601 is an international standard for representing dates and times.

The format is:

```text
YYYY-MM-DDTHH:mm:ss.sssZ
```

Each part represents something different:

```text
YYYY = Year
MM   = Month
DD   = Day
T    = Separates the date from the time
HH   = Hours
mm   = Minutes
ss   = Seconds
sss  = Milliseconds
Z    = UTC timezone
```

For example:

```text
2024-09-30T02:47:20.292Z
```

This represents a date and time in ISO 8601 format.

---

# 5. Example of `toISOString()`

```javascript
const date = new Date();

console.log(date.toISOString());
```

An example of the output might be:

```text
2024-09-30T02:47:20.292Z
```

The exact output will depend on the current date and time.

One important thing to remember is that `toISOString()` represents the time in UTC.

---

# 6. The `toLocaleDateString()` Method

Another way to format a date is by using the `toLocaleDateString()` method.

This method allows you to format a date based on the user's locale.

Here is the basic syntax:

```javascript
const date = new Date();

console.log(date.toLocaleDateString());
```

An example of the output might be:

```text
9/29/2024
```

The exact format depends on the user's locale.

---

# 7. What Is a Locale?

A locale determines how information such as dates, numbers, and currencies should be formatted for a particular region or language.

For example:

```text
en-US
```

represents English as used in the United States.

And:

```text
fr-FR
```

represents French as used in France.

Different locales can format the same date differently.

For example, a date could appear as:

```text
9/29/2024
```

or:

```text
29/09/2024
```

depending on the locale.

---

# 8. The `locales` Parameter

The `toLocaleDateString()` method accepts two optional parameters:

* `locales`
* `options`

The `locales` parameter is a string representing the locale to use.

For example:

```javascript
const date = new Date();

console.log(date.toLocaleDateString("fr-FR"));
```

This tells JavaScript to format the date using the French (`fr-FR`) locale.

You can also use:

```javascript
const date = new Date();

console.log(date.toLocaleDateString("en-US"));
```

This uses the English (United States) locale.

Or:

```javascript
const date = new Date();

console.log(date.toLocaleDateString("en-GB"));
```

This uses the English (Great Britain) locale.

---

# 9. What Happens If You Don't Provide a Locale?

If you don't pass a `locales` parameter, the default locale is used.

For example:

```javascript
const date = new Date();

console.log(date.toLocaleDateString());
```

The browser determines the appropriate locale based on the user's environment.

---

# 10. The `options` Parameter

The second optional parameter is the `options` parameter.

This parameter is an object that allows you to specify how the date should be formatted.

For example:

```javascript
const date = new Date();

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

console.log(date.toLocaleDateString("en-GB", options));
```

In this example, we specified the following options:

```javascript
{
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
}
```

These options tell JavaScript to include:

* The full weekday.
* The full year.
* The full month.
* The day of the month.

---

# 11. Understanding the `weekday` Option

The `weekday` option controls how the day of the week is displayed.

For example:

```javascript
const options = {
  weekday: "long",
};
```

This could produce:

```text
Sunday
```

You can also use:

```javascript
const options = {
  weekday: "short",
};
```

Which could produce:

```text
Sun
```

---

# 12. Understanding the `year` Option

The `year` option controls how the year is displayed.

For example:

```javascript
const options = {
  year: "numeric",
};
```

This could produce:

```text
2024
```

---

# 13. Understanding the `month` Option

The `month` option controls how the month is displayed.

For example:

```javascript
const options = {
  month: "long",
};
```

This could produce:

```text
September
```

You can also use:

```javascript
const options = {
  month: "short",
};
```

Which could produce:

```text
Sep
```

---

# 14. Understanding the `day` Option

The `day` option controls how the day of the month is displayed.

For example:

```javascript
const options = {
  day: "numeric",
};
```

This could produce:

```text
29
```

---

# 15. Combining Date Formatting Options

You can combine multiple options together.

For example:

```javascript
const date = new Date();

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

console.log(date.toLocaleDateString("en-GB", options));
```

Here, we specified:

```text
Locale: en-GB
Weekday: long
Year: numeric
Month: long
Day: numeric
```

An example of the output might be:

```text
Sunday, September 29, 2024
```

---

# 16. Another Example

You can create different date formats by changing the options.

For example:

```javascript
const date = new Date();

const options = {
  year: "numeric",
  month: "short",
  day: "numeric",
};

console.log(date.toLocaleDateString("en-US", options));
```

This could produce:

```text
Sep 29, 2024
```

Another example:

```javascript
const date = new Date();

const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

console.log(date.toLocaleDateString("en-US", options));
```

This could produce:

```text
September 29, 2024
```

---

# 17. Comparing the Three Methods

The three methods covered in this lesson serve different purposes.

| Method | Purpose |
|---|---|
| `toString()` | Converts the date into a human-readable string |
| `toISOString()` | Formats the date using the ISO 8601 standard |
| `toLocaleDateString()` | Formats the date according to a locale |

For example:

```javascript
const date = new Date();

console.log(date.toString());

console.log(date.toISOString());

console.log(date.toLocaleDateString());
```

These methods can produce different representations of the same date.

---

# 18. When Should You Use `toString()`?

You can use `toString()` when you want a general human-readable string representation of the date.

```javascript
const date = new Date();

console.log(date.toString());
```

This can be useful when inspecting a date or displaying a basic representation of it.

---

# 19. When Should You Use `toISOString()`?

`toISOString()` is useful when you need a standardized date format.

```javascript
const date = new Date();

console.log(date.toISOString());
```

The ISO 8601 format is commonly useful when working with:

* APIs
* Databases
* Servers
* Data exchange
* Timestamps

For example:

```text
2024-09-30T02:47:20.292Z
```

Because the format is standardized, it is easier for different systems to interpret consistently.

---

# 20. When Should You Use `toLocaleDateString()`?

`toLocaleDateString()` is useful when displaying dates to users.

For example:

```javascript
const date = new Date();

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

console.log(date.toLocaleDateString("en-GB", options));
```

This allows you to create a date format that is appropriate for a particular language or region.

---

# Key Takeaways

* JavaScript provides several methods for formatting dates.
* `toString()` converts a `Date` object into a human-readable string.
* `toISOString()` formats a date using the ISO 8601 standard.
* ISO 8601 uses the format `YYYY-MM-DDTHH:mm:ss.sssZ`.
* The `Z` in an ISO string represents UTC.
* `toLocaleDateString()` formats dates according to a locale.
* `toLocaleDateString()` accepts an optional `locales` parameter.
* The `locales` parameter can specify a language and region such as `en-US`, `en-GB`, or `fr-FR`.
* If no locale is provided, the user's default locale is used.
* `toLocaleDateString()` also accepts an optional `options` object.
* The `options` object allows you to control how the date is displayed.
* Options include `weekday`, `year`, `month`, and `day`.
* `weekday: "long"` displays the full weekday name.
* `year: "numeric"` displays the full year.
* `month: "long"` displays the full month name.
* `day: "numeric"` displays the day of the month.
* `toLocaleDateString()` is particularly useful when displaying dates to users.
* `toISOString()` is useful when you need a standardized date format.
* There are many other methods and libraries available for formatting dates in JavaScript.

---

# Practice

Try experimenting with the different date formatting methods:

```javascript
const date = new Date();

console.log("Default Date:");
console.log(date);

console.log("Using toString():");
console.log(date.toString());

console.log("Using toISOString():");
console.log(date.toISOString());

console.log("Using toLocaleDateString():");
console.log(date.toLocaleDateString());

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

console.log("Using custom options:");
console.log(date.toLocaleDateString("en-GB", options));
```

Try changing the locale:

```javascript
date.toLocaleDateString("en-US", options);

date.toLocaleDateString("en-GB", options);

date.toLocaleDateString("fr-FR", options);
```

Notice how the same date can be displayed differently depending on the locale.

---

# Conclusion

In this lesson, we covered a few of the ways to format dates in JavaScript.

The most important methods to remember are:

```javascript
toString()
toISOString()
toLocaleDateString()
```

There are many other methods and libraries available to help you format dates in JavaScript.

However, `toISOString()` and `toLocaleDateString()` are good starting points for formatting dates in JavaScript.
