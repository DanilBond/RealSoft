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
