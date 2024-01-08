// ___________________________Functions in JavaScript____________________________

// Function Declaration

function walk() {
    console.log('walk');
}

// walk();

// Anonymous Function Experession
let run = function () {
    console.log('run');
};

run();

let move = run;
move();

//  Named Function expression
let play = function boy() {
    console.log('play');
};

play();