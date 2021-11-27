const express = require('express');
const userController = require('../controllers/merchantController');
const authToken = require('../middlewares/authToken');

const userRouter = express.Router();

userRouter.use(authToken);
userRouter.post('/login',userController.login);
userRouter.post('/signup',userController.signup);
userRouter.post('/updateMerchant',userController.updateMerchant);
userRouter.get('/:merchantId',userController.getMerchant);

module.exports = userRouter;