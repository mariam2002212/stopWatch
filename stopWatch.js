var secs = document.getElementById("secs");
var tens = document.getElementById("tens");
var initSecs = 0;
var initTens = 0;
var storedTime;
var strtBtn = document.getElementById("startBtn");
var stpBtn = document.getElementById("stopBtn");
var rstBtn = document.getElementById("resetBtn");

function clickStart(){
    initTens++;
    if(initTens < 9) {
        tens.innerHTML = "0" + initTens ;
    }  else if(initTens > 9) {
        tens.innerHTML = initTens;
    }
    if(initTens > 99) {
        initSecs++;
        secs.innerHTML = "0" + initSecs;
        initTens =0;
        tens.innerHTML = "0" + 0;       
    } else if( initSecs > 9 ) {
        secs.innerHTML = initSecs;
    }
}

strtBtn.onclick = function (){
    storedTime = setInterval(clickStart);
};

stpBtn.onclick = function(){
    clearInterval(storedTime);
};

rstBtn.onclick = function(){
    clearInterval(storedTime);
    initSecs = "00";
    initTens = "00";
    secs.innerHTML = initSecs;
    tens.innerHTML = initTens;
};

