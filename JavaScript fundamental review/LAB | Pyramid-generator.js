function pyramid(char, rows, upsideDown) {
  let result = "\n";

  if (!upsideDown) {
    for (let i = 0; i < rows; i++) {
      result += " ".repeat(rows - i - 1);
      result += char.repeat(2 * i + 1);
      result += "\n";
    }
  } else {
    for (let i = rows - 1; i >= 0; i--) {
      result += " ".repeat(rows - i - 1);
      result += char.repeat(2 * i + 1);
      result += "\n";
    }
  }

  return result;
}
