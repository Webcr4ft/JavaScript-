# What Is localStorage, and What Are Some Common Methods?

The **Web Storage API** provides a mechanism for browsers to store **key-value pairs** directly within the browser. This allows developers to store information that can be used across different page reloads and sessions.

The two main components of the Web Storage API are:

* `localStorage`
* `sessionStorage`

## localStorage

`localStorage` is part of the Web Storage API that allows data to persist even after the browser window is closed or the page is refreshed.

This data remains available until it is explicitly removed by the application or the user.

## sessionStorage

`sessionStorage` is another part of the Web Storage API that stores data for the duration of the page session.

This means the data is available as long as the browser tab or window is open. However, unlike `localStorage`, the data in `sessionStorage` is cleared when the tab or window is closed.

> You will learn more about `sessionStorage` in the next lesson.

---

# Common Uses of localStorage

Common use cases for `localStorage` include:

* Storing user settings, such as themes or language preferences.
* Remembering form data across browser sessions.
* Caching small pieces of information to improve the performance of web apps.

## What Is Caching?

**Caching** refers to storing frequently accessed data in a temporary storage location, known as a **cache**.

This allows subsequent requests for that data to be served more quickly without having to recompute or fetch it from a slower data source, such as a database or external server.

---

# Common localStorage Methods

Some common `localStorage` methods include:

* `setItem()`
* `getItem()`
* `removeItem()`
* `clear()`

---

## setItem()

The `setItem()` method stores a key-value pair in `localStorage`.

    localStorage.setItem('username', 'JaneDoe');

---

## getItem()

If we want to retrieve the value of a given key from `localStorage`, we can use the `getItem()` method.

    let username = localStorage.getItem('username');
    console.log(username); // JaneDoe

---

## removeItem()

To remove an item from `localStorage` using its key, you can use the `removeItem()` method.

    localStorage.removeItem('username');

---

## clear()

To clear all data in `localStorage`, you can use the `clear()` method.

    localStorage.clear();

---

# localStorage Example

Here's an example where we use `localStorage` to store the preferred theme of a user:

    // Store the user's theme preference
    localStorage.setItem('theme', 'dark');

    // Retrieve the stored theme preference
    const userTheme = localStorage.getItem('theme');
    console.log(userTheme); // 'dark'

    // Remove the theme preference
    localStorage.removeItem('theme');

    // Clear all localStorage data
    localStorage.clear();

## How the Example Works

In this example:

* We first store a theme choice (`dark`) for the user.

* We then retrieve that theme and output it to the console.

* Finally, we demonstrate how to remove a specific item or clear all stored data.

---

# Important Security Note

`localStorage` is very useful for storing small pieces of data that need to persist between sessions.

However, it is important to note that `localStorage` should **not** be used to store sensitive information, such as passwords, because doing so can pose security risks.
