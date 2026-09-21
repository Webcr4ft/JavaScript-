# What Are Cookies, and How Do They Work?

**Cookies**, also known as **web cookies** or **browser cookies**, are small pieces of data that a server sends to a user's web browser.

These cookies are stored on the user's device and sent back to the server with subsequent requests.

Cookies are essential for helping web applications **maintain state** and remember user information, which is especially important because **HTTP is a stateless protocol**.

Cookies can store a variety of information, such as:

* User preferences
* Session data
* Tracking information

---

# How Cookies Store Data

Cookies are always stored as **name-value pairs**.

This means each cookie has:

* A **name (key)**
* An associated **value**

For example, a cookie might store a user's session ID like this:

`sessionId=abc123`

In this example:

* **Name:** `sessionId`
* **Value:** `abc123`

Each time the browser communicates with the server, the browser can send these cookies in the form of name-value pairs.

---

# How Cookies Are Set

When a user visits a website, the server can send one or more cookies to the user's browser by including a `Set-Cookie` header in the HTTP response.

A **header** is a key-value pair that provides additional information about an HTTP request or response.

You will learn more about HTTP requests and responses in future lessons.

For example:

    Set-Cookie: sessionId=abc123; Expires=Wed, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly

The browser will store the cookie.

In future requests to the same server, the browser can include the cookie in the `Cookie` header:

    Cookie: sessionId=abc123

The server can then read the cookie and use the stored session ID to retrieve information about the user, such as whether they are logged in.

---

# Types of Cookies

Here is a breakdown of the different types of cookies.

## Session Cookies

**Session cookies** only last for the duration of the user's session on the website.

Once the user closes the browser or tab, the session cookie is deleted.

These cookies are typically used for tasks such as keeping a user logged in during their visit.

## Persistent Cookies

**Persistent cookies** have an expiration date and remain stored on the user's device until that date is reached.

Persistent cookies are often used for remembering user preferences or login details across sessions.

## Secure Cookies

**Secure cookies** are only sent over **HTTPS**, ensuring that they are not sent over an unencrypted connection.

This helps protect the cookie while it is being transmitted.

## HttpOnly Cookies

**HttpOnly cookies** cannot be accessed or modified by JavaScript running in the browser.

This makes them more resistant to certain **cross-site scripting (XSS)** attacks.

### What Is XSS?

**Cross-site scripting (XSS)** attacks happen when an attacker injects malicious scripts into a web page that is viewed by other users.

These scripts can then execute in the context of the victim's browser, potentially stealing cookies, accessing session data, or performing other malicious actions without the user's knowledge or consent.

By marking cookies as `HttpOnly`, they cannot be accessed through JavaScript, which reduces the risk of cookies being stolen through certain XSS attacks.

---

# Creating Cookies with JavaScript

You can create cookies through server responses using the `Set-Cookie` header or through JavaScript using `document.cookie`.

Here's an example of setting a cookie using JavaScript:

    document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 2021 23:59:59 GMT; path=/";

This command sets a cookie named `username` with the value `"JohnDoe"` that expires at the end of 2021.

You can update an existing cookie by simply setting it again with a new value.

---

# Deleting Cookies

To delete a cookie, you can set its expiration date to a date in the past:

    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";

This tells the browser that the `username` cookie has expired, causing it to be removed.

---

# Summary

Cookies are small pieces of data that allow websites to store information in a user's browser and send that information back to the server with subsequent requests.

They are commonly used for:

* Maintaining user sessions.
* Remembering user preferences.
* Storing session-related information.
* Tracking user activity.

Important cookie types and attributes include:

* **Session cookies** → Last for a browser session.
* **Persistent cookies** → Remain until their expiration date.
* **Secure cookies** → Sent only over HTTPS.
* **HttpOnly cookies** → Cannot be accessed through JavaScript.

Cookies are an important part of how web applications maintain state and communicate information between the browser and server.
