const express = require('express');
const orderController = require('../../controllers/User/orderController');

const orderRouter = express.Router();

orderRouter.post('/getOrders',orderController.getOrders);
orderRouter.post('/placeOrder',orderController.createOrder);
orderRouter.post('/updateOrder',orderController.updateOrder);

module.exports = orderRouter;