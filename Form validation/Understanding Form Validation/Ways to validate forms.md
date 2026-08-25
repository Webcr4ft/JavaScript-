# JavaScript Form Validation

# What Are Some Ways to Validate Forms Using JavaScript?

In a previous lesson, you've learned how to use HTML to restrict the values your users can submit in your form. But sometimes that's not enough.

If you want to get more complex, such as displaying your own error messages to the user, you will need to use JavaScript.

Certain HTML elements, such as the `textarea` and `input` elements, expose a Constraint Validation API.

This API allows you to assert that the user's provided value for that element passes any HTML-level validation you have written, such as minimum length or pattern matching.

But how can you actually use it?

Let's say you wanted employees at a company to send feedback messages through a form like this:

## HTML

```html
<link rel="stylesheet" href="styles.css" />

<form>
  <label>Enter your email: </label>

  <input required type="email" />

  <label>Enter your feedback: </label>

  <textarea
    required
    placeholder="Your feedback here..."
  ></textarea>

  <button type="submit">Submit Feedback</button>
</form>
```

## CSS

```css
form {
  max-width: 400px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-family: Arial, sans-serif;
}

label {
  font-weight: 600;
  margin-bottom: 4px;
  color: #333;
}

input,
textarea {
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.2s, box-shadow 0.2s;
}

input:focus,
textarea:focus {
  border-color: #0078d4;
  box-shadow: 0 0 3px rgba(0, 120, 212, 0.5);
  outline: none;
}

textarea {
  resize: vertical;
  min-height: 100px;
}

button[type="submit"] {
  background-color: #0078d4;
  color: #fff;
  border: none;
  padding: 10px 16px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

button[type="submit"]:hover {
  background-color: #005ea2;
}
```

We are using the email `input` which comes with built-in validation to check for basic validation like if the input includes the at (`@`) sign.

But what if the user provides an email address like:

```text
example@email.com
```

This would pass the basic validation, but we want to be more specific about accepting emails from those with a company email address.

This is where we can use the `pattern` attribute to specify that the email address must end in a company email address.

Here is what the updated example will look like:

## HTML

```html
<link rel="stylesheet" href="styles.css" />

<form>
  <label>Enter your email: </label>

  <input
    required
    placeholder="username@sampleCompany.com"
    type="email"
    pattern=".+@sampleCompany\.com"
  />

  <label>Enter your feedback: </label>

  <textarea
    required
    placeholder="Your feedback here..."
  ></textarea>

  <button type="submit">Submit Feedback</button>
</form>
```

## CSS

```css
form {
  max-width: 400px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-family: Arial, sans-serif;
}

label {
  font-weight: 600;
  margin-bottom: 4px;
  color: #333;
}

input,
textarea {
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.2s, box-shadow 0.2s;
}

input:focus,
textarea:focus {
  border-color: #0078d4;
  box-shadow: 0 0 3px rgba(0, 120, 212, 0.5);
  outline: none;
}

textarea {
  resize: vertical;
  min-height: 100px;
}

button[type="submit"] {
  background-color: #0078d4;
  color: #fff;
  border: none;
  padding: 10px 16px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

button[type="submit"]:hover {
  background-color: #005ea2;
}
```

Now, if you try to submit the feedback, you will see a message saying:

```text
Please match the requested format.
```

Even though the input does have placeholder text showing them the desired format, it would be better to also include a customized error message using JavaScript.

Let's first take a look at the `checkValidity()` method.

## Using `checkValidity()`

The `checkValidity()` method is part of the Constraint Validation API.

It checks whether the element matches all HTML validation rules based on its attributes.

It returns:

* `true` if the element is valid.
* `false` if the element is invalid.

## JavaScript

```javascript
const input = document.querySelector("input");

input.addEventListener("input", (e) => {
  console.log(e.target.checkValidity());
});
```

In the above example, we've queried our input from the DOM, and added an input event listener.

We know that `e.target` refers to the element that triggered the event.

In this case, our `input`.

But what is the `checkValidity()` method?

This is part of the Constraint Validation API.

The `checkValidity()` method returns `true` if the element matches all HTML validation based on its attributes, and `false` if it fails.

When we try with an invalid input, we see `false` gets logged in the console.

Now that we know the input is invalid, let's report the invalidity.

## HTML

