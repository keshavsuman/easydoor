const mongoose = require('mongoose');

const contactNumberSchema = new mongoose.Schema({
    countryCode: {
        type: String,
    },
    number: {
        type: String,
    }
});

const merchantsSchema = new mongoose.Schema({
    name: {
        type: String,
        rquired: true, 
    },
    mobileNumber:{
        type:contactNumberSchema
    },
    businessName: {
        type: String,
    },
    email: {
        type: String,
    },
    address: {
        type: String,
    },
    city: {
        type: String,
    },
    location : { 
        type: {type:String},
        coordinates: [Number]
    },
    pincode: {
        type: Number
    }
});

merchantsSchema.index({loc: '2dsphere'});

module.exports = mongoose.model("merchant", merchantsSchema);