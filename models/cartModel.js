const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    carts:[{
        product:{
            type:String
        },
        
    }]
});

module.exports = mongoose.model('cart',cartSchema);