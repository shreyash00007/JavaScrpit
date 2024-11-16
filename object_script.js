// -------------------- Introduction to Objects -----------------------
// Objects are a collection of key-value pairs
// Object-Oriented Programming (OOP)
// Object literal syntax V

// const circleE = { 
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisble: true,
//     draw: function () {
//         console.log('draw');
//     }
// };

// circle.draw();

// Two types of Functions
// 1) Factory Function
// 2) Constructor Function

// ----------- Factory Function
// Function and Method
// A function doesn't need any object and is independent,
// while the method is a function linked with any object.

// Factory functions are the functions which produce Object's

function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('Factory function ')
        }
    };
}

// const circle1 = createCircle(1);
// console.log(circle1, circle1.draw());

// const circle2 = createCircle(3);
// console.log(circle2, circle2.draw())


// ------------ Constructor Function
// Camel Notation : oneTwoThreeFour
// Pascal Notation: OneTwoThreeFour

// this is key word in JavaScript
// which has reference to the object that is executing 
// this piece of code

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//         console.log('draw');
//     }
// }

// const circle = new Circle(1); // the new keyword creates a empty object
// const x = {}; empty object

// Difference between Factory function and Constructor function
// In the Factory function create an object and pass an argument
// With the Factory function we simply call a function and return a new object

// In the constructor we use the " new " operator and instead of returning an object
// We use this. keyword Also in naming convention we use the Pascal naming convention

// console.log(circle,circle.draw());


//  ------------ Objects are Dyanamic -----------------

// eg :-
// const circle = {
//     radius: 1
// };

//circle = {}; // will through erro assign to const var

// circle.color = 'red'; // add properties to obj
// circle.draw = function(){}
// delete circle.color;

// console.log(circle);

// -------------- Constructor Property

// let x = {value : 10}; //every obj has a constructor property

// new String(); //'', "", ``
// new Boolean(); // true, false
// new Number(); // 1, 2, 3, ...

// let x = new Object();
// console.log(x);

// ------------ Functions are Objects in JavaScript
// Functions can used as objects in Js

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}
// Circle.name, Circle.length, Circle(1),
// console.log(Circle.constructor);

// const Circle1 = new Function('radius', `
//     this.radius = radius;
//     this.draw = function () {
//         console.log('draw');
//     }`);

// const another = new Circle1(1)

// console.log(another);

Circle.call({}, 1);
Circle.apply({}, [1, 2, 3]);

// const another = new Circle(1);
// console.log(another)

// ----------------- Value vs Reference Types
// Value Type (primitives)
// Number
// String
// Boolean
// Symbol
// undefined
// null

// Reference Types
// Object
// Function
// Array

// let a = 10; 

let a = { value: 10 }; 
let b = a;

a.value = 20;

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

// ------------- Enumerating Properties of a Object
// Properties of objects

// const circle = {
//     radius: 1,
//     draw() {
//         console.log('draw');
//     }
// };

// for (let key in circle)
    // console.log(key, circle[key]);

// for (let key of Object.keys(circle))
    // console.log(key);

// for (let entry of Object.entries(circle))
    // console.log(entry);

// if ('radius' in circle) console.log('yes');

// ---------------- Cloning an Object
// We can also create copies of objects in JavaScript

// const circle = {
//     radius: 1,
//     draw() {
//         console.log('draw');
//     }
// }

// const another = {};
// for (let key in circle)
//     another[key] = circle[key]; // old way

// const another = Object.assign({
//     color: 'yellow'// new property to an object
// }, circle);

// const another = { ...circle };

// console.log(another);

// -------------- Garbage Collection in JavaScript
//In level languages we need to allocate memory to objects like c, C++
// In JavaScript we don't have this concept
//We can easily create a new obj the memory is automatically allocated to the object
// and also, deallocate it, In JavaScript we have a Garbage collector in JavaScript

// let circle = {}

// -------------- Built-in Objects in JavaScript
// ------------ Math Object
// Math is a built-in object that has properties and methods
// for mathematical constants and functions. Not a function object

// ----- Math random
// function getRandomArbitary(min, max) {
//     return Math.random() * (max - min) + min;
// }
// console.log(getRandomArbitary(0, 10));

// console.log(Math.random());


// Math.round

// console.log(Math.round(8.26));

// ---------------- String Object

// String primitive
// const message = 'This is my \'first message';
// console.log(message.length);

// String Object
// const another = new String('hi');
// console.log(typeof (message));
// console.log(typeof (another));

// console.log(message.length);
// console.log(message[0]);
// console.log(message[1]);
// console.log(message.includes('my'));
// console.log(message.includes('not'));
// console.log(message.startsWith('This'));
// console.log(message.startsWith('this'));
// console.log(message.endsWith('e'));
// console.log(message.endsWith('this'));
// console.log(message.indexOf('is'));
// console.log(message.replace('first', 'second'));
// console.log(message.toUpperCase());
// console.log(message.toLowerCase());
// console.log(message.trimLeft);

// console.log(message);
// console.log(message.split(' '));

// ------------- Template litrals

// Stirng are declared using, '', ""

// const message =
//     'This is my \n' +
//     '\'first \'message'; // old and ineffcient way

// use this one instead called template literal ``

// const message =
// `This is my
// 'first' message`;

// // this is good for email messages
// const name = 'harsh';
// const another =
// `Hi, ${ name }

// Thank you for joining my mailing list ${2*5}.

// Regards,
// Shreyash`;

// console.log(another);

// -------------- Date

const now = new Date();
const date1 = new Date('May 11 2018 9:00');
const date2 = new Date(2018, 4, 11, 9);

// now.setFullYear(2017);
console.log(now.toTimeString());
console.log(date1);
console.log(date2);
