// -------------------- Inheritance ---------------------

// Inheritance of the core concept of opp that enables an object that takes on the properties and methods
// of another object and this makes it easy to reuse code in different parts of an application
// In inheritance you can inherit functional properties in an object
// It is mostly used in objects and classes
// It is also one of the most important pillars of Object-oriented programming

// --------------------- Prototypes and Prototypical Inheritance --------------------

let x = {};
// console.log(x);
// Here x is a prototypical object it has some inherent properties


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

// Objects and arrays created by a given constructor will have the same prototypes.

// ------------- Property Descriptors --------------

// It can be used to describe the properties in an Object or array

// let person = { name: "shreyash" };

// console.log(person)

// for (let key in person)
    // console.log(key)

// Object.keys(person);

// let objectBase = Object.getPrototypeOf(person);

// let descriptors = Object.getOwnPropertyDescriptor(objectBase, 'toString');

// console.log(objectBase);
// console.log(descriptors);

// Object.defineProperty(person, 'name', {
//     writable: false,  //using boolean values
//     enumerable: true,
//     configurable: false
// });

// delete person.name

// console.log(person);

// ----------------- Constructor prototypes -----------------

// Object.getPrototypeOf(myObj);
// Constructor prototype 
// myObj.__proto__ (parent of myObj)
// Constructor.prototype ()

// New functional object is created 

function Pokemon(pika) {
    this.pika = pika;
}
// Declaration of new functional object 

const pokemon = new Pokemon(1);

Pokemon.prototype; // prototype property

// console.log(pokemon);

// ----------------- Prototype vs Instance Members ---------------

function Dumb(people) {
    this.people = people;
    this.peopleArePeople = function(){
        console.log("people are peole");
    }
    this.move = function () {
        this.draw();
        console.log("move");
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

// console.log(c1.draw);   
// console.log(c1.toString);

// Returning string with variabe 
Dumb.prototype.toString = function () {
    return 'People are Dumb' + this.people;
}

// ----------- Iterating Instance and Prototype Members --------------

function Student(learn) {
    this.learn = learn;
    this.pen = function(){
        console.log("write");
    }
}

const s1 = new Student(10);

// Prototype members

Student.prototype.scale = function () {
    console.log('line');
}
// s1.scale();

// Returns instance members
// console.log(Object.keys(s1));

// Returns all members (instace + prototype)
// for (let key in s1) console.log(key);

// console.log(s1.hasOwnProperty('learn'));

// -------------------- Avoid Extending the Build-in Objects -----------------

// Always avoid extending build-in objects 
// the prototype function 
Array.prototype.shuffle = function () {
};

const array = [];
array.shuffle();

// Don't modify objects you don't own
