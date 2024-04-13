const express = require('express');
const router = express.Router();
const cartItemController = require('../controllers/cart.controller');

// Routes for cart item CRUD operations
router.post('/', cartItemController.createCartItem);
router.get('/', cartItemController.getAllCartItems);
router.get('/:id', cartItemController.getCartItemById);
router.put('/:id', cartItemController.updateCartItem);
router.delete('/:id', cartItemController.deleteCartItem);

module.exports = router;
