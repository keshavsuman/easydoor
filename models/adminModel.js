const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
    email: {
        type: String,
    },
    firstName: {
        type:  String,
    },
    lastName:{
        type: String,
    },
    password: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    googleId:{
        type: String,
    },
    profilePic:{
        type: String,
    }
});

module.exports = mongoose.model('admin', adminSchema);