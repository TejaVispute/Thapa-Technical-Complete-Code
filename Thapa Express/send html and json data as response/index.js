const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send("<h1>welcome</h1>");

})
app.get('/home', (req, res) => {
    res.json([{
        id: 1,
        name: "Tejas",
    },
    {
        id: 1,
        name: "Tejas",
    }, {
        id: 1,
        name: "Tejas",
    }
    ]);

})

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
})

