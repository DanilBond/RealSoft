console.log(arrForAccordion1);
let searchBtn = $(".input-search-test");
searchBtn.change(function (e) {
    console.log(findInAccordion(e.target.value));
});
function findInAccordion(word) {
    let result = arrForAccordion1.find((x) => x.str.includes(word));
    if (result) {
        result.elem.addClass("ui-state-active").removeClass("ui-state-default");
        console.dir(result.elem[0].nextSibling.classList);
        result.elem[0]?.nextSibling?.classList
            ?.add("ui-accordion-content-active")
            ?.classList.remove("ui-state-default");
        result.elem[0].nextSibling.style.padding = "0px";
        result.elem[0].nextSibling.style.overflow = "hidden";
        result.elem[0].nextSibling.style.display = "block";
        console.log(result.elem[0].nextSibling);
    }
    return result;
}
