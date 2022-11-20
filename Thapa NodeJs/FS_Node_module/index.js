const fs= require('fs'); // for using fs module

fs.writeFileSync('test.txt',"Welcome to the coding world!");//For creating file and added some text data in it.
fs.writeFileSync('test.txt',"Tejas Welcome to the coding world!, this is anoter file ");//For creating file and added some text data in it.

// fs.appendFileSync('test.txt',' Hey this data is appended later');// This data is added later 

let buf_data=fs.readFileSync('test.txt');//for reading file
// console.log(buf_data);//we get buffer data after reading thie file we need to convert this data into a string


console.log(buf_data.toString());


// fs.renameSync('test.txt', 'read.txt');//for changine file name test to read.txt