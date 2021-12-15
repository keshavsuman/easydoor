const express = require('express');
const orderController = require('../controllers/User/orderController');
const productController = require('../controllers/User/productController');
const deliveryController = require('../controllers/User/deliveryController');
const userController = require('../controllers/User/userController');

const authToken = require('../middlewares/authToken');

const userRouter = express.Router();

userRouter.use(authToken);

// userRouter.post('/login',userController.login);
// userRouter.post('/signup',userController.signup);
// userRouter.post('/updateUser',userController.updateMerchant);
// userRouter.get('/:userId',userController.getMerchant);

userRouter.get('/searchProduct/:productName',productController.searchProduct);
userRouter.get('/:merchantId/searchProduct/:productName',productController.searchProductFromMerchant);


userRouter.post('/getOrders',orderController.getOrders);
userRouter.post('/createOrder',orderController.createOrder);

module.exports = userRouter;