```html
<link rel="stylesheet" href="styles.css" />

<form>
  <label>Enter your email: </label>

  <input
    required
    placeholder="username@sampleCompany.com"
    type="email"
    pattern=".+@sampleCompany\.com"
  />

  <label>Enter your feedback: </label>

  <textarea
    required
    placeholder="Your feedback here..."
  ></textarea>

  <button type="submit">Submit Feedback</button>
</form>

<script src="index.js"></script>
```

## CSS

```css
form {
  max-width: 400px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-family: Arial, sans-serif;
}

label {
  font-weight: 600;
  margin-bottom: 4px;
  color: #333;
}

input,
textarea {
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.2s, box-shadow 0.2s;
}

input:focus,
textarea:focus {
  border-color: #0078d4;
  box-shadow: 0 0 3px rgba(0, 120, 212, 0.5);
  outline: none;
}

textarea {
  resize: vertical;
  min-height: 100px;
}

button[type="submit"] {
  background-color: #0078d4;
  color: #fff;
  border: none;
  padding: 10px 16px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

button[type="submit"]:hover {
  background-color: #005ea2;
}
```

## JavaScript

```javascript
const input = document.querySelector("input");

input.addEventListener("input", (e) => {
  if (!e.target.checkValidity()) {
    e.target.reportValidity();
  }
});
```

As a result, you will see the browser's error message:

```text
Please match the requested format.
```

It reports the invalid state immediately, instead of waiting for us to submit the form.

But it's still using the default message.

This is because the `reportValidity()` method only tells the browser that the input is invalid.

The browser still chooses how to display why it's invalid.

That's where the `setCustomValidity()` method comes in.

# Using `setCustomValidity()`

The `setCustomValidity()` method allows you to define your own custom error message.

## HTML

```html
<link rel="stylesheet" href="styles.css" />

<form>
  <label>Enter your email: </label>

  <input
    required
    placeholder="username@sampleCompany.com"
    type="email"
    pattern=".+@sampleCompany\.com"
  />

  <label>Enter your feedback: </label>

  <textarea
    required
    placeholder="Your feedback here..."
  ></textarea>

  <button type="submit">Submit Feedback</button>
</form>

<script src="index.js"></script>
```

## CSS

```css
form {
  max-width: 400px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-family: Arial, sans-serif;
}

label {
  font-weight: 600;
  margin-bottom: 4px;
  color: #333;
}

input,
textarea {
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.2s, box-shadow 0.2s;
}

input:focus,
textarea:focus {
  border-color: #0078d4;
  box-shadow: 0 0 3px rgba(0, 120, 212, 0.5);
  outline: none;
}

textarea {
  resize: vertical;
  min-height: 100px;
}

button[type="submit"] {
  background-color: #0078d4;
  color: #fff;
  border: none;
  padding: 10px 16px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

button[type="submit"]:hover {
  background-color: #005ea2;
}
```

## JavaScript

```javascript
const input = document.querySelector("input");

input.addEventListener("input", (e) => {
  if (!e.target.checkValidity()) {
    e.target.setCustomValidity(
      "You must use a company email address that ends in @sampleCompany.com"
    );
  }
});
```

This method accepts a custom error message, which is displayed to the user.

As a result, you will see the custom error message:

```text
You must use a company email address that ends in @sampleCompany.com
```

# Important: Clearing a Custom Error

When using `setCustomValidity()`, it is important to clear the custom error when the input becomes valid.

You can do this by passing an empty string:

```javascript
e.target.setCustomValidity("");
```

A complete example would be:

```javascript
const input = document.querySelector("input");

input.addEventListener("input", (e) => {
  if (!e.target.checkValidity()) {
    e.target.setCustomValidity(
      "You must use a company email address that ends in @sampleCompany.com"
    );
  } else {
    e.target.setCustomValidity("");
  }
});
```

The empty string clears the custom error message.

# Exploring the `validity` Property

If you are interested in exploring more about the different types of validity states and why a particular validation has failed, you can log out the `validity` property like this:

## HTML

```html
<link rel="stylesheet" href="styles.css" />

<form>
  <label>Enter your email: </label>

  <input
    required
    placeholder="username@sampleCompany.com"
    type="email"
    pattern=".+@sampleCompany\.com"
  />

  <label>Enter your feedback: </label>

  <textarea
    required
    placeholder="Your feedback here..."
  ></textarea>

  <button type="submit">Submit Feedback</button>
</form>

<script src="index.js"></script>
```

## CSS

