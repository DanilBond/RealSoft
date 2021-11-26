let windows = document.querySelectorAll(".windowModuleFinder");

for (const i of windows) {
    i.style.display = "none";
}
windows[3].style.display = "";
windows[4].style.display = "";

function setActiveWindow(id){
    for (let i = 0; i < windows.length; i++) {
        if(i == id){
            windows[i].style.display = "";
    }
    else{
        if(!windows[i].classList.contains("windowIsClosed"))
            windows[i].style.display = "none";
    }
}
}