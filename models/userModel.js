const mongoose = require('mongoose');

const contactNumberSchema = new mongoose.Schema({
    countryCode: {
        type: String,
    },
    number: {
        type: String,
    }
});

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
    city:{
        type:String
    },
    firebaseId:{
        type:String
    },
    FCMtoken:{
        type:String
    },
    mobileNumber:{
        type:contactNumberSchema
    },
},{
    timestamps: true
});

module.exports = mongoose.model('user', userSchema);