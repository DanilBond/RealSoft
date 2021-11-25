let windows = document.querySelectorAll(".windowModuleFinder");

for (const i of windows) {
    i.style.display = "none";
}

function setActiveWindow(id){
    for (let i = 0; i < windows.length; i++) {
        if(i == id){
            windows[i].style.display = "";
    }
}
}