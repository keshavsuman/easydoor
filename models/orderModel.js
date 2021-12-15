const mongoose = require('mongoose');

const orderSchema = (merchantId) => new mongoose.Schema({ 
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    address:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'address'
    },
    deliveryPerson:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'deliveryPerson'
    },
    couponApplied:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'coupon'
    },
    products:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: `${merchantId}_products`
    }],
    remarks:{
        type:String
    }
});

function orderModel(merchantId){
    var orderSchema;
    try{
        orderSchema = mongoose.model(`${merchantId}_Order`);
    }catch{
        orderSchema = mongoose.model(`${merchantId}_Order`, orderSchema(merchantId));
    }
    return orderSchema;
}

module.exports = orderModel;