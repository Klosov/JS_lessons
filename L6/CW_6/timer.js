const start = document.getElementById('start'),
    pause = document.getElementById('pause'),
    stop = document.getElementById('stop'),
    time = document.getElementById('time'),
    clock = document.getElementById('clock'),
    secondHand = document.querySelector('.seconds'),
    selectMode = document.getElementById('timerSelectMode');

let seconds = 0,
    intervalID,
    timerMode = selectMode.value;

selectMode.addEventListener('change', () => {
    timerMode = selectMode.value;
    if (timerMode === 'classic') {
        seconds = 0;
    } else {
        seconds = 30;
    }
    time.innerHTML = seconds;
    secondHand.style.transform = `rotate( ${6 * seconds}deg)`;
});

function timerStart() {
    selectMode.setAttribute('disabled', 'disabled');

    intervalID = setInterval(() => {
        if (seconds === 0 && timerMode === 'reverse') timerPause();
        else if (seconds === 30 && timerMode === 'classic') timerPause();
        else {
            timerMode === 'classic' ? seconds++ : seconds--;
            time.innerHTML = seconds;
            secondHand.style.transform = "rotate(" + seconds / 60 * 360 + "deg)";
            paintClock();
        }
    }, 1000);
}

function timerPause() {
    clearInterval(intervalID);
}

function timerStop() {
    clearInterval(intervalID);
    intervalID = 0;
    seconds = 30;
    time.innerHTML = seconds;
    secondHand.style.transform = "rotate(" + seconds / 60 * 360 + "deg)";

    selectMode.removeAttribute('disabled');
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function paintClock() {
    let r = getRandomIntInclusive(0, 255),
        g = getRandomIntInclusive(0, 255),
        b = getRandomIntInclusive(0, 255);

    clock.style.background = `rgb(${r},${g},${b})`;
}

start.addEventListener('click', timerStart);
pause.addEventListener('click', timerPause);
stop.addEventListener('click', timerStop);