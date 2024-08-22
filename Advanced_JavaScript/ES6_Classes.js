// ES6 Classes
// ITs the modern version of JavaScript

//  --------------------- Classic way for cosntructor

// function Circle(radius) {
//     this.radius = radius;

//     this.draw = function () {
//         console.log('draw');
//     }
// }

// const cir = new Circle();
// console.log(cir);


// ----------------- new way of writing it  

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    draw() {
        console.log('draw');
    }
}
const c = new Circle(1);
// console.log(c);

// ------------------------ Hoisting --------------------


// sayHello(); // the hoisted
// // function declaration
// function sayHello() { }

// // function expression
// const sayGoodbye = function () { };
// const number = 1;
// // Function expression is not hoisted

// // Class Declartion
// class Circle {
// }
// // class declaration is not been hoisted
// // Class Expression
// const Square = class { };

// ---------------- Static Methods -----------------

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // Instance Method

    draw() {     
    }
    
    // Static Method
    static parse(str) {
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
}

const circle = new Circle(1);
Circle.parse();
console.log(circle);