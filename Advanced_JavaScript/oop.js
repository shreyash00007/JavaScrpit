// ---------------------------- Object Oriented Programming --------------------------------
// What is OOP?
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
// An object in JavaScript is essential a collection of key-value pairs 

const cirlce = {
    radius: 1,   // example of key-value 
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
// Two types of object-based functions in javaScript
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

// in the browser console

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

// ---------------------- Value vs Reference Types in JavaScript

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
// like you can see down there numbers initial value was 10
// after the increase function we just 
// used the value in from of varible.
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
// by using new keyword you create a empty object 
// which you can add elements or remove from it
// adding new data in an object is important you can use this type
// to update of add data or function to a object
const circle = new Circle(10);

circle.location = { s: 1 };

// removing property
// delete keyword to delete the data form the object
// delete circle['location'];
delete circle.location;

const propertyName = " center location ";

circle.propertyName = { x: 2 };

// console.log(circle);

// ------------------------------ Enumerating Properties

function Car(petrol) {
        this.petrol = petrol;
        this.speed = function () {
            console.log("run run...")
        }
}

const car = new Car(10);

// for (let key in car) {
//     if (typeof car[key] !== "function")
//         console.log(key, car[key]);
// }

const keys = Object.keys(car);
// console.log(keys);

    // if ("speed" in car)
    // console.log('Car has speed.');

// ------------------------------ Abstraction ------------------------

function Pokemon(pika) {
    this.pika = pika;
    
    this.defaultLocation = { x: 0, y: 0 }

    this.computeOptimumLocation = function (facotor) {
        //
    }

    this.rock = function () {
        this.computeOptimumLocation();
        console.log("fire");
    }
}

const pokemon = new Pokemon(10);
// pokemon.computeOptimumLocation(0.1);
// pokemon.rock();

// ------------------------- Private Properties and Methods

// Closure ----- Having a function inside a function ---------

function Dosa(tava) {
    let sambar = "Sambar";
    this.tava = tava;
    this.masalaDosa = function () {
        let x, y;
        console.log("Masale Darrr..");
    };

}

const dosa = new Dosa(50);
// dosa.masalaDosa();

// Getters and Setters
// Doit task function 
function Doit(task) {
    this.task = task;
    let defaultLocation = { x: 0, y: 0 };

    this.getDefaultLocation = function () {
        return defaultLocation;
    }
    this.point = function () {
        console.log("Do it...");
    }
    Object.defineProperty(this, 'defaultLocation', {
        get: function () {
            return defaultLocation;
       } 
    });
}

const doit = new Doit(100);
// doit.point();

