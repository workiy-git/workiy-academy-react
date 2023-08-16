const express = require('express');
const app = express();

// Middleware
app.use(express.json()); // Parse JSON request bodies

// Routes
const routes = require('./routes');
app.use('/api', routes); // Mount routes under the /api prefix

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

module.exports = app;


const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
