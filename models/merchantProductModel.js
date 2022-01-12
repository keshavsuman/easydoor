const mongoose  = require('mongoose');

const merchantProductSchema = mongoose.Schema({
    productName:{
        type:String,
        trim:true
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
    }],
    tags:{
        type:[{type:String,required:true}]
    },
    productStatus:{
        type:Boolean
    },
});

function merchantProductModel(merchantId){
    var merchantProductModel;
    try{
        merchantProductModel = mongoose.model(`${merchantId}_products`);
    }catch(error){
        merchantProductModel = mongoose.model(`${merchantId}_products`,merchantProductSchema);
    }
    return merchantProductModel;
}

module.exports = merchantProductModel;
