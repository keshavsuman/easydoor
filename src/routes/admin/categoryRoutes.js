const express = require('express');
const categoryController = require('../../controllers/Admin/categoryController');

const router = express.Router();
router.post('/createCategory',categoryController.createCategory);
router.post('/getCategories',categoryController.getCategories);
router.get('/searchCategories/:categoryName',categoryController.searchCategories);
router.post('/updateCategory/:id',categoryController.updateCategory);
router.delete('/deleteCategory/:id',categoryController.deleteCategory);

module.exports = router;