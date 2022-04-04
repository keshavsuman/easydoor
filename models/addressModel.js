const mongoose  = require('mongoose');

const addressSchema = mongoose.Schema({
    lane1:{
        type:String,
        required:true
    },
    lane2:{
        type:String,
    },
    city:{
        type:String,
    },
    state:{
        type:String,
    },
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