// ---------------------------------------- JavaScript Exercise ------------------------------------------------
// 1) Write a function that takes two numbers and returns
// the maximum of the two.

// --------- My Solution ---------

function maximum(a, b) {
    if (a > b) {
        console.log(a , 'is greater number');
    } else if (a < b) {
        console.log(b, 'is a greater number');
    } else {
        console.log('Invalid input');
    }
}

// maximum(1, 'f');

// M solution -----

let number = max(3, 12);
// console.log(number);

function max(a, b) {
    return (a > b) ? a : b;
}

// 2) Write a function that will tell if an image is
// Landscape of not

function isLandScape(width, height) {
    if (width > height) {
        console.log('is landscape');
    } else if (width < height) {
        console.log('is not LandScape');
    } else {
        console.log('Invalid Input');
    }
}
// isLandScape(1, 12);

// M Solution

function isLandScaped(width, height) {
    // return (width > height) ? true : false; 
    // it not optimal 
    return (width > height); 
    // same as above it will return a boolean value because it is using comparison operators 
}

// console.log(isLandScaped(800, 600));

// ----------------  3) FizzBuzz
// Divisible by 3 => fizz
// Divisible by 5 => buzz
// Divisible by both 3 and 5 => fizzbuzz
// Not divisible by 3 or 5 => input


// --------------------------- my soluition


// function fizzBuzz(input) {
//     if (input % 3 === 0) {
//         console.log('Fizz');
//     } else if (input % 5 === 0) {
//         console.log('Buzz');
//     } else if (input % 3 === 0 && input % 5 === 0) {
//         console.log('FizzBuzz');
//     } else {
//         console.log('Not a number')
//     }
// }

// ------------------ M Solution

// const output = fizzBuzz(false);
// console.log(output);

function fizzBuzz(input) {
    
    if (typeof input !== 'number')
        return NaN;

    if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';

    if (input % 3 === 0)
        return 'Fizz';

    if (input % 5 === 0)
        return 'Buzz';

    return input;
}

// 3) CheckSpeed where the speed limit is 70kmph
// Speed Limit = 70
// drive over 5km  -> 1 point
// Use Math.floor function for calculation
// If the driver gets 12 points -> suspended

// const check = checkSpeed(70);
// console.log(check);
// --- My solution
// function checkSpeed(speed) {
//     if (speed >= 70) {
//         return "Ok";
//     }
// }

// ------------- M solution

// checkSpeed(187);
// function checkSpeed(speed) {
//     const speedLimit = 70;
//     const kmPerPoint = 5;

//     if (speed < speedLimit + kmPerPoint) {
//         console.log('ok');
//         return;
//     }
//         let points = Math.floor((speed - speedLimit) / kmPerPoint);
//         if (points >= 12)
//             console.log('License suspended');
//         else
//             console.log('Points', points);
// }

// 4) Even and Odd numbers

// It should take a parameter as a limit and show a number that is either even or odd

// console.log(showNumbers(1));

// -------- My solution -------

// function showNumbers(limit) {
//     if (limit % 2 === 0)
//         return 'Even';
//     else
//         return 'Odd'
// }

// M Solution

// showNumbers(19);

function showNumbers(limit) {
    for (let i = 0; i <= limit; i++){
        // if (limit % 2 === 0) console.log(i, 'Even');
        // else console.log(i, "Odd");
        const message = (i % 2 === 0) ? 'Even' : 'Odd';
        console.log(i, message);
        }
}

// 5) contTruthy which takes an array and returns truthy values
// truthy (truth) and falsely (false) elements
// eg - const name = 'shreyash'; // is a truthy value
// eg - const name = ''; // is a falsy value

// Falsy values in JavaScript

// undefined
// null
// ''
// false
// 0
// NaN
// This one is new for me so there is no solution from my side

// my solution -----------------------

const array = [0, null, undefined, 1,  2, 3];

// console.log(countTruthy(array));

function countTruthy(array) {
    let count = 0;
    for (let value of array)
        if (value)
            count++;
        return count;
}

// 6) String Properties
// Write a function that will show all the properties of an object that is a string

// const movie = {
//     title: 'a',
//     releaseyear: 2018,
//     rating: 4.5,
//     director: 'b'
// };

// showProperties(movie);

// function showProperties(obj) {
//     for (let key in obj){
//       if (typeof obj[key] === 'string')
//         console.log(key, obj[key]);

//     }
// }


// 7) Sum of multiple of 3 and 5

// console.log(sum(9));

// Multiples of 3: 3, 6, 9
// Mulitples of 5: 5, 10

function sum(limit) {
    let sum = 0;

    for (let i = 0; i <= limit; i++)
        if (i % 3 === 0 || i % 5 === 0)
            sum += i;
    
    return sum;
}

// 8) Grade
// Calculate the grade of the student

