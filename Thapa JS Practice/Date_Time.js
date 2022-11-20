// 8 th section Date And Time


// 1. Date Methods (get and set);
// 1. Time Methods (get and set);

// Javascript Date objects represents a single moment in time in a platform-independent format. Date objects contain a Number that represents milliseconds since 1 JAN 1970 UTC.


// Creating Date Objects
// There are 4 ways to create a new date object:

// new Date()


// new Date(year, month, day, hour, minute, second, milliseconds);


// new Date(milliseconds);


// new Date(date string);




// new Date()
// Date object are created with the new Date() constructor.

// let currentDate = new Date();

// console.log(currentDate);



// let currentDate = new Date();

// console.log(currentDate);

// console.log(new Date().toLocaleString());//gets date and time


// console.log(new Date().toString());//gets day , date m time


// Date.now();
// Retruns the numeric value currosponding to the current time the number of milliseconds elasped since january 1 , 1970 00.00.00 UTC.

// console.log(Date.now());


// new Date (year, month, ...)
// 7 numnber specify year, month, day, hour, minute, second, milliseconds (in that order)
// Note : Javascript counts months from 0 to 11
// january is 0 , December is 11


// let d= new Date(2020,8,7,12,30,10,0);

// console.log(d.toLocaleString());

// Date method 

// const curDate = new Date();

// how to get the indivisual date

// console.log(curDate.toLocaleString());
// console.log(curDate.getFullYear());//full year
// console.log(curDate.getMonth());//month
// console.log(curDate.getDate());//today's date
// console.log(curDate.getDay()); //it gives day 1 to seven mannter that is monday to sunday



// how to set indivisual date
// const curDate = new Date();

// console.log(curDate.setFullYear(2022,10,5));


// Practice Time

new Date().toLocaleTimeString(); // 11:18:48 AM

new Date().toLocaleDateString(); //

new Date().toLocaleString();