```css
form {
  max-width: 400px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-family: Arial, sans-serif;
}

label {
  font-weight: 600;
  margin-bottom: 4px;
  color: #333;
}

input,
textarea {
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.2s, box-shadow 0.2s;
}

input:focus,
textarea:focus {
  border-color: #0078d4;
  box-shadow: 0 0 3px rgba(0, 120, 212, 0.5);
  outline: none;
}

textarea {
  resize: vertical;
  min-height: 100px;
}

button[type="submit"] {
  background-color: #0078d4;
  color: #fff;
  border: none;
  padding: 10px 16px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

button[type="submit"]:hover {
  background-color: #005ea2;
}
```

## JavaScript

```javascript
const input = document.querySelector("input");

input.addEventListener("input", (e) => {
  console.log(e.target.validity);
});
```

The `validity` property is an instance of the `ValidityState` object.

Here is an example of what the object might look like in the browser:

```text
ValidityState {
  badInput: false,
  customError: false,
  patternMismatch: true,
  rangeOverflow: false,
  rangeUnderflow: false,
  stepMismatch: false,
  tooLong: false,
  tooShort: false,
  typeMismatch: true,
  valueMissing: false,
  valid: false
}
```

There are several helpful properties which all hold a boolean value of `true` or `false`.

# Useful Validity Properties

## `valueMissing`

The `valueMissing` property is `true` when a required input field is left empty.

For example:

```html
<input required>
```

If the user leaves the input empty:

```javascript
input.validity.valueMissing
```

will return:

```text
true
```

---

## `patternMismatch`

The `patternMismatch` property is `true` if the value doesn't match the specified regular expression pattern.

For example:

```html
<input
  type="email"
  pattern=".+@sampleCompany\.com"
>
```

If the user enters:

```text
example@gmail.com
```

the value does not match the required pattern.

Therefore:

```javascript
input.validity.patternMismatch
```

will return:

```text
true
```

---

## `typeMismatch`

The `typeMismatch` property is `true` when the value does not match the expected input type.

For example:

```html
<input type="email">
```

If the user enters an invalid email address, the `typeMismatch` property may be:

```javascript
input.validity.typeMismatch
```

which returns:

```text
true
```

---

## `customError`

The `customError` property is `true` when a custom validation message has been set using `setCustomValidity()`.

For example:

```javascript
input.setCustomValidity("This is a custom error.");
```

The following can then be checked:

```javascript
input.validity.customError
```

---

## `valid`

The `valid` property indicates whether the input passes all of its validation requirements.

If the input is valid:

```javascript
input.validity.valid
```

returns:

```text
true
```

If the input is invalid:

```javascript
input.validity.valid
```

returns:

```text
false
```

# Common Validation Methods

| Method / Property | Description |
|---|---|
| `checkValidity()` | Checks whether the element passes its validation rules. |
| `reportValidity()` | Displays the browser's validation message. |
| `setCustomValidity()` | Sets a custom validation error message. |
| `validity` | Provides detailed information about the element's validation state. |
| `valueMissing` | Indicates that a required field is empty. |
| `patternMismatch` | Indicates that the value does not match the specified pattern. |
| `typeMismatch` | Indicates that the value does not match its expected type. |
| `customError` | Indicates that a custom error message has been set. |
| `valid` | Indicates whether the element passes all validation rules. |

# Key Takeaways

* HTML provides built-in form validation.
* JavaScript allows you to create more complex validation.
* The Constraint Validation API provides methods and properties for checking form validity.
* The `required` attribute ensures that a field cannot be left empty.
* The `type="email"` attribute provides basic email validation.
* The `pattern` attribute allows you to specify a required format.
* The `checkValidity()` method returns `true` when the input is valid and `false` when it is invalid.
* The `reportValidity()` method tells the browser to display its validation message.
* The `setCustomValidity()` method allows you to create a custom error message.
* You should clear a custom error by using `setCustomValidity("")` when the input becomes valid.
* The `validity` property provides detailed information about the validation state.
* The `valueMissing` property checks whether a required field is empty.
* The `patternMismatch` property checks whether the value fails the specified pattern.
* The `typeMismatch` property checks whether the value does not match its expected input type.
* The `customError` property indicates whether a custom validation error has been set.
* The `valid` property indicates whether the input passes all validation rules.

As you continue working with JavaScript forms, experiment with the different validation methods and `ValidityState` properties to understand how they work together.

Using these tools allows you to provide users with clearer and more helpful feedback when they enter invalid information.
