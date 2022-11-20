const http = require("http");

const fs = require("fs");
const port = 3000;

const server = http.createServer((req, res) => {

    const data= fs.readFileSync('datajson.json', "utf-8", (err, data) => {
 
        const objdata = JSON.parse(data);
   

    });



    if (req.url == '/') {
        res.end("Hello from the home sides");
    } else if (req.url == '/about') {
        res.end("hello from about section ");
    } else if (req.url == '/userapi') {

      
    }
});

server.listen(port, () => {
    console.log("server started on port " + port);
});
