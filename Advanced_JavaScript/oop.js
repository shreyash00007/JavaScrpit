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


let x = { value: 10 };
let y = x;

x.value = 20;

// console.log(x);
// console.log(y);

// Primitives are copied by their value
// like you can see down there numberx intial value was 10
// after the increase function we just used the value in from of varible.
// and it got the output as 11

let numberx = 10;

function increase(numberx) {
    numberx++;
}

increase(numberx);
// console.log(numberx);

// Objects are copied by thier reference

let obj = { value: 10 };

function addUp(obj) {
    obj.value++;
}
addUp(obj);
// console.log(obj);

// --------------------------- Adding or Remvoing Properties

//  adding or removing properties is very important for example
// if you had any function where in you need to add or remove stuff or any imp data
// this can help a lot

function Circlex(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

// adding property
// by using new keyword you create a empty object which you can add elements or remove from it
// adding new data in an object is important you can use this type to update of add data or function to a object
const circle = new Circle(10);

circle.location = { s: 1 };

// removing property
// delete keyword to delete the data form the object
// delete circle['location'];
delete circle.location;

const propertyName = " center location ";

circle.propertyName = { x: 2 };

// console.log(circle);


//  ----------------------- Enumerating Properties
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

// ----------------Cloning an Object
// we can also create copies of objects in JavaScript

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
// in low level languages we need to allocate memory to o objects like c, C++
// In JavaScript we don't have this concept
// we can easily create new obj the memory is automatically allocated to the object
// and also, deallocate it, In JavaScript we have a Garbage collector in JavaScript

// let circle = {}

// -------------- Built-in Objects in JavaScript
// ------------ Math Object
// Math is a built-in object that has properties and methods
// for mathematical constants and functions. Not a function object

// -----Math random
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

// ---------------- String Objects

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

// use this one instead called template litreal ``

// const message =
// `This is my
// 'first' message`;

// // this good for email messages
// const name = 'harsh';
// const another =
// `Hi, ${ name }

// Thank you for joining my mailisng list ${2*5}.

// Regards,
// Shreyash`

// console.log(another);

// -------------- Date

const now = new Date();
const date1 = new Date('May 11 2018 9:00');
const date2 = new Date(2018, 4, 11, 9);

// now.setFullYear(2017);
// new year
console.log(now.toTimeString());
console.log(date1);
console.log(date2);
console.log(date3);