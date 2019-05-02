const express = require('express');
const router = express.Router();
const AuthFacebookController = require('../controllers/AuthFacebookController');
const AuthFacebookMiddleware = require('../middlewares/AuthFacebookMiddleware');
router.get('/authorize', AuthFacebookMiddleware.authorize);
router.get('/authenticate', AuthFacebookMiddleware.authenticate, AuthFacebookController.authenticate);
module.exports = router;