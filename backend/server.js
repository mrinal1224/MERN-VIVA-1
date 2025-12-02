const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware - BUG: Missing body-parser middleware
app.use(express.json());

// BUG: CORS is not configured - frontend won't be able to connect
// Missing: const cors = require('cors'); app.use(cors());

// Database connection - BUG: Wrong connection string format
mongoose.connect('mongodb://localhost:27017/tasksdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log('MongoDB Connection Error:', err));

// Routes
app.use('/api/tasks', require('./routes/tasks'));

// BUG: Missing root route or health check

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

