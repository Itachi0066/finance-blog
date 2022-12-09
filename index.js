var timeleft = 20;
let timerbox = document.getElementById("countdowntimer");
let timeEl = document.getElementById("timerId");
let inrEl = document.getElementById("inr1");
let phaseEl = document.getElementById("phase2Id");
let phaseEl2 = document.getElementById("phase3");

var downloadTimer = setInterval(function () {
    timeleft--;
    timerbox.textContent = timeleft;
    if (timeleft <= 0) {
        clearInterval(downloadTimer);
    }

}, 1000);


var erase =  setInterval( function () {
    timeEl.style.display = "none";
    inrEl.innerHTML = "Scroll down for the link."
    phaseEl.style.display = "flex";
}, 20000);

phaseEl.addEventListener('click', () => {
    phaseEl2.style.display = "flex";
});

