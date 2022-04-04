const express = require('express');
const orderController = require('../../controllers/User/orderController');
const productController = require('../../controllers/User/productController');
const userController = require('../../controllers/User/userController');
const authController = require('../../controllers/User/authenticationController');
const authToken = require('../../middlewares/authToken');
const addressRoutes = require('./addressRoutes');
const cartRoutes = require('./cartRoutes');
const orderRoutes = require('./orderRoutes');

const userRouter = express.Router();

userRouter.post('/auth/loginUsingEmail',authController.loginUsingEmail);
userRouter.post('/auth/signup',authController.signup);
userRouter.post('/auth/isMobileNumberRegistered',authController.isMobileNumberRegistered);
userRouter.post('/auth/isEmailRegistered',authController.isEmailRegistered);
userRouter.use(authToken);
userRouter.post('/auth/updateUser',authController.updateUser);
userRouter.use('/address',addressRoutes);
userRouter.use('/order',orderRoutes);
userRouter.use('/cart',cartRoutes);
userRouter.post("/getAdvertisements",userController.getAdvertisements);
userRouter.post("/getCategories",userController.getCategories);
userRouter.post("/getRecentOrders",userController.getRecentOrders);
userRouter.post("/getRecentSearches",userController.getRecentSearches);
userRouter.get('/searchProduct/:productName',productController.searchProduct);
userRouter.get('/:merchantId/searchProduct/:productName',productController.searchProductFromMerchant);


module.exports = userRouter;