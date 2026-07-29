const button = document.getElementById("theme-switcher-button");
const dropdown = document.getElementById("theme-dropdown");
const status = document.getElementById("status");

const themes = [
  {
    name: "light",
    message: "Current Theme: Light"
  },
  {
    name: "dark",
    message: "Current Theme: Dark"
  },
  {
    name: "ocean",
    message: "Current Theme: Ocean"
  },
  {
    name: "nord",
    message: "Current Theme: Nord"
  }
];

button.addEventListener("click", () => {
  const isHidden = dropdown.hasAttribute("hidden");

  if (isHidden) {
    dropdown.removeAttribute("hidden");
    button.setAttribute("aria-expanded", "true");
  } else {
    dropdown.setAttribute("hidden", "");
    button.setAttribute("aria-expanded", "false");
  }
});

themes.forEach((theme) => {
  const menuItem = document.getElementById(`theme-${theme.name}`);

  menuItem.addEventListener("click", () => {

    themes.forEach((t) => {
      document.body.classList.remove(`theme-${t.name}`);
    });

    document.body.classList.add(`theme-${theme.name}`);

    status.textContent = theme.message;

    dropdown.setAttribute("hidden", "");
    button.setAttribute("aria-expanded", "false");
  });
});
