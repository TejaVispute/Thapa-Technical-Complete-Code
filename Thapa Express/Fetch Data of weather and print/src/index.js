const express = require('express');

let PORT = 3000;
const path = require('path');
const hbs = require('hbs');
const requests = require('requests');

console.log(__dirname);
const app = express();


let staticpath = path.join(__dirname, '../public');//absolute path
let tempelatePath = path.join(__dirname, '../tempelates/views');//absolute path
let partialPath = path.join(__dirname, '../tempelates/partials'); //absolute path


app.set('view engine', 'hbs');
app.set('views', tempelatePath);
hbs.registerPartials(partialPath);
app.use(express.static(staticpath));


app.get('/', (req, res) => {
    res.render('index', {
        name: "Teja",
    });
});
app.get('/about', (req, res) => {
    requests(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=37941ef580eff211a7045e9c1d28414d`)
        .on('data', function (chunk) {
            const objdata = JSON.parse(chunk);
            const arrdata = [objdata];
            const celcius = arrdata[0].main.temp - (273.15);
            const convertedCel = celcius.toFixed(2)
            console.log(`city name is ${arrdata[0].name} and the temperature is ${convertedCel}`);
            // console.log(realTimeData);
            res.write(arrdata[0].name);
        })
        .on('end', function (err) {
            if (err) return console.log('connection closed due to errors', err);
            res.end();
        });
});

app.get('/about/*', (req, res) => {
    res.render('404', {
        errorcomment: "Error",
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        errorcomment: "Error",
    });
});

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});