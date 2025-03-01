const express = require('express');
const router = express.Router();
const { protect, restaurant } = require('../middleware/auth');

// Import controllers (to be implemented)
// const { getMenuItems, getMenuItemById, createMenuItem, updateMenuItem, deleteMenuItem } = require('../controllers/menuController');

// These routes will be implemented later
router.get('/', (req, res) => {
  res.json({ message: 'Get all menu items - to be implemented' });
});

router.get('/:id', (req, res) => {
  res.json({ message: `Get menu item ${req.params.id} - to be implemented` });
});

router.post('/', protect, restaurant, (req, res) => {
  res.json({ message: 'Create menu item - to be implemented' });
});

router.put('/:id', protect, restaurant, (req, res) => {
  res.json({ message: `Update menu item ${req.params.id} - to be implemented` });
});

router.delete('/:id', protect, restaurant, (req, res) => {
  res.json({ message: `Delete menu item ${req.params.id} - to be implemented` });
});

module.exports = router;