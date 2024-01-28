// Your JavaScript code goes here
document.addEventListener('DOMContentLoaded', function () {
    // Code to run after the DOM has loaded
    console.log('DOM is ready!');

    // Example: Change the text content of an element with id "exampleElement"
    var exampleElement = document.getElementById('exampleElement');
    if (exampleElement) {
        exampleElement.textContent = 'abc';
    }
});

var running = false
var milliseconds = 0
var seconds = 0
var minutes = 0
var stopwatchInterval;



function updateStopwatch() {
    document.getElementById('minutes').textContent = minutes
    document.getElementById('seconds').textContent = seconds
    document.getElementById('milliseconds').textContent = milliseconds
}

function startStopwatch() {

    if (!running) {
        running = true
        stopwatchInterval = setInterval(function () {
            milliseconds += 10;
            if (milliseconds === 1000) {
                milliseconds = 0;
                seconds++;
            }
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            updateStopwatch();
        }, 10);
    }
}

function stopStopwatch() {
    if (running) {
        clearInterval(stopwatchInterval);
        running = false;
    }
}

function resetStopwatch() {
    stopStopwatch()
    milliseconds = 0
    seconds = 0
    minutes = 0
}



function testing() {
    startStopwatch();
    for (i = 0, i < arr.length; i++) {
        return;
    }
    stopStopwatch();
}