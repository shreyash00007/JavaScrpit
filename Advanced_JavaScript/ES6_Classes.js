// ES6 Classes
// It is the modern version of JavaScript

//  --------------------- Classic way for constructor ---------------------

// function Circle(radius) {
//     this.radius = radius;

//     this.draw = function () {
//         console.log('draw');
//     }
// }

// const cir = new Circle();
// console.log(cir);


// ----------------- New way of writing it ---------------

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

// function expression
// const sayGoodbye = function () { };
// const number = 1;
// Function expression is not hoisted

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

// It will give the output as undefined due to the class declaration
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

// const _radius = Symbol();
// const _draw = Symbol();

// class Circle{
//     constructor(radius) {
//         // this.radius = radius;
//         // this['radius'] = radius;
//         this['_radius'] = radius;
//     }
//     [_draw]() {// draw method
        
//     }
// }

// Declaring the new method into the c variable so we can access the objects
// const c = new Circle(1);
// // it was the old way to access but not reliable
// console.log(c._radius);

// const key = Object.getOwnPropertySymbols(c)[0];

// console.log(c[key]);

// ---------------- Private Properties Using WeakMaps -----------------

// const _radius = new WeakMap();
// const _move = new WeakMap();
// const privateProps = new WeakMap();

// class Circle{
//     constructor(radius) {
//         // this.radius = radius; // can access the radius
//         _radius.set(this, radius); // can not access here
//         privateProps.set(this,{
//             radius: radius,
//             move: () => {
            
//             }
//         });

//         _move.set(this, function () {
//            console.log('move', this)
//         });
    
//     }

//     draw() {
//         _move.get(this)();

//         console.log('draw');
//         // console.log(_radius.get(this))
//     }
// }

// const c = new Circle(1);

// console.log(c.draw);


// --------------------- Getters and Setters -----------------------

// const _radius = new WeakMap();

// class Circle{
//     constructor(radius) {
//         _radius.set(this, radius);
//     }

//     get radius() {
//         return _radius.get(this);
//     }

//     set radius(value) {
//         if (value <= 0) throw new Error('Invalid Radius');
//         _radius.set(this, value);
//     }
// }

// const c = new Circle(1);
// console.log(c.radius = -10);

// ------------------------- Inheritance ---------------------

// class Shape{
//     constructor(color) {
//         this.color = color;
//     }
//     move() {
//         console.log('move');
//     }
// }

// class Circle extends Shape{
//     constructor(color, radius) {
//         super(color);
//         this.radius = radius;
//     }
//     draw() {
//         console.log('draw');
//     }
// }

// const c = new Circle('red', 1);

// console.log(c.color,c.radius);


// ----------------------- Method Overriding ----------------------

class Shape{
    move() {
        console.log('move');
    }
}

class Circle extends Shape{
    move() {
        super.move();
        console.log('circle move');
    }
}

const c = new Circle();

console.log(c.move);
