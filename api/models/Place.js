const mongoose = require("mongoose")

const PlaceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    town: {
        type: String,
        required: true,
        unique: false,
    },
    materials: {
        type: Array,
        required: true,
    },
    desc: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    lat: {
        type: String,
        required: true,
    },
    long: {
        type: String,
        required: true,
    }

}, {timestamps:true});

module.exports = mongoose.model("Place", PlaceSchema)