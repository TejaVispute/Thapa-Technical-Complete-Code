const mongoose = require('mongoose');


// connection creation if db not present in db
mongoose.connect("mongodb://localhost:27017/information", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("Conncection is successful....")).catch((err) => console.log(err));//it returns a promise



// schema code started here......(This is document structure)

const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true,
        unique:true,
        lowercase:true
    }
        ,
    course: String,
    videos: Number,
    author: String,
    active: Boolean,
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
        const JSPlaylist = new PlayList({
            name: "Node Js",
            course: "Front End",
            videos: 150,
            author: "Tejas Viapute",
            active: true,
        });
        const MongoPlaylist = new PlayList({
            name: "MongoDB",
            course: "Database",
            videos: 40,
            author: "Tejas Viapute",
            active: true,
        });
        const MongoosePlaylist = new PlayList({
            name: "Mongoose",
            course: "Database",
            videos: 10,
            author: "Tejas Viapute",
            active: true,
        });

        const result = await PlayList.insertMany([JSPlaylist, MongoPlaylist, MongoosePlaylist]);
        console.log(result);

    } catch (err) {
        console.log(err);
    }

}
// CreateDocument();

//Read documents using mongoose

const getDocument = async () => {
    try {
        const result = await PlayList.find({ course: "Database" })
            .select({ course: 1, _id: 0 })
            .limit(1);
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}
// getDocument();



// compare document in mongoose
const compareDocument = async () => {
    try {
        const result = await PlayList.find({ course: { $in: ["Database"] } }).select({ author: 1 })
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}
// compareDocument();


// logical query operator mongoose

const LogicalOperor = async () => { //Logical Operator "OR"
    try {
        const result = await PlayList.find(
            {
                $or: [
                    { course: "Database" },
                    { author: "Tejab" }
                ]
            })
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}


// LogicalOperor();

const LogicalOperorand = async () => { // This is logical "and" operator
    try {
        const result = await PlayList.find({
            $and: [{ course: "Database" },
            { author: "Tejab" }]
        })
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

// LogicalOperorand();





const counting = async () => { //Counting
    try {
        const result = await PlayList.find({ course: "Database" }).countDocuments();
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

// counting();


const Sorting = async () => { // This is logical "not" operator
    try {
        const result = await PlayList.find({ author: "Tejas Viapute" }).select({ name: 1}).sort({ name: 1 });
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

// Sorting();




// Update documents

const updateDocument = async (_id) => {
    try {
        const result = await PlayList.findByIdAndUpdate({ _id }, {
            $set: {
                author: "Tejas Bro"
            }
        }, {
            new: true,
            useFindAndModify: false
        });
        console.log(result);
    } catch (err) {
        console.log(err);
    }

}

// updateDocument("6375ed7ebd0f67943cf22c6e")


// Delete the documents

const deleteDocument = async (_id) => {
    try {
        const result = await PlayList.findByIdAndDelete({ _id });
        console.log(result);
    } catch (err) {
        console.log(err);
    }

};

deleteDocument("6375edf9dfafbdf454250a0c");

