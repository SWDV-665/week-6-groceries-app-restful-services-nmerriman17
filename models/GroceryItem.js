const mongoose = require('mongoose');

const groceryItemSchema = new mongoose.Schema({
  name: String,
  quantity: String,
});

module.exports = mongoose.model('GroceryItem', groceryItemSchema);
