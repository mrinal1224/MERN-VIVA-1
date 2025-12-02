const mongoose = require('mongoose');

// BUG: Schema definition has wrong field type
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    default: ''
  },
  completed: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// BUG: Model export might be wrong - check if it's exported correctly
module.exports = mongoose.model('Task', taskSchema);

