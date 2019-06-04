const express = require('express');
const router = express.Router();
const AdvertiseEventsController = require('../controllers/AdvertiseEventsController');
const AuthMiddleware = require('../middlewares/AuthMiddleware');

router.get('/', AuthMiddleware.required, AdvertiseEventsController.show);

module.exports = router;