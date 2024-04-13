const CartItem = require('../models/cartItem.model');

// Create a new cart item
exports.createCartItem = async (req, res) => {
  try {
    const newCartItem = await CartItem.create(req.body);
    res.status(201).json(newCartItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all cart items
exports.getAllCartItems = async (req, res) => {
  try {
    const cartItems = await CartItem.find();
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single cart item by ID
exports.getCartItemById = async (req, res) => {
  try {
    const cartItem = await CartItem.findById(req.params.id);
    if (!cartItem) {
      return res.status(404).json({ message: 'Cart item not found' });
    }
    res.status(200).json(cartItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a cart item by ID
exports.updateCartItem = async (req, res) => {
  try {
    const updatedCartItem = await CartItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCartItem) {
      return res.status(404).json({ message: 'Cart item not found' });
    }
    res.status(200).json(updatedCartItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a cart item by ID
exports.deleteCartItem = async (req, res) => {
  try {
    const deletedCartItem = await CartItem.findByIdAndDelete(req.params.id);
    if (!deletedCartItem) {
      return res.status(404).json({ message: 'Cart item not found' });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
