const express = require('express');
const router = express.Router();
const statsController = require('../controllers/statsController');

router.get('/revenues', statsController.getAllRevenues);
router.get('/revenues/:id', statsController.getTrainerRevenues);

module.exports = router;

