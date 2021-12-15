const Merchant = require('../models/merchantModel');

async function getMerchant(req, res) {
    const { merchantId } = req.params;
    const merchant = await Merchant.findOne({ _id: merchantId });
    if (!merchant) {
        return res.status(404).json({
        status: 404,
        message: 'Merchant not found',
        });
    }
    return res.status(200).json({
        status: 200,
        data: merchant,
    });
}

async function signup(req, res) {
    const { email, name, password } = req.body;
    const merchant = await Merchant.findOne({ email: email });
    if (merchant) {
        return res.status(409).json({
        status: 409,
        error: 'Merchant already exists',
        });
    }
    const newMerchant = new Merchant({
        email: email,
        name: name,
        password: password,
    });
    await newMerchant.save();
    return res.status(201).json({
        status: 201,
        data: {
        merchantId: newMerchant._id,
        merchantName: newMerchant.name,
        },
    });
}

async function login(req, res) {
    const { email, password } = req.body;
    const merchant = await Merchant.findOne({ email: email });
    if (!merchant) {
        return res.status(404).json({
        status: 404,
        error: 'Merchant not found',
        });
    }
    const isMatch = await merchant.comparePassword(password);
    if (!isMatch) {
        return res.status(401).json({
        status: 401,
        error: 'Incorrect password',
        });
    }
    return res.status(200).json({
        status: 200,
        data: {
        merchantId: merchant._id,
        merchantName: merchant.name,
        },
    });
}

async function updateMerchant(req, res) {
    const { merchantId } = req.params;
    const { name, email, password } = req.body;
    const merchant = await Merchant.findOne({ _id: merchantId });
    if (!merchant) {
        return res.status(404).json({
        status: 404,
        error: 'Merchant not found',
        });
    }
    merchant.name = name;
    merchant.email = email;
    merchant.password = password;
    await merchant.save();
    return res.status(200).json({
        status: 200,
        data: {
        merchantId: merchant._id,
        merchantName: merchant.name,
        },
    });
}

async function deleteMerchant(req, res) {
    const { merchantId } = req.params;
    const merchant = await Merchant.findOne({ _id: merchantId });
    if (!merchant) {
        return res.status(404).json({
        status: 404,
        error: 'Merchant not found',
        });
    }
    await merchant.remove();
    return res.status(200).json({
        status: 200,
        message: 'Merchant deleted successfully',
    });
}



module.exports = {
    getMerchant,
    signup,
    login,
    updateMerchant,
    deleteMerchant,
};
