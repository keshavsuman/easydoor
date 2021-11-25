const express = require('express');
const adminController = require('../controllers/adminController');
const adminAuthToken = require('../middlewares/adminAuthToken');

const router = express.Router();

router.post('/login',adminController.login);
router.post('/signup',adminController.signup);

router.use(adminAuthToken);
router.post('/createProduct',adminController.addProduct);
router.post('/getProducts',adminController.getProducts);
router.post('/updateProduct/:id',adminController.updateProduct);
router.delete('/deleteProduct/:id',adminController.deleteProduct);
router.get('/searchProducts/:productName',adminController.searchProducts);

router.post('/createCategory',adminController.createCategory);
router.post('/getCategories',adminController.getCategories);
router.get('/searchCategories/:categoryName',adminController.searchCategories);
router.post('/updateCategory/:id',adminController.updateCategory);
router.delete('/deleteCategory/:id',adminController.deleteCategory);

router.post('/createOrder',adminController.createOrder);
router.post('/getOrders',adminController.getOrders);
router.post('/updateOrder/:orderId',adminController.updateOrder);
router.delete('/deletePrder/:orderId',adminController.deleteOrder);


module.exports = router;
