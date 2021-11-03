    var timerElement = document.getElementById("timer");

    setTimeOnElement();

    function setTimeOnElement(){
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes();
        timerElement.innerHTML = time;
        setTimeout(function() {
        setTimeOnElement();
        }, 10000);
    }

    