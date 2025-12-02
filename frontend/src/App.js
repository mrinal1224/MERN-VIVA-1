import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';

// BUG: Wrong API base URL - missing port or wrong endpoint
const API_URL = 'http://localhost:5000/api';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    description: ''
  });
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  // BUG: Missing error handling in fetchTasks
  const fetchTasks = async () => {
    setLoading(true);
    try {
      // BUG: Wrong endpoint path
      const response = await axios.get(`${API_URL}/task`);
      setTasks(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch tasks: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.title.trim()) {
      setError('Title is required');
      return;
    }

    try {
      if (editingTask) {
        // BUG: Wrong endpoint for update
        await axios.put(`${API_URL}/tasks/${editingTask._id}`, formData);
      } else {
        // BUG: Wrong endpoint for create
        await axios.post(`${API_URL}/task`, formData);
      }
      
      setFormData({ title: '', description: '' });
      setEditingTask(null);
      fetchTasks();
    } catch (err) {
      setError('Failed to save task: ' + err.message);
    }
  };

  const handleEdit = (task) => {
    setFormData({
      title: task.title,
      description: task.description
    });
    setEditingTask(task);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this task?')) {
      return;
    }

    try {
      // BUG: Wrong endpoint for delete
      await axios.delete(`${API_URL}/tasks/${id}`);
      fetchTasks();
    } catch (err) {
      setError('Failed to delete task: ' + err.message);
    }
  };

  const handleToggleComplete = async (task) => {
    try {
      // BUG: Wrong endpoint and missing data
      await axios.put(`${API_URL}/tasks/${task._id}`, {
        completed: !task.completed
      });
      fetchTasks();
    } catch (err) {
      setError('Failed to update task: ' + err.message);
    }
  };

  return (
    <div className="container">
      <h1 className="header">Task Manager - Bug Fix Exercise</h1>
      
      {error && <div className="error">{error}</div>}

      <div className="form-container">
        <h2>{editingTask ? 'Edit Task' : 'Add New Task'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title *</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Enter task title"
              required
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Enter task description"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            {editingTask ? 'Update Task' : 'Add Task'}
          </button>
          {editingTask && (
            <button
              type="button"
              className="btn"
              onClick={() => {
                setFormData({ title: '', description: '' });
                setEditingTask(null);
              }}
              style={{ marginLeft: '10px' }}
            >
              Cancel
            </button>
          )}
        </form>
      </div>

      <div className="task-list">
        <h2 style={{ padding: '20px', margin: 0 }}>Tasks ({tasks.length})</h2>
        {loading ? (
          <div className="loading">Loading tasks...</div>
        ) : tasks.length === 0 ? (
          <div className="loading">No tasks found. Add one above!</div>
        ) : (
          tasks.map(task => (
            <div key={task._id} className={`task-item ${task.completed ? 'completed' : ''}`}>
              <div className="task-content">
                <div className="task-title">{task.title}</div>
                {task.description && (
                  <div className="task-description">{task.description}</div>
                )}
              </div>
              <div className="task-actions">
                <button
                  className="btn btn-success"
                  onClick={() => handleToggleComplete(task)}
                >
                  {task.completed ? 'Undo' : 'Complete'}
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => handleEdit(task)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(task._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;

