const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const groceryItemsRouter = require('./routes/groceryItems');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

mongoose.connect('mongodb://localhost:27017/groceryListDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use('/api', groceryItemsRouter);
