// Tampelate Literals (Template String)

// JavaScript Program to print table for given number of(8)?
// Tempelate Literals are backticks and inside backticks we use ${}.

// for (let i = 1; i <=10; i++) {
//     let table= 12;
//     console.log(` ${table} * ${i} = ${table*i}` );
// }

// Default Prameters
// Default function arameters allow named parameter to be
// inatelized with default values if no value or undefined is passed.

// function mult(a=5,b=3){
//     return a*b;
// }
// console.log(mult(12));

// Fat Arrow Function
// Normal way of writing Function

// function mult(a=5,b=3){
//     return a*b;
// }
// console.log(mult(12));

// How to convert in into Fat Arrow Function

// const sum = () => {
//     let a= 5, b= 3;
//     return ` The sum of the two number is ${a+b}`;
// };
// console.log(sum());

const sum = () => `The sum of the two number is ${(a = 5) + (b = 7)}`;
console.log(sum());
