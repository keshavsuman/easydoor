const jsonwebtoken = require('jsonwebtoken');
const userModel = require('../../models/userModel');


async function loginUsingEmail(req,res){
    try{
      const user = await userModel.findOne({
        email:req.body.email
      });
      if(user){
        const token = jsonwebtoken.sign(user.toObject(),"helloworld",{});
        res.status(200).json({
          status:200,
          data:{
            token:token,
            user:user
          },
          message:"loggedin successfully"
        });
      }else{
        res.status(401).json({
          status:401,
          data:null,
          message:"User not found"
        });
      }
    }catch(error){
      console.log(error);
      res.status(500).json({
          status:500,
          data:null,
          message:error.message
      });
    }
  }
  
  async function signup(req,res){
    try{
      const user = await userModel.create({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        FCMtoken:req.body.fcmToken,
        firebaseId:req.body.firebaseId,
        profilePic:req.body.profilePic,
        addresses:[]
      });
      const token = jsonwebtoken.sign(user.toObject(),"helloworld",{});
      const data = {
        user:user,
        token:token,
      }
      res.status(200).json({
        status:200,
        data:data,
        message:"User created successfully"
      });
    }catch(error){
      console.log(error);
      res.status(500).json({
          status:500,
          data:null,
          message:error.message
      });
    }
  }
  
  async function updateUser(req,res){
    try {
      const user = await userModel.findByIdAndUpdate(req.user._id,{
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        FCMtoken:req.body.fcmToken,
        profilePic:req.body.profilePic,
        mobileNumber:req.body.mobileNumber
      },{new:true});
      res.status(200).json({
        status:200,
        data:user,
        message:"User updated successfully"
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
          status:500,
          data:null,
          message:error.message
      });
    }
  }


  async function isMobileNumberRegistered(req,res){
    try {
        const user = await userModel.findOne({mobileNumber:req.body.email});
        if(user){
            res.status(200).json({
              status:200,
              data:true,
              message:"Mobile Number is registered"
            });
        }else{
          res.status(200).json({
              status:200,
              data:false,
              message:"Mobile Number is not registered"
            });
        }
    } catch (error) {
      console.log(err);
      res.status(500).json({
          status:500,
          data:null,
          message:err.message
      });
    }
  }

  async function isEmailRegistered(req,res){
    try {
      const user = await userModel.findOne({email:req.body.email});
      if(user){
          res.status(200).json({
            status:200,
            data:true,
            message:"Email is registered"
          });
      }else{
        res.status(200).json({
            status:200,
            data:false,
            message:"Email is not registered"
          });
      }
    } catch (error) {
      console.log(err);
      res.status(500).json({
          status:500,
          data:null,
          message:err.message
      });
    }
  }

  module.exports = {
      loginUsingEmail,
      signup,
      updateUser,
      isMobileNumberRegistered,
      isEmailRegistered
  }