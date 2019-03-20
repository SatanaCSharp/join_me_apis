const express = require('express');
const router = express.Router();
const CategoriesController = require('../controllers/CategoriesController');
const AuthMiddleware = require('../middlewares/AuthMiddleware');

router.get('/', AuthMiddleware.required, CategoriesController.index);
router.post('/', AuthMiddleware.required, CategoriesController.store);
router.put('/:id', AuthMiddleware.required, CategoriesController.update);
router.delete('/:id', AuthMiddleware.required, CategoriesController.delete);
module.exports = router;
