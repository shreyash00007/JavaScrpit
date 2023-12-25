// ----------------------- 1) Write a function that takes two numbers and returns
// the maximum of the two.

// My Solution ----
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

// ------------------- 2) Write a function which will tell if a image is
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
    // return (width > height) ? true : false; // it not optimal 
    return (width > height); // same as above it will retun a bollean value casue it is using compraison operators 
}

// console.log(isLandScaped(800, 600));

// ----------------  3) FizzBuzz
// Divisible by 3 => fizz
// Divisible by 5 => buzz
// Divisible by both 3 and 5 => fizzbuzz
// Not divisible by 3 or 5 => input


// --- my soluition


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

// ---- M Solution

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

// ---------- 4) CheckSpeed where the speed limit is of 70kmph
// Speed Limit = 70
// drive over 5km  -> 1 point
// Use Math.floor function for caluation
// If driver get 12 points -> suspended

// const check = checkSpeed(70);
// console.log(check);
// --- My solution
// function checkSpeed(speed) {
//     if (speed >= 70) {
//         return "Ok";
//     }
// }

// m solution -----

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

// -------------- 5) Even and Odd numbers
// It should take a parameter as limit and show number either even or odd

// console.log(showNumbers(1));

// My solution ----

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

// ---------------- 5) contTruthy which takes and arrary and returs and tuthy values
// tursy and falsey elements
// eg - const name = 'shreyash'; // is a truthy value
// eg - const name = ''; // is a falsy value

// Falsy values in JavaScript

// undefined
// null
// ''
// false
// 0
// NaN
// this one is new for me so no solution from my side

// m ----- solution

const array = [0, null, undefined, 1,  2, 3];

// console.log(countTruthy(array));

function countTruthy(array) {
    let count = 0;
    for (let value of array)
        if (value)
            count++;
        return count;
}

// ---------------- 6) String Properties
// write a fuction that will show all the properties of a object are string

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


// ----------------- 7) Sum of multiple of 3 and 5

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

// ----------------- 8) Grade
// calulae of grade of student

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

// ------------------------9) showStars a very popular question in begineers
//  here give input in a number and get output in stars
// input :- 3
// Ouptput :-
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

// ------------------------10) showPrime wher you give a num and you will get prime numbers
// There are two type of number here,
// Composite
// 12 = 1, 2, 3, 4, 6, 12
// Can be devided evenly by its factors
// where as prime numbers are
// 11 = 1, 11,
// 12 = 1, 12
// Prime numbers are whose factors are only 1 and itself

// -------- imp always declare a variable name that has some
//value or menaing for easy to understand and clean coding 

// first solution
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
// second solution
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
//     street: 'Tailk road ',
//     city: 'Pune',
//     zipcode: '410000'
// };

function showAddress(address) {
    for (let key in address)
      console.log(key, address[key]);
}
// showAddress(address);

// 2) ----------------- Factory and Constructor functions in objects
// intialzied and adress object using first a factory function
//  constructor function


// const address = {
//     street: 'Tailk road ',
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
// 3) Create to constructor functions and compare them
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
//     title: 'How to be the best version of your self',
//     body: 'Lorem ipsum dolor sit amet consectetur.',
//     author: 'fernandez',
//     views: 12,
//     comment: [{ author: 'a', body: 'c' },
//     { author: 'a', body: 'c' }],
//     isLive: true
// };

// console.log(post);

// --------------- Constructor function
// 5) constructor function post

let postData = {
    title: 'How to be the best version of your self',
    body: 'Lorem ipsum dolor sit amet consectetur.',
    author: 'fernandez',
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
// ecommerce store

let priceRanges = [
    {lable: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10},
    {lable: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20},
    {lable: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50},
];

let restaurants = [
    { averagePerPerson: 5 }
];

// console.log(priceRanges);

// --------------------- Arrays from Range ---------------------

const numbers = arrayFromRange(1, 4);

console.log(numbers);

function arrayFromRange(min, max) {
    const output = [];
    for (let i = min; i <= max; i++)
        output.push(i);
    return output;
}