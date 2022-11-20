const fs= require('fs');

const data = fs.readFileSync('read.txt')

console.log(data.toString());

console.log("after Data")

fs.readFile("read.txt", (err,data)=>{
console.log(data.toString());
})
console.log("after Data");
