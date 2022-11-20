const fs = require('fs'); // for using file system

const biodata = {  // simple object
    name: "Tejas",
    age:23,
    chanel : "Mh19 Teja"
}


const convjson = JSON.stringify(biodata); // converted onject into a json object


fs.writeFile("json1.json",convjson ,(err)=>{ // created a file in with json extension and added json data into theat file 
    console.log("Done")
})

fs.readFile("json1.json", "utf-8", (err,data)=>{ // for reading created json file with file with using file system
// console.log(data);

const orgdata= JSON.parse(data); // converted json to object

console.log(orgdata);
})