const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
    },
    lastName:{
        type: String,
    },
    email:{
        type: String,
    },
    password:{
        type: String,
    },
    addresses:{
        type:[{type:mongoose.Schema.Types.ObjectId,ref:'address'}]
    },
},{
    timestamps: true
});

module.exports = mongoose.model('user', userSchema);