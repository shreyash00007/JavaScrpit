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

console.log(adds(1, 2, 3, 4, 5, 6, 7));