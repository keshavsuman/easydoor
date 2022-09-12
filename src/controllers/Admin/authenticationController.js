const adminModel = require('../../models/adminModel');
const jsonwebtoken = require('jsonwebtoken');

const secretKey = 'Helloworld';

module.exports.login = async (req, res) => {
    try {
        var admin = await adminModel.findOne({
            email:req.body.email,
        });
        if(admin){
            var token = await jsonwebtoken.sign(req.body.email, secretKey);
            res.status(200).json({
                status:200,
                data:{
                    admin,token
                },
                message:'Login successfully'
            });
        }else{
            res.status(200).json({
                status:404,
                data:null,
                message:'Admin not found'
            });
        }
    }catch(err) {
        console.log(err);
        res.status(500).json({
            status:500,
            data:null,
            message:err.message
        });
    }
}
module.exports.googleLogin = async (req,res)=>{
    try {
        var admin = await adminModel.findOne({
            email:req.body.email,
        });
        if(admin){
            if(admin.isActive){
                var token = await jsonwebtoken.sign(admin, secretKey);
                res.status(200).json({
                    status:200,
                    data:{
                        admin,token
                    },
                    message:'Login successfully'
                });
            }else{
                res.status(200).json({
                    status:403,
                    data:null,
                    message:'please approve your account by admin'
                });
            }
        }else{
            const admin = await adminModel.create({
                email:req.body.email,
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                googleId:req.body.googleId,
                profilePic:req.body.profilePicture,
            });
            res.status(200).json({
                status:403,
                data:null,
                message:'Signup Succesfull, please approve your account by admin'
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status:500,
            data:null,
            message:error.message
        });
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