let dropDowns = document.querySelectorAll(".customDropDown");
for (const i in dropDowns) {
    if (Object.hasOwnProperty.call(dropDowns, i)) {
        const element = dropDowns[i];
        element.addEventListener("click", ()=>{SwitchDropDownVisibility(i)})
    }
}

function SwitchDropDownVisibility(id){

    if(dropDowns[id].querySelector(".cdDefault").classList.contains("cddClosed")){
        dropDowns[id].querySelector(".cdDefault").classList.remove("cddClosed");

        dropDowns[id].querySelector(".cdDefault").classList.add("cddOpened");

        dropDowns[id].querySelector(".cdContent").classList.remove("cdContentClosed");

        dropDowns[id].querySelector(".cdContent").classList.add("cdContentOpened");
    }
    else{
        dropDowns[id].querySelector(".cdDefault").classList.remove("cddOpened");

        dropDowns[id].querySelector(".cdDefault").classList.add("cddClosed");
        
        dropDowns[id].querySelector(".cdContent").classList.remove("cdContentOpened");

        dropDowns[id].querySelector(".cdContent").classList.add("cdContentClosed");
    }
}