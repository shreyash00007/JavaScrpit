// ------------------------------------------------- Advance exercise JS -----------------------------------------------------------

//---------------------------- This file is for Advanced JS in OPPs ----------------------------------------------

// ----------------- Exercise Stopwatch -------------------

// Problem 1

// Create a stopwatch using JavaScript Functions with Start time, End Time, Running, and Duration
// ------------------ Function Declaration ------------------

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

// ------- classes -------
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

// Problem 2

// Create two objects, the first one as HtmlElement and the second one as
// HtmlSelectElement with drop-down list


// Solution --------- 

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


// Problem 3

// Create an HTML Image element that inherits from HtmlElement so it can click when focused
// but it also has its own render method


function HtmlSelectElement(items =[]) {
    this.items = items;

    this.addItem = function (item) {
        this.itmes.push(item);
    }

    this.removeItem = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    }

    this.render = function () {
        return `
        <select>${ this.itmes.map(item => ` <option>${ item }</option>`).join('') }
        </select>`;

    }
}

HtmlElement.prototype = new HtmlElement();
HtmlElement.prototype.constructor = HtmlSelectElement;

function HtmlImageElement(src) {
    this.src = src;
    this.render = function () {
        return `<img src="${ this.src }" />`; // ${x}
        // return '<img src="'+ this.src +'" />';
    }
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

// ------------------ ES6 classes ---------------------

// --------------- Stack ------------------


// class stack {

// }

// const stack = new Stack();

// stack.push('a');
// stack.push('b');
// stack.push('c');
// stack.count;
// stack.pop();
// stack.pop();

// console.log(stack);


const _items = new WeakMap();

class Stack{
    constructor() {
        _items.set(this, []);
    }
    push(obj) {
        _items.get(this).push(obj);
    }
    pop() {
        const items = _items.get(this);

        if (items.length === 0)
            throw new Error('Stack is empty.');
        return items.pop();
    }
    peek() {
        const items = _items.get(this);

        if (items.length === 0)
            throw new Error('Stack is empty.');
        return itmes[items.length - 1];
    }

    get count() {
        return _items.get(this).length;
    }

}
