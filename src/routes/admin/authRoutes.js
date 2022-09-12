const express = require('express');
const authController = require('../../controllers/Admin/authenticationController');
const router = express.Router();

router.post('/login',authController.login);
router.post('/googlelogin',authController.googleLogin);
router.post('/signup',authController.signup);

module.exports = router;