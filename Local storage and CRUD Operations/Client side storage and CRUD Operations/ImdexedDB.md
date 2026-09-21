# What Is IndexedDB, and How Does It Work?

`IndexedDB` is a tool for storing **structured data** in the browser.

It is built into modern web browsers, allowing web applications to store and retrieve JavaScript objects efficiently.

Unlike other storage mechanisms such as `localStorage`, which is limited to storing strings, `IndexedDB` can store:

* JavaScript objects
* Files
* Structured data
* Many other types of data

This makes `IndexedDB` useful for web applications that need to work with **large and complex data structures**.

---

# How IndexedDB Works

Let's look at how `IndexedDB` works.

## Opening a Database

The first step is to open a database.

    let request = indexedDB.open("Sample DB", 1);

    request.onerror = function(event) {
      console.log("Error opening database");
    };

    request.onsuccess = function(event) {
      let db = event.target.result;
      console.log("Database opened successfully");
    };

In this code, we're opening a database named `"Sample DB"` with version `1`.

We provide two callback functions:

* `onerror` handles errors that occur while opening the database.
* `onsuccess` runs when the database is successfully opened.

The `db` object we get in the success callback is what we'll use to interact with the database.

If you check the browser **DevTools Application** interface, you will see your `"Sample DB"` in the **IndexedDB** section.

---

# Object Stores

Once you have your database open, you can start working with **object stores**.

Object stores in `IndexedDB` are similar to **tables in traditional databases**. They hold the actual data you want to store.

Here's how to create an object store:

    let request = indexedDB.open("Sample DB", 1);

    request.onupgradeneeded = function(event) {
      let db = event.target.result;

      let objectStore = db.createObjectStore("customers", {
        keyPath: "id"
      });
    };

This code creates an object store named `"customers"` with `"id"` as its key path.

The **key path** is similar to a primary key in a traditional database. It is used to uniquely identify each record.

---

# Adding Data

To add data to our object store, we can use a transaction.

The `db` in this example represents the `IndexedDB` database instance.

    let transaction = db.transaction(["customers"], "readwrite");

    let objectStore = transaction.objectStore("customers");

    let request = objectStore.add({
      id: 1,
      name: "John Doe",
      email: "john@example.com"
    });

    request.onerror = function(event) {
      console.log("Error adding data");
    };

    request.onsuccess = function(event) {
      console.log("Data added successfully");
    };

This code adds a new customer to our `"customers"` object store.

We:

1. Start a transaction.
2. Get a reference to the object store.
3. Add our data to the object store.
4. Handle the success or error result.

A **transaction** is a way of grouping database operations together.

---

# Retrieving Data

Retrieving data works in a similar way.

We start a transaction, get our object store, and then use methods such as `get()` to retrieve data.

    let transaction = db.transaction(["customers"]);

    let objectStore = transaction.objectStore("customers");

    let request = objectStore.get(1);

    request.onerror = function(event) {
      console.log("Error retrieving data");
    };

    request.onsuccess = function(event) {
      console.log("Customer:", request.result);
    };

This code retrieves the customer with an `id` of `1` from our `"customers"` object store.

---

# IndexedDB Is Asynchronous

One of the key features of `IndexedDB` is that it is **asynchronous**.

This means that when you interact with `IndexedDB`, database operations don't block the main thread of the web application.

This helps keep your web application responsive, even when working with large amounts of data.

---

# Advantages of IndexedDB

`IndexedDB` provides several benefits:

* It can store structured data.
* It can store JavaScript objects.
* It can handle larger amounts of data than simpler storage APIs.
* It works directly in modern web browsers.
* Its asynchronous design helps prevent database operations from blocking the main thread.
* It is useful for applications that need to work with complex client-side data.

---

# Disadvantages of IndexedDB

While `IndexedDB` provides powerful capabilities, it also has a **steeper learning curve** compared to simpler storage APIs.

This can make it challenging for beginners to learn and use.

However, for applications that need to handle large amounts of structured data on the client side, `IndexedDB` provides powerful capabilities.

---

# Summary

`IndexedDB` is a browser-based database system designed for storing **structured data on the client side**.

Important concepts to remember:

* `indexedDB.open()` → Opens or creates a database.
* **Object stores** → Hold the data inside an IndexedDB database.
* **Key paths** → Uniquely identify records.
* **Transactions** → Group database operations together.
* `add()` → Adds data to an object store.
* `get()` → Retrieves data from an object store.
* `onupgradeneeded` → Used when a database needs to be created or upgraded.
* `onsuccess` → Runs when an operation succeeds.
* `onerror` → Handles errors.
* **Asynchronous operations** → Keep the main web application responsive.

For applications that need to store large amounts of structured data on the client side, `IndexedDB` is a powerful storage option.
