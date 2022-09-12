const userModel = require('../../models/userModel');
const addressModel = require("../../models/addressModel");

module.exports.addAddress = async function(req, res) {
    try {
        const address = await addressModel.create({
            lane1:req.body.lane1,
            lane2:req.body.lane2,
            city:req.body.city,
            state:req.body.state,
            pincode:req.body.pincode,
            location : req.body.location
        });
        await userModel.findByIdAndUpdate(req.user._id,{
            $addToSet:{
                addresses:address._id
            }
        },{new:true});
        res.status(201).json({
            status:201,
            data:address,
            message:"Address added successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status:500,
            message: "Internal server error"
        });
    }
}

module.exports.getAddresses = async function(req, res) {
    try {
        const user = await  userModel.findById(req.user._id,{
            addresses:1
        }).populate('addresses');
        res.status(200).json({
            status:200,
            data:user.addresses,
            message:"Address fetched successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status:500,
            message: "Internal server error"
        });
    }
}


module.exports.updateAddress = async function(req, res) {
    try {
        const address = await  addressModel.findByIdAndUpdate(req.params.id,{
            lane1:req.body.lane1,
            lane2:req.body.lane2,
            city:req.body.city,
            pincode:req.body.pincode,
            location : req.body.location
        },{new:true});
        res.status(200).json({
            status:200,
            data:address,
            message:"Address updated successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status:500,
            message: "Internal server error"
        });
    }
}

module.exports.deleteAddress = async function(req, res) {
    try {
        const user = await  userModel.findByIdAndUpdate(req.user._id,{

        },{new:true});
        res.status(200).json({
            status:200,
            data:user,
            message:"Address deleted successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status:500,
            message: "Internal server error"
        });
    }
}