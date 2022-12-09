const mongoose = require('mongoose');

let airbnbData = new mongoose.Schema({
    host_name: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true,
    },
    host_location: {
        type: String,
        required: true
    },
    location_name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },

    policy: {
        type: String,
        required: true
    },
    guests: {
        type: String,
        required: true
    },
    bedrooms: {
        type: number,
        required: true
    },
    bathrooms: {
        type: number,
        required: true
    },
    placeoffers: {
        type: String,
        enum: {
            offers: ["wifi", "internet", "TV", "Washer", "Dryer"],
            message: `{VALUE} is not supported`,
        }
    },
    rating: {
        type: String,
        default: 4.6,

    },
    createdAt: {
        type: Date,
        default: Date.now(),

    },


});



module.exports = mongoose.model("AirbnbAPI",airbnbData);
