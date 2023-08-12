const express = require('express');
const router = express.Router();
const GroceryItem = require('../models/GroceryItem');

// Get all grocery items
router.get('/groceries', async (req, res) => {
  try {
    const groceries = await GroceryItem.find();
    res.json(groceries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add new grocery item
router.post('/groceries', async (req, res) => {
  const groceryItem = new GroceryItem({
    name: req.body.name,
    quantity: req.body.quantity,
  });

  try {
    const newGroceryItem = await groceryItem.save();
    res.status(201).json(newGroceryItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// ...similarly, create routes for updating and deleting items

module.exports = router;
