const merchantRoutes = require('./merchantRoutes');
const userRoutes = require('./user/userRoutes');
const adminRoutes = require('./admin/adminRoutes');

const express = require('express');
const router = express.Router();

router.use('/merchant',merchantRoutes);
router.use('/user',userRoutes);
router.use('/admin',adminRoutes);


module.exports = router;
