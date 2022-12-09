const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Tejas:Tejas123@airbnb.gh86ace.mongodb.net/RestAPI?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connection is successful");
}).catch((err) => {
    console.log(err);
})