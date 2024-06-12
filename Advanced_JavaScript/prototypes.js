// -------------------- Inheritance ---------------------

// Inheritance of the core concept of opp that enables an object that takes on the properties and methods
// of another object and this makes it esay to reuse code in different parts of an application
// in inheritance you can inherit fucntional properties in a object
// it is mostly used in objects and classes
// It also one the most important pillar of Object oriented programming
// --------------------- Prototypes and Prototypical Inheritance --------------------

let x = {};
console.log(x);
// Here x is a prototypical object it has some inheriant properities


// ------------------------- Multilevel Inheritance --------------------------------

let myArray = [];

console.log(myArray);

// Constructor function

function Circle(radius) {
    this.radius = radius;

    this.draw = function () {
        console.log("Draw");
    };
}

const circle = new Circle(11);

console.log(circle);

// Objects and array created by a given constructor will have the same prototypes.

// ------------- Property Descriptors

let person = { name: "shreyash" };

// console.log(person)

for (let key in person)
    console.log(key)

Object.keys(person);

let objectBase = Object.getPrototypeOf(person);

let descriptors = Object.getOwnPropertyDescriptor(objectBase, 'toString');

// console.log(objectBase);
// console.log(descriptors);

Object.defineProperty(person, 'name', {
    writable: false,  //using boolean values
    enumerable: true,
    configurable: false
});

delete person.name

// console.log(person);


