const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// BUG: Missing async/await in route handlers
// GET all tasks
router.get('/', (req, res) => {
  Task.find()
    .then(tasks => res.json(tasks))
    .catch(err => res.status(500).json({ error: err.message }));
});

// GET single task
router.get('/:id', (req, res) => {
  // BUG: Missing error handling for invalid ObjectId
  Task.findById(req.params.id)
    .then(task => {
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.json(task);
    })
    .catch(err => res.status(500).json({ error: err.message }));
});

// POST create task
router.post('/', (req, res) => {
  // BUG: Missing validation for required fields
  const newTask = new Task({
    title: req.body.title,
    description: req.body.description
  });

  newTask.save()
    .then(task => res.status(201).json(task))
    .catch(err => res.status(400).json({ error: err.message }));
});

// PUT update task
router.put('/:id', (req, res) => {
  // BUG: Missing validation and error handling
  Task.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(task => {
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.json(task);
    })
    .catch(err => res.status(500).json({ error: err.message }));
});

// DELETE task
router.delete('/:id', (req, res) => {
  // BUG: Missing error handling
  Task.findByIdAndDelete(req.params.id)
    .then(task => {
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.json({ message: 'Task deleted successfully' });
    })
    .catch(err => res.status(500).json({ error: err.message }));
});

module.exports = router;

