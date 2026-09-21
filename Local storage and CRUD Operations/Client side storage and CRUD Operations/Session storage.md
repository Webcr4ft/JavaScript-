# What Is sessionStorage, and What Are Some Common Methods?

In the previous lesson, we learned about working with `localStorage` and were briefly introduced to `sessionStorage`.

Recall that **sessionStorage** stores data that is cleared as soon as the user closes the tab or window in which the web application is running.

It's ideal for situations where data only needs to persist for the length of a single session, such as:

* Maintaining form data during navigation.
* Storing temporary state information during a checkout process.
* Storing temporary selections or preferences.

Much like `localStorage`, `sessionStorage` uses **key-value pairs** to store and retrieve data.

The methods used with `sessionStorage` are also the same as `localStorage`, with the main difference being **how long the data is stored**.

---

# Common sessionStorage Methods

## sessionStorage.setItem()

The `setItem()` method stores a key-value pair in `sessionStorage`.

    sessionStorage.setItem('cart', '3 items');

---

## sessionStorage.getItem()

The `getItem()` method retrieves the value of a given key from `sessionStorage`.

    let cart = sessionStorage.getItem('cart');
    console.log(cart); // Outputs: '3 items'

---

## sessionStorage.removeItem()

The `removeItem()` method removes a specific item from `sessionStorage` using its key.

    sessionStorage.removeItem('cart');

---

## sessionStorage.clear()

The `clear()` method clears all data stored in `sessionStorage`.

    sessionStorage.clear();

---

# sessionStorage Example

Let's look at an example where we store data in `sessionStorage` that only lasts as long as the browser tab or window is open:

    // Store data in sessionStorage
    sessionStorage.setItem('currentUser', 'JohnDoe');

    // Retrieve the stored data
    const user = sessionStorage.getItem('currentUser');
    console.log(user); // 'JohnDoe'

    // Remove a specific key from sessionStorage
    sessionStorage.removeItem('currentUser');

    // Clear all sessionStorage data
    sessionStorage.clear();

## How the Example Works

In this example, we:

* Store the current user's name (`JohnDoe`) in `sessionStorage`.
* Retrieve and display the stored value.
* Remove the item associated with the key `currentUser`.
* Clear all `sessionStorage` data.

---

# sessionStorage vs localStorage

The key difference from `localStorage` is how long the data persists.

* `localStorage` keeps data even after the browser is closed or the page is refreshed, until it is explicitly removed.
* `sessionStorage` keeps data only for the current browser tab or window session.
* When the user closes the tab or window, the stored `sessionStorage` data is cleared.

---

# Common Uses of sessionStorage

`sessionStorage` is particularly useful in scenarios like:

* **Temporary form data:** Storing form entries during a multi-page form process.
* **Temporary selections:** Storing selections or preferences that don't need to persist across sessions.
* **Single-page applications:** Maintaining temporary state that doesn't need to be remembered once the tab is closed.

---

# Summary

`sessionStorage` is useful when you need to temporarily store data for the duration of a browser session.

It uses the same main methods as `localStorage`:

* `setItem()` → Stores data.
* `getItem()` → Retrieves data.
* `removeItem()` → Removes a specific item.
* `clear()` → Removes all stored data.

The main benefit of `sessionStorage` is that the stored data is cleared when the user closes the tab or window.

This makes it useful for scenarios where you don't want to hold onto information beyond the current session.
