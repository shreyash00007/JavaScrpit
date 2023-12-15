// ------------------- Array in JavaScript ----------------------

// Adding new elements
// Finding elements
// Removing elements
// Splitting arrays
// Combining arrays

// -------------- Adding new elements to Array

const numbers = [3, 4];

// add new elemnt 

numbers.push(5, 6);

// adding element to towars right

numbers.unshift(1, 2);

// adding elements in middle

numbers.splice(3, 0, 'a', 'b');
// console.log(numbers);

// -------------- Finding Elements in array Primivites types

const newNumbers = [1, 2, 3, 1, 4];

// Index of array gives the index of item availble in the array

// console.log(newNumbers.indexOf(1, 2));
// console.log(newNumbers.indexOf(1, ));
// console.log(newNumbers.lastIndexOf(1));

// console.log(newNumbers.indexOf(0) !== -1);
// console.log(newNumbers.includes(1));

// -------------- Finding Elements in array Reference types

const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
];

// console.log(courses.includes({ id: 1, name: 'a' }));

const course = courses.find(function (course) {
    return course.name === 'a';
});
const tutorial = courses.findIndex(function (tutorial) {
    return tutorial.name === 'a';
});

// console.log(course);
// console.log(tutorial);

// --------------- Arrow function
// whenever you want a pass a function callback function or as an argument to
// a difference method we can use arow function

const material = courses.findIndex((material)=> material.name === 'b');

// console.log(material);


// ------------------- Removing elements form an Array

const nextNumbers = [1, 2, 3, 4,5,6];

// End
const last = nextNumbers.pop();
// console.log(last);

// Beginning
// const first = nextNumbers.shift();
// console.log(first);

// Middle
const middle = nextNumbers.splice(2, 1);
// console.log(middle);

// console.log(nextNumbers);


// --------------------- Emptying an Array --------
// and array with const will not be removed

let xnumber = [1, 2, 3, 4];
// soluiton 2
let ynumber = xnumber;

// soluiton 1
xnumber = []

// solution 3
xnumber.length = 0;

// solution 4 
xnumber.splice(0, xnumber.length);

// solution 5 
while (xnumber.length > 0) // not a reliable 
    xnumber.pop();

// console.log(xnumber);
// console.log(ynumber);


// ------------- Combine and splice Array

const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);

console.log(combined)

