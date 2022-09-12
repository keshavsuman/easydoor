const express = require('express');
const merchantController = require('../controllers/Merchant/merchantController');
const merchantAuthToken = require("../middlewares/merchantAuthToken");
const productRoutes = require("./merchant/productRoutes");
const authRoutes = require("./merchant/authRoute");

const merchantRouter = express.Router();
merchantRouter.use('/auth',authRoutes);
merchantRouter.use(merchantAuthToken);

merchantRouter.post('/updateMerchant',merchantController.updateMerchant);
merchantRouter.get('/:merchantId',merchantController.getMerchant);
merchantRouter.use("/products",productRoutes);

module.exports = merchantRouter;