// ------------------- Array in JavaScript ----------------------

// Adding new elements
// Finding elements
// Removing elements
// Splitting arrays
// Combining arrays

// -------------- Adding new element to Array -----------------------

const numbers = [3, 4];

// add a new element 

numbers.push(5, 6);

// Adding element to towards the right

numbers.unshift(1, 2);

//Adding elements in the middle

numbers.splice(3, 0, 'a', 'b');
// console.log(numbers);

// -------------- Finding Elements in array Primitives types

const newNumbers = [1, 2, 3, 1, 4];

// Index of array gives the index of items available in the array

// console.log(newNumbers.indexOf(1, 2));
// console.log(newNumbers.indexOf(1, ));
// console.log(newNumbers.lastIndexOf(1));

// console.log(newNumbers.indexOf(0) !== -1);
// console.log(newNumbers.includes(1));

// -------------- Finding Elements in array Reference types

const coursesx = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
];

// console.log(courses.includes({ id: 1, name: 'a' }));

const course = coursesx.find(function (course) {
    return course.name === 'a';
});
const tutorial = coursesx.findIndex(function (tutorial) {
    return tutorial.name === 'a';
});

// console.log(course);
// console.log(tutorial);

// --------------- Arrow function ------------------
// whenever you want to pass a function callback function or as an argument to
// a difference method we can use an arrow function

const material = coursesx.findIndex((material)=> material.name === 'b');

// console.log(material);


// ------------------- Removing elements from an Array

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


// --------------------- Emptying an Array ---------------------------
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


// ------------- Combine and splice Array ---------------------

// const first = [1, 2, 3];
// const second = [4, 5, 6];
// const third = [{ vlaue: 10 }];

// third[0].vlaue = 14;

// const combined = first.concat(third);

// const slice = combined.slice(2);

// console.log(combined);
// console.log(slice);

// -------------- The Spread Operator

const first = [1, 2, 3];
const second = [4, 5, 6];

// Spread Operator (...)

const combined = [...first, 'a', ...second, 'b'];

const copy = [...combined];

// console.log(copy);

// ----------------- Iterating an Array -------------------------------

const bnumber = [1, 2, 3];

// For of loop
// for (let number of bnumber)
//     console.log(number);

// For Each loop
// bnumber.forEach(function (number) {
//     console.log(number);
// });

// Optimize it using arrow function
// bnumber.forEach((index,number) => console.log(index,number));

// ----------------- Joining Arrays -------------------------

const cnumbers = [1, 2, 3];
const joined = cnumbers.join(',');

// console.log(cnumbers);
// console.log(joined);

const message = 'This is my first message';
const parts = message.split(' ');

const jon = parts.join('-');

// console.log(message);
// console.log(parts);
// console.log(jon);

// ----------------- Sorting Arrays --------------------

const snumber = [2, 1, 4, 5];

// console.log(snumber);

const sort = snumber.sort();

const reverse = snumber.reverse();

// console.log(sort);
// console.log(reverse);


const courses = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'JavaScript' }
];

// console.log(courses)

courses.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});

// console.log(courses);

//----------------------------- Testing the Elements in the array ------------------------------

const tnumbers = [1, 2, -3];

// every() checks every element 
// some() checks only one element

const allPositive = tnumbers.every(function (vlaue) {
    return vlaue >= 0; 
});
const allOnePositive = tnumbers.some(function (vlaue) {
    return vlaue >= 0; 
});

// console.log(allPositive);
// console.log(allOnePositive);

// ------------------- Filtering an Array -----------------------------

const fnumbers = [1, -1, 2, 3];

// console.log(fnumbers);

// With traditional function
// const filtered = fnumbers.filter(function (value) {
//     return value >= 0;
// });

// with arrow functions 
const filtered = fnumbers.filter( n => n >= 0);

// console.log(filtered);


// ------------------- Mapping Arrays --------------------

const mnumbers = [1, -1, 2, 3];

// const items = mnumbers.map(n => '<li>' + n + '</li>');

// const html = '<ul>' + items.join('') + '</ul>';


const items = mnumbers
    .filter(n => n >= 0)
    .map(n => ({ value: n })) // chain of methods
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);

// console.log(items);


// -------------------- Reducing Array ---------------------

const rnumbers = [1, -1, 2, 3];

console.log(rnumbers);

let sum = 0;

for (let r of rnumbers)
    sum += r;

console.log(sum);

// a = 0, c = 1 => a = 1
// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5

// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5

// const rum = rnumbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue; 
// }, 0);


const rum = rnumbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue 
);

console.log(rum);  
