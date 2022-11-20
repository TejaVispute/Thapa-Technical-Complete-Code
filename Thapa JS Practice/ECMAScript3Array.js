// // Section 7  Arrays in Java Script

// // When we use var we can store only one value at a time.
// // When we feel like storing multiple vaule in one variable then
// // In JavaScript we have an arrays class, and 
// // arrays are the prototype of this class.
// // Array is a single variable storing multiple values

// // let friends = [ "Tejas", "Roshan", "Amol",23,45,true];
// //We can use any data here
// // First element in the array is lower index and last element of array is upper index


// // let friends = [ "Tejas", "Roshan", "Amol",23,45,true];

// // 1. Array subsecion 1 Traversal in array navigate through an array

// // if we want to get the single data at a time and also if we want to change the data

// // let friends = [ "Tejas", "Roshan", "Amol","Sandy"];
// // console.log(friends[friends.length - 1]);

// // if we want to check length of elements of an array

// // console.log(friends.length);

// // if we want to check the length of elements of an array

// // We use for loop to navigate array
// // let friends = [ "Tejas", "Roshan", "Amol","Sandy"];

// // for(let i=0; i<friends.length; i++){
// //     console.log(friends[i]);
// // }

// // using for of loop

// // for( let element of friends){
// //     console.log(element);
// // }

// // Array.prototype.forEach()
// // Calls a function fro each element in the array.
let friends = [ "Tejas", "Roshan", "Amol","Sandy"];

// // friends.forEach(function(element,index,array){
// // console.log(element,index,array);
// // });

friends.forEach((element,index) => {
    console.log(` Elements are = ${element} and index is =${index}`);
});


