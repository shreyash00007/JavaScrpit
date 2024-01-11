// ___________________________Functions in JavaScript____________________________

// ------------------ Function Declaration ---------------------

function walk() {
    console.log('walk');
}

// walk();

// Anonymous Function Experession
let run = function () {
    console.log('run');
};

// run();

let move = run;
// move();

//  Named Function expression
let play = function boy() {
    console.log('play');
};

// play();

// Random

// const obj = {
//     value: 'hello',
//     print() {
//         setTimeout(function () {
//             console.log(this.value);
//         },0)
//     }
// }
// obj.print();

//----------------------- Hoisting --------------------------

// consolSe.log(x); // will throw error due to x is not defined 
let x = 1;

// cooks(); // will throw a error cooks is not defined

const cooks = function cook() {
    console.log('cook');
}

// cat(); // it will work
// Hosting is a process of moving function declartion to top of the file 
// which hapeens in automatically in javascript.

function cat() {
    console.log('cat');
}

// --------------- Arguments -------------------

function sum(a, b) {
    console.log(arguments); // will give of object arrcuments
    return a + b;
}

// console.log(sum());
// console.log(sum(1));
// console.log(sum(1,1));
// console.log(sum(1,2,3,4));

function adds() {
    let total = 0;
    for (let value of arguments)
        total += value;
    return total;
}

// console.log(adds(1, 2, 3, 4, 5, 6, 7));


// ------------------- The Rest Operator ------------------

// function rest(...args) {
//     console.log(args);
//}

function rest(discount, ...prices) {
    
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}

// console.log(rest(0.1, 20, 30));

// ----------------- Default Parameters ---------------------

function interest(princilpal, rate = 3.5, years= 5) {
    // rate = rate || 3.5;
    // years = years || 5; // old way
    return princilpal * rate / 100 * years;
}
// console.log(interest(10000,5));


// ---------------- Getters and Setters ---------------------------

// const person = {
//     firstName: 'shreyash',
//     lastName: 'Dhanawade',
//     get fullName() {
//         return `${ person.firstName } ${ person.lastName }`;
//     },
//     set fullName(value) {
//         const parts = value.split(' ');
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     }
// };

// console.log(`${person.firstName} ${person.lastName}`)  // old way


// Getters => access properties
// setters => change (mutate) them

// person.fullName = 'pinki ponki';

// console.log(person.fullName);


// ----------------------- Try and Catch -----------------------------

// Error handling in JavaScript

// const person = {
//     firstName: 'shreyash',
//     lastName: 'Dhanawade',
//     set fullName(value) {
//         if (typeof value !== 'string')
//             throw new Error('value is not a string');
//         const parts = value.split(' ');
//         if (parts.length !== 2)
//             throw new Error('Enter a first and lasntname');
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     }
// };

// try{
// person.fullName = "";
// }

// catch (e) {
//     alert(e);
// }
// console.log(person.fullName);
