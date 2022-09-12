const mongoose = require('mongoose');

const productsSchema = mongoose.Schema({
    productName: {
        type:String,
        required:true
    },
    tags:{
        type:[{type:String,required:true}]
    },
    variants:[{
        productPrice: {
            type:Number,
            required:true
        },
        discountedPrice:{
            type:Number,
        },
        productDescription: {
            type:String,
        },
        productImage: {
            type:[{type:String}]
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
    }]
},{
    timestamps:true
});

module.exports = mongoose.model('product', productsSchema);