// --- IMP--- Single responsibility principle a
// functions are small and focus on one thing
const marks = [80, 80, 50];

// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

// console.log(calculateGrade(array));

function calculateGrade(marks) {
    const average = calculateAverage(marks)
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';

}

function calculateAverage(array) {
    let sum = 0;
    for (let value in array)
        sum += value;
    return sum / array.length;
}

// -------------------- 9) showStars a very popular question in beginners
// Here give input in a number and get output in stars
// input :- 3
// Output :-
// *
// **
// ***

// showStars(5);

function showStars(rows) {
    for (let row = 1; row <= rows; row++){
        let pattern = '';
        for (let i = 0; i < row; i++)
            pattern += '*';

        // console.log(pattern);
    }
}

// ---------------------- 9) showPrime where you give a number and you will get prime numbers
// There are two types of numbers here,
// Composite
// 12 = 1, 2, 3, 4, 6, 12
// Can be divided evenly by its factors
// whereas prime numbers are
// 11 = 1, 11,
// 12 = 1, 12
// Prime numbers are whose factors are only 1 and itself

// -------- Imp always declares a variable name that has some
// value or meaning for easy-to-understand and clean coding 

// First solution
// showPrime(20);
// function showPrime(limit) {
//     for (let number = 2; number <= limit; number++){

//         let isPrime = true;
//         for (let factor = 2; factor < number; factor++){
//             if (number % factor === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) console.log(number);
//     }
// }

// Responsibility principle and clean code
// Second solution
// Nested loops are hard to understand

// function showPrime(limit) {
//     for (let number = 2; number <= limit; number++)
//         if (isPrime(number)) console.log(number);
// }

// function isPrime(number) {
//         for (let factor = 2; factor < number; factor++)
//             if (number % factor === 0) 
//             return false;
//     return true;
// }

// -------------------- Object exercise -----------------------
// ----------- address object
// 1) Problem statement --- show address from a object
// Street
// City
// ZipCode
// showAddress(address)

// const address = {
//     street: 'Tialk Road ',
//     city: 'Pune',
//     zipcode: '410000'
// };

function showAddress(address) {
    for (let key in address)
      console.log(key, address[key]);
}
// showAddress(address);

// 2) ----------------- Factory and Constructor functions in objects
// Initialized and addressed object using first a factory function
// constructor function


// const address = {
//     street: 'Tialk Road ',
//     city: 'Pune',
//     zipcode: '410000'
// };


// let address = createAddress('a', 'b', 'c');

// console.log(address);

// Factory function
// function createAddress(street, city, zipcode) {
//     return {
//         street,
//         city,
//         zipcode
//     };
// }

// let location = new CreateAddress('a', 'c', 'd');
// console.log(location);

// Constructor Function
// function CreateAddress(street, city, zipcode) {
//     this.street = street,
//         this.city = city,
//         this.zipcode = zipcode
// };

// ---------------- Object equality
// 3) Create constructor functions and compare them
// they are same, equal or not

let address1 = new Address('a', 'b', 'd');
let address2 = new Address('a', 'b', 'd');

// Constructor Function

function Address(street, city, zipcode) {
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
};

// console.log(address1);
// console.log(address1);

function areEqual(address1, address2) {
    // if (address1 === address2)
    //     console.log('they are equal');
    // else
    //     console.log('not equal') // the objects 
    return address1.street === address2.street &&
        address1.city === address2.city &&
        address1.zipcode === address2.zipcode;
 }
function areSame(address1, address2) {
    return address1 === address2;
 }

// console.log(areEqual(address1, address2));
// console.log(areSame(address1, address2));

// -------------- Blog Post
// 4) Create a BLoh Post object
// title
// body
// author
// views
// comments (author, body)
// isLive

// let post = {
//     title: 'How to be the best version of yourself',
//     body: 'Lorem ipsum dolor sit amet consectetur.',
//     author: 'Fernandez',
//     views: 12,
//     comment: [{ author: 'a', body: 'c' },
//     { author: 'a', body: 'c' }],
//     isLive: true
// };

// console.log(post);

// --------------- Constructor function
// 5) constructor function post

let postData = {
    title: 'How to be the best version of yourself',
    body: 'Lorem ipsum dolor sit amet consectetur.',
    author: 'Fernandez',
    views: 12,
    comment: [{ author: 'a', body: 'c' },
    { author: 'a', body: 'c' }],
    isLive: true
};


function ConstructorPost(title, body, author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comment = [];
    this.isLive = false;
};
let post = new ConstructorPost('a','b','c');
// console.log(post);

// ---------------------Price range object
// 6) Create a Price range object which you generally see in a
// e-commerce store

let priceRanges = [
    {lable: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10},
    {lable: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20},
    {lable: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50},
];

let restaurants = [
    { averagePerPerson: 5 }
];

// console.log(priceRanges);

