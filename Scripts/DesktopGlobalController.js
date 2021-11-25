let windowsDesktop = document.querySelectorAll(".windowDesktop");

let modalContainers = document.querySelector("#smallModalsContainer");
let modalWindows = document.querySelectorAll(".mwww");
let modalWindowsDisabled = [];

console.log(modalWindows);

function setSize(id){
    if(windowsDesktop[id].style.minHeight == "40px"){
        windowsDesktop[id].style.minHeight = "";
        windowsDesktop[id].style.maxHeight = "";
        windowsDesktop[id].style.overflowY = "";
        windowsDesktop[id].style.resize = "";
    }
    else{
        
        windowsDesktop[id].style.minHeight = "40px";
        windowsDesktop[id].style.maxHeight = "40px";
        windowsDesktop[id].style.overflowY = "hidden";
        windowsDesktop[id].style.resize = "none";

        windowsDesktop[id].style.position = "";
        windowsDesktop[id].style.width = ""
        windowsDesktop[id].style.height = "";
        windowsDesktop[id].style.zIndex = "";
        windowsDesktop[id].style.top = "";
        windowsDesktop[id].style.bottom = "";
        windowsDesktop[id].style.left = "";
        windowsDesktop[id].style.right = "";
        windowsDesktop[id].style.margin = "";
    }
}

function setFullScreen(id){
    if(windowsDesktop[id].style.position == ""){
        windowsDesktop[id].style.position = "fixed";
        windowsDesktop[id].style.width = "100%"
        windowsDesktop[id].style.height = "100%";
        windowsDesktop[id].style.zIndex = "1";
        windowsDesktop[id].style.top = "0";
        windowsDesktop[id].style.bottom = "0";
        windowsDesktop[id].style.left = "0";
        windowsDesktop[id].style.right = "0";
        windowsDesktop[id].style.margin = "0";

        windowsDesktop[id].style.minHeight = "";
        windowsDesktop[id].style.maxHeight = "";
        windowsDesktop[id].style.overflowY = "";
        windowsDesktop[id].style.resize = "";
    }
    else{
        windowsDesktop[id].style.position = "";
        windowsDesktop[id].style.width = ""
        windowsDesktop[id].style.height = "";
        windowsDesktop[id].style.zIndex = "";
        windowsDesktop[id].style.top = "";
        windowsDesktop[id].style.bottom = "";
        windowsDesktop[id].style.left = "";
        windowsDesktop[id].style.right = "";
        windowsDesktop[id].style.margin = "";
    }
}


function resizeModal(id){
    modalWindows[id].classList.toggle("dis-block");
    modalWindowsDisabled.push(id);
    console.log(modalWindowsDisabled);

    let elem = document.createElement("div");
    elem.innerText = null;
    elem.classList = "modalItemElement id" + id;
    elem.innerText = "Open";
    elem.onclick = ()=>{openModal(id, id)};
    modalContainers.append(elem);

    modalWindows[id].style.width = "";
        modalWindows[id].style.maxWidth = "";
        modalWindows[id].style.height = "";
        modalWindows[id].style.zIndex = "";
        modalWindows[id].style.resize = "";
        
        modalWindows[id].style.position = "";
        modalWindows[id].style.top = "";
        modalWindows[id].style.bottom = "";
        modalWindows[id].style.left = "";
        modalWindows[id].style.right = "";

        modalWindows[id].classList.toggle("ui-draggable");
        modalWindows[id].classList.toggle("ui-resizable");

    if(modalWindowsDisabled.length > 0)
        modalContainers.style.display = "flex";
    else
        modalContainers.style.display = "none";
}

function openModal(id, elemId){
    modalWindows[id].classList.toggle("dis-block");
    
    let del = modalWindowsDisabled.indexOf(id);
    modalWindowsDisabled.splice(del, 1);

    let elemForDel = modalContainers.querySelectorAll(".id0");
    for (const i of elemForDel) {
        i.remove();
    }

    if(modalWindowsDisabled.length > 0)
        modalContainers.style.display = "flex";
    else
        modalContainers.style.display = "none";
}

function fullScreenModal(id) {
    if(modalWindows[id].style.width != "100%"){
        modalWindows[id].style.width = "100%";
        modalWindows[id].style.maxWidth = "100%";
        modalWindows[id].style.height = "100%";
        modalWindows[id].style.zIndex = "2";
        modalWindows[id].style.resize = "none";
        
        modalWindows[id].style.position = "fixed !important";
        modalWindows[id].style.top = "0";
        modalWindows[id].style.bottom = "0";
        modalWindows[id].style.left = "0";
        modalWindows[id].style.right = "0";

        modalWindows[id].classList.toggle("ui-draggable");
        modalWindows[id].classList.toggle("ui-resizable");
    }
    else{
        modalWindows[id].style.width = "";
        modalWindows[id].style.maxWidth = "";
        modalWindows[id].style.height = "";
        modalWindows[id].style.zIndex = "";
        modalWindows[id].style.resize = "";
        
        modalWindows[id].style.position = "";
        modalWindows[id].style.top = "";
        modalWindows[id].style.bottom = "";
        modalWindows[id].style.left = "";
        modalWindows[id].style.right = "";

        modalWindows[id].classList.toggle("ui-draggable");
        modalWindows[id].classList.toggle("ui-resizable");
    }
}