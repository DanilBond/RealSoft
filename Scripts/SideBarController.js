let parcerContainer = document.querySelector(".parcerContainer");
function SetSideBarSmall(){
    let currentClass = parcerContainer.getAttribute("class");
    if(currentClass == "parcerContainer pcOpen"){
        parcerContainer.setAttribute("class", "parcerContainer pcClosed");
    }
    else{
        parcerContainer.setAttribute("class", "parcerContainer pcOpen");
    }
}