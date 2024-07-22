// ----------- Creating Your Own Prototypical Inheritance ------

function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function () {
    console.log('Duplicate');
}
// ------- Calling the Super Constructor -------------
function Circle(radius, color) {
    // It will now work need to use call fucntion
    // Shape(color);
    // Using constructor call 
    Shape.call(this, color);
    this.radius = radius;
}

// -------------- Resetting the Constructor -----------

// Circle.prototype.constructor = Circle;
// new Circle.prototype.constructor() => new Circle();
// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;

Circle.prototype.draw = function () {
    console.log('draw');
}

// ---------------- Intermediate Function Inheritance ---------

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}
// Declaring two different function 
function Square(size) {
    this.size = size;
}
extend(Square, Shape);

// Square.prototype = Object.create(Shape.prototype);
// Square.prototype.constructor = Square;

const s = new Shape();
const c = new Circle(1, 'red');
const sq = new Square(10);

// console.log(s);
// console.log(c);
// console.log(sq);

// ------------------ Method Overriding ---------

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Geometry() {
}
Geometry.prototype.duplicate = function () {
    console.log('duplicate');
}

function triangle() {
}
// using extend function
extend(triangle, Geometry);

Geometry.prototype.duplicate = function () {
    Shape.prototype.duplicate.call(this);
    console.log('duplicate circle');
}
const g = new triangle();

// console.log(g);
// console.log(g.duplicate());

// ------------------ Polymorphism ------------------

function Hexagon() { 
}
extend(Hexagon, Shape);

Hexagon.prototype.duplicate = function () {
    console.log('duplicate haxagaon');
}
// shapes array declaration
const shapes = [
    new Circle(),
    new Hexagon()
];

// for (let shape of shapes)
    // shape.duplicate();
// let's complete it
// -------------------------- When to use Inheritance ------------------------

