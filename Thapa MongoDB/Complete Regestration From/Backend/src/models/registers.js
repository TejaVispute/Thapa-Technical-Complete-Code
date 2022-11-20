const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const employeeSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    cpassword: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    // state: {
    //     type: String,
    //     required: true,
    // },
    // state: {
    //     type: String,
    //     required: true,
    // },
    Zip: {
        type: Number,
        required: true,
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]

});


//generating tokens
employeeSchema.methods.generateAuthToken = async function () {
    try {
        console.log(this._id);
        const token = jwt.sign({ _id: this._id.toString() }, "securitykey");
        this.tokens = this.tokens.concat({ token })
        await this.save();
        console.log(token);
        return token;
    } catch (e) {
        res.send("the error part" + e)
        console.log(e);
    }
}

// before saving data 


// converting password to hash
employeeSchema.pre("save", async function (next) {

    if (this.isModified("password")) {

        // console.log(`before password is ${this.password}`); //This is user entered password
        this.password = await bcrypt.hash(this.password, 10);// This is bycripted password
        // console.log(`hashing password is ${this.password}`); //hashed password
        this.cpassword = await bcrypt.hash(this.password, 10); // This passord is not saved to the database
    }

    next(); // after completed process go to next step for saving details
})

// we need to create a collection

const Register = new mongoose.model("Register", employeeSchema);

module.exports = Register;