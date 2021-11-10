var timerElement = document.getElementById("timer");

setTimeOnElement();

function setTimeOnElement() {
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();
    timerElement.innerHTML = time;
    setTimeout(function () {
        setTimeOnElement();
    }, 10000);
}

$("div.accordian").accordion({
    autoHeight: false,
    collapsible: true,
    active: false,
});
$(".accordianIn3Fir").click(function () {
    $(".scroll").toggleClass("active");
    $(".window__sort-btn").toggleClass("dis-none");
    $(".window__registration-btn").toggleClass("dis-none");
    $(".window__search").toggleClass("dis-none");
    $(".window__image_left").toggleClass("dis-block");
    $(".window__image_right").toggleClass("dis-block");
    $(".window__image_right").toggleClass("bg-grey");
});

$(".accordianIn3Fir").click(function () {
    $(".scroll_image").toggleClass("active");
});

$(".accordianIn3Fir").click(function () {
    $(".scroll_flex").toggleClass("active");
});

$(".scroll_img").click(function () {
    $(".window-absolute ").toggleClass("active");
});

$(".window__images").click(function () {
    $(".window-absolute ").toggleClass("active");
});

$("#window-1").resize((e) => {
    let w = e.target.offsetWidth;
    console.log(w);
    if (w < 1350) {
        console.log(w);
        $(".scroll_flex").addClass("d-block");
        $(".scroll").addClass("mw-100");
    } else {
        $(".scroll_flex").removeClass("d-block");
        $(".scroll").removeClass("mw-100");
    }
});
