// Array Sub section2 Searching and filter an Array

// Array.prototype.indexOf()
// Returns the first(last) index of an element within the array 
// to an element, of -1  if none is found. It search the element from the 0th index number

// let myfriends= ["Roshan", "Amol", "Tushar", "Autl"];

// indexOf method in array returns index number of the element
// let result=myfriends.indexOf("Autl");
// console.log(result);


// Js filter meth

// const ages= [10,12,14,23,56,76,43,34 ];
// const result= ages.filter(function(age){
// return age < 18;
// });
// console.log(result);

// Js Sort Method in array

// let myfriends= ["Roshan", "Amol", "Tushar", "Autl"];

// let result= myfriends.sort();
// result.reverse();
// console.log(result);

// Array Subsection 4  Perform CRUD

// Array.prototype.push()
// The push()method adds one or more elements to the end of the array and returns the new length of the array.

// let myfriends= ["Roshan", "Amol", "Tushar", "Autl"];

// myfriends.push("Sandy","kuku",);
// console.log(myfriends);


// Array.prototype.unshift() method adds element to the first position of the array and returns the new length of the array

// let myfriends= ["Roshan", "Amol", "Tushar", "Autl"];

// let result=myfriends.unshift("Sandy","kuku","rohan");
// console.log(result);
// console.log(myfriends);

// 2nd example of Array

// const numbers=[1,2,3,5 ];
// numbers.unshift(4,6);
// numbers.sort();
// console.log(numbers);



// Pop Method in JS

// The pop() method is used to remove the last element from an array and returns that element. This method changes the length of the array

// const plants = ["brccoli", "cauliflower", "kale", "tomato", "cabbage"];
// let result=plants.pop();
// console.log(plants);
// console.log(result);


// shift Method in js

// const plants = ["brccoli", "cauliflower", "kale", "tomato", "cabbage"];
// let result=plants.shift();
// console.log(plants);
// console.log(result);
// console.log(plants);


// 9 th challange time

// Sort the array in descending order

// const fruits= ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// fruits.reverse();
// console.log(fruits);

// Array.prototype.splice();
// Adds or removes elements from an array

// 1. Add dec at the end of an array?
// 2. What is the retrun value of splice method?
// 3. update march to March (update);
// 4.Delete june from an array?

// const months= ["Jan","March" , "April", "June", "July"];
// months.push("december");
// console.log(months);

// 1 solution =>

// thiere are 3 paramers in splice method 1st is index where we want to insert our element 2nd if we want to delete element and 3rd element to be inserted in the array
// const months= ["Jan","March" , "April", "June", "July"];
// const newmonths=months.splice(months.length,0,"December");
// console.log(months);


// 2 solution =>

// splice method retruns the deleted array element


// 3 solution =>

// const months= ["Jan","march" , "April", "June", "July"];

// const index= months.indexOf("march");
// if(index!=-1) {
// months.splice(index,1,"March");
// console.log(months);
// }else{
//     console.log(`no such data found`);
// }


// 4 solution=>

// const months= ["Jan","march" , "April", "June", "July"];

// const index= months.splice(3,1);
// console.log(months);

