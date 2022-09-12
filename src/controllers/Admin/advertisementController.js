const advertisementModel = require("../../models/advertisementModel");

async function createAdertisements(req,res){
    try {
        const advertisement = await advertisementModel.create({
            imageURL:req.body.imageURL,
        });
        res.status(200).json({
            status:200,
            data:advertisement,
            message:"advertisement created successfully"
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

async function getAdertisements(req,res){
    try {
        const advertisements = await advertisementModel.find({},{imageURL:1,_id:1});
        res.status(200).json({
            status:200,
            data:advertisements,
            message:"advertisement fetched successfully"
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

async function updateAdvertisement(req,res){
    try {
        const advertisement = await advertisementModel.findByIdAndUpdate(req.params.id,{
            imageURL:req.body.imageURL,
        },{new:true});
        res.status(200).json({
            status:200,
            data:advertisement,
            message:"advertisement updated successfully"
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

async function deleteAdvertisement(req,res){
    try {
        const advertisements = await advertisementModel.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status:200,
            data:advertisements,
            message:"advertisement deleted successfully"
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
    createAdertisements,
    getAdertisements,
    updateAdvertisement,
    deleteAdvertisement
}