let sideBar = document.querySelector("#sideBar");
let sideBarIsClosed = false;


function SwitchSizeOfSideBar(){
  if(sideBar.style.minWidth != "76px"){
    setSBSmall();
  
  }
  
  
  else{
    setSBLarge();
  }
}

function resetSb(){
  if(sideBarIsClosed === false){
    setSBLarge();
  }
  console.log(sideBarIsClosed);
}

function setSBLarge(){
  let elementsToModify = [
    document.querySelectorAll(".menuContainerTitle"),
    document.querySelectorAll(".menuContainer span"),
    document.querySelectorAll(".menuContainer .container .item .itemArrow img"),
    document.querySelectorAll(".menuContainer"),
    document.querySelectorAll(".menuContainer .container .item span"),
    document.querySelectorAll(".menuContainer .container .item"),
    document.querySelectorAll(".menuContainer .container .item .imgContainer"),
    document.querySelectorAll(".menuContainer .container .item .itemArrow"),
    document.querySelectorAll(".pcTitle"),
    document.querySelectorAll(".pcItem"),
    document.querySelectorAll(".pcTitle div img")
  ];

  sideBarIsClosed = false;

    let parcerContainers = document.querySelectorAll(".parcerContainer");
    for (const i of parcerContainers) {
      i.style.height = "";
      i.style.backgroundColor = "";
      i.style.top = "";
      i.style.marginTop = "";
      i.style.marginLeft = "";
      i.style.zIndex = "0";
      i.style.width = "";
      i.style.boxShadow = "";
    }
    for (const i of elementsToModify[8]) {
      i.style.marginLeft = "";
      i.style.marginTop = "";
    }
    for (const i of elementsToModify[9]) {
      i.style.marginLeft = "";
    }
    for (const i of elementsToModify[10]) {
      i.style.marginRight = "";
    }

    sideBar.style.minWidth = "";
    sideBar.style.maxWidth = "";

    for (const i of elementsToModify[0]) {
      i.style.display = "";
      i.style.fontSize = "";
      i.style.width = "";
      i.style.height = "";
      i.style.background = "";
      i.style.borderRadius = "";
    }

    let logoS = document.querySelector("#logoS");
    logoS.style.display = "";
    logoS.style.width = "";
    logoS.style.height = "";
    logoS.style.marginLeft = "";
    logoS.style.marginTop = "";
    
    document.querySelector("#logoF").style.display = "";

    let tatc = document.querySelector(".timeAndThemesContainer");
    tatc.style.width = "";
    tatc.style.marginLeft = "";
    tatc.style.marginTop = "";

    document.querySelector("#timer").style.display = "";

    let tatcDivs = document.querySelectorAll(".sideBar .timeAndThemesContainer div");
    for (const i of tatcDivs) {
      i.style.display = "";
    }

    for (const i of elementsToModify[3]) {
      i.style.width = "";
      i.style.marginLeft = "";
    }

    for (const i of elementsToModify[4]) {
      i.style.display = "";
    }

    for (const i of elementsToModify[5]) {
      i.style.width = "";
      i.style.height = "";
      i.style.justifyContent = "";
      i.style.transition = "";
    }

    for (const i of elementsToModify[6]) {
      i.style.width = "";
      i.style.display = "";
      i.style.justifyContent = "";
      i.style.margin = "";
      i.style.padding = "";
    }

    for (const i of elementsToModify[7]) {
      i.style.position = "";
      i.style.marginLeft = ""
      i.style.display = "";
    }

    document.querySelector("#content").classList.remove("contentSBSetSmaller");
    document.querySelector("#content").classList.add("contentSBSetLarger");
}

