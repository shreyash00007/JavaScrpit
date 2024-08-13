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


// solution --------- 

function HtmlElement() {
    this.click = function () {
        console.log("Clicked");
    }     
};

HtmlElement.prototype.foucus = function () {
    console.log('focued');
}

function HtmlSelectElement(items = []) {
    this.itmes = items;
    this.addItem = function (item) {
        this.itmes.push(item);
    }
    this.removeItem = function (item) {
        this.itmes.splice(this.items.indexOf(item), 1);
    }
}

//  baseHtmlSelectElement
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement; 

// const s = new HtmlSelectElement();
// Output  ------- // console.log(s);


// Polymorphism Inheritance

// Create HTML Image element that inhert from HtmlElement so it can me click focused
// but it also, has it own render method


function HtmlImageElement() {
    this.image = function () {
        console.log('Image');
    }
    this.selector = function () {
        console.log("element sleceted");
    }
    this.element = function () {
        console.log("elements");
    }
    this.part = function () {
        console.log("part");
    }
    this.whiteImage = function () {
        console.log("white");
    }
    this.red = function () {
        console.log("red");
    }
    this.blue = function () {
        console.log("blue");
    }
    this.green = function () {
        console.log("green");
    }
    this.orange = function () {
        console.log("orange");
    }
    this.pink = function () {
        console.log("pink");
    }
}
