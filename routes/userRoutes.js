const express = require('express');
const userController = require('../controllers/merchantController');

const userRouter = express.Router();

userRouter.post('/login',userController.login);
userRouter.post('/signup',userController.signup);
userRouter.post('/updateMerchant',userController.updateMerchant);
userRouter.get('/:merchantId',userController.getMerchant);

module.exports = userRouter;