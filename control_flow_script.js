//------------------ Control flow JavaScript -------------------------

// Hour Greeting
// If the hour is between 6 am and 12 pm: Good morning!
// If it is between 12 pm and 6 pm: Good afternoon!
// Otherwise: Good evening!!

// ------------ If else ------------

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

// ------------------- Switch Case statement ------------------- 

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

// -------------------- Loops --------------------

// Types of loops in Javascript

// For
// While
// Do...While
// For...in
// For...of

// ----------- For loop -----------

// for (let i = 1; i <= 5; i++){
//     console.log('hello shreyash', i); // 5 times
// }

// for (let i = 1; i <= 5; i++){
//     if (i % 2 !== 0) console.log(i); // odd number
// }

// ------------ While loop

// let i = 0;
// while (i <= 5) {
//     if (i % 2 !== 0) console.log(i);
//     i++;
// }

// ------------ Do while loop

// let i = 0;
// do {
//     if (i % 2 !== 0) console.log(i);
//     i++;
// } while (i <= 5);

// Infinite Loops

// for (let i = 0; i < 5;){
//     console.log(i);
// }  // This is a typical example of infinite when you don't give the i++ increment condition

// while (true) {
    
// }

// let x = 0;
// do {
//     // x++;
// } while (x < 5);

// ---------- For in loops

// const person = {
//     name: 'Mosh',
//     age: 30
// };

// For (let key in person ) 
// For in loop is used to iterate properties of the object in Js
// console.log(key, person[key]);

// const colors = ['red', 'green', 'blue'];

// for (let index in colors) //It can also be used in arrays
//     console.log(index, colors[index]);

// ----------- For off loops (introduced in es6)

// const colors = ['red', 'green', 'blue'];

// for (let color of colors) // It is used to iterate over the properties of the array
//     console.log(color)

// -------------- Break and Continue ----------------------

// let i = 0;
// while (i <= 10) {
//     // if (i === 5) break; // with the break jump out of the loop
//     if (i % 2 === 0) {
//         i++;
//         continue; // With the continue we jump to the next iteration
//     }
//     console.log(i);
//     i++
// }
