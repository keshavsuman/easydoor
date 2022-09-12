async function searchProductFromMerchant(req, res) {
    const { merchantId,productName } = req.params;
    const merchant = await Merchant.findOne({ _id: merchantId });
    if (!merchant) {
        return res.status(404).json({
            status: 404,
            message: 'Merchant not found',
            data: null
        });
    }
    const product = await Product.findOne({
        merchantId: merchantId,
        name: productName,
    });
    if (!product) {
        return res.status(404).json({
            status: 404,
            message: 'Product not found',
            data:null
        });
    }
    return res.status(200).json({
        status: 200,
        message:'Products',
        data: product,
    });
}

async function searchProduct(req, res) {
    try{

    }catch(error){
        console.log(error.message);

    }
}

module.exports = {
    searchProductFromMerchant,
    searchProduct
}