# JavaScript Forms

# How Does the Submit Event Work with Forms?

Let's learn about how the `submit` event works with HTML forms.

First, we need to understand how to submit a form.

There are **three ways** a form can be submitted.

---

# 1. Clicking a Submit Button

The first way is when the user clicks a button in the form which has the `type` attribute set to `submit`.

```html
<form>
  <input type="text">
  <button type="submit">Submit</button>
</form>
```

The important part is:

```html
<button type="submit">
```

Because the button has `type="submit"`, clicking it will submit the form.

---

# 2. Pressing the Enter Key

The second way is when the user presses the `Enter` key on an editable input field in the form.

For example:

```html
<form>
  <input type="text">
  <button type="submit">Submit</button>
</form>
```

If the user types something into the input and presses `Enter`, the form can be submitted.

---

# 3. Submitting the Form With JavaScript

The third way is through a JavaScript call to the `requestSubmit()` or `submit()` methods of the form element.

For example:

```javascript
const form = document.querySelector("form");

form.requestSubmit();
```

You can also use:

```javascript
const form = document.querySelector("form");

form.submit();
```

These methods allow JavaScript to submit a form programmatically.

---

# What Happens When a Form Is Submitted?

When a form is submitted, there are a few things that happen.

The behavior of the form depends on its attributes.

Two important attributes that control how a form is submitted are:

* `action`
* `method`

There is also an `enctype` attribute that controls how the form data is encoded.

---

# 4. The `action` Attribute

The first attribute that we need to look at is the `action` attribute.

The `action` attribute should contain either a URL or a relative path for the current domain.

This value determines where the form attempts to send its data.

For example:

```html
<form action="https://freecodecamp.org">
  <input
    type="number"
    id="input"
    placeholder="Enter a number"
    name="number"
  />

  <button type="submit">Submit</button>
</form>
```

When this form is submitted, it will send data to the freeCodeCamp homepage, which probably won't do anything useful with the submitted data.

---

# 5. Using a Relative Path

The `action` attribute can also contain a relative path.

For example:

```html
<form action="/data">
  <input
    type="number"
    id="input"
    placeholder="Enter a number"
    name="number"
  />

  <button type="submit">Submit</button>
</form>
```

This form submits to the `/data` path on the current domain.

For example, if your website is running at:

```text
http://127.0.0.1:5500
```

the form would attempt to submit to:

```text
http://127.0.0.1:5500/data
```

---

# 6. What Happens If `action` Is Not Set?

If you do not set an `action` attribute, the form will send the data to the current page's URL.

For example:

```html
<form>
  <input type="text" name="username">

  <button type="submit">
    Submit
  </button>
</form>
```

Because there is no `action` attribute, the browser uses the current page's URL as the destination.

---

# 7. The `method` Attribute

The second attribute used to control how a form submission behaves is the `method` attribute.

The `method` attribute accepts a standard HTTP method, such as:

* `GET`
* `POST`
* `PUT`
* `DELETE`

For example:

```html
<form action="/data" method="POST">
```

The `method` tells the browser which HTTP method should be used when sending the form data to the `action` URL.

---

# 8. What Is HTTP?

HTTP stands for:

**Hypertext Transfer Protocol**

HTTP is used to transfer data over the web.

HTTP methods are used to define actions that can be performed on resources.

Some common HTTP methods are:

```text
GET
POST
PUT
DELETE
```

You will learn more about these methods in future lessons.

---

# 9. The Default `method`

When a `method` is not set, the form will default to a `GET` request.

For example:

```html
<form action="/data">
  <input
    type="number"
    name="number"
  />

  <button type="submit">
    Submit
  </button>
</form>
```

This form uses `GET` because no `method` was specified.

The same thing can be written explicitly as:

```html
<form action="/data" method="GET">
```

---

# 10. How the `GET` Method Works

A `GET` request is used to retrieve data from a specified resource without making changes to it.

The parameters are typically appended to the URL as a query string.

For example:

```html
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
```

Suppose the user enters:

```text
3342
```

The form data is represented as:

```text
number=3342
```

The browser then appends this information to the URL.

The resulting URL would look like:

```text
http://127.0.0.1:5500/data?number=3342
```

The `?` marks the beginning of the query string.

---

# 11. URL-Encoded Form Data

Form data is URL encoded as `name=value` pairs.

For example:

```text
number=3342
```

Another example could be:

```text
name=John+Doe&email=john%40example.com
```

Here:

```text
name=John+Doe
```

represents:

```text
name = John Doe
```

And:

```text
email=john%40example.com
```

represents:

```text
email = john@example.com
```

Special characters are replaced with encoded versions so the data can be safely sent over the web.

---

# 12. When Should You Use `GET`?

The `GET` method is great for something like a search form.

For example:

