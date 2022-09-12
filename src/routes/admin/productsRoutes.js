const express = require('express');
const productController = require('../../controllers/Admin/productsController');
const router = express.Router();

router.post('/createProduct',productController.addProduct);
router.post('/getProducts',productController.getProducts);
router.post('/updateProduct/:id',productController.updateProduct);
router.delete('/deleteProduct/:id',productController.deleteProduct);
router.get('/searchProducts/:productName',productController.searchProducts);

module.exports = router;