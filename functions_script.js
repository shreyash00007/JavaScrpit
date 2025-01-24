//--------------------- Functions in JavaScript ---------------------
// ------------------ Function Declaration ---------------------

function walk() {
    console.log('walk');
}

// walk();

// Anonymous Function Expressions
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

//----------------------- Hoisting in JavaScript --------------------------

// consolSe.log(x);0 
// will throw error due to x is not defined 

let xw = 1;

// cooks(); 
// will throw an error cooks is not defined

const cooks = function cook() {
    console.log('cook');
}

// cat(); // it will work
// Hosting is a process of moving function declaration to the top of the file 
// Which happens automatically in javascript

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

// -------------------------- Getters and Setters ---------------------------

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

// --------------- Error handling in JavaScript ---------------

// const person = {
//     firstName: 'shreyash',
//     lastName: 'Dhanawade',
//     set fullName(value) {
//         if (typeof value !== 'string')
//             throw new Error('value is not a string);
//         const parts = value.split(' ');
//         if (parts.length !== 2)
//             throw new Error('Enter a first and lastName);
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

// ---------------------- Local vs Global Scope -------------------------

function start(){
    const message = 'hi';
}

// if (true) {
//     const another = 'bye';
// }

// for (let i = 0; i < 5; i++){
//     console.log(i);
// }

// console.log(start());

// console.log(message);

function stop() {
    const message = 'bye'; // local scope 
    const color = 'blue';  // you reassing them as local > global
    console.log(color); // you can call global elements 
}

const color = 'red'; // global scope
// console.log(color);
// stop();

// --------------------------- Let vs Var ---------------------------

let x = 0;
var y = 0;

// var => function-scoped
// ES6 (ES2015): let, const => blocked - scoped

function num() {
    // for (let i = 0; i <= 5; i++){
    //     console.log(i);
    // }
    // console.log(i); // i is declared as let so it will throw an error
    for (var i = 0; i <= 5; i++){
        console.log(i);
    }
    console.log(i); // i is declared as ver so it will not throw an error
    // This is the reason we should not use var 
}
// num();

// Avoid using the var keyword

// -------------------------- The This keyword -----------------------------

// This reference The object that is executing the current function
// method -> obj
// function -> global (window, global in node )

// For Objects
const video = {
    title: 'a',
    play() {
        console.log(this); // here the this keyword refers to the data inside this entire object
    }
};

video.stop = function() {
    console.log(this);
}
// video.stop();

// For regular Functions

function Video(title) {
    this.title = title;
    console.log(this);
}
// const v = new Video('a'); // {}

const bideo = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this.title, tag);
        }, this);
    }
};

// bideo.showTags();

// -------------------------- Changing this --------------------------

const gideo = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        const self = this;
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        });
    }
};

// gideo.showTags();

function heyVideo() {
    console.log(this);
}

// heyVideo.call({ name: 'shreyash' }, 1, 2);
// heyVideo.apply({ name: 'shreyash' }, [1, 2]);
// heyVideo.bind({ name: 'shreyash' })();
// heyVideo();
