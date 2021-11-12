$(function () {
  $("#drag")
    .draggable({ containment: "#content", handle: "#navbar" })
    .resizable({
      containment: "#content",
    });
});
$(function () {
  $("#drag1")
    .draggable({ containment: "#content", handle: "#navbar1" })
    .resizable({
      containment: "",
    });
});
