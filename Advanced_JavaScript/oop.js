// ---------------------------- Object Oriented Programming --------------------------------
//What is OOP?
// A programming paradigm centered around objects rather than functions.
// It's a style of programming which centers around objects.
// Languages -- C#, Java, Ruby, Python, & JavaScript are oops languages
// Before oops we had procedural programming that divided a program into functions
// but as the programs grow ups choose and create spaghetti code interdependencies


// ------------ Four pillars of oops ------------------

// Encapsulation
// Abstracttion
// Inheritance
// Polymorphihsm


// ----------------- Objects -------------------

// Basics of objects
// An object in in javaScript is essential a collections of key value pairs 

const cirlce = {
    radius: 1,   // example of key value 
    location: {
        x: 1,
        y: 2
    },
    draw: function () {
        console.log('draw');
    }
};

// cirlce.draw();

//------------- Factories ------------
// Two types of object based function's in javaScript
// Factory Function
// constructor Function
// ---------------- Factory function ---------------

function createCirle(radius) {
    return {
        radius,
        draw: function () {
            console.log("draw");
        }
    }
}

const circles = createCirle(1);
// console.log(cirlce);


// ---------------- Constructor Function -------------------

// this keyword is the to set properties of the object

function Circle(radius) {
    // console.log('this', this)
    this.radius = radius;
    this.draw = function () {
        console.log("draw");
    }
}

// const another = new Circle(1);


// ---------- cosntructor Property -------------

// let x = {};
// console.log(x);

new String(); // '',"",``
new Boolean(); // true, false
new Number(); // 1, 2, 3, ....

// ------------------ Functions are objects in javascript

// in broweser console

// console.log(Circle.name);
// console.log(Circle.length);
// console.log(Circle.constructor);

// const Circle1 = new Function('radius', `
// this.radius = radius;
//     this.draw = function () {
//         console.log("draw");
//     }`
// );

// Circle.call({}, 1);
// Circle.apply({}, 1, 2, 3);

// const another = new Circle(1);
// const circle = new Circle1(1);

// console.log(another);

// ---------------------- Value vs Refernce Types in JavaScript

//  --- Value types

// Number
// String
// Boolean
// Symbol
// undefined
// null

// ---- Reference Types

// Object
// Function
// Array

// let a = 10; 

let a = { value: 10 }; 
let b = a;

a.value = 20;

// console.log(a);
//  
// console.log(a, b);

// Conclusion -----

// Primitives are copied by their value
// Objects are copied by their reference

// let number = 10; // primetives 
let obj = { value: 10 }; // object

function increase(obj) {
    obj.value++;
}
increase(obj);
// console.log(obj);

