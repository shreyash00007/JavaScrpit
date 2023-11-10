//------------------ Control flow JavaScript

// Hour Greeting
// If hour is between 6am and 12pm: Good morning!
// If it is between 12pm and 6pm: Good afternoon!
// Otherwise: Good evening!

// ------------ If else

// if (condition) {
//     statement
// }
// else if (anotherCondition) {
//     statement
// }
// else if (yetAnotherCondition) {
//     statement
// } else
//     statement

// Solution of hour greeting

// let hour = 20;

// if (hour >= 6 && hour < 12) {
//     console.log('Good Morning');
// } else if (hour >= 12 && hour < 18) {
//     console.log("Good afternoon");
// } else {
//     console.log("Good evening");

// ------------------- Switch Case statement

let role;

// switch (role) {
//     case 'guest':
//         console.log('Guest User');
//         break;
//     case 'moderator':
//         console.log('Moderator User');
//         break;
//     default:
//         console.log('Unknow User');
// }

// Simpler in if else

// if (role === 'guest') console.log('Guest');
// else if (role === 'moderator') console.log('Moderator');
// else console.log('Unknown User');

// -------------------- Loops

// Types of loops in Javascrpt

// For
// While
// Do...While
// For...in
// For...of

// ----------- For loop

// for (let i = 1; i <= 5; i++){
//     console.log('hello shreyash', i); // 5 times 
// }

// for (let i = 1; i <= 5; i++){
//     if (i % 2 !== 0) console.log(i); // odd no 
// }

// ------------ While loop

// let i = 0;
// while (i <= 5) {
//     if (i % 2 !== 0) console.log(i);
//     i++;
// }

// ------------ Do while loop

let i = 0;
do {
    if (i % 2 !== 0) console.log(i);
    i++;
} while (i <= 5);
