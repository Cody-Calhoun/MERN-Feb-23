// Higher Order Function (HOF) Definition
// A function that takes a function as an argument or returns a function

// Example 1
function add(x, y) {
    return x + y;
    }

function multiply(x, y) {
    return x * y;
    }

function calculator(x, y, operator) {
    return operator(x, y);
    }

console.log(calculator(2, 3, add)); // 5
console.log(calculator(2, 3, multiply)); // 6

// Example 2
function greet(name) {
    return 'Hello ' + name;
    }

function sayHello(name, greet) {
    return greet(name);
    }

console.log(sayHello('John', greet)); // Hello John

// Example 3
function sayHello(name) {
    return 'Hello ' + name;
    }

function sayGoodbye(name) {
    return 'Goodbye ' + name;
    }

function saySomething(name, callback) {
    return callback(name);
    }

console.log(saySomething('John', sayHello)); // Hello John
console.log(saySomething('John', sayGoodbye)); // Goodbye John



// Callback Function Definition
// A function that is passed as an argument to another function and is executed after some operation has been completed

// Example 1
function add(x, y) {
    return x + y;
    }

function multiply(x, y) {
    return x * y;
    }

function calculator(x, y, operator) {
    return operator(x, y);
    }

console.log(calculator(2, 3, add)); // 5
console.log(calculator(2, 3, multiply)); // 6

