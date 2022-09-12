const Merchant = require('../../models/merchantModel');
const User = require('../../models/userModel');
const advertisemewntModel = require('../../models/advertisementModel');
const jsonwebtoken = require('jsonwebtoken');


async function getAdvertisements(req,res){
  try {
    const {select,project,skip,limit} = req.body;
    const advertisements = await advertisemewntModel.find(select,project);
    res.status(200).json({
      status:200,
      message:"Advertisements fetch successfully",
      data:advertisements
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

async function getCategories(req,res){
  try {
    const {select,project,skip,limit} = req.body;
    const advertisements = await advertisemewntModel.find(select,project);
    res.status(200).json({
      status:200,
      message:"Advertisements fetch successfully",
      data:advertisements
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
async function getRecentSearches(req,res){
  try {
    const {select,project,skip,limit} = req.body;
    const advertisements = await advertisemewntModel.find(select,project);
    res.status(200).json({
      status:200,
      message:"Advertisements fetch successfully",
      data:advertisements
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
async function getRecentOrders(req,res){
  try {
    const {select,project,skip,limit} = req.body;
    const advertisements = await advertisemewntModel.find(select,project);
    res.status(200).json({
      status:200,
      message:"Advertisements fetch successfully",
      data:advertisements
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


module.exports = {
  getAdvertisements,
  getCategories,
  getRecentOrders,
  getRecentSearches
};