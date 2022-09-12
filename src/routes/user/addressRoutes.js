const express = require('express');
const addressController = require('../../controllers/User/addressController');

const addressRouter = express.Router();

addressRouter.post('/addAddress',addressController.addAddress);
addressRouter.post('/getAddresses',addressController.getAddresses);
addressRouter.post('/updateAddress/:id',addressController.updateAddress);
addressRouter.post('/deleteAddress',addressController.deleteAddress);

module.exports = addressRouter;