require("dotenv").config();
const express = require('express');
const app = express();
const connectDB = require("./db/connect")
const PORT = process.env.PORT || 3000;
const procucts_routes = require('./routes/products')
app.get('/', (req, res) => {
    res.send("hello world!");
});

// middleware or to set router

app.use("/api/products", procucts_routes)
const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URI);
        app.listen(PORT, () => {
            console.log(`listening on ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();