// ------------------------------------------------- Advance exercise JS -----------------------------------------------------------

//---------------------------- This file is for Advanced JS in OPPs ----------------------------------------------

// ----------------- Exercise Stopwatch -------------------

// --------------- Function Declaration ------------------

function Stopwatch() {
    let startTime, endTime, running, duration = 0;

// ----------- Duration of time -------------
    Object.defineProperty(this, 'duration', {
        get: function () { return duration; }
    });
    Object.defineProperty(this, 'startTime', {
        get: function () { return startTime; }  
    });
    Object.defineProperty(this, 'endTime', {
        get: function () { return endTime; }  
    });
    Object.defineProperty(this, 'running', {
        get: function () { return running; }  
    });
}

// ------------ Start Time Function ---------------
    Stopwatch.prototype.start = function () {
        if (this.running)
            throw new Error('Stopwatch has already started.');

        running = true;

        this.startTime = new Date();
    }
 //------- Stop Time Function ----------
    Stopwatch.prototype.stop = function () {
        if (!this.running)
            throw new Error('Stopwatch is not started.');

        running = false;

        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;

    };
// --------- Reset Time Function ---------
    Stopwatch.prototype.reset = function () {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
        
};
    

// problem 2

// Create to objects the first one as HtmlElement and second one as
// HtmlSelectElement with dorp down list

const HtmlElement = {
    click: function () {
        console.log("Click");
    },     
};

const HtmlSelectElement = {
    select: function () {
        console.log("select");
    },  
    dropdown: function () {
        console.log('Dropdown');
    },
    dropmenu: function () {
        console.log('Dropdown_list');
    },
    droplist: function () {
        console.log('Dropdown_list2');
    },
};
