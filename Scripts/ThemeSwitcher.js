let links = [
    "style.css",
    "Themes/dark-theme-first.css",
    "Themes/dark-theme-first.css",
    "Themes/dark-theme-first.css",
    "Themes/dark-theme-second.css",
    "Themes/neutral-theme1.css",
    "Themes/neutral-theme2.css",
    "Themes/neutral-theme3.css",
];

let currentTheme = 0;

function switchThemes() {
    currentTheme++;
    if (currentTheme === 2) {
        $(".content").addClass("bg-i-1");
    } else {
        $(".content").removeClass("bg-i-1");
    }

    if (currentTheme === 3) {
        $(".content").addClass("bg-i-2");
    } else {
        $(".content").removeClass("bg-i-2");
    }

    if (currentTheme >= links.length) currentTheme = 0;
    let link = document
        .querySelector("#globalStyles")
        .setAttribute("href", links[currentTheme]);
}
