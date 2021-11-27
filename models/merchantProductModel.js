const mongoose  = require('mongoose');

const merchantProductSchema = mongoose.Schema({
    productName:{
        type:String,
        trim:true
    },
    productDescription:{
        type:String,
        trim:true
    },
    productPrice:{
        type:Number
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
