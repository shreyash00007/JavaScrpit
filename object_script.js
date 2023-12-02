// -------------------- Intorduction to Objects
// Objects are collection of key value pairs
// Object-Oriented Programming (OOP)
// Object litral syntax V
const circleE = { 
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisble: true,
    draw: function () {
        console.log('draw');
    }
};

// circle.draw();

// Two types of Functions
// 1) Factory Function
// 2) Constructor Function

// ----------- Factory Function
// Function and Method
// A function doesn't need any object and is independent,
// while the method is a function, which is linked with any object.

// Factory functions are the functions which produced Object's

function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('Factory function ')
        }
    };
}

const circle1 = createCircle(1);
// console.log(circle1, circle1.draw());

const circle2 = createCircle(3);
// console.log(circle2, circle2.draw())


// ------------ Constructor Function
// Camel Notation : oneTwoThreeFour
// Pascal Notaton : OneTwoThreeFour

// this is key word in JavaScript
// which has reference to the object that is executing 
// this piece of code

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

// const circle = new Circle(1); // the new keyword creates a empty object
// const x = {}; empty object

// Difference between factory function and constructor fuction
// In factory function create a object and pass argument
// with factory function we simply call a function and return a new object

// In constructor we use new operator and instead of returning and object
// we use this. key word also in nameing convention we use pascal naming convention

// console.log(circle,circle.draw());


//  ------------ Objects are Dyanamic

// eg

const circle = {
    radius: 1
};

//circle = {}; // will through erro assign to const var

circle.color = 'red'; // add properties to obj
circle.draw = function(){}
delete circle.color;

// console.log(circle);

// -------------- Constructor Property

let x = {value : 10}; //every obj has a constructor property

// new String(); //'', "", ``
// new Boolean(); // true, false
// new Number(); // 1, 2, 3, ...

// let x = new Object();
// console.log(x);

// ------------ Functions are Objects in JavaScript
// Functions can used as objects in Js