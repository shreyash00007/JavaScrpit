// -------------------- Inheritance ---------------------

// Inheritance of the core concept of opp that enables an object that takes on the properties and methods
// of another object and this makes it esay to reuse code in different parts of an application
// in inheritance you can inherit fucntional properties in a object
// it is mostly used in objects and classes
// It also one the most important pillar of Object oriented programming

// --------------------- Prototypes and Prototypical Inheritance --------------------

let x = {};
// console.log(x);
// Here x is a prototypical object it has some inheriant properities


// ------------------------- Multilevel Inheritance --------------------------------

let myArray = []; // empty array 

// console.log(myArray);

// Constructor function

function Circle(radius) {
    this.radius = radius;

    this.draw = function () {
        console.log("Draw");
    };
}

const circle = new Circle(11);

// console.log(circle);

// Objects and array created by a given constructor will have the same prototypes.

// ------------- Property Descriptors --------------
// It can be used to describe the properties in a Object or array

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

// ----------------- Constructor prototypes -----------------

// Object.getPrototypeOf(myObj);
// Constructor prototype 
// myObj.__proto__ (parent of myObj)
// Constructor.prototype ()

// New fuctional oject is created 

function Pokemon(pika) {
    this.pika = pika;
}
// Declaration of new functional object 

const pokemon = new Pokemon(1);

Pokemon.prototype; // prototype property

// console.log(pokemon);

// ---------------------------- Prototype vs Instance Members

function Dumb(people) {
    this.people = people;
    this.peopleArePeople = function(){
        console.log("people are peole");
    }
}

// Protype members
Dumb.prototype.draw = function () {
    console.log("people are crazy");
}

Dumb.prototype.work = function () {
    console.log("Work is Important");
}

Dumb.prototype.toString = function () {
    return 'Circle with radius' + this.radius;
}

const c1 = new Dumb(1);
// const c2 = new Dumb(2);

console.log(c1.draw);   
console.log(c1.toString);

Dumb.prototype.toString = function () {
    return 'People are Dumb' + this.people;
}