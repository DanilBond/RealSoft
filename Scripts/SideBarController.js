let parcerContainer = document.querySelector(".parcerContainer");

let elementsToModify = [
    document.querySelectorAll(".menuContainerTitle"),
    document.querySelectorAll(".menuContainer span"),
    document.querySelectorAll(".menuContainer .container .item .itemArrow img")];
console.log(elementsToModify);

function SetSideBarSmall(){
    let currentClass = parcerContainer.getAttribute("class");
    if(currentClass == "parcerContainer pcOpen"){
        parcerContainer.setAttribute("class", "parcerContainer pcClosed");

        for (const i of elementsToModify[0]) {
            i.style.fontSize = "";            
            i.style.display = "";            
            i.style.width = "";            
            i.style.height = "";            
            i.style.background = "";            
            i.style.borderRadius = "";            
        }

        elementsToModify[0][0].style.opacity = "1";

        for (const i of elementsToModify[1]) {
            i.style.fontSize = "";
        }

        for (const i of elementsToModify[2]) {
            i.style.display = "";
        }
    }
    else{
        parcerContainer.setAttribute("class", "parcerContainer pcOpen");

        for (const i of elementsToModify[0]) {
            i.style.fontSize = "0";            
            i.style.display = "block";            
            i.style.width = "8px";            
            i.style.height = "8px";            
            i.style.background = "#097cb4";            
            i.style.borderRadius = "50%";            
        }

        elementsToModify[0][0].style.opacity = "0";

        for (const i of elementsToModify[1]) {
            i.style.fontSize = "0";
        }

        for (const i of elementsToModify[2]) {
            i.style.display = "none";
        }

    }
}