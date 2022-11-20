const http = require('http'); // we need to add this module before use it
const port = 3000;
const server = http.createServer((req, res) => {
    res.end("hello from the other side here  is tejas!"); //Thie is response from server display on screen

});

server.listen(port, () => {
    console.log(`your server listening on port ${port}`); //we are listening on port 3000
});