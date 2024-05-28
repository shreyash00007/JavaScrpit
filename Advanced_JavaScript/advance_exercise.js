// ------------------------------------------------- Advance exercise JS -----------------------------------------------------------

//---------------------------- This file is for Advanced JS in OPPs ----------------------------------------------

// ----------------- Exercise Stopwatch

function Stopwatch() {
    let startTime, endTime, running, duration = 0;
    this.start = function () {
        if (running)
            throw new Error('Stopwatch has already started.');

        running = true;

        startTime = new Date();
    };
    this.end = function () {

    };
    this.reset = function () {
        
    };
    Object.defineProperty(this, 'duration', {
        
    });
}