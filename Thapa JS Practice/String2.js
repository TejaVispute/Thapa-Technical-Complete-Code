// The Substring() method
// Substring() is similar to slice().
// The difference is that substring() cannot accept negative indexes.

// let str= "Apple, Banana , Kiwi";

// let res= str.substring(0,4);

// console.log(res);

// If we give negative value then the characters are counted from the 0th Pos.

// The substr() method 

// Substr() is similar to slice().

// The difference is that the second parameter specifies the length of the extracxted part.


// let str = " Apple , Bananaa, Kiwi";

// let res= str.substr

// Substr is depriciated its no more in use


// Replacing string content()

// String.prototype.replace(searchFor, replaceWith)

// The replace() method replaces a specified value with another value in a string.


// let mybiodata = ` I am Tejas Suresh Vispute Tejas`; 

// let result= mybiodata.replace("Tejas" , "Teja");//first argument which string is to be replaced and second argument is that string to be inseted there

// console.log(result);


// Points to remember
// 1. The replace() method does not change the string
// it is called onabort. It mreturns a new string
// 2. By Default, the replace() method i replace only the first match
// 3. By default, the replace() method is case sensitive. writing TEJAS wll not work 



//Extracting string characters

// There are 3 methods for extracting string characters

// charAt(position)
// charCodeAt(position)
// property access []

// let str= "HELLO WORLD";

// console.log(str.charAt(6));



// The charCodeAt() Method
// The charCodeAt() method returns the unicode of the character at a specified index in a string:
// The method returns a UTF-16 code

// (an integer between 0 nad 65535).

// The Unicode standard provides a unicode number for every character, no matter the platform, device, application or language. UTF-8 is a popular Unicode encoding which has 88-bit code units.

// let str =  " HELLO WORLD";

// console.log(str.charCodeAt(0));



// 11: Challange Time

// Return the Unicode of the last character in a string

// let str = ["hello world"];

// let res= str.length-1;

// console.log(str.charCodeAt(res));


// Property Access

// ECAscript 5 (2009) allows property access [] on strings

// let str= "hello world" ;

// console.log(str[0]);


// Other Usefun methods 

// let myname= "Tejas Vispute";

// console.log(myname.toUpperCase());
// console.log(myname.toLowerCase());



// The Concat () Method
// concat() joins two or more strings


// let  fName = "Tejas";
// let lname="Vispute";

// console.log(fName.concat(" ",lname));




// String Trim()
// The trim() method removes white space fom both sides of a string

// let str= "       Hello There        ";
// console.log(str.trim());  




// Convetting a string to an array
// A string can be converted to an array with the split() method

let text= "a,b,c,d,e,f";

console.log(text.split(","));
console.log(text.split(" "));
console.log(text.split("|"));