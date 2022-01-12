const Merchant = require('../../models/merchantModel');
const User = require('../../models/userModel');


async function login(req,res){
  try{
    const user = User.find({
      firebaseId:req.body.firebaseId
    });
    res.status(200).json({
      status:200,
      data:user,
      message:"loggedin successfully"
    });
  }catch(error){
    console.log(err);
    res.status(500).json({
        status:500,
        data:null,
        message:err.message
    });
  }
}

async function signup(req,res){
  try{
    User.create({
      firstName:req.body.name.split(' ')[0],
      lastName:req.body.name.split(' ')[0],
      email:req.body.email,
      password:req.body.password,
      addresses:[]
    });
  }catch(error){
    console.log(err);
    res.status(500).json({
        status:500,
        data:null,
        message:err.message
    });
  }
}



module.exports = {
  login,
  signup
};