 const path = require('path');

console.log(path.dirname('D:/Full Stack Developer/NODE JS/Thapa NodeJS/Path_Module/path.js'));//for directory name
console.log(path.extname('D:/Full Stack Developer/NODE JS/Thapa NodeJS/Path_Module/path.js'));//for exctension name 
console.log(path.basename('D:/Full Stack Developer/NODE JS/Thapa NodeJS/Path_Module/path.js'));//for file name


const mypath =(path.parse('D:/Full Stack Developer/NODE JS/Thapa NodeJS/Path_Module/path.js'));//for all details of file in a object form (name,dir,base,ext,root) etc.

console.log(mypath)