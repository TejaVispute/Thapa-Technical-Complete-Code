const fs = require('fs');

fs.mkdir("NewFolder", (err) => {
    console.log("Folder created");
});

fs.writeFile("./NewFolder/info.txt", "This is data in the new File", (err) => {
    console.log("File created  successfully");
});

fs.appendFile("./NewFolder/info.txt"," This data is appended to the existing File",
    (err) => {

        console.log("File Data is appended");
    }
);

fs.rename("./NewFolder/info.txt","./NewFolder/Advinfo.txt", (err)=>{
console.log("console log renamed successfully");
})

fs.unlink("./NewFolder/Advinfo.txt",(err)=>{
console.log("file deleted successfully");
})
