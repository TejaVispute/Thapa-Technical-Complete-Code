const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const hbs = require('hbs');
const conn = require("./db/conn");
const Register = require("./models/registers");
const bcrypt = require('bcryptjs');



const static_path = path.join(__dirname, "../public");
const tempelate_path = path.join(__dirname, "../templates/views");
const partial_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(static_path));//added public folder 
app.set("view engine", "hbs");
app.set("views", tempelate_path); //Views folder is set to tempelate_path
hbs.registerPartials(partial_path);

app.get('/', (req, res) => {
    res.render("index");
});

app.get('/register', (req, res) => {
    res.render("register");
});

// this rout is crate new user by submiting form from register page
app.post('/reg', async (req, res) => {
    try {
        const password = req.body.password; // user entered password
        const Cpassword = req.body.cpassword;//confirm password for user

        if (password === Cpassword) {

            const registerEmployee = new Register({  // user data is stored here all info
                firstname: req.body.fname,
                lastname: req.body.lname,
                email: req.body.email,
                password: password,
                cpassword: Cpassword,
                address: req.body.address,
                city: req.body.city,
                Zip: req.body.zip
            })

            console.log("The success part" + registerEmployee)
            const token = await registerEmployee.generateAuthToken();
            console.log("the token part" + token)



            const register = await registerEmployee.save();// for saving data on database
            res.render("index") //after databse saved rendar homescreen

        } else {
            res.send("Password is not matcing");
        }

    } catch (e) {
        res.status(400).send(e);
    }
});

app.get('/login', (req, res) => {
    res.render("login");
});

// login validation method
app.post('/loginmethod', async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        let userename = await Register.findOne({ email: email });


        const isMatch = await bcrypt.compare(password, userename.password); //this compares 

        // once passoword is correct add token
        const token = await userename.generateAuthToken();
        console.log("the token part" + token)

        // userentered and db psw
        if (isMatch) { // if it matches then it returns on homescreen
            res.status(201).render("index");
        } else {
            res.send("password is not matching"); //otherwise it returns wrong password
        }
    } catch (e) {
        res.status(400).send("Something went wrong");
    }
});


// const bcrypt = require("bcryptjs");

// const securePassword = async (password) => {

//     const passawordhash = await bcrypt.hash(password, 10)  //for bcrypt password hashing
//     console.log(passawordhash);

//     const passoawordorg = await bcrypt.compare(password, passawordhash) // for compare password
//     console.log(passoawordorg);
// };

// securePassword("Tejas$234")



// create Token and match it with user

// const jwt = require("jsonwebtoken");

// const createToken = async () => {
//     const token = await jwt.sign({ _id: "6379fc3471162659d95559ab" }, "secretkey", {
//         expiresIn: "2 minutes"
//     });
//     console.log(token);

//     const userver = await jwt.verify(token, "secretkey");
//     console.log(userver);
// }
// createToken();



app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`);
})