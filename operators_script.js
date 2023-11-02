//  Operators in JavaScript
// In JavaScript we have different kinds of operators,
// Operators are used to assign values, compare values, perform arithmetic operations ..
// We use operators along with our variables and constants to create expressions
// And with these expresion we can implement logic and Alogrithms

// Types of operators in JavaScript

// Artihmetic
// Assignment
// Comparison
// Logical
// Bitwise

// ----------- Artihmetic Operators

// Aritimetic operators are used for calulations, like we do in Mathematics

let x = 10;
let y = 20;

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
// console.log(--y); // if we apply the operator first it will show the value : eg 20 - 1 = 19
// console.log(y);

// -------------------Assignment Operators

// Assignment operators are use the assign the value of a variable

x++;
x = x + 1;
// console.log(x);

// but If we want to add diffrent no

// x = x + 3;
x += 3; // a better way to write 
x *= 4; // we can use all of the above arthematic operators in assignment operators
// console.log(x);

// ---------Comparison Operators

// we use the these operators to compare values of variables

// Relational operators

// console.log(x > 0); // gives a boolean value greater than
// console.log(x >= 0); // Greater than equal too
// console.log(x < 0); // less than
// console.log(x <= 0); // Greater than

// Equality operators

// Strict Equatilty (type + value)

// console.log(1 === 1);
// console.log('1' === 1);

// lose Equality (Value are equal)
// console.log(x !== 1);

// console.log(1 == 1);
// console.log('1' == 1);
// console.log('1' == '1');
// console.log(true == 1);


// Ternary Operators

// If a customer has more than 100 points,
// they are 'gold' customer, otherwise,
// thery are 'silver' customer.

// let points = 90;

// let type = points > 100 ? 'gold' : 'silver';

// console.log(type);


// Logical And (&&)
// Returns TRUE if both operand are TRUE

console.log(true && true);