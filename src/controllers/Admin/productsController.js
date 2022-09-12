const productModel = require('../../models/productModel');
const Joi = require('joi');

module.exports.addProduct = async (req, res) => {
    try {
        console.log(req.body);
        const {error,value} = validateProduct(req.body);
        if(error){
            res.status(403).json({
                status:403,
                message:error.details
            });
        }else{
            await productModel.create(value);
            res.status(201).json({
                status:201,
                message:'Product added successfully'
            });
        }
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
        const {select,project,limit,skip} = req.body;
        const products = await productModel.find(select,project).sort({createdAt:-1}).skip(Number(skip)??0).limit(Number(limit)??20);
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
        if(validateProduct(req.body)){
        var isUpdated = await productModel.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json({
            status:200,
            message:'Products updated successfully',
            data:isUpdated
        });
        }else{
            res.status(403).json({
                status:403,
                message:'Product validation failed'
            });
        }
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
            message:'Products deleted successfully',
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

function validateProduct(product){
    const schema = Joi.object({
        productName:Joi.string().min(3).required(),
        productDescription:Joi.string().optional(),
        tags:Joi.array().items(Joi.string()).required(),
        variants:Joi.array().items(Joi.object({
            productPrice:Joi.number().required(),
            discountedPrice:Joi.number(),
            productDescription:Joi.string(),
            productImage:Joi.array().items(Joi.string()),
            quantity:Joi.number(),
            sellingUnit:Joi.string(),
        })).required(),
    });
    return schema.validate(product);
}