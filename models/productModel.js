const mongoose = require('mongoose');

const productsSchema = mongoose.Schema({
    productName: {
        type:String,
        required:true
    },
    productPrice: {
        type:Number,
        required:true
    },
    productDescription: {
        type:String,
    },
    productImage: {
        type:[{type:String}]
    },
    tags:{
        type:[{type:String,required:true}]
    },
    quantity:{
        type:Number,
    },
    sellingUnit:{
        type:String,
    },
    productStatus:{
        type:Boolean
    },
},{
    timestamps:true
});

module.exports = mongoose.model('product', productsSchema);
