const express = require('express');

let PORT = 3000;
const path = require('path');
const hbs = require('hbs');

console.log(__dirname);
const app = express();


let staticpath = path.join(__dirname, '../public');
let tempelatePath = path.join(__dirname, '../tempelates/views');
let partialPath = path.join(__dirname, '../tempelates/partials'); //absolute path


app.set('view engine', 'hbs');
app.set('views', tempelatePath);
hbs.registerPartials(partialPath);
// app.use(express.static(staticpath));


app.get('/', (req, res) => {
    res.render('index',{
        name :"Teja",
    });
});
app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});