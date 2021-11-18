let links = [
  "style.css",
  "Themes/dark-theme-first.css",
  "Themes/dark-theme-second.css",
  "Themes/neutral-theme1.css",
  "Themes/neutral-theme2.css",
  "Themes/neutral-theme3.css",
];

let currentTheme = 0;

function switchThemes() {
  currentTheme++;
  if (currentTheme >= links.length) currentTheme = 0;
  let link = document
    .querySelector("#globalStyles")
    .setAttribute("href", links[currentTheme]);
}
