const merchantModel = require('../../models/merchantModel');

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