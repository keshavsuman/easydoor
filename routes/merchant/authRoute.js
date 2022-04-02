const express = require('express');
const merchantController = require("../../controllers/Merchant/merchantController");
const authRouter = express.Router();

authRouter.post('/login',merchantController.login);
authRouter.post('/signup',merchantController.signup);

module.exports = authRouter;