const userModel = require('../models/userModel');
const s3fileLogModel = require('../models/s3fileLogModel');
module.exports.uploadImageAndGetUrl = async (req,res)=>{
    try{
        await s3fileLogModel.create({
            user:req.user._id,
            fileName:req.file.originalname,
            fileUrl:req.file.location,
            fileType:req.file.contentType,
            fileSize:req.file.size
        });
        res.status(201).json({
            status:201,
            message:'Image uploaded successfully',
            data:req.file.location
        })
    }catch(e){
        console.log(e);
        res.status(500).json({
            status:500,
            message:e.message,
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
