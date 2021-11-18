var timerElement = document.getElementById("timer");

setTimeOnElement();

function setTimeOnElement() {
    var today = new Date();
    var time = formatDate(today, "hh:mm");
    timerElement.innerHTML = time;
    setTimeout(function () {
        setTimeOnElement();
    }, 10000);
}

function formatDate(date, format, utc) {
    var MMMM = [
        "\x00",
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    var MMM = [
        "\x01",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    var dddd = [
        "\x02",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    var ddd = ["\x03", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    function ii(i, len) {
        var s = i + "";
        len = len || 2;
        while (s.length < len) s = "0" + s;
        return s;
    }

    var y = utc ? date.getUTCFullYear() : date.getFullYear();
    format = format.replace(/(^|[^\\])yyyy+/g, "$1" + y);
    format = format.replace(/(^|[^\\])yy/g, "$1" + y.toString().substr(2, 2));
    format = format.replace(/(^|[^\\])y/g, "$1" + y);

    var M = (utc ? date.getUTCMonth() : date.getMonth()) + 1;
    format = format.replace(/(^|[^\\])MMMM+/g, "$1" + MMMM[0]);
    format = format.replace(/(^|[^\\])MMM/g, "$1" + MMM[0]);
    format = format.replace(/(^|[^\\])MM/g, "$1" + ii(M));
    format = format.replace(/(^|[^\\])M/g, "$1" + M);

    var d = utc ? date.getUTCDate() : date.getDate();
    format = format.replace(/(^|[^\\])dddd+/g, "$1" + dddd[0]);
    format = format.replace(/(^|[^\\])ddd/g, "$1" + ddd[0]);
    format = format.replace(/(^|[^\\])dd/g, "$1" + ii(d));
    format = format.replace(/(^|[^\\])d/g, "$1" + d);

    var H = utc ? date.getUTCHours() : date.getHours();
    format = format.replace(/(^|[^\\])HH+/g, "$1" + ii(H));
    format = format.replace(/(^|[^\\])H/g, "$1" + H);

    var h = H > 12 ? H - 12 : H == 0 ? 12 : H;
    format = format.replace(/(^|[^\\])hh+/g, "$1" + ii(h));
    format = format.replace(/(^|[^\\])h/g, "$1" + h);

    var m = utc ? date.getUTCMinutes() : date.getMinutes();
    format = format.replace(/(^|[^\\])mm+/g, "$1" + ii(m));
    format = format.replace(/(^|[^\\])m/g, "$1" + m);

    var s = utc ? date.getUTCSeconds() : date.getSeconds();
    format = format.replace(/(^|[^\\])ss+/g, "$1" + ii(s));
    format = format.replace(/(^|[^\\])s/g, "$1" + s);

    var f = utc ? date.getUTCMilliseconds() : date.getMilliseconds();
    format = format.replace(/(^|[^\\])fff+/g, "$1" + ii(f, 3));
    f = Math.round(f / 10);
    format = format.replace(/(^|[^\\])ff/g, "$1" + ii(f));
    f = Math.round(f / 10);
    format = format.replace(/(^|[^\\])f/g, "$1" + f);

    var T = H < 12 ? "AM" : "PM";
    format = format.replace(/(^|[^\\])TT+/g, "$1" + T);
    format = format.replace(/(^|[^\\])T/g, "$1" + T.charAt(0));

    var t = T.toLowerCase();
    format = format.replace(/(^|[^\\])tt+/g, "$1" + t);
    format = format.replace(/(^|[^\\])t/g, "$1" + t.charAt(0));

    var tz = -date.getTimezoneOffset();
    var K = utc || !tz ? "Z" : tz > 0 ? "+" : "-";
    if (!utc) {
        tz = Math.abs(tz);
        var tzHrs = Math.floor(tz / 60);
        var tzMin = tz % 60;
        K += ii(tzHrs) + ":" + ii(tzMin);
    }
    format = format.replace(/(^|[^\\])K/g, "$1" + K);

    var day = (utc ? date.getUTCDay() : date.getDay()) + 1;
    format = format.replace(new RegExp(dddd[0], "g"), dddd[day]);
    format = format.replace(new RegExp(ddd[0], "g"), ddd[day]);

    format = format.replace(new RegExp(MMMM[0], "g"), MMMM[M]);
    format = format.replace(new RegExp(MMM[0], "g"), MMM[M]);

    format = format.replace(/\\(.)/g, "$1");

    return format;
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

$(".modal-window__btnBtn1").click(function () {
    $(".modal-window1").toggleClass("dis-block");
});

$(".modal-window__btnBtn").click(function () {
    $(".modal-window").toggleClass("dis-block");
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

    if (w < 1350) {
        $("#window-1 .scroll_flex").addClass("d-block");
        $("#window-1 .scroll").addClass("mw-100");
    } else {
        $("#window-1 .scroll_flex").removeClass("d-block");
        $("#window-1 .scroll").removeClass("mw-100");
    }

    if (w < 1104) {
        $("#window-1 .window__sort-btn")
            .addClass("mt-10")
            .addClass("mb-10")
            .addClass("ml-0");
    } else {
        $("#window-1 .window__sort-btn")
            .removeClass("mt-10")
            .removeClass("mb-10")
            .removeClass("ml-0");
    }

    // if (w < 649) {
    //     $("#window-1 .window__sort-btn")
    //         .addClass("mt-10")
    //         .addClass("mb-10")
    //         .addClass("ml-0");
    // } else {
    //     $("#window-1 .window__sort-btn")
    //         .removeClass("mt-10")
    //         .removeClass("mb-10")
    //         .removeClass("ml-0");
    // }

    if (w < 511) {
        $("#window-1 .window__search")
            .addClass("mt-10")
            .addClass("mb-10")
            .addClass("ml-0");
    } else {
        $("#window-1 .window__search")
            .removeClass("mt-10")
            .removeClass("mb-10")
            .removeClass("ml-0");
    }

    if (w < 418) {
        $("#window-1 .window__routes").addClass("fz-9");
        $("#window-1 .window__icons").addClass("w-136");
        $("#window-1 .window__images").addClass("w-14");
    } else {
        $("#window-1 .window__routes").removeClass("fz-9");
        $("#window-1 .window__icons").removeClass("w-136");
        $("#window-1 .window__images").removeClass("w-14");
    }

    if (w < 332) {
        $("#window-1 .window__left p").addClass("fz15");
        $("#window-1 .window__sort-btn").addClass("w-200");

        $("#window-1 .window__action-btn").addClass("ml-0").addClass("mt-10");

        $("#window-1 .window__registration").addClass("ml-0");

        $("#window-1 .window__search input").addClass("w-180");

        $("#window-1 .window__registration-btn").addClass("fz15");

        $("#window-1 .window__nav").addClass("ml-0");
    } else {
        $("#window-1 .window__left p").removeClass("fz15");
        $("#window-1 .window__sort-btn").removeClass("w-200");

        $("#window-1 .window__action-btn")
            .removeClass("ml-0")
            .removeClass("mt-10");

        $("#window-1 .window__registration").removeClass("ml-0");

        $("#window-1 .window__search input").removeClass("w-180");

        $("#window-1 .window__registration-btn").removeClass("fz15");

        $("#window-1 .window__nav").removeClass("ml-0");
    }
});

$("#window-2").resize((e) => {
    let w = e.target.offsetWidth;

    if (w < 847) {
        $("#window-2 .window__search").addClass("mt-10");
    } else {
        $("#window-2 .window__search").removeClass("mt-10");
    }

    if (w < 560) {
        $("#window-2 .window__action-btn").addClass("mb-10");
    } else {
        $("#window-2 .window__action-btn").removeClass("mb-10");
    }

    if (w < 518) {
        $("#window-2 .window__sort-btn").addClass("ml-0");
        $("#window-2 .window__search").addClass("mb-10").addClass("ml-0");
        $("#window-2 .window__action-btn").addClass("ml-0");
    } else {
        $("#window-2 .window__sort-btn").removeClass("ml-0");
        $("#window-2 .window__search").removeClass("mb-10").removeClass("ml-0");
        $("#window-2 .window__action-btn").removeClass("ml-0");
    }

    if (w < 418) {
        $("#window-2 .window__routes").addClass("fz-9");
        $("#window-2 .window__images").addClass("w-14");
    } else {
        $("#window-2 .window__routes").removeClass("fz-9");
        $("#window-2 .window__images").removeClass("w-14");
    }

    if (w < 335) {
        $("#window-2 .window__left p").addClass("fz15");
        $("#window-2 .window__sort-btn").addClass("w-200");

        $("#window-2 .window__registration").addClass("ml-0");

        $("#window-2 .window__search input").addClass("w-180");

        $("#window-2 .window__nav").addClass("ml-0");
    } else {
        $("#window-2 .window__left p").removeClass("fz15");
        $("#window-2 .window__sort-btn").removeClass("w-200");

        $("#window-2 .window__registration").removeClass("ml-0");

        $("#window-2 .window__search input").removeClass("w-180");

        $("#window-2 .window__nav").removeClass("ml-0");
    }
});

$("#window-3").resize((e) => {
    let w = e.target.offsetWidth;

    if (w < 537) {
        $("#window-3 .window__search").addClass("mt-10");
        $("#window-3 .window__search").addClass("mb-10").addClass("ml-0");
        $("#window-3 .window__action-btn").addClass("ml-0");
    } else {
        $("#window-3 .window__search").removeClass("mt-10");
        $("#window-3 .window__search").removeClass("mb-10").removeClass("ml-0");
        $("#window-3 .window__action-btn").removeClass("ml-0");
    }

    if (w < 312) {
        $("#window-3 .window__routes").addClass("fz-9");
        $("#window-3 .window__images").addClass("w-14");
    } else {
        $("#window-3 .window__routes").removeClass("fz-9");
        $("#window-3 .window__images").removeClass("w-14");
    }

    if (w < 300) {
        $("#window-3 .window__left p").addClass("fz15");

        $("#window-3 .window__registration").addClass("ml-0");

        $("#window-3 .window__search input").addClass("w-180");

        $("#window-3 .window__nav").addClass("ml-0");
    } else {
        $("#window-3 .window__left p").removeClass("fz15");

        $("#window-3 .window__registration").removeClass("ml-0");

        $("#window-3 .window__search input").removeClass("w-180");

        $("#window-3 .window__nav").removeClass("ml-0");
    }
});

$(".open-modal").click(function (e) {
    let elem = e.target.children.length == 0 ? e.target.parentNode : e.target;
    $(".modal-window1").toggleClass("dis-block");
    $(".modal-window1")[0].children[0].children[0].innerHTML =
        elem.children[elem.children.length - 1].innerText;
});

$(".accordianIn7content").click(function () {
    $(".modal-window").toggleClass("dis-block");
});
