const express = require('express');
const adminController = require('../../controllers/adminController');
const adminAuthToken = require('../../middlewares/adminAuthToken');

const authRoutes = require('./authRoutes');
const categoryRoutes = require('./categoryRoutes');
const merchantRoutes = require('./merchantRoutes');
const productsRoutes = require('./productsRoutes');
const orderRoutes = require('./orderRoutes');
const router = express.Router();
const s3fileUpload = require('../../helpers/s3fileUpload');

router.use('/auth',authRoutes);
// router.use(adminAuthToken);

router.use('/product',adminAuthToken,productsRoutes);
router.use('/merchant',adminAuthToken,merchantRoutes);
router.use('/category',adminAuthToken,categoryRoutes);
router.use('/orders',adminAuthToken,orderRoutes);

router.post('/uploadImageAndGetUrl',adminAuthToken,s3fileUpload.single('file'),adminController.uploadImageAndGetUrl);


module.exports = router;
