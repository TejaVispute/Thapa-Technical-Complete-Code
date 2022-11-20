const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.set('view engine', 'hbs');
app.set('views')

app.get('/', (req, res) => {
    res.render('index.hbs',{
        name: "Tejas"
    });
});

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});
