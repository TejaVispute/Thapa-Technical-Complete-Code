const fs = require('fs');

fs.writeFile('read.txt',"today is awesome day",(err)=>{
console.log("Files is completed")
console.log(err)
});

fs.appendFile("read.txt"," i am appending this data externally...",(err)=>{
console.log("filed added");

});

fs.readFile('read.txt',(err,data)=>{
console.log(data.toString());
console.log(err);
})