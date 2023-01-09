const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasks');

router.post('/create', tasksController.createTask);
router.get('/', tasksController.getTasks);
router.patch('/update/:id', tasksController.updateTask);
router.delete('/delete/:id', tasksController.deleteTask);

module.exports = router;