// --------------------- Arrays ---------------------

// Exercise 1 Array from range

const numbers = arrayFromRange(1, 4);

// console.log(numbers);

function arrayFromRange(min, max) {
    const output = [];
    for (let i = min; i <= max; i++)
        output.push(i);
    return output;
}

// Exeercise 2 Includes

const inumbers = [1, 2, 3, 4, 5, 6];

// console.log(inumbers.includes(1)); //predefine method create one like this
// console.log(includes(inumbers, 1));

function includes(array, searchElement) {
    for (let element of array)
        if (element === searchElement)
            return true;
    return false;
}

// Exercise 3 Except

// Create a function that except a value from an array

const enumbers = [1, 2, 3, 4, 5];

const output = expect(enumbers, [1]);

// console.log(output);

function expect(array, exculded) {
const output = [];
    for (let element of array)
        if (!exculded.includes(element))
            output.push(element);
    return output;
}

// Exercise 4 Moving element

const mnumbers = [1, 2, 3, 4, 5];

const moveData = move(mnumbers, 0, 0);

// console.log(moveData);

function move(array, index, offset) {
    const position = index + offset;
    if (position >= array.length || position < 0) {
        console.error('Invalid offset.');
        return;
    }
    const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(position, 0, element);
    return output;
}

// Exercise 5 Count Occurrence


const cnumbers = [1, 2, 3, 4, 5, 6];

// const count = countOccurrences(cnumbers, 1);

// console.log(count);

function countOccurrences(array, searchElement) {
    return array.reduce((accumulator, current) => {
        const occurence = (current === searchElement) ? 1 : 0;
        console.log(accumulator, current, searchElement);
        return accumulator + occurrence;
    }, 0);
}

// Exercise 6 Get Max

const xnumbers = [1, 2, 3, 4];

const maxi = getMax(xnumbers);

// console.log(maxi);

function getMax(array) {
    if (array.length === 0) return undefined;

    // let max = array[0];
    // for (let i = 1; i < array.length; i++)
    //     if (array[i] > max)
    //         max = array[i];
    // return max; // simple method

    // array.reduce((a,b) => {
    //     // if (current > accumulator) return current;
    //     // return accumulator; // old 
    //     return (b > a) ? b : a;
    // });

   return array.reduce((a, b) => (a > b)? a: b);
}


// Exercise no 7 Movies

// All the Movies in 2018 with rating > 4
// Sort them by their rating 
// Descending order 
// Pick their title 

const movies = [
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.3},
    {title: 'c', year: 2018, rating: 3},
    {title: 'd', year: 2018, rating: 4.5},
];

// const moviesOutput = sortMovies(obj);

// console.log(moviesOutput);

// function sortMovies(obj) {
    
// }

const titles = movies 
    .filter(m => m.year === 2018 && m.rating >= 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title)
   
// console.log(titles);


// ----------------------------- Functions --------------------------------

// Exercise 1 Sum of arguments

// function addSum(...items) {
//     // let total = 0;
//     // return total = a + b;
//     let total = 0;
//     total =  items.reduce((a,b) => a + b);
//     return total;
// }

// console.log(addSum(1,2,3,4))

// console.log(sumAdd([1, 2, 3, 4, 5]));

function sumAdd(...items) {
    if (items.length === 1 && Array.isArray(items[0]))
        items = [...items[0]];
    return items.reduce((a, b) => a + b);
}

// Exercise 2 circle object

const circle = {
    radius: 2,
    get area() {
        return Math.PI * this.radius * this.radius;
    }
}

circle.radius = 4; // can reconfigure the value

// console.log(circle.area);

// Exercise 3 ErrorHandling

// try{
// const bnumbers = [1, 2, 3, 4, 5];
// const count = countOccurencess(9, 1);
// console.log(count);
// }
// catch (e){
//     console.log(e.message);
// }
// function countOccurencess(array, searchElement) {
//     if (!Array.isArray(array))
//         throw new Error('Invalid array.');

//     return array.reduce((accumulator, current) => {
//         const occurence = (current === searchElement) ? 1 : 0;
//         return accumulator + occurrence;
//     }, 0);
// }

// ------------------------ Fundamentals of JavaScript End ---------------------------------

//

// const array = [10, 10, 20, 20, 30];

// function repeatNumber(array) {
//     for (let i = 0; i < array; i++){
//         if (array[i] === array[i + 1]) {
//             console.log(array[i]);
//         }
//     }
// }
// // repeatNumber();

// Solution

// const array = [10, 20, 30, 20, 10];

// function findRepeatedElements(array) {
//   for (let i = 0; i < array.length; i++)
//     for (let j = i + 1; j < array.length; j++)
//       if (array[i] === array[j]) {
//         console.log(array[i]);
//         break;
//       }
// }

// findRepeatedElements(array); // Output: 10, 20
