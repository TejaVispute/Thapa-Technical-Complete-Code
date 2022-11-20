const mongoose = require('mongoose');
const validator = require('validator');

// connection creation if db not present in db
mongoose.connect("mongodb://localhost:27017/information", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("Conncection is successful....")).catch((err) => console.log(err));//it returns a promise


// schema code started here......(This is document structure)

const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        uppercase: true,
        trim: true,
        minlength: [2, "Minimum 2 letters required here"],
        maxlength: 30
    },
    course: {
        type: String,
        lowercase: true,
        enum: ["frontend", "backend", "database"],
    },
    videos: {
        type: Number,
        validate(value) { // This is custom validator
            if (value < 0) {
                throw new Error("videos must be in positive range");
            } else {
                console.log("your value is positive");
            }
        }
    },
    author: String,
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is invalid");
            }
        }
    },
    password: {
        type: String,
        required: true,
        validate(psw) {
            if (validator.isStrongPassword(psw)) {
                console.log("Your password is valid");
            } else {
                console.log("Password is too weak try different password");
            }
        }
    },
    date: {
        type: Date,
        default: Date.now()
    }
});


// collection creation (first parameter is collection name/second parameter is schema name)
const PlayList = new mongoose.model("Playlist", playlistSchema);

// create document or insert

const CreateDocument = async () => {
    try {

        const MongoosePlaylist = new PlayList({
            name: "Tejas",
            course: "frontend",
            videos: 77,
            author: "Tejas Viapute",
            email: "tejasvispute25@gmail.com",
            password: "Tejas$321",
            active: true,
        });

        const result = await PlayList.insertMany([MongoosePlaylist]);
        // console.log(result);

    } catch (err) {
        console.log(err);
    }

}
CreateDocument();

