const express = require('express');
const router = express.Router();
const { protect, admin, restaurant } = require('../middleware/auth');

// Import controllers (to be implemented)
// const { getRestaurants, getRestaurantById, createRestaurant, updateRestaurant, deleteRestaurant } = require('../controllers/restaurantController');

// These routes will be implemented later
router.get('/', (req, res) => {
  res.json({ message: 'Get all restaurants - to be implemented' });
});

router.get('/:id', (req, res) => {
  res.json({ message: `Get restaurant ${req.params.id} - to be implemented` });
});

router.post('/', protect, admin, (req, res) => {
  res.json({ message: 'Create restaurant - to be implemented' });
});

router.put('/:id', protect, restaurant, (req, res) => {
  res.json({ message: `Update restaurant ${req.params.id} - to be implemented` });
});

router.delete('/:id', protect, admin, (req, res) => {
  res.json({ message: `Delete restaurant ${req.params.id} - to be implemented` });
});

module.exports = router;