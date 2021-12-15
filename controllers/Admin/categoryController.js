const categoryModel = require('../../models/categoryModel');

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
        res.status(200).json({
            status:200,
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
        res.status(200).json({
            status:200,
            message:'Category deleted successfully',
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
module.exports.searchCategories = async (req, res) => {
    try {
        const categories = await categoryModel.find({
                $regex:{name:req.params.categoryName,$options:'i'},
        }).limit(req.body.limit??30);
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