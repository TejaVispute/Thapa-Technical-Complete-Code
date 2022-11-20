// Map(), Reduce(), Filter() Methods of arrays

// Map and reduce method in Array

// Array.prototype.map

// Returns a new array containing the results of callig a function on every element in this array

// const array1 = [1,4,9,16,25];

// let newArr=array1.map((elem)=>{
//     return elem >9;
// });

// console.log(array1);
// console.log(newArr);

// const array1 = [1,4,9,16,25];

// let newarr= array1.map((elem,index,array)=>{
//     return ` Index ${index} and elemtnt ${elem} in ${array}`;
// });

// console.log(newarr);

// It returns new array witthout mutating original array

// Challange Time =>

// 1. Find the square root of each element in an array?

// let arr= [25,36,49,64,81,100];

// let arrsqrt=arr.map((elem)=>{
//     return Math.sqrt(elem);
// });

// console.log(arrsqrt);

// 2. Multiply each element by 2 and return only those wlements which are greater than 10;

// let arr = [2, 3, 4, 6, 8];

// let result = arr.map((elem) => {
//         return elem * 2;
//     }).filter((elem) => {
//         return elem > 10;
//     });

// console.log(result);


// Reduce Method in Array


// Reduce method executes a reducer function(that you provide)
// on each element of the Array, resulting in single output value.

// The reducer function takes four arguments:

// Accumulator
// currentValue
// current index
// Source Array

// let arr= [5,6,7];

// let sum= arr.reduce((acc, elem) => {
//     debugger;
// return acc +=elem;
// },7);
// console.log(sum);

// How to fatten an array
// converting 2nd and 3rd array into one dimensional array

const arr= [
    ['zone_1','zone_2'],
    ['zone_3','zone_4'],
    ['zone_5','zone_6'],
    ['zone_7','zone_8']
];

let flatArr= arr.reduce((acc, elem) => {
    return acc.concat(elem);
});
console.log(flatArr);