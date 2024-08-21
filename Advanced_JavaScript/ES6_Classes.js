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
