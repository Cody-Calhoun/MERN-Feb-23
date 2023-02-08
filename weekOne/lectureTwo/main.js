// say hello function 
// function sayHello() {
//     console.log('Hello World');
// }
// console.log(sayHello);

// say hello function arrow
// const sayHelloArrow = () => {
//     console.log('Hello World');
// }
// console.log(sayHelloArrow);

// say hello function arrow with return
// const sayHelloArrowReturn = () => {
//     return 'Hello World';
// }   
// console.log(sayHelloArrowReturn);

// say hello function arrow with return and implicit return
// const sayHelloArrowReturnImplicit = () => 'Hello World';
// console.log(sayHelloArrowReturnImplicit);

// say hello function arrow with return and implicit return and parameter
// const sayHelloArrowReturnImplicitParameter = (name) => `Hello ${name}`;
// console.log(sayHelloArrowReturnImplicitParameter('John'));

// say hello function arrow with return and implicit return and parameter and default parameter
// const sayHelloArrowReturnImplicitParameterDefault = (name = 'John') => `Hello ${name}`;
// console.log(sayHelloArrowReturnImplicitParameterDefault());

// Destructuring  

// Object Destructuring
// const profile = {
//     name: 'John Doe',
//     address: {
//         street: '40 Main st',
//         city: 'Boston'
//     },
//     hobbies: ['movies', 'music']
// }

// const { name, address, hobbies } = profile;
// console.log(name, address, hobbies);

// const { street, city } = profile.address;
// console.log(street, city);

// Array Destructuring
// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Dentist appt',
//         isCompleted: false
//     }
// ];

// const [ todo, todo2, todo3 ] = todos;
// console.log(todo, todo2, todo3);

// // Desctructuring with function
// function getProfile() {
//     return [
//         123,
//         'John Doe',
//         { street: '40 Main st', city: 'Boston' }
//     ]
// }

// const [ id, name, address ] = getProfile();
// console.log(id, name, address);

// Destructuring with spread operator
// const profile = {
//     name: 'John Doe',
//     address: {
//         street: '40 Main st',
//         city: 'Boston'
//     },
//     hobbies: ['movies', 'music']
// }

// const { name, ...rest } = profile;
// console.log(name, rest);

// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Dentist appt',
//         isCompleted: false
//     }
// ];

// const [ todo, ...rest ] = todos;
// console.log(todo, rest);

// Destructring with rest operator
// const profile = {
//     name: 'John Doe',
//     address: {
//         street: '40 Main st',
//         city: 'Boston'
//     },
//     hobbies: ['movies', 'music']
// }

// const { name, ...rest } = profile;
// console.log(name, rest);



