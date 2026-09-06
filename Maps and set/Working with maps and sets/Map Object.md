# What Is the Map Object, and How Does It Differ from WeakMaps?

In JavaScript, a `Map` is a built-in object that stores key-value pairs, similar to an object. However, it differs from standard JavaScript objects by allowing keys of any type, including objects and functions.

A `WeakMap` is a collection of key-value pairs, similar to a `Map`, but it uses weak references for its keys. The keys must be objects, while the values can be of any type.

Think of the relationship between a `WeakMap` and a `Map` as similar to the relationship between a `WeakSet` and a `Set`, as you learned in the previous lesson.

## Creating a Map

To create a `Map`, you use the `Map()` constructor prepended with the `new` keyword:

```javascript
const myFirstMap = new Map();
```

You can initialize the `Map` with values:

```javascript
const myTreesMap = new Map([
  [{ type: 'deciduous' }, 'Maple tree'],
  [['forest', 'grove'], 'Pine tree'],
  [42, 'Oak tree'],
  [true, 'Birch tree'],
  [function() { return 'I am a function key'; }, 'Willow tree'],
]);
```

If you didn't initialize the `Map` with values, you can use the `set()` method to add them:

```javascript
const myTreesMap = new Map();

myTreesMap.set({ type: 'deciduous' }, 'Maple tree');
myTreesMap.set([1, 2], 'Pine tree');
myTreesMap.set(42, 'Oak tree');
myTreesMap.set(true, 'Birch tree');
myTreesMap.set(function() { return "I'm a function key"; }, 'Willow tree');

console.log(myTreesMap);
```

Here's what a `Map` looks like in the console:

```javascript
/*
Map(5) {
  {…} => 'Maple tree',
  Array(2) => 'Pine tree',
  42 => 'Oak tree',
  true => 'Birch tree',
  ƒ => 'Willow tree'
}
  [[Entries]]
    0: {Object => "Maple tree"}
      key: {type: 'deciduous'}
      value: "Maple tree"
    1: {Array(2) => "Pine tree"}
      key: (2)
      value: "Pine tree"
    2: {42 => "Oak tree"}
      key: 42
      value: "Oak tree"
    3: {true => "Birch tree"}
      key: true
      value: "Birch tree"
    4: {function () { return "I'm a function key"; } => "Willow tree"}
      key: f ()
      value: "Willow tree"
    size: 5
    [[Prototype]]: Map
*/
```

# Map Methods and Properties

Other methods and properties you can use to work with a `Map` are:

* `get(key)` to retrieve the value associated with the specified key.
* `has(key)` to check if a key exists in the `Map`.
* `delete(key)` to remove a key-value pair from the `Map`.
* `clear()` to remove all key-value pairs.
* `entries()` to check the entries of the `Map` (it returns the entries in a `MapIterator`).
* `forEach()` to loop through the entries of the `Map`.
* `size` to indicate the number of key-value pairs in the `Map`.

## `get(key)`

The `get()` method retrieves the value associated with the specified key.

```javascript
myTreesMap.get(42);

// "Oak tree"
```

## `has(key)`

The `has()` method checks if a specified key exists in the `Map`.

```javascript
myTreesMap.has(42);

// true
```

## `delete(key)`

The `delete()` method removes a key-value pair from the `Map`.

```javascript
myTreesMap.delete(42);
```

## `clear()`

The `clear()` method removes all key-value pairs from the `Map`.

```javascript
myTreesMap.clear();
```

## `entries()`

The `entries()` method returns the entries of the `Map` in a `MapIterator`.

```javascript
console.log(myTreesMap.entries());
```

## `forEach()`

The `forEach()` method allows you to loop through the entries of the `Map`.

```javascript
myTreesMap.forEach((value, key) => {
  console.log(key, value);
});
```

## `size`

The `size` property indicates the number of key-value pairs in the `Map`.

```javascript
console.log(myTreesMap.size);
```

# WeakMap

There's a `WeakMap()` constructor you can use to create a `WeakMap`:

```javascript
const myFirstWeakMap = new WeakMap();
```

The `set()`, `get()`, `has()`, and `delete()` methods are all available for use with a `WeakMap` as well.

For example, here's how you can assign items to the `WeakMap` with the `set()` method:

```javascript
const myTreeWeakMap = new WeakMap();

myTreeWeakMap.set({ id: 1 }, 'Maple tree');
myTreeWeakMap.set({ id: 2 }, 'Pine tree');
myTreeWeakMap.set({ id: 3 }, 'Oak tree');
myTreeWeakMap.set({ id: 4 }, 'Birch tree');
myTreeWeakMap.set({ id: 5 }, 'Willow tree');

console.log(myTreeWeakMap);
```

Here's what a `WeakMap` looks like in the console:

```javascript
/*
WeakMap {
  {…} => 'Willow tree',
  {…} => 'Maple tree',
  {…} => 'Pine tree',
  {…} => 'Oak tree'
}
  [[Entries]]
    No properties
  [[Prototype]]: WeakMap
*/
```

# Map vs WeakMap

Here are the differences between a `Map` and a `WeakMap`:

| Feature | Map | WeakMap |
|---|---|---|
| Key Type | Keys can be of any data type, including strings, numbers, objects, or even functions. | Keys must be objects. |
| Use Case | Use a `Map` when you need to associate data with any type of key. | Use a `WeakMap` when you only need to associate data with objects. |
| Iteration | You can loop through a `Map` using `forEach()`, `keys()`, `values()`, or `entries()`. | A `WeakMap` is not iterable. |
| Size Property | `Map` has a `size` property to get the number of key-value pairs. | `WeakMap` does not have a `size` property. |

In the table above, you can see the differences summarized including the key type, use case, iteration and size property. Please take a moment to read the content of this table to learn more about their differences.
