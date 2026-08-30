# Form Validation with JavaScript Review

## Validating Forms with JavaScript

* **Constraint Validation API**
  * Certain HTML elements, such as `input`, `textarea`, and `select`, expose a Constraint Validation API.
  * This API allows you to check whether the user's provided value passes the HTML validation rules.
  * Examples:
    * `required`
    * `minlength`
    * `maxlength`
    * `pattern`
    * `min`
    * `max`

## `checkValidity()`

* The `checkValidity()` method checks whether an element passes all of its HTML validation rules.
* It returns:
  * `true` → The input is valid.
  * `false` → The input is invalid.

### Example

    <form>
      <label>
        Email:
        <input
          id="email"
          type="email"
          required
          pattern=".+\.com$"
          placeholder="example@site.com"
        />
      </label>
    </form>

    <script>
      const input = document.getElementById("email");

      input.addEventListener("input", (e) => {
        if (!e.target.checkValidity()) {
          e.target.setCustomValidity("You must use a .com email.");
        } else {
          e.target.setCustomValidity("");
        }
      });
    </script>

* `checkValidity()` returns `true` or `false`.
* `setCustomValidity()` can be used to create a custom validation message.
* Passing an empty string to `setCustomValidity()` clears the custom error.

## `reportValidity()`

* The `reportValidity()` method checks the validity of an element and tells the browser to display its validation message if it is invalid.

### Example

    <form>
      <label>
        Email:
        <input
          id="email2"
          type="email"
          required
          pattern=".+\.com$"
          placeholder="example@site.com"
        />
      </label>
    </form>

    <script>
      const input = document.getElementById("email2");

      input.addEventListener("input", (e) => {
        if (!e.target.checkValidity()) {
          e.target.reportValidity();
        }
      });
    </script>

### Difference

* `checkValidity()`
  * Checks whether the element is valid.
  * Returns `true` or `false`.

* `reportValidity()`
  * Checks whether the element is valid.
  * Reports the validation error to the user.

## `validity` Property

* The `validity` property provides information about the current validity state of a form control.

### Example

    <input
      id="age"
      type="number"
      min="18"
      placeholder="Enter age (18+)"
    />

    <script>
      const input = document.getElementById("age");

      input.addEventListener("input", (e) => {
        console.log(e.target.validity);
      });
    </script>

* Common `validity` properties include:
  * `valueMissing`
  * `typeMismatch`
  * `patternMismatch`
  * `tooLong`
  * `tooShort`
  * `rangeUnderflow`
  * `rangeOverflow`
  * `valid`

## `patternMismatch`

* `patternMismatch` is `true` when the value does not match the regular expression specified by the `pattern` attribute.
* It is `false` when the value matches the pattern.

### Example

    <input
      type="text"
      pattern="[A-Za-z]+"
      placeholder="Letters only"
    />

* `John` matches the pattern.
* `John123` does not match the pattern.

# `preventDefault()` Method

* Every DOM event can have a default browser behavior.
* Examples:
  * Clicking a checkbox normally toggles it.
  * Pressing `Enter` can submit a form.
  * Clicking a submit button normally submits the form.
* `preventDefault()` stops the event's default behavior.

### Example

    <form id="form">
      <input type="text" placeholder="Try to submit" />
      <button type="submit">Submit</button>
    </form>

    <p id="status"></p>

    <script>
      const form = document.getElementById("form");
      const status = document.getElementById("status");

      form.addEventListener("submit", (event) => {
        event.preventDefault();

        status.textContent = "Form submission prevented.";
      });
    </script>

# Submitting Forms

* There are three common ways a form can be submitted.

## 1. Submit Button

* A form can be submitted when the user clicks a button with `type="submit"`.

    <button type="submit">Submit</button>

## 2. Pressing `Enter`

* A user can submit a form by pressing the `Enter` key while focused on an editable input field.

## 3. JavaScript

* A form can be submitted using:
  * `requestSubmit()`
  * `submit()`

### `requestSubmit()`

    form.requestSubmit();

### `submit()`

    form.submit();

# `action` Attribute

* The `action` attribute specifies where the form data should be sent.
* It can contain:
  * A full URL.
  * A relative path.
* If `action` is not specified, the form submits to the current page's URL.

### Example

    <form
      action="https://freecodecamp.org"
      method="GET"
    >
      <input
        type="number"
        name="number"
        placeholder="Enter a number"
      />

      <button type="submit">
        Submit
      </button>
    </form>

# `method` Attribute

* The `method` attribute specifies the HTTP method used when submitting the form.
* Common methods include:
  * `GET`
  * `POST`
* If no method is specified, the default is `GET`.

## `GET`

    <form action="/data" method="GET">
      <input
        type="number"
        id="input"
        placeholder="Enter a number"
        name="number"
      />

      <button type="submit">
        Submit
      </button>
    </form>

* With `GET`, form data is URL-encoded as `name=value` pairs.
* The data is added to the URL as query parameters.

### Example

    /data?number=25

## `POST`

    <form action="/data" method="POST">
      <input
        type="number"
        id="input"
        placeholder="Enter a number"
        name="number"
      />

      <button type="submit">
        Submit
      </button>
    </form>

* With `POST`, the form data is sent in the request body.

# `enctype` Attribute

* The `enctype` attribute specifies how form data should be encoded when submitted.
* It accepts three values:

## `application/x-www-form-urlencoded`

* This is the default value.

    <form enctype="application/x-www-form-urlencoded">

* Example:

    name=John&age=20

## `text/plain`

* Sends the form data as plain text.

    <form enctype="text/plain">

* Example:

    name=John
    age=20

## `multipart/form-data`

* Used when the form includes file uploads.

    <form
      action="/upload"
      method="POST"
      enctype="multipart/form-data"
    >
      <input
        type="file"
        name="file"
      />

      <button type="submit">
        Upload
      </button>
    </form>

# Quick Review

* `checkValidity()` → Checks whether an element is valid.
* `reportValidity()` → Reports an invalid element to the user.
* `validity` → Provides detailed validity information.
* `patternMismatch` → Checks whether the value fails the `pattern`.
* `setCustomValidity()` → Sets a custom validation error.
* `preventDefault()` → Stops the browser's default event behavior.
* `action` → Specifies where form data is sent.
* `method` → Specifies how form data is sent.
* `enctype` → Specifies how form data is encoded.
* `requestSubmit()` → Submits a form using normal form-submission behavior.
* `submit()` → Directly submits the form.

# Key Things to Remember

* HTML can perform basic form validation without JavaScript.
* JavaScript can inspect and control HTML validation.
* `checkValidity()` returns a Boolean.
* `reportValidity()` reports invalid input.
* `validity` provides detailed information about validation.
* `patternMismatch` checks the `pattern` constraint.
* `setCustomValidity()` creates a custom validation message.
* `preventDefault()` stops an event's normal browser behavior.
* `action` determines where form data is sent.
* `method` determines how the data is sent.
* `GET` puts form data in the URL.
* `POST` puts form data in the request body.
* `enctype` determines how form data is encoded.
* `multipart/form-data` is commonly used for file uploads.
