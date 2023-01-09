const express = require('express');
const router = express.Router();

// Import controllers
const teachersController = require('../controllers/teachers');

// Define routes
router.get('/', teachersController.getAllTeachers);
router.get('/:id', teachersController.getTeacherById);
router.post('/', teachersController.createTeacher);
router.put('/:id', teachersController.updateTeacher);
router.delete('/:id', teachersController.deleteTeacher);

module.exports = router;
