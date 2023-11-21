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

const movie = {
    title: 'a',
    releaseyear: 2018,
    rating: 4.5,
    director: 'b'
};

showProperties(movie);

function showProperties(obj) {
    for (let key in obj){
      if (typeof obj[key] === 'string')
        console.log(key, obj[key]);

    }
}