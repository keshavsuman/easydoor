const mongoose = require('mongoose');

const productsSchema = mongoose.Schema({
    productName: {
        type:String
    },
    productPrice: {
        type:Number
    },
    productDescription: {
        type:String
    },
    productImage: {
        type:String
    }
});

module.exports = mongoose.model('products', productsSchema);
