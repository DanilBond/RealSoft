$(function () {
    $("#drag")
        .draggable({ containment: "#content", handle: "#navbar" })
        .resizable({
            containment: "#content",
        });
});
