window.onload = function() {
    let minutes = 0;
    let seconds = 0;
    let appendMinutes = document.querySelector("#minutes");
    let appendSeconds = document.querySelector("#seconds");
    let startButton = document.querySelector("#start");
    let stopButton = document.querySelector("#stop");
    let fortyButton = document.querySelector("#forty");
    let resetButton = document.querySelector("#reset");
    let Interval;

    // Initialisation de l'affichage
    if (appendMinutes) appendMinutes.innerHTML = "00";
    if (appendSeconds) appendSeconds.innerHTML = "00";

    const startTimer = () => {
        seconds++;
        if (appendSeconds) appendSeconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;
        if (seconds > 59) {
            minutes++;
            seconds = 0;
            if (appendMinutes) appendMinutes.innerHTML = minutes < 10 ? "0" + minutes : minutes;
            if (appendSeconds) appendSeconds.innerHTML = "00";
        }
        // Sauvegarde l'état dans localStorage pour la synchro
        localStorage.setItem("chronoMinutes", minutes);
        localStorage.setItem("chronoSeconds", seconds);
    }

    // Synchronisation de l'état initial
    if (localStorage.getItem("chronoMinutes")) {
        minutes = parseInt(localStorage.getItem("chronoMinutes"));
        seconds = parseInt(localStorage.getItem("chronoSeconds"));
        if (appendMinutes) appendMinutes.innerHTML = minutes < 10 ? "0" + minutes : minutes;
        if (appendSeconds) appendSeconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;
    }

    // Fonctions de contrôle
    function play() {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 1000);
    }
    function pause() {
        clearInterval(Interval);
    }
    function reset() {
        clearInterval(Interval);
        minutes = 0;
        seconds = 0;
        if (appendMinutes) appendMinutes.innerHTML = "00";
        if (appendSeconds) appendSeconds.innerHTML = "00";
        localStorage.setItem("chronoMinutes", 0);
        localStorage.setItem("chronoSeconds", 0);
    }

    // Contrôle depuis la page de contrôle
    window.addEventListener("storage", (event) => {
        if (event.key === "chronoAction") {
            if (event.newValue === "start") play();
            if (event.newValue === "stop") pause();
            if (event.newValue === "reset") reset();
        }
        if (event.key === "chronoMinutes" || event.key === "chronoSeconds") {
            minutes = parseInt(localStorage.getItem("chronoMinutes")) || 0;
            seconds = parseInt(localStorage.getItem("chronoSeconds")) || 0;
            if (appendMinutes) appendMinutes.innerHTML = minutes < 10 ? "0" + minutes : minutes;
            if (appendSeconds) appendSeconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;
        }
    });

    // Contrôle local (pour control.html)
    if (startButton) {
        startButton.onclick = () => {
            localStorage.setItem("chronoAction", "start");
            play();
        }
    }
    if (stopButton) {
        stopButton.onclick = () => {
            localStorage.setItem("chronoAction", "stop");
            pause();
        }
    }
    if (resetButton) {
        resetButton.onclick = () => {
            localStorage.setItem("chronoAction", "reset");
            reset();
        }
    }

    if (fortyButton) {
        fortyButton.onclick = () => {
            localStorage.setItem("chronoMinutes", 40);
            localStorage.setItem("chronoSeconds", 0);
            localStorage.setItem("chronoAction", "stop");
            minutes = 40;
            seconds = 0;
            if (appendMinutes) appendMinutes.innerHTML = "40";
            if (appendSeconds) appendSeconds.innerHTML = "00";
            // Pause the timer after setting it to 40 minutes
            pause();
        }
    }
}
