const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/UsersController');
const AuthMiddleware = require('../middlewares/AuthMiddleware');
const AvatarMiddleware = require('../middlewares/AvatarMiddleware');

router.get('/:id', AuthMiddleware.required, UsersController.show);
router.put('/:id', AuthMiddleware.required, AvatarMiddleware.uploadAvatar, UsersController.update);

module.exports = router;