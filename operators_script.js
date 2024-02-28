//  -------------------------------  Operators in JavaScript ------------------------------------------ 
// In JavaScript we have different kinds of operators,
// Operators are used to assign values, compare values, and perform arithmetic operations...
// We use operators along with our variables and constants to create expressions
// And with these expressions we can implement logic and Alogrithms

// Types of operators in JavaScript

// Artihmetic
// Assignment
// Comparison
// Logical
// Bitwise

// --------------------------- Artihmetic Operators ---------------------------------

// Arithmetic operators are used for calculations like we do in Mathematics

// let x = 10;
// let y = 20;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);

// --------Increment operator (++) by +1

// console.log(x++);
// console.log(x);

// ---------Decrement operator (--) by -1

// console.log(y--);
// console.log(--y); //If we apply the operator first it will show the value: eg 20 - 1 = 19
// console.log(y);

// ------------------- Assignment Operators ---------------------------------

// Assignment operators are used to assign the value of a variable

// x++;
// x = x + 1;
// console.log(x);

// but If we want to add different no

// x = x + 3;
// x += 3; // a better way to write
// x *= 4; // we can use all of the above arithmetic operators in assignment operators
// console.log(x);

// --------- Comparison Operators

// We use these operators to compare the values of variables

// Relational operators

// console.log(x > 0); // gives a boolean value greater than
// console.log(x >= 0); // Greater than equal too
// console.log(x < 0); // less than
// console.log(x <= 0); // Greater than

// Equality operators

// Strict Equatilty (type + value)

// console.log(1 === 1);
// console.log('1' === 1);

// lose Equality (Values are equal)
// console.log(x !== 1);

// console.log(1 == 1);
// console.log('1' == 1);
// console.log('1' == '1');
// console.log(true == 1);


// -------------------- Ternary Operators

// If a customer has more than 100 points,
// they are 'gold' customer, otherwise,
// thery are 'silver' customer.

// let points = 90;

// let type = points > 100 ? 'gold' : 'silver';

// console.log(type);

//------------------- Logical Operators

// Logical And (&&)
// Returns TRUE if both operand are TRUE

// console.log(true && true); //true
// console.log(true && false); //false

// let hightIncome = true;

// let goodCreditScore = true;

// let eligibleForLoan = hightIncome && goodCreditScore;

// console.log(eligibleForLoan);

// Logical OR (||)
//Returns TRUE if one of the oeprands is TRUE

// let hightIncome = false;

// let goodCreditScore = false;

// let eligibleForLoan = hightIncome || goodCreditScore;

// console.log('Eligible', eligibleForLoan);

// Not (!)

// let applicationRefused = !eligibleForLoan;

// console.log('Application Refused', applicationRefused);


// -------------Logical Operators with Non booleans

// Falsy (false)
// undefined
// null
// false
// ''
// NaN Not a (number)

// Anyting that is not Falsy -> Truthy

// console.log(false || true);
// console.log(false || 'shreyash');
// console.log(false || 1);
// console.log(false || 1 || 2);

// Short-Circuting

// let userColor = undefined; // red
// let defaultColor = 'blue';
// let currnetColor = userColor || defaultColor;

// console.log(currnetColor);


// ------------ Bitwise Operators

// 1 = 0000001
// 2 = 0000010
// 3 = 0000011 // result of bitwise or 1 | 2
// R = 0000000 // result of bitwsie AND

// console.log(1 | 2); // Bitwise OR
// console.log(1 & 2); // Bitwise AND

// Read, Write, Execute

// 00000100 read
// 00000110 write
// 00000111 app permissions

// const readPermission = 4;
// const writePermission = 2;
// const excutePermission = 1;

// let myPermisson = 0;
// myPermisson = myPermisson | readPermission | writePermission;
// // console.log(myPermisson);

// let message =
//     (myPermisson & readPermission) ? 'yes' : 'no';

// console.log(message); // yes, but if we remove the readPermission we get no

// ----------------- Operators Precedence

// let x = 2 + 3 * 4;  // here  multiplications has more precedence than addition
// let x = (2 + 3) * 4;  // if you use barckets you can make that expression first to excute

// console.log(x);

// excrsie - Swapping variables 

let a = 'red';
let b = 'blue';

// let c = a;  // my solution
// a = b;
// c = b; // mistake assigned c to b it should be b to c

let c = a;  // my solution
a = b;
b = c;

console.log(a);
console.log(b);
