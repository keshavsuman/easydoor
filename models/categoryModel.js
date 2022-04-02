const mongoose = require('mongoose');

const schema = mongoose.Schema({
    imageURL:{
        type:String,
    },
    name: {
        type: String,
    },
});

module.exports = mongoose.model('Category', schema);