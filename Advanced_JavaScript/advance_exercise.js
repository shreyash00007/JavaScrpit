// ------------------------------------------------- Advance exercise JS -----------------------------------------------------------

//---------------------------- This file is for Advanced JS in OPPs ----------------------------------------------

// ----------------- Exercise Stopwatch -------------------

// --------------- Function Declaration ------------------

function Stopwatch() {
    let startTime, endTime, running, duration = 0;
    this.start = function () {
        if (running)
            throw new Error('Stopwatch has already started.');

        running = true;

        startTime = new Date();
    }
 //------- Stop Function ----------
    this.stop = function () {
        if (!running)
            throw new Error('Stopwatch is not started.');

        running = false;

        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;

    };
// --------- Reset Function ---------
    this.reset = function () {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
        
    };
// ----------- Duration -------------
    Object.defineProperty(this, 'duration', {
        
    });
}