function setSBSmall(){
  let elementsToModify = [
    document.querySelectorAll(".menuContainerTitle"),
    document.querySelectorAll(".menuContainer span"),
    document.querySelectorAll(".menuContainer .container .item .itemArrow img"),
    document.querySelectorAll(".menuContainer"),
    document.querySelectorAll(".menuContainer .container .item span"),
    document.querySelectorAll(".menuContainer .container .item"),
    document.querySelectorAll(".menuContainer .container .item .imgContainer"),
    document.querySelectorAll(".menuContainer .container .item .itemArrow"),
    document.querySelectorAll(".pcTitle"),
    document.querySelectorAll(".pcItem"),
    document.querySelectorAll(".pcTitle div img")
  ];

  sideBarIsClosed = true;
  let parcerContainers = document.querySelectorAll(".parcerContainer");
  for (const i of parcerContainers) {
    i.style.height = "5000px";
    i.style.backgroundColor = "white";
    i.style.top = "0";
    i.style.marginTop = "0";
    i.style.marginLeft = "76px";
    i.style.width = "200px";
    i.style.zIndex = "-1";
    i.style.boxShadow = "0 -8px 20px 2px #dedee3";
  }
  for (const i of elementsToModify[8]) {
    i.style.marginLeft = "20px";
    i.style.marginTop = "145px";
  }
  for (const i of elementsToModify[9]) {
    i.style.marginLeft = "10px";
  }
  for (const i of elementsToModify[10]) {
    i.style.marginRight = "0";
  }

  sideBar.style.minWidth = "76px";
  sideBar.style.maxWidth = "76px";

  for (const i of elementsToModify[0]) {
    i.style.display = "block";
    i.style.fontSize = "0";
    i.style.width = "8px";
    i.style.height = "8px";
    i.style.background = "#097cb4";
    i.style.borderRadius = "50%";
  }

  let logoS = document.querySelector("#logoS");
  logoS.style.display = "block";
  logoS.style.width = "40px";
  logoS.style.height = "40px";
  logoS.style.marginLeft = "14px";
  logoS.style.marginTop = "17px";
  
  document.querySelector("#logoF").style.display = "none";

  let tatc = document.querySelector(".timeAndThemesContainer");
  tatc.style.width = "20px";
  tatc.style.marginLeft = "22.5px";
  tatc.style.marginTop = "40px";

  document.querySelector("#timer").style.display = "none";

  let tatcDivs = document.querySelectorAll(".sideBar .timeAndThemesContainer div");
  for (const i of tatcDivs) {
    i.style.display = "none";
  }

  for (const i of elementsToModify[3]) {
    i.style.width = "60px";
    i.style.marginLeft = "16px";
  }

  for (const i of elementsToModify[4]) {
    i.style.display = "none";
  }

  for (const i of elementsToModify[5]) {
    i.style.width = "36px";
    i.style.height = "32px";
    i.style.justifyContent = "center";
    i.style.transition = "none";
  }

  for (const i of elementsToModify[6]) {
    i.style.width = "100%";
    i.style.display = "flex";
    i.style.justifyContent = "center";
    i.style.margin = "0";
    i.style.padding = "0";
  }

  for (const i of elementsToModify[7]) {
    i.style.position = "absolute";
    i.style.marginLeft = "50px"
    i.style.display = "none";
  }
  document.querySelector("#content").classList.add("contentSBSetSmaller");
  document.querySelector("#content").classList.remove("contentSBSetLarger");
}

function SetSideBarSmall(name) {

  let elementsToModify = [
    document.querySelectorAll(".menuContainerTitle"),
    document.querySelectorAll(".menuContainer span"),
    document.querySelectorAll(".menuContainer .container .item .itemArrow img"),
  ];

  let parcerContainer = document.querySelectorAll(".parcerContainer");
  let allSideBars = document.querySelectorAll(".parcerContainer");
  let id = -1;

  for (const i in allSideBars) {
    if (Object.hasOwnProperty.call(allSideBars, i)) {
      const element = allSideBars[i];
      let title = element.querySelector(".pcTitle");
      
      if(title.querySelector("span").innerHTML.toLowerCase() == name.toLowerCase()){
        console.log(i);
        id = i;
        break;
      }

    }
  }

  allSideBars[id].style.zIndex = "1";
  
  for (let i = 0; i < allSideBars.length; i++) {
    if(i != id){
    allSideBars[i].style.zIndex = "0";
    allSideBars[i].setAttribute("class", "parcerContainer pcClosed");
    }
  }
  console.log(parcerContainer);
  let currentClass = parcerContainer[id].getAttribute("class");
  if (currentClass == "parcerContainer pcOpen") {
    sideBar.style.zIndex = "0";
    parcerContainer[id].setAttribute("class", "parcerContainer pcClosed");

    if(sideBarIsClosed = false){
    for (const i of elementsToModify[0]) {
      i.style.fontSize = "";
      i.style.display = "";
      i.style.width = "";
      i.style.height = "";
      i.style.background = "";
      i.style.borderRadius = "";
    }
    }
    elementsToModify[0][0].style.opacity = "1";
  
    for (const i of elementsToModify[1]) {
      i.style.fontSize = "";
    }

    for (const i of elementsToModify[2]) {
      i.style.display = "";
    }
  
  } else {
    parcerContainer[id].setAttribute("class", "parcerContainer pcOpen");
    sideBar.style.zIndex = "1";
    if(sideBarIsClosed == false){
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
  
}


