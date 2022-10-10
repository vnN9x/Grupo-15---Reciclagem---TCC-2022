const mongoose = require("mongoose")

const TownSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
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

module.exports = mongoose.model("Town", TownSchema)