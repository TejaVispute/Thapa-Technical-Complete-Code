// Functions in Java Script:-

// Function is a block of code designed to performed a perticular task

// Before we use a function, we need to define it.

//A function definition ( also called a function declaration, or function statement consists of the function keyword, followed by) 

//The name of the function 
//A list of paramerters to the functionm, enclosed in parentheses separated by commas.
// The JavaScript statement that defines the fucntin, enclosed in curly brackets , {....}

// function sum(){
//     var a=10,b=4;
//     var total = a+b;
//     return  total;
// }
// console.log(sum());

// 2. Calling a function 
// Defining a function does not execute it.
// A javascript function is ececuted when somewhere it called

// Interview Question

// What is function parameter vs Function Arguments?
// Function parameters are the names listed in the function's definition.
// Function arguments are the real values passed to the function



// function sum(a,b){ //a and b are parameters of function
//     var total = a+b;
//     console.log(total);
// }

// sum(10,555);//this 10 and 555 are arguments of function
// sum(12,43);


// Interview question 

// Why Function?

// You can resue code , define code once annd use it many Times .
// You can use the same code many times with different arguments, to produce different result.

// OR

// A function is a group of reusable code which can be called anywhere in your programme . This eliminates the need of writing the same code again and again.


// Function Expressions
// function expressions simply means
// create a function and put it into the variable

// function sum(a,b){ //a and b are parameters of function
//     var total = a+b;
//     console.log(total);
// }

// let functionexp=sum(10,555);//this 10 and 555 are arguments of function
// // sum(12,43);
// functionexp;


// Retrun Keyword : - 

// When javascript reaches a return statement,
// The function will stop executing.
// Function often compute a return value.
// The return value is "Returned" back to the "caller"

// function sum(a,b){ //a and b are parameters of function
//         return total = a+b;
//     }
// let functexp =sum(10,20)

//     console.log(`The Sum of two number is ${functexp}`);


// What is AnonYomous Function?
// A function expression is similar to and has the same syntax as a function declaration one can be defined as "named" 
// Function Expression(Where the name of the expression might be used in the call stack) of anonymous function expression


// Only function ecpression can be anonymous, function declarations must have a name .

// function without a function name is anonymous function
let exp=function(a,b){ //a and b are parameters of function
        return total = a+b;
    }

    let result=exp(10,20) //10 and 20 are arguments 
    console.log(`The Sum of two number is ${result}`);




