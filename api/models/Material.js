const mongoose = require("mongoose")

const MaterialSchema = new mongoose.Schema({
    material: {
        type: String,
        required: true,
        unique: true
    },
    place: {
        type: Array,
        required: false
    }
}, {timestamps:true});

module.exports = mongoose.model("Material", MaterialSchema)