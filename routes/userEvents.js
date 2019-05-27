const express = require('express');
const router = express.Router();
const AuthMiddleware = require('../middlewares/AuthMiddleware');
const UserEventsController = require('../controllers/UserEventsController');

router.get('/:id', AuthMiddleware.required, UserEventsController.index);

module.exports = router;