// ES6 Classes
// ITs the modern version of JavaScript

//  --------------------- Classic way for cosntructor

// function Circle(radius) {
//     this.radius = radius;

//     this.draw = function () {
//         console.log('draw');
//     }
// }

// const cir = new Circle();
// console.log(cir);


// ----------------- new way of writing it

// class Circle {
//     constructor(radius) {
//         this.radius = radius;
//     }
//     draw() {
//         console.log('draw');
//     }
// }
// const c = new Circle(1);
// console.log(c);

// ------------------------ Hoisting --------------------


// sayHello(); // the hoisted
// // function declaration
// function sayHello() { }

// // function expression
// const sayGoodbye = function () { };
// const number = 1;
// // Function expression is not hoisted

// // Class Declartion
// class Circle {
// }
// // class declaration is not been hoisted
// // Class Expression
// const Square = class { };

// ---------------- Static Methods -----------------

// class Circle {
//     constructor(radius) {
//         this.radius = radius;
//     }

//     // Instance Method

//     draw() {
//     }
    
//     // Static Method
//     static parse(str) {
//         const radius = JSON.parse(str).radius;
//         return new Circle(radius);
//     }
// }

// const circle = new Circle(1);
// Circle.parse();
// console.log(circle);

// ---------------- this keyword -------------------
// 'use strict'; // it will show undefined
// const Circle = function () {
//     this.draw = function () { console.log(this); }
// }
// const c = new Circle();
// // Method Call
// const draw = c.draw;
// // Function call
// draw();

// It will give the ouput as undefined due to the class declartion
// class Circle{
//     draw() {
//         console.log(this);
//     }
// }
// // using new keyword for assig to different memory
// const c = new Circle();

// const draw = c.draw;

// draw();

// ---------------- Private Properties Using Symbols -----------------

const _radius = Symbol();
const _draw = Symbol();

class Circle{
    constructor(radius) {
        // this.radius = radius;
        // this['radius'] = radius;
        this['_radius'] = radius;
    }
    [_draw]() {// draw method
        
    }
}

const c = new Circle(1);
console.log(c._radius);
// const key = Object.getOwnPropertySymbols(c)[0];
// console.log(c[key]);