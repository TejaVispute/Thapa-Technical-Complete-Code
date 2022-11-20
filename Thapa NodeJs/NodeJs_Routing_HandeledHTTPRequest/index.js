const http = require('http');

const port = 3000;
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("Hello from Home Page");
    } else if (req.url === '/contact') {
        res.end("Hello from Contact Page");
    } else if (req.url === '/about') {
        res.end("Hello from About Page");
    }else{
        res.end("404 Error Page Does Not Exist");
    }

});

server.listen(port, () => {
    console.log(`Server is listening on ${port}`);
})