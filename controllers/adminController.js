const adminModel = require('../models/adminModel');
const productModel = require('../models/productModel');
const merchantModel = require('../models/merchantModel');
const userModel = require('../models/userModel');
const jsonwebtoken = require('jsonwebtoken');
const categoryModel = require('../models/categoryModel');

const secretKey = 'Helloworld';
module.exports.login = async (req, res) => {
    try {
        await adminModel.findOne({
            email:req.body.email,
        });
        jsonwebtoken.sign = (req.body.email, secretKey, (err, token) => {});
    }catch(err) {
        console.log(err);
    }
}

module.exports.signup = async (req, res) => {
    try {
        await adminModel.create({
            adminName:req.body.adminName,
            adminEmail:req.body.adminEmail,
            adminPassword:req.body.adminPassword,
            
        });
    }catch(error){
        console.log(err);

    }
}

module.exports.logout = (req, res) => {
    try {

    }catch(err) {
        console.log(err);
    }
}

module.exports.addProduct = async (req, res) => {
    try {
        await productModel.create({
            productName:req.body.productName,
            productDescription:req.body.productDescription,
            productPrice:req.body.productPrice,
            productImage:req.body.productImage,
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
    try {
        const {select,project,limit,after} = req.body;
        const products = await productModel.find(select,project).limit(limit??20).limit(after??0);
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
        console.log(isUpdated);
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

module.exports.deleteProduct = async (req, res) => {
    try {
        var isDeleted = await productModel.findByIdAndDelete(req.params.id);
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

module.exports.getMerchants = async (req, res) => {
    try {
        const {select,project,limit,after} = req.body;
        const merchants = await merchantModel.find(select,project).limit(limit??20).limit(after??0);
        res.status(200).json({
            status:200,
            message:'Merchants fetched successfully',
            data:merchants
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

module.exports.getUsers = async (req, res) => {
    try {
        const {select,project,limit,after} = req.body;
        const users = await userModel.find(select,project).limit(limit??20).limit(after??0);
        res.status(200).json({
            status:200,
            message:'Users fetched successfully',
            data:users
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

module.exports.createCategory = async (req, res) => {
    try {
        console.log(req.body);
        await categoryModel.create({
            name:req.body.name,
        });
        res.status(201).json({
            status:201,
            message:'Category created successfully',
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

module.exports.updateCategory = async (req, res) => {
    try {
        const catego = await categoryModel.findByIdAndUpdate(req.params.id,{
            name:req.body.name,
        });
        res.status(201).json({
            status:201,
            message:'Category created successfully',
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
module.exports.deleteCategory = async (req, res) => {
    try {
        const catego = await categoryModel.findByIdAndDelete(req.params.id);
        res.status(201).json({
            status:201,
            message:'Category created successfully',
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

module.exports.getCategories = async (req, res) => {
    try {
        const categories = await categoryModel.find(req.body.select,req.body.project).limit(req.body.limit??20).limit(req.body.after??0);
        res.status(200).json({
            status:200,
            message:'Categories fetched successfully',
            data:categories
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