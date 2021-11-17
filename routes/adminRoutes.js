const express = require('express');
const adminController = require('../controllers/adminController');
const adminAuthToken = require('../middlewares/adminAuthToken');

const router = express.Router();

// router.use(adminAuthToken);
router.post('/login',adminController.login);
router.post('/signup',adminController.signup);

router.post('/createProduct',adminController.addProduct);
router.post('/getProducts',adminController.getProducts);
router.post('/updateProduct/:id',adminController.updateProduct);
router.delete('/deleteProduct/:id',adminController.deleteProduct);

router.post('/createCategory',adminController.createCategory);
router.post('/getCategories',adminController.getCategories);
router.post('/updateCategory/:id',adminController.updateCategory);
router.delete('/deleteCategory/:id',adminController.deleteCategory);

module.exports = router;
