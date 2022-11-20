let fs= require('fs');

fs.writeFileSync("file.txt","this file is created"); //careate file and add data in it

fs.appendFileSync("file.txt"," This is anoter data added externally");

fs.appendFileSync("file.txt"," Another data added here This is anoter data added externally");

let data=fs.readFileSync("file.txt");//if we print buffer it prints buffer data we need to convet it into a string

console.log(data.toString());


fs.renameSync("file.txt","new_file.txt");//renaming ths existing file