```html
<form action="/search" method="GET">
  <input
    type="search"
    name="query"
    placeholder="Search..."
  />

  <button type="submit">
    Search
  </button>
</form>
```

If the user searches for:

```text
JavaScript
```

the resulting URL could look like:

```text
/search?query=JavaScript
```

This is useful because the search information can be represented directly in the URL.

---

# 13. The `POST` Method

But what if you want your user to submit new data?

For example:

* Registering a new account.
* Sending feedback.
* Creating a new record.
* Submitting information to a server.

In these situations, the idiomatic method to use would be the `POST` method.

The `POST` method is used to send data to a server to create or update a resource.

---

# 14. Using `POST` With a Form

Let's set the `method` attribute to `POST`:

```html
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
```

Now the form uses the `POST` method.

---

# 15. How `POST` Is Different From `GET`

When you send a `POST` request, a body can be included.

The body contains the data for the request.

Unlike a `GET` request, the data is not appended to the URL as query parameters.

For example, this form:

```html
<form action="/data" method="POST">
  <input
    type="number"
    name="number"
  />

  <button type="submit">
    Submit
  </button>
</form>
```

sends the request to:

```text
http://127.0.0.1:5500/data
```

The submitted data can instead be found in the body of the request.

---

# 16. `GET` vs `POST`

A simple way to remember the difference is:

## `GET`

```text
GET /data?number=3342
```

The data is commonly included in the URL.

## `POST`

```text
POST /data
```

The data is included in the request body.

---

# 17. What Is the `enctype` Attribute?

Maybe you don't want to send the data as a URL-encoded form payload.

The `form` element accepts an `enctype` attribute.

The `enctype` attribute represents the encoding type to use for the form data.

For example:

```html
<form
  action="/data"
  method="POST"
  enctype="application/x-www-form-urlencoded"
>
```

There are **three possible values** for `enctype`.

---

# 18. `application/x-www-form-urlencoded`

This is the default encoding type.

```html
<form
  method="POST"
  enctype="application/x-www-form-urlencoded"
>
```

It sends the data as URL-encoded form data.

For example:

```text
name=John+Doe&email=john%40example.com
```

This is the default behavior for normal forms.

---

# 19. `text/plain`

The second option is:

```text
text/plain
```

For example:

```html
<form
  method="POST"
  enctype="text/plain"
>
```

This sends the form data as plaintext.

The data is represented as `name=value` pairs separated by new lines.

For example:

```text
name=John Doe
email=john@example.com
```

---

# 20. `multipart/form-data`

The third option is:

```text
multipart/form-data
```

For example:

```html
<form
  method="POST"
  enctype="multipart/form-data"
>
```

This encoding type is specifically useful for forms that include file uploads.

For example:

```html
<form
  action="/upload"
  method="POST"
  enctype="multipart/form-data"
>
  <label>
    Select a file:

    <input
      type="file"
      name="file"
    />
  </label>

  <button type="submit">
    Upload
  </button>
</form>
```

---

# 21. The `submit` Event

JavaScript can listen for the `submit` event on a form.

For example:

```javascript
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  console.log("Form submitted");
});
```

Whenever the form is submitted, the callback function runs.

You can also prevent the browser's default submission behavior:

```javascript
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log("Form submission prevented");
});
```

This is useful when you want JavaScript to handle the form instead of allowing the browser to immediately navigate to the `action` URL.

---

# 22. Basic Form Submission Flow

A simple form submission flow looks like this:

```text
User submits form
       |
       v
Submit event occurs
       |
       v
Browser validates the form
       |
       v
Browser uses the action URL
       |
       v
Browser uses the method
       |
       v
Form data is encoded
       |
       v
Request is sent
```

If JavaScript calls:

```javascript
event.preventDefault();
```

the normal submission process is prevented.

---

# Key Takeaways

* A form can be submitted by clicking a submit button.
* A form can be submitted by pressing `Enter` in an editable input field.
* A form can also be submitted using JavaScript.
* `requestSubmit()` and `submit()` can be used to submit a form programmatically.
* The `action` attribute determines where the form data is sent.
* If `action` is not specified, the form submits to the current page's URL.
* The `method` attribute determines which HTTP method is used.
* The default form method is `GET`.
* `GET` requests commonly place form data in the URL as query parameters.
* `POST` requests send form data in the request body.
* HTTP stands for Hypertext Transfer Protocol.
* Common HTTP methods include `GET`, `POST`, `PUT`, and `DELETE`.
* URL-encoded form data uses `name=value` pairs.
* The `enctype` attribute controls how form data is encoded.
* `application/x-www-form-urlencoded` is the default encoding type.
* `text/plain` sends the form data as plain text.
* `multipart/form-data` is useful for forms that upload files.
* JavaScript can listen for the `submit` event.
* `preventDefault()` can be used to stop the browser's default form submission behavior.
