//  What is Object Literals
//  What is "this" Objects

//  What is Object Literal?

//  Object literal is simply a key:value pair data structure.
//  Sorting variable and functions together in one container
//  we can refer this as objects

//  how to create an object

//  1st way

// let biodata = {
//   name: "Tejas",
//   age: "23",
//   getData: function () {
//     console.log(`My name is ${this.name} and my age is ${this.age}`);
//   },
// };

// 2nd way

// console.log(biodata.getData());

// let biodata = {
//   name: "Tejas",
//   age: "23",
//   getData() {
//     console.log(`My name is ${this.name} and my age is ${this.age}`);
//   }
// };

// console.log(biodata.getData());

// What id we want object as a value inside an object

// let biodata = {
//     name: {
//         fn: "Tejas",
//         ln:"Vispute"
//     },
//     age: "23",
//     getData() {
//       console.log(`My name is ${this.name} and my age is ${this.age}`);
//     }
//   };

//   console.log(biodata.name.fn);

//   What is this Object?

// The definition of "This" object is that it contain the current context.
// The object can have different values depending on where it is placed.

// for Example1

// console.log(this);
// if refers to the current context and that is window global object

// 2nd Example

// function myname(){
//   console.log(this);
// }
// myname();


// 3rd example

// var MyNames = "Tejas";
// function MyName1() {
  
//     console.log(this.MyNames);
// }

// MyName1();


// 4th example

// const obj = {
//     myAge:26,
//     MyName(){
//         console.log(this.myAge);
//     }
// }
// obj.MyName();

// Arrow function will not work here


const obj = {
    myAge:26,
    MyName:()=>{
        console.log(this.myAge);
    }
}
obj.MyName();


