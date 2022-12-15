const express = require('express');
const app = express();
require("./db/conncection");
const Student = require("./models/students");
const port = process.env.PORT || 3000;
const studentRouter = require("./routers/student");

app.use(express.json());
app.use(studentRouter);


// listening on port
app.listen(port, () => {
    console.log(`conncection is successful on port ${port}`);
});



