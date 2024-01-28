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
    let reverseBinaryTests = [0b00000010100101000001111010011100, 0b00000000000000000000000000000000, 0b11111111111111111111111111111111, 0b01010101010101010101010101010101, 0b10000000000000000000000000000000, 0b11001010101110101111000011011011, 0b00110011001100110011001100110011, 0b01010101010101010101010101010101, 0b10000000000000000000000000000010, 0b00000000000000000000000000000000, 0b11111111111111111111111111111111, 0b01010101010101010101010101010101, 0b10000000000000000000000000000000, 0b11001010101110101111000011011011, 0b00110011001100110011001100110011, 0b00000000000000000000000000000001, 0b01010101010101010101010101010101, 0b10000000000000000000000000000010, 0b01011001010110101010101100101111, 0b00000000000000000000111111111111]
    let palindromicSubstringTests = ["babad", "", "a", "ccc", "xyz", "racecar", "level", "madamracecar", "abcdedcba", "abbaabba", "abcbabcbabcdedcbabcd", "Able was I ere I saw Elba", "xyzzyx", "abacdfgdcaba", "abcdefg", "abb", "abbacd", "aabb", "bbccdd", "abacabadabacaba"]
    let mergeSortTest = [[3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5], [9, 8, 7, 6, 5, 4, 3, 2, 1], [5, 2, 9, 1, 5, 6], [1, 2, 3, 4, 5], [5, 4, 3, 2, 1], [], [10, 5, 8, 3, 7, 1, 4, 2, 6, 9], [100, 90, 80, 70, 60, 50, 40, 30, 20, 10], [7, 3, 1, 8, 6, 4, 9, 2, 5, 10], [2, 4, 6, 8, 10, 1, 3, 5, 7, 9], [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 7, 8, 2], [-3, -1, -4, -1, -5, -9, -2, -6, -5, -3, -5], [42], [7, 7, 7, 7, 7, 7, 7], [999999, 1000000, 888888, 123456, 987654, 555555]]
    let increasingSubsequenceTest = [[10, 22, 9, 33, 21, 50, 41, 60, 80], [], [5, 4, 3, 2, 1], [1, 2, 3, 4, 5], [3, 10, 2, 1, 20], [5, 5, 5, 5, 5], [3, 2, 6, 4, 5, 1], [1000, 500, 2000, 1500, 2500], [1, 3, 2, 4, 6, 5, 8, 7], [10, 9, 2, 5, 3, 7, 101, 18], [1, 7, 3, 5, 9, 12, 8], [4, 2, 10, 3, 7, 11, 8, 1], [1, 2, 3, 2, 5, 7, 8, 4, 9], [3, 4, 5, 10], [3, 4, 5, 10, 2, 8, 6], [10, 9, 2, 5, 3, 7, 101, 18, 20], [5, 1, 2, 3, 6, 4, 8, 9, 7], [3, 2, 1, 5, 4, 6, 8, 7], [1, 2, 3, 4, 5, 6, 7, 8, 9], [9, 8, 7, 6, 5, 4, 3, 2, 1]]
    let twoSumTest = [[2, 7, 11, 15], [-1, -2, -3, -4, -5], [3, 3, 7, 1, 2], [1, 2, 3, 4, 5], [], [3, 2, 4], [0, 0, 0, 0], [1000000000, 2000000000, -1000000000, -2000000000], [1.5, 2.5, 3.5, 4.5], [1, 1, 1, 2, 2, 3, 4, 4, 5], [1, 1, 1, 2, 2, 3, 4, 4, 5], [-1, -2, -3, -4, -5], [1, 2, 3, 4, 5], [7], [5, 5], [7, 10], [-5, 5], [2, 4, 6, 8, 10], [-2, -4, -6, 2, 4, 6], [-1000, -500, -200, -100, -50], [999999, 888888, 777777, 555555]]
    for (i = 0, i < arr.length; i++) {
        return;
    }
    stopStopwatch();
}