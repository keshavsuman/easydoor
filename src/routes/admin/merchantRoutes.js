const express = require('express');
const merchantRouter = express.Router();
const merchantController = require('../../controllers/Merchant/merchantController');

// merchantRouter.post('/createMerchant',merchantController.createMerchant);
merchantRouter.get('/getMerchant/:id',merchantController.getMerchant);

module.exports = merchantRouter;