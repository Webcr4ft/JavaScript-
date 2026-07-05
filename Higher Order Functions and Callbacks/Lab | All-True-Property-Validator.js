function truthCheck(collection, pre) {
  return collection.every(obj => Boolean(obj[pre]));
}

// Examples
console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true }
    ],
    "isBot"
  )
); // false

console.log(
  truthCheck(
    [
      { name: "Pikachu", number: 25, caught: 3 },
      { name: "Togepi", number: 175, caught: 1 },
      { name: "MissingNo", number: NaN, caught: 0 }
    ],
    "caught"
  )
); // false
