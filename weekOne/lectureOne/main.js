// Strings
var name = "John 123";

// Numbers
var age = 23;

// Boolean
var hasKids = false;

// Null
var car = null;

// Undefined
var test;

// let and const
// let is used to declare variables that can be reassigned
// let name = "John";
// name = "Jane";

// const is used to declare variables that cannot be reassigned
const firstName = "John";
name = "Jane"; // Error
console.log(name);

// Data Structures
// Arrays
// var names = ["John", "Jane", "Mark", 'Mary', 23, true];
// var years = new Array(1990, 1969, 1948);
// console.log(names[1]);

// Objects
var john = {
    name: "John",
    lastName: "Smith",
    yearOfBirth: 1990,
    job: "teacher",
    isMarried: false,
    family: ["Jane", "Mark", "Bob"],
    calculateAge: function() {
        return 2018 - this.yearOfBirth;
    }
}

console.log(john.lastName);
console.log(john["lastName"]);

// write an arrow function that takes in two number and returns the multiplication of the two numbers
const multiply = (num1, num2) => {  return num1 * num2; }

