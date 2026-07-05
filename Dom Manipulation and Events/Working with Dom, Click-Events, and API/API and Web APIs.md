# JavaScript Notes: What Is an API and What Are Web APIs?

## Introduction

An **API (Application Programming Interface)** is a set of rules and protocols that allows different software applications to communicate and exchange data efficiently.

> Think of an API as a **bridge** between two applications. Instead of building everything from scratch, developers can use existing services to add powerful features to their applications.

---

# What Is an API?

An API allows one program to request data or services from another program.

### Example:
- A weather app requests weather data from a weather service.
- An online store connects to a payment service.
- A website displays Google Maps without creating its own map system.

---

# What Are Web APIs?

**Web APIs** are APIs specifically designed for web applications.

> **Note:** Web APIs are **not part of the JavaScript language itself**. Instead, they are provided by web browsers or external services.

There are **two main categories** of Web APIs:

1. Browser APIs
2. Third-Party APIs

---

# Browser APIs

Browser APIs are built directly into modern web browsers.

They allow JavaScript to access browser features and perform tasks such as:

- Manipulating web pages
- Handling user events
- Storing data
- Communicating over the internet
- Working with multimedia
- Accessing device information

---

## Common Browser APIs

### 1. DOM API

The **DOM (Document Object Model) API** allows JavaScript to:

- Modify HTML elements
- Change CSS styles
- Update attributes
- Create or remove elements

Example:

```javascript
document.querySelector("h1").textContent = "Hello World!";
```

> The DOM API is one of the most important concepts in web development.

---

### 2. Storage API

The **Storage API** lets websites save information directly on the user's device.

Common uses include:

- Saving user preferences
- Remembering login information
- Storing themes
- Saving game progress

Example:

```javascript
localStorage.setItem("theme", "dark");
```

---

### 3. Other Browser APIs

Browsers include many additional APIs, such as:

- Geolocation API (Get the user's location)
- Media APIs (Video and Audio)
- Microphone access
- Camera access
- Network APIs

These APIs make web applications much more interactive.

---

# Third-Party APIs

Unlike Browser APIs, **Third-Party APIs are not built into the browser**.

To use them, you must connect to an external service.

Most third-party APIs provide:

- Documentation
- Authentication methods
- Usage examples
- Endpoints for requesting data

---

## Example

### Google Maps API

The Google Maps API allows developers to:

- Display maps
- Add markers
- Show directions
- Calculate distances

Without creating a mapping system from scratch.

---

# Common Types of Third-Party APIs

Some popular examples include:

- Weather APIs
- Social Media APIs
- Payment APIs
- Data APIs
- Translation APIs
- Email APIs
- AI APIs
- Maps APIs

Choose the API that best fits your project's needs.

---

# Why APIs Matter

APIs help developers:

- Reuse existing services
- Save development time
- Build more powerful applications
- Connect with external services
- Access real-time data
- Improve user experience

Without APIs, many modern websites would not be possible.

---

# Key Takeaways

- API stands for **Application Programming Interface**.
- APIs allow different software applications to communicate.
- Web APIs are designed specifically for web applications.
- Web APIs are **not part of JavaScript**.
- There are two main types:
  - Browser APIs
  - Third-Party APIs
- Browser APIs are built into browsers.
- Third-Party APIs must be connected from external providers.
- APIs make websites dynamic, interactive, and feature-rich.

---

# Final Summary

APIs are one of the foundations of modern web development. They allow applications to communicate, share data, and access powerful features without developers having to build everything themselves.

By understanding Browser APIs and Third-Party APIs, you'll be able to create more interactive, dynamic, and real-world web applications using JavaScript.
