const express = require('express');
const cartController = require('../../controllers/User/cartController');

const cartRouter = express.Router();

cartRouter.post('/getCart',cartController.getCart);
cartRouter.post('/updateQuantity/:id',cartController.updateQuantity);
cartRouter.post('/removeFromCart/:id',cartController.removeFromCart);

module.exports = cartRouter;