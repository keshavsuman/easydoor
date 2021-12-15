const productModel = require('../../models/productModel');

module.exports.addProduct = async (req, res) => {
    try {
        await productModel.create({
            productName:req.body.productName,
            productDescription:req.body.productDescription,
            productPrice:req.body.productPrice,
            productImage:req.body.productImage,
            productStatus:true,
            tags:req.body.tags,
            quantity:req.body.quantity,
            sellingUnit:req.body.sellingUnit,
        });
        res.status(201).json({
            status:201,
            message:'Product added successfully'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status:500,
            message:error.message,
            data:null
        });
    }
}

module.exports.getProducts = async (req, res) => {
    try 
    {
        const {select,project,limit,after} = req.body;
        const products = await productModel.find(select,project).sort({createdAt:-1}).skip(Number(after)??0).limit(Number(limit)??20);
        res.status(200).json({
            status:200,
            message:'Products fetched successfully',
            data:products
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status:500,
            message:error.message,
            data:null
        });
    }
}
module.exports.updateProduct = async (req, res) => {
    try {
        var isUpdated = await productModel.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json({
            status:200,
            message:'Products updated successfully',
            data:null
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status:500,
            message:error.message,
            data:null
        });
    }
}

module.exports.deleteProduct = async (req, res) => {
    try {
        var isDeleted = await productModel.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status:200,
            message:'Products updated successfully',
            data:null
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status:500,
            message:error.message,
            data:null
        });
    }
}

module.exports.searchProducts = async (req, res) => {
    try {
        var products = await productModel.find({
            productName:{
                $regex:req.params.productName,
                $options:'i'
            }
        }).limit(30);
        res.status(200).json({
            status:200,
            message:'Products updated successfully',
            data:products
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status:500,
            message:error.message,
            data:null
        });
    }
}