const orderModel = require('../../models/orderModel');

async function getOrders(req,res){
    try{
        const {limit,skip} = req.body;
        const orders = orderModel(req.user._id).find().sort({
            createdAt:-1
        }).limit(limit??20).skip(skip??0);
        res.status(200).send({
            status:200,
            message:'Orders',
            data:orders
        });
    }catch(error){
        console.log(error.message);
        res.status(500).send({
            status:500,
            message:error.message,
            data:null
        });
    }
}

async function updateOrder(req,res){
    try{

        res.status(200).send({
            status:200,
            message:'Order updated successfully',
            data:null
        });
    }catch(error){
        console.log(error.message);
        res.status(500).send({

        });
    }
}


module.exports = {
    getOrders,
    updateOrder,

}