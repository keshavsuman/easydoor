const mongoose  = require('mongoose');

const addressSchema = mongoose.Schema({
    pincode:{
        type:String
    },
    location : { 
        type: {type:String},
        coordinates: [Number]
    },
});

addressSchema.index({loc: '2dsphere'});

module.exports = mongoose.model('address',addressSchema);