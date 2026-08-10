function translatePigLatin(str) {
  const vowels = /[aeiou]/;

  // If the word starts with a vowel
  if (vowels.test(str[0])) {
    return str + "way";
  }

  // Find the position of the first vowel
  const vowelIndex = str.search(vowels);

  // If there are no vowels
  if (vowelIndex === -1) {
    return str + "ay";
  }

  // Move the consonants before the first vowel to the end
  return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
}
