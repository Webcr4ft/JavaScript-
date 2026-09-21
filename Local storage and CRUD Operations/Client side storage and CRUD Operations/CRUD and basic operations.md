# What Does CRUD Stand For, and How Do the Basic Operations Work?

**CRUD** is an acronym that stands for **Create, Read, Update, and Delete**. These are the four operations of persistent storage.

**Persistent storage** refers to saving data in a way that makes it available even after the power is turned off or the device is restarted.

Understanding how the basic operations of CRUD work is crucial to web development because it forms the foundation for working with databases and building applications where users can add, view, modify, and delete data.

Now, let's take a look at each part of CRUD more closely.

## Create

**Create** refers to the process of creating new data.

For example, in a web app, this could be when a user adds a new post to a blog.

## Read

**Read** is the operation where data is retrieved from a database.

For instance, when you visit a blog post or view your profile on a website, you're performing a **read operation** to fetch and display data stored in the database.

## Update

**Update** involves modifying existing data in the database.

An example would be editing a blog post or updating your profile information.

## Delete

**Delete** is the operation that removes data from a database.

For instance, when you delete a blog post or account, you're performing a **delete operation**.

---

# CRUD and RESTful APIs

CRUD is used when working with:

* Databases
* User interfaces (UI)
* RESTful APIs

**RESTful APIs** are a set of conventions for building web services that allow the client to interact with a database or back-end system by performing CRUD operations through standard HTTP methods.

---

# HTTP Methods

**HTTP** stands for **Hypertext Transfer Protocol**, and it is the foundation for data communication on the web.

There are HTTP methods that define the actions that can be performed on resources over the web.

The common methods are:

* `GET`
* `POST`
* `PUT`
* `PATCH`
* `DELETE`

You will learn more about RESTful APIs and HTTP in future lessons, but here's a quick breakdown of how CRUD maps to the different HTTP methods.

| CRUD Operation | HTTP Method | Description |
|---|---|---|
| **Create** | `POST` | Creates a new resource |
| **Read** | `GET` | Retrieves or reads data |
| **Update** | `PUT` | Updates a resource by replacing it entirely |
| **Update** | `PATCH` | Partially updates a resource |
| **Delete** | `DELETE` | Removes a resource |

> **Note:** `PUT` is generally used to replace an entire resource, while `PATCH` is used to partially update a resource.

---

# CRUD Example in JavaScript

Here's an example of how CRUD operations might be represented in code using a simple array in JavaScript:

    let items = [];

    // Create
    function createItem(item) {
      items.push(item);
    }

    // Read
    function readItems() {
      return items;
    }

    // Update
    function updateItem(index, newItem) {
      items[index] = newItem;
    }

    // Delete
    function deleteItem(index) {
      items.splice(index, 1);
    }

    // Example Usage
    createItem('Book');
    console.log(readItems()); // ['Book']

    updateItem(0, 'Magazine');
    console.log(readItems()); // ['Magazine']

    deleteItem(0);
    console.log(readItems()); // []

## How the Example Works

In this example:

* **Create:** We create an item by pushing it into an array using `push()`.

* **Read:** We read the items by returning the array.

* **Update:** We update an item by modifying the array element at a given index.

* **Delete:** We delete an item by removing it from the array using `splice()`.

---

# Summary

CRUD represents the four fundamental operations used when working with persistent data:

* **Create** → Add new data
* **Read** → Retrieve existing data
* **Update** → Modify existing data
* **Delete** → Remove data

These operations are fundamental to building applications that interact with **databases, APIs, and user interfaces**.

The JavaScript example above provides a basic representation of how CRUD operations work at a conceptual level. In real-world applications, these operations are typically performed against a database or through an API rather than directly on a JavaScript array.
