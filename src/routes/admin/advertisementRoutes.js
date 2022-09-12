const express = require('express');
const advertisementController = require('../../controllers/Admin/advertisementController');

const router = express.Router();

router.get("/", advertisementController.getAdertisements);
router.post("/create", advertisementController.createAdertisements);
router.post("/:id/update", advertisementController.updateAdvertisement);
router.delete("/:id", advertisementController.deleteAdvertisement);

module.exports = router;