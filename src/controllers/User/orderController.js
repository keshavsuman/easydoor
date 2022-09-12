const orderModel = require('../../models/orderModel');

async function getOrders(req,res){
    try{
        // const orders = await 
        res.status(200).send({
            status:201,
            message:'Order created Succesfully',
            data:orders
        });
    }catch(e){
        console.log(e.message);
        res.status(500).send({
            status:500,
            message:e.message,
            data:null
        });
    }
}

async function createOrder(req,res){
    try{
        const order = await orderModel(req.body.merchantId).create({
            user:req.user._id,
            address:req.body.address,
            products:req.body.products,
            remarks:req.body.remarks
        });
        res.status(201).send({
            status:201,
            message:'Order created Successfully',
            data:order
        });
    }catch(e){
        console.log(e.message);
        res.status(500).send({
            status:500,
            message:e.message,
            data:null
        });
    }
}

async function updateOrder(req,res){
    try{
        const order = await orderModel(req.body.merchantId).findByIdAndUpdate(req.params.id,{

        });
    }catch(e){

    }
}

module.exports ={
    createOrder,
    updateOrder,
    getOrders
}