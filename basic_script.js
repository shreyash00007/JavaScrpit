// ----------------------- This is the basics of JavaScript ---------------------

// This a comment

// console.log('Hello world shreyash');
// ----------- Variables in JavaScript ----------

let name = 'shreyash'; 

// console.log(name);

// Variables cannot be a reserved keyword
// Should be meaningful
// Cannot start with  a number(1onje)
// Cannot contain a space or hyphen (-)
// They are Case-sensitive
// They follow the camel case 
// notation first letter small and other 
// starting words in capital eg: - firstName

// let firstName = 'shreyash' , lastName = 'Dhanawade'; 
// is not a good practice

// Always declare a new variable at the new line

let firtName = 'shreyash';
let lastName = 'Dhanawade';

console.log(firtName, lastName);

// Let the variable can be reassigned

let interestRate = 0.4;
interestRate = 1; 

console.log(interestRate);

// Const can't be reassigned

const pi = 3.17;
// pi = 4; 
// It will throw an error: Assignment to constant variable.

console.log(pi);

// Data Types in JavaScript

// Primitives / Value Types & Reference Types

// ----------------- Primitives Data types --------–--------

// String
// Number
// Boolean
// undefined
// null

let names = 'shreyash'; // String literal (a fancy way to say a string)
names = 3; 
let age = 22; // Number literal (decimal and floats comes it to number)
let isApproved = false; // boolean literal (true or false)
let nextName = undefined; // undefined is value
let selectedColor = null; // null is a object 

// typeof operator is used to get the datatype of variable
 
console.log(typeof (names));

// JavaScript is a Dynamically typed language 
// Where the Datatype of the variable can be declared at the runtime.
// Undefined as actually a value also a data type in JavaScript

console.log(typeof (isApproved));

// Null is an object in JavaScript

console.log(typeof (selectedColor));

//  ------------------ Reference Types ------------------

// Object
// Array
// Function

// What is an object? It is like an object in real life, like a person with a name, age, address, height, weight, country, etc.

// ---------------- Objects in JavaScript

// let name = 'shreyash';
// let age = '22';
// Now the above two are highly related so we can create an object of those

let person = {
    name: 'shreyash',
    age: 22
};

// The Dot Notation is used to reassign the value in an object

person.name = 'Jhon'; // it is easy to use 

//-------- Bracket Notation ----------

person['name'] = 'Marry'; // it is not easy to use 

console.log(person);

// --------------- Arrays

let selectedColors = ['red', 'blue']; // array literal

selectedColors[2] = 'green'; // add items to array 

console.log(selectedColors);
console.log(selectedColors[0]);

// The data type of array is an object

console.log(typeof (selectedColors));

// So we can say that an array is an object in JavaScript

// -------------- Functions --------------

// Function is a set of statements that performs a task and calculates the value
// Performing a task 

function greet(yourName, endName) { // yourName is parameter
    console.log('hello ' + yourName + ' ' + endName);
}
// don't need to semicolon to end of a function

greet('harsh', 'dhanwade'); // harsh dhanawade is argument

// -------------- Types of functions --------------

// -------------- Calculating a value

function square(number) {
    return number * number;
}

let number = square(4);
console.log(number);
// a better way to write this is

console.log(square(2));

// ---------------- ns stuff ---------------
var n = 2;
function square(num) {
    var ans = num * num;
    return ans;
}

var square1 = square(n);
console.log(square1);
var square2 = square(3);
console.log(square2);
