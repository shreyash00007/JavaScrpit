// ---------------------------------------- Implementation Detail ----------------------------------------

// const _radius = new WeakMap();

// Public Interface

// class Circle {
//     constructor(radius) {
//         _radius.set(this, radius);
//     }
//     draw() {
//         console.log('Circle with radius' + _radius.get(this));
//     }
// }

// module.exports = Circle;

// Implementation Detail

const _radius = new WeakMap();

// Public Interface
export class Circle{
    constructor(radius) {
        _radius.set(this, radius);
    }
    draw() {
        console.log('Circle with radius' + _radius.get(this));
    }
}
