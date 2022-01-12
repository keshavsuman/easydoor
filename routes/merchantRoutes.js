const express = require('express');
const merchantController = require('../controllers/Merchant/merchantController');

const merchantRouter = express.Router();

merchantRouter.post('/login',merchantController.login);
merchantRouter.post('/signup',merchantController.signup);
merchantRouter.post('/updateMerchant',merchantController.updateMerchant);
merchantRouter.get('/:merchantId',merchantController.getMerchant);

module.exports = merchantRouter;