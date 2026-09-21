# How Can You Use Cookies to Store Arbitrary Data, Normally Controlled by HTTP Headers?

As you learned in previous lessons, **cookies** are simple pieces of data that websites can store on a user's device.

However, you can also store more complex data structures in cookies. One common method is to use **JSON** to store objects or arrays.

---

# Storing JSON Data in Cookies

Here's an example:

    const userData = {
      name: "John Doe",
      age: 30,
      role: "admin"
    };

    document.cookie = "userInfo=" + JSON.stringify(userData) + "; path=/";

In this example, we're:

1. Creating an object containing user data.
2. Converting the object into a JSON string using `JSON.stringify()`.
3. Storing the JSON string in a cookie named `userInfo`.

When we want to retrieve this data, we can parse the JSON string back into an object using `JSON.parse()`.

For example:

    const cookies = document.cookie;
    const userInfo = JSON.parse(cookies);

> In a real application, you would first need to extract the specific `userInfo` cookie value from `document.cookie` before passing it to `JSON.parse()`.

---

# Cookies and HTTP Headers

Now, you might be wondering about the **HTTP headers** aspect of this topic.

Typically, cookies are set by the server using HTTP headers.

For example, a server might send a header like this:

    Set-Cookie: username=John Doe; expires=Thu, 31 Dec 2024 6:00:00 IST; path=/

This `Set-Cookie` header tells the browser to create and store a cookie.

The browser can then send the cookie back to the server in the `Cookie` header when making subsequent requests.

---

# Setting Cookies with JavaScript

We can also set cookies directly in the browser using JavaScript.

This can be useful for storing data that doesn't need to be controlled by the server immediately.

For example:

    document.cookie = "username=JohnDoe; path=/";

This creates a cookie named `username` with the value `JohnDoe`.

---

# Cookie Size Limit

Cookies have a relatively small size limit of around **4 KB per cookie**.

Because of this, cookies are not suitable for storing large amounts of data.

Storing too much data in cookies can also slow down your web application because cookies are sent with HTTP requests to the applicable server.

Large cookies can therefore increase **network traffic** and make requests less efficient.

---

# Summary

Cookies can store more than simple values. Developers can use **JSON** to represent objects or arrays as strings and store them inside cookies.

Important points to remember:

* `JSON.stringify()` can convert an object or array into a JSON string.
* `JSON.parse()` can convert a JSON string back into a JavaScript object or array.
* Servers commonly create cookies using the `Set-Cookie` HTTP header.
* JavaScript can create cookies using `document.cookie`.
* Cookies have a size limit of around **4 KB per cookie**.
* Large cookies can increase network traffic because they may be sent with HTTP requests.
* Cookies should be used for relatively small pieces of data rather than large data structures.
