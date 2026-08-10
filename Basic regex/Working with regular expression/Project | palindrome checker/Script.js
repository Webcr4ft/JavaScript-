const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

checkButton.addEventListener("click", () => {
  const originalText = textInput.value;

  if (originalText === "") {
    alert("Please input a value");
    return;
  }

  const cleanedText = originalText
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

  const reversedText = cleanedText
    .split("")
    .reverse()
    .join("");

  if (cleanedText === reversedText) {
    result.textContent = `${originalText} is a palindrome`;
  } else {
    result.textContent = `${originalText} is not a palindrome`;
  }
});
