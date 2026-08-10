const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");

const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

function getFlags() {
  let flags = "";

  if (caseInsensitiveFlag.checked) {
    flags += "i";
  }

  if (globalFlag.checked) {
    flags += "g";
  }

  return flags;
}

testButton.addEventListener("click", () => {
  const regex = new RegExp(regexPattern.value, getFlags());

  const text = stringToTest.textContent;
  const matches = text.match(regex);

  if (matches) {
    testResult.textContent = globalFlag.checked
      ? matches.join(", ")
      : matches[0];

    stringToTest.innerHTML = text.replace(
      regex,
      match => `<span class="highlight">${match}</span>`
    );
  } else {
    testResult.textContent = "no match";
  }
});
