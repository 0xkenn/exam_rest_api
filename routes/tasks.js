const express = require('express');
const router = express.Router();

// Import controllers
const tasksController = require('../controllers/tasks');

// Define routes
router.get('/', tasksController.getAllTasks);
router.get('/:id', tasksController.getTaskById);
router.post('/', tasksController.createTask);
router.put('/:id', tasksController.updateTask);
router.delete('/:id', tasksController.deleteTask);

module.exports = router;
