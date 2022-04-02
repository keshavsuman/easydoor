const express = require('express');
const orderController = require('../../controllers/User/orderController');
const productController = require('../../controllers/User/productController');
const deliveryController = require('../../controllers/User/deliveryController');
const userController = require('../../controllers/User/userController');
const authController = require('../../controllers/User/authenticationController');
const authToken = require('../../middlewares/authToken');

const userRouter = express.Router();

userRouter.post('/auth/loginUsingEmail',authController.loginUsingEmail);
userRouter.post('/auth/signup',authController.signup);
userRouter.post('/auth/isMobileNumberRegistered',authController.isMobileNumberRegistered);
userRouter.post('/auth/isEmailRegistered',authController.isEmailRegistered);
userRouter.use(authToken);
userRouter.post('/auth/updateUser',authController.updateUser);
userRouter.post("/getAdvertisements",userController.getAdvertisements);
userRouter.post("/getCategories",userController.getCategories);
userRouter.post("/getRecentOrders",userController.getRecentOrders);
userRouter.post("/getRecentSearches",userController.getRecentSearches);
userRouter.get('/searchProduct/:productName',productController.searchProduct);
userRouter.get('/:merchantId/searchProduct/:productName',productController.searchProductFromMerchant);

userRouter.post('/getOrders',orderController.getOrders);
userRouter.post('/createOrder',orderController.createOrder);

module.exports = userRouter;