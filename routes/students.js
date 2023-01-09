const express = require('express');
const router = express.Router();

// Import controllers
const studentsController = require('../controllers/students');

// Define routes
router.get('/', studentsController.getAllStudents);
router.get('/:id', studentsController.getStudentById);
router.post('/', studentsController.createStudent);
router.put('/:id', studentsController.updateStudent);
router.delete('/:id', studentsController.deleteStudent);

module.exports = router;
