# How Do You Get the Length for an Array, and How Can You Create an Empty Array of Fixed Length?

In previous lessons, you were introduced to the `length` property. This property returns the number of elements in an array.

Here's a quick reminder of how it works:

```javascript
const fruits = ["apple", "banana", "orange"];

console.log(fruits.length); // 3
```

The `fruits` array contains three elements, so its `length` property returns `3`.

## Understanding Sparse Arrays

It is possible to create arrays with **empty slots**. An empty slot is a position in an array that contains nothing. This is different from a slot that contains the value `undefined`.

Arrays with empty slots are known as **sparse arrays**.

```javascript
const sparseArray = [1, , , 4];

console.log(sparseArray.length); // 4
```

Even though only two elements (`1` and `4`) are defined, the array's `length` is still `4`.

This is because an array's `length` is determined by the highest index plus one. In this example, the highest index is `3`, so the `length` is `4`.

## Creating an Empty Array of Fixed Length

There are several ways to create an empty array of a fixed length in JavaScript.

One common approach is to use the `Array()` constructor with a numeric argument. The `Array()` constructor can be used with the `new` keyword to create a new array.

```javascript
const emptyArray = new Array(5);

console.log(emptyArray.length); // 5
console.log(emptyArray); // [ , , , , ]
```

In this example, `new Array(5)` creates a sparse array with a `length` of `5`, where every slot is empty.

## Using `Array.from()`

Another way to create an empty array of a fixed length is to use the `Array.from()` method with a `length` argument.

Unlike `new Array(n)`, this method creates an array of the specified length where all elements exist and have a value of `undefined`.

```javascript
const fixedLengthArray = Array.from({ length: 5 });

console.log(fixedLengthArray.length); // 5
console.log(fixedLengthArray);
// [undefined, undefined, undefined, undefined, undefined]
```

Although every element is `undefined`, each slot actually exists in the array.

## Using `Array.fill()`

If you want to create an array of a specific length and fill it with a default value, you can use the `Array.fill()` method.

```javascript
const filledArray = new Array(3).fill(0);

console.log(filledArray); // [0, 0, 0]
```

This creates an array of `length` `3` and fills every element with the value `0`.

> **Note:** When filling an array with objects, all slots reference the same object. If you need independent copies, use a callback function or `Array.from()` instead.

## Why Is This Important?

Understanding how to get the `length` of an array and create arrays of a fixed length is important for many programming tasks.

These techniques are especially useful when you need to initialize arrays for specific algorithms or data structures.
