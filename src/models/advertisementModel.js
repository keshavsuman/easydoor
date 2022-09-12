const mongoose = require("mongoose");

const advertisementSchema = mongoose.Schema({
    imageURL: {
        type: String,
        required:true
    },
});

module.exports = mongoose.model("Advertisement", advertisementSchema);