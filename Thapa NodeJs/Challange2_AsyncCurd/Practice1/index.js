const fs = require('fs');


fs.mkdir('Tejas',(err)=>{
console.log("folder created"); // for creating foleder
});

fs.writeFile('./Tejas/bio.txt', "hello this data is added",(err)=>{
console.log("file created and data added"); //for creating file and add data in to the file
});

fs.appendFile('./Tejas/bio.txt', " here is another data addded from this folder",(err)=>{
console.log("appendedfile"); //add external data to the file 
});

fs.readFile('./Tejas/bio.txt', (error,data)=>{
console.log(data.toString());   // for reading external file and print it on console
});

fs.rename("./Tejas/bio.txt","./Tejas/Mybio.txt",()=>{
console.log("rename done"); // for renaming the perticular file 
});

fs.unlink("./Tejas/Mybio.txt",(err)=>{
console.log("deleted");   //for delete